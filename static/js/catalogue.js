/* =========================================================
   REMIX — catalogue rendering (Bases + Swaps)
   Everything here reads from the local arrays in data.js.
   Swap BASES / SWAPS for server-rendered data whenever the
   Flask route is ready to pass real products in.
   ========================================================= */

const PAGE_SIZE = 8;

/* ---------------------------------------------------------
   BASES catalogue
   --------------------------------------------------------- */
function initBasesCatalogue() {
  const grid = document.querySelector("[data-bases-grid]");
  if (!grid) return;

  const chipRow = document.querySelector("[data-bases-filters]");
  const sortSelect = document.querySelector("[data-bases-sort]");
  const countEl = document.querySelector("[data-bases-count]");
  const loadMoreBtn = document.querySelector("[data-bases-more]");
  const statusEl = document.querySelector("[data-bases-status]");

  let activeType = "All";
  let visibleCount = PAGE_SIZE;

  const types = ["All", ...new Set(BASES.map((b) => b.type))];
  chipRow.innerHTML = types
    .map((t) => `<button class="chip ${t === "All" ? "is-active" : ""}" data-type="${t}">${t}${t !== "All" ? "s" : ""}</button>`)
    .join("");

  function getFiltered() {
    let list = activeType === "All" ? BASES.slice() : BASES.filter((b) => b.type === activeType);
    const sort = sortSelect.value;
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));
    // "featured" keeps original curated order
    return list;
  }

  function render() {
    const filtered = getFiltered();
    const slice = filtered.slice(0, visibleCount);

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">No bases match that filter yet — try another category.</div>`;
    } else {
      grid.innerHTML = slice
        .map((b, i) => {
          const color = SWATCH_COLORS[i % SWATCH_COLORS.length];
          const flag = b.soldOut ? "Sold Out" : b.badge;
       return `
  <div class="product-card" onclick="window.location.href='/product'" ${b.soldOut ? "is-soldout" : ""}">
    <div class="product-media" style="background:${color}">
      <img
        src="${b.image}"
        alt="${b.name}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >
      
    </div>

    <div class="product-body">
      ${flag ? `<span class="product-flag ${b.soldOut ? "is-soldout" : ""}">${flag}</span>` : ""}
      <span class="product-name">${b.name}</span>
      <span class="product-price">$${b.price.toFixed(2)}</span>
    </div>

    <button class="add-btn" data-add-base="${b.id}" ${b.soldOut ? "disabled" : ""}>
      ${b.soldOut ? "Sold Out" : "Add Base"}
    </button>
  </div>`;
        })
        .join("");
    }

    countEl.textContent = `${Math.min(visibleCount, filtered.length)} of ${filtered.length} bases`;
    loadMoreBtn.style.display = visibleCount >= filtered.length ? "none" : "inline-flex";
    statusEl.textContent =
      visibleCount >= filtered.length ? "You've reached the end of the rack." : "";

    grid.querySelectorAll("[data-add-base]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const base = BASES.find((b) => b.id === btn.getAttribute("data-add-base"));
        if (!base) return;
        const idx = BASES.indexOf(base);
        addToCart({
          id: base.id,
          name: base.name,
          price: base.price,
          kind: "base",
          icon: base.icon,
          color: SWATCH_COLORS[idx % SWATCH_COLORS.length]
        });
      });
    });
  }

  chipRow.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-type]");
    if (!btn) return;
    activeType = btn.getAttribute("data-type");
    visibleCount = PAGE_SIZE;
    chipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
    btn.classList.add("is-active");
    render();
  });

  sortSelect.addEventListener("change", render);

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    render();
  });

  render();
}

/* ---------------------------------------------------------
   SWAPS (art panel) catalogue
   --------------------------------------------------------- */
function initSwapsCatalogue() {
  const grid = document.querySelector("[data-swaps-grid]");
  if (!grid) return;

  const chipRow = document.querySelector("[data-swaps-filters]");
  const sortSelect = document.querySelector("[data-swaps-sort]");
  const countEl = document.querySelector("[data-swaps-count]");
  const loadMoreBtn = document.querySelector("[data-swaps-more]");
  const statusEl = document.querySelector("[data-swaps-status]");

  const params = new URLSearchParams(window.location.search);
  let activeArtist = params.get("artist") || "All";
  let visibleCount = PAGE_SIZE;

  const artists = ["All", ...new Set(SWAPS.map((s) => s.artist))];
  chipRow.innerHTML = artists
    .map((a) => `<button class="chip ${a === activeArtist ? "is-active" : ""}" data-artist="${a}">${a}</button>`)
    .join("");

  function getFiltered() {
    let list = activeArtist === "All" ? SWAPS.slice() : SWAPS.filter((s) => s.artist === activeArtist);
    const sort = sortSelect.value;
    if (sort === "newest") list.sort((a, b) => b.created - a.created);
    if (sort === "popular") list.sort((a, b) => b.popularity - a.popularity);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }

  function render() {
    const filtered = getFiltered();
    const slice = filtered.slice(0, visibleCount);

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">No panels from this artist yet — check back soon.</div>`;
    } else {
      grid.innerHTML = slice
        .map((s, i) => {
          const color = SWATCH_COLORS[i % SWATCH_COLORS.length];
  return `
    <div class="product-card"
         onclick="window.location.href='/product"
         style="cursor:pointer;">

      <div class="product-media" style="background:${color}">
        <img
          src="${s.image}"
          alt="${s.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
      </div>

      <div class="product-body">
        <span class="product-artist">${s.artist}</span>
        <span class="product-name">${s.name}</span>
        <span class="product-price ${s.free ? "is-free" : ""}">
          ${s.free ? "FREE" : "$" + s.price.toFixed(2)}
        </span>
      </div>

      <button class="add-btn"
              data-add-swap="${s.id}"
              onclick="event.stopPropagation();">
        Add Panel
      </button>

    </div>`;
        })
        .join("");
    }

    countEl.textContent = `${Math.min(visibleCount, filtered.length)} of ${filtered.length} panels`;
    loadMoreBtn.style.display = visibleCount >= filtered.length ? "none" : "inline-flex";
    statusEl.textContent =
      visibleCount >= filtered.length ? "That's every panel in this set." : "";

    grid.querySelectorAll("[data-add-swap]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const swap = SWAPS.find((s) => s.id === btn.getAttribute("data-add-swap"));
        if (!swap) return;
        const idx = SWAPS.indexOf(swap);
        addToCart({
          id: swap.id,
          name: swap.name,
          price: swap.price,
          kind: "swap",
          icon: swap.icon,
          color: SWATCH_COLORS[idx % SWATCH_COLORS.length]
        });
      });
    });
  }

  chipRow.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-artist]");
    if (!btn) return;
    activeArtist = btn.getAttribute("data-artist");
    visibleCount = PAGE_SIZE;
    chipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
    btn.classList.add("is-active");
    render();
  });

  sortSelect.addEventListener("change", render);

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    render();
  });

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  initBasesCatalogue();
  initSwapsCatalogue();
});
