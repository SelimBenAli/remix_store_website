# REMIX — Flask templates

Templates for a swap-panel wearable-art store, styled to the brief's palette
(`#780000`, `#C1121F`, `#FDF0D5`, `#003049`, `#669BBC`). No backend/API — all
product data lives in `static/js/data.js` as plain JS arrays, and the cart is
kept in the browser via `localStorage`.

## Run it

```
pip install flask
python app.py
```

Then open `http://127.0.0.1:5000/`.

## Structure

```
templates/
  base.html    -> layout: header/nav, cart drawer, footer
  index.html   -> home page (hero, bundle scroller, testimonials, FAQ, etc.)
  bases.html   -> "Bases" catalogue (jackets/hoodies)
  swaps.html   -> "Swaps" catalogue (art panels)
static/
  css/style.css      -> all styling (single stylesheet, CSS variables for the palette)
  js/data.js         -> local example product/artist/testimonial data
  js/cart.js         -> add/remove/subtotal, localStorage-backed
  js/main.js         -> nav toggle, cart drawer, FAQ accordion, home page rendering
  js/catalogue.js    -> filtering/sorting/"load more" for bases.html and swaps.html
```

## Wiring in real data later

Swap out the arrays in `data.js` for data passed from Flask, e.g.:

```python
return render_template("bases.html", bases=my_bases_from_db)
```

and loop with `{% for base in bases %}` in the template instead of the JS
`BASES` array — the CSS classes (`.product-grid`, `.product-card`, etc.) will
still apply.

## Logo

There's a placeholder logo mark (dashed box that says "LOGO") in the header
and footer in `base.html` — swap `<span class="logo-placeholder">LOGO</span>`
for an `<img>` tag once the real logo is ready.
