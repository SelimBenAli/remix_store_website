/* =========================================================
   REMIX — cart (client-side only, backed by localStorage)
   Structure kept intentionally simple so it's easy to swap
   for real Flask session/DB-backed cart logic later.
   ========================================================= */

const CART_KEY = "remix_cart_v1";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartCount();
}

function addToCart(item) {
  // item: { id, name, price, kind: 'base' | 'swap', icon, color }
  const items = getCart();
  const existing = items.find((i) => i.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    items.push({ ...item, qty: 1 });
  }
  saveCart(items);
  renderCartDrawer();
  showToast(`${item.name} added to your cart`);
}

function removeFromCart(id) {
  const items = getCart().filter((i) => i.id !== id);
  saveCart(items);
  renderCartDrawer();
}

function cartSubtotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function cartItemCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartCount() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = cartItemCount();
  });
}

function renderCartDrawer() {
  const list = document.querySelector("[data-cart-items]");
  const subtotalEl = document.querySelector("[data-cart-subtotal]");
  const totalEl = document.querySelector("[data-cart-total]");
  if (!list) return;

  const items = getCart();

  if (items.length === 0) {
    list.innerHTML = `<div class="cart-empty">Your cart is empty.<br>Add a base to start your collection.</div>`;
  } else {
    list.innerHTML = items
      .map(
        (item, index) => `
      <div class="cart-slot">
        <div class="cart-thumb" style="background:${item.color || SWATCH_COLORS[index % SWATCH_COLORS.length]}">${item.icon || "★"}</div>
        <div class="cart-slot-info">
          <strong>${item.name}</strong>
          <span>${item.kind === "base" ? "Base" : "Art panel"} · Qty ${item.qty}</span>
        </div>
        <div>
          <div>${item.price === 0 ? "Free" : "$" + (item.price * item.qty).toFixed(2)}</div>
          <button class="cart-remove" data-remove="${item.id}">Remove</button>
        </div>
      </div>`
      )
      .join("");
  }

  if (subtotalEl) {
    subtotalEl.textContent = "$" + cartSubtotal().toFixed(2);
  }
  if (totalEl) {
    totalEl.textContent = "$" + cartSubtotal().toFixed(2);
  }

  list.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(btn.getAttribute("data-remove")));
  });
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCartDrawer();
});
