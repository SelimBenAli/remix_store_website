const product = {
  name: "Raven Denim Jacket",
  price: 119,
  images: Array.from({length: 9}, (_, i) => `https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900`),
  sizes: ["XS","S","M","L","XL","2XL","3XL"]
};

let selectedSize = null;
let current = 0;
let cart = [];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function renderThumbs() {
  $("#thumbs").innerHTML = product.images.map((src, i) =>
    `<button class="thumb ${i === current ? "active" : ""}" data-index="${i}">
      <img src="${src}" alt="${product.name} view ${i+1}">
    </button>`
  ).join("");
  $$(".thumb").forEach(btn => btn.addEventListener("click", () => {
    current = Number(btn.dataset.index);
    updateGallery();
  }));
  $("#imageTotal").textContent = product.images.length;
}

function updateGallery() {
  $("#mainImage").src = product.images[current];
  $("#currentImage").textContent = current + 1;
  $$(".thumb").forEach((x,i) => x.classList.toggle("active", i === current));
}

function selectSize(size) {
  selectedSize = size;
  $$(".sizes button").forEach(b => b.classList.toggle("selected", b.dataset.size === size));
  $("#stockMessage").textContent = size === "3XL" ? "Low stock!" : "In stock";
  $("#addBtn").textContent = "ADD TO BAG";
  $("#mobileAdd").textContent = "ADD TO BAG";
}

function addToCart() {
  if (!selectedSize) {
    $("#sizes").classList.add("shake");
    setTimeout(() => $("#sizes").classList.remove("shake"), 400);
    return;
  }
  cart.push({name: product.name, size: selectedSize, price: product.price});
  renderCart();
  $("#cartDrawer").classList.add("open");
  $("#overlay").classList.add("show");
}

function renderCart() {
  const subtotal = cart.reduce((s, x) => s + x.price, 0);
  $("#cartCount").textContent = cart.length;
  $("#subtotal").textContent = `$${subtotal.toFixed(2)} USD`;
  $("#total").textContent = `$${subtotal.toFixed(2)} USD`;
  $("#cartBody").innerHTML = cart.length
    ? cart.map((item, i) => `<div class="cart-item">
        <img src="https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900" alt="">
        <div><b>${item.name}</b><span>Size ${item.size}</span><strong>$${item.price.toFixed(2)}</strong></div>
        <button onclick="removeItem(${i})">×</button>
      </div>`).join("")
    : `<div class="empty-cart">Your bag is empty.</div>`;
}
function removeItem(i) { cart.splice(i,1); renderCart(); }

function closeOverlays() {
  $("#cartDrawer").classList.remove("open");
  $("#mobileMenu").classList.remove("open");
  $("#sizeModal").classList.remove("open");
  $("#searchPanel").classList.remove("open");
  $("#overlay").classList.remove("show");
}

$$(".sizes button").forEach(b => b.addEventListener("click", () => selectSize(b.dataset.size)));
$("#addBtn").addEventListener("click", addToCart);
$("#mobileAdd").addEventListener("click", addToCart);

$("#prevImg").addEventListener("click", () => { current = (current - 1 + product.images.length) % product.images.length; updateGallery(); });
$("#nextImg").addEventListener("click", () => { current = (current + 1) % product.images.length; updateGallery(); });

$("#sizeGuideBtn").addEventListener("click", () => { $("#sizeModal").classList.add("open"); $("#overlay").classList.add("show"); });
$("#sizeClose").addEventListener("click", closeOverlays);

$("#cartBtn").addEventListener("click", () => { $("#cartDrawer").classList.add("open"); $("#overlay").classList.add("show"); });
$("#cartClose").addEventListener("click", closeOverlays);

$("#menuBtn").addEventListener("click", () => { $("#mobileMenu").classList.add("open"); $("#overlay").classList.add("show"); });
$("#menuClose").addEventListener("click", closeOverlays);

$("#searchBtn").addEventListener("click", () => {
  $("#searchPanel").classList.toggle("open");
  if ($("#searchPanel").classList.contains("open")) $("#searchInput").focus();
});
$("#overlay").addEventListener("click", closeOverlays);

document.addEventListener("keydown", e => { if (e.key === "Escape") closeOverlays(); });

renderThumbs();
updateGallery();
