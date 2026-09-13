/* =========================================================
   REMIX — global UI behaviour (vanilla JS, no frameworks)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    /* ---------- Mobile nav ---------- */
    const navToggle = document.querySelector("[data-nav-toggle]");
    const mainNav = document.querySelector("[data-main-nav]");
    const scrim = document.querySelector("[data-scrim]");

    function closeNav() {
        mainNav?.classList.remove("is-open");
        scrim?.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
    }

    function openNav() {
        mainNav?.classList.add("is-open");
        scrim?.classList.add("is-open");
        navToggle?.setAttribute("aria-expanded", "true");
    }

    navToggle?.addEventListener("click", () => {
        const isOpen = mainNav?.classList.contains("is-open");
        isOpen ? closeNav() : openNav();
    });
    scrim?.addEventListener("click", closeNav);

    /* ---------- Cart drawer ---------- */
    const cartDrawer = document.querySelector("[data-cart-drawer]");
    const cartScrim = document.querySelector("[data-cart-scrim]");

    function openCart() {
        cartDrawer?.classList.add("is-open");
        cartScrim?.classList.add("is-open");
        document.body.classList.add("no-scroll");
        renderCartDrawer();
    }

    function closeCart() {
        cartDrawer?.classList.remove("is-open");
        cartScrim?.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
    }

    document.querySelectorAll("[data-cart-open]").forEach((btn) => btn.addEventListener("click", openCart));
    document.querySelectorAll("[data-cart-close]").forEach((btn) => btn.addEventListener("click", closeCart));
    cartScrim?.addEventListener("click", closeCart);

    /* ---------- FAQ accordion ---------- */
    const faqList = document.querySelector("[data-faq-list]");
    if (faqList && typeof FAQS !== "undefined") {
        faqList.innerHTML = FAQS.map(
            (item, i) => `
      <div class="faq-item" data-faq-item>
        <button class="faq-q" aria-expanded="false" id="faq-q-${i}">
          ${item.q}
        </button>
        <div class="faq-a">
          <p>${item.a}</p>
        </div>
      </div>`
        ).join("");

        faqList.querySelectorAll("[data-faq-item]").forEach((el) => {
            const q = el.querySelector(".faq-q");
            q.addEventListener("click", () => {
                const wasOpen = el.classList.contains("is-open");
                faqList.querySelectorAll("[data-faq-item]").forEach((other) => {
                    other.classList.remove("is-open");
                    other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
                });
                if (!wasOpen) {
                    el.classList.add("is-open");
                    q.setAttribute("aria-expanded", "true");
                }
            });
        });
    }

    /* ---------- Newsletter (local-only demo) ---------- */
    document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("You're on the list — thanks for joining!");
            form.reset();
        });
    });

    /* ---------- Testimonials / patch scroller / artists (home page) ---------- */
    const testimonialGrid = document.querySelector("[data-testimonials]");
    if (testimonialGrid && typeof TESTIMONIALS !== "undefined") {
        testimonialGrid.innerHTML = TESTIMONIALS.map(
            (t) => `
      <div class="testimonial">
        <span class="stars">★★★★★</span>
        <p>"${t.quote}"</p>
        <cite>${t.name}</cite>
      </div>`
        ).join("");
    }

    const patchScroller = document.querySelector("[data-patch-scroller]");
    if (patchScroller && typeof SWAPS !== "undefined") {
        patchScroller.innerHTML = SWAPS.slice(0, 10)
            .map(
                (p, i) => `
      <div class="patch-card">
        <div
          class="patch-swatch"
          style="background:${SWATCH_COLORS[i % SWATCH_COLORS.length]};"
        >
          <img
            src="${p.image}"
            alt="${p.name}"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
     
        </div>
        <strong>${p.name}</strong>
        <span>${p.free ? "FREE" : "$" + p.price.toFixed(2)}</span>
      </div>`
            )
            .join("");
    }

    const artistGrid = document.querySelector("[data-artist-grid]");

    if (artistGrid && typeof FEATURED_ARTISTS !== "undefined") {
        artistGrid.innerHTML = FEATURED_ARTISTS.map(
            (artist) => `
      <article class="artist-card">

        <a
          class="artist-card__visual"
          href="/swaps?artist=${encodeURIComponent(artist.name)}"
          aria-label="View art by ${artist.name}"
        >
          <div class="artist-card__patches">
            ${artist.images
                .map(
                    (image, index) => `
                  <div class="artist-card__patch artist-card__patch--${index + 1}">
                    <img
                      src="${image}"
                      alt="${artist.name} artwork"
                      loading="lazy"
                    >
                  </div>
                `
                )
                .join("")}
          </div>
        </a>

        <div class="artist-card__content">
          <h4>${artist.name}</h4>

          <span class="artist-card__role">
            Artist
          </span>

          <a
            class="artist-card__link"
            href="/swaps?artist=${encodeURIComponent(artist.name)}"
          >
            VIEW THEIR ART <span>→</span>
          </a>
        </div>

      </article>
    `
        ).join("");
    }
});
