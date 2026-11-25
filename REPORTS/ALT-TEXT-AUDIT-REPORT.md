# ALT-TEXT-AUDIT-REPORT — ColestZen (https://en-colestzen.vercel.app)

Audit date: 2026-11-25. Method: an HTML parser scanned every `<img>` in every built HTML file. A second, separate pass checked rendered pages in headless Chrome to confirm every image decodes (0 broken). Inline SVG icons are `aria-hidden`. Article and ingredient SVG illustrations carry `role="img"`/alt labels.

## Summary

- HTML pages audited: 29
- Total `<img>` elements checked: 199
- Missing alt attributes: 0
- Generic alt text (e.g. "image", "photo"): 0
- Decorative images correctly using `alt=""`: 0 (none, every image now has descriptive alt text)
- Images with descriptive alt text: 199
- Images corrected in this audit: 29 (the footer logo had an empty alt on every page and now has descriptive alt text). Also fixed: the 6 blog thumbnail illustrations now have unique descriptive labels instead of a generic one, and the product-card icons now have labels.
- Remaining issues: none found. Not verifiable here: the deployed HTML, because the site has not been deployed yet. Re-run the scan on the live URL after deployment.
- WebP verification: 13 raster files, all genuine WebP (checked by decoding the file format, not the extension).

- Final verification status: **PASSED** (both passes run on the built source files)

## Page-by-page list

### /404.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /affiliate-disclosure.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /alternatives.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-capsules-leaves-closeup.webp` | Capsules and green leaves on marble |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /benefits.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle.webp` | ColestZen supplement bottle with teal label reading Supports Cholesterol Levels |
| `/img/colestzen-bottle-studio-closeup.webp` | ColestZen visual for the healthy cholesterol levels focus area |
| `/img/colestzen-capsule-bowl.webp` | ColestZen visual for the balanced blood sugar focus area |
| `/img/colestzen-glass-of-water.webp` | ColestZen visual for the circulation & heart support focus area |
| `/img/colestzen-capsules-leaves-closeup.webp` | ColestZen visual for the antioxidant nutrients focus area |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /blog/cinnamon-bitter-melon-and-blood-sugar.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-sm.webp` | ColestZen bottle |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /blog/daily-movement-for-heart-health.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-sm.webp` | ColestZen bottle |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /blog/foods-that-support-healthy-cholesterol.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-sm.webp` | ColestZen bottle |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /blog/how-to-read-a-supplement-label.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-sm.webp` | ColestZen bottle |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /blog/index.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-capsule-bowl.webp` | Bowl of white supplement capsules on a marble counter |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /blog/magnesium-chromium-and-metabolism.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-sm.webp` | ColestZen bottle |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /blog/understanding-ldl-and-hdl.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-sm.webp` | ColestZen bottle |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /disclaimer.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /faq.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle.webp` | ColestZen bottle with teal and white label |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /focus-areas/antioxidant-defense.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-capsules-leaves-closeup.webp` | ColestZen visual for antioxidant nutrients |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /focus-areas/blood-sugar-balance.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-capsule-bowl.webp` | ColestZen visual for balanced blood sugar |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /focus-areas/circulation-heart.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-glass-of-water.webp` | ColestZen visual for circulation & heart support |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /focus-areas/healthy-cholesterol.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-studio-closeup.webp` | ColestZen visual for healthy cholesterol levels |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /focus-areas/index.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-marble-scene.webp` | ColestZen bottle on a marble countertop with capsules in a bowl |
| `/img/colestzen-two-bottles-teal-scene.webp` | Two ColestZen bottles leaning together on a marble stand beside a glass of water |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /how-it-works.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-capsules-leaves-closeup.webp` | Close-up of white ColestZen capsules beside fresh green leaves on marble |
| `/img/colestzen-glass-of-water.webp` | Glass of water on a wooden coaster, the recommended way to take ColestZen capsules |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /index.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/ingredients/bitter-melon.svg` | Illustration of Bitter Melon Extract, an ingredient listed for ColestZen |
| `/img/ingredients/cinnamon.svg` | Illustration of Cinnamon, an ingredient listed for ColestZen |
| `/img/ingredients/licorice.svg` | Illustration of Licorice Extract, an ingredient listed for ColestZen |
| `/img/ingredients/gymnema.svg` | Illustration of Gymnema sylvestre, an ingredient listed for ColestZen |
| `/img/ingredients/banaba.svg` | Illustration of Banaba Extract, an ingredient listed for ColestZen |
| `/img/ingredients/mulberry.svg` | Illustration of Mulberry Fruit Powder, an ingredient listed for ColestZen |
| `/img/ingredients/yarrow.svg` | Illustration of Yarrow Herb Powder, an ingredient listed for ColestZen |
| `/img/ingredients/cayenne.svg` | Illustration of Cayenne Pepper Extract, an ingredient listed for ColestZen |
| `/img/ingredients/juniper.svg` | Illustration of Juniper Berry Powder, an ingredient listed for ColestZen |
| `/img/colestzen-bottle.webp` | ColestZen bottle, 60 capsules, label reading Supports Cholesterol Levels |
| `/img/colestzen-two-bottles-teal-scene.webp` | Two ColestZen bottles on a marble stand beside capsules, green leaves and a glass of water |
| `/img/colestzen-2-bottles.webp` | ColestZen 2 bottles package showing 2 identical bottles |
| `/img/colestzen-6-bottles.webp` | ColestZen 6 bottles package showing 6 identical bottles |
| `/img/colestzen-3-bottles.webp` | ColestZen 3 bottles package showing 3 identical bottles |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /order.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-2-bottles.webp` | ColestZen 2 bottles package showing 2 identical bottles |
| `/img/colestzen-6-bottles.webp` | ColestZen 6 bottles package showing 6 identical bottles |
| `/img/colestzen-3-bottles.webp` | ColestZen 3 bottles package showing 3 identical bottles |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /price.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-2-bottles.webp` | ColestZen 2 bottles package showing 2 identical bottles |
| `/img/colestzen-6-bottles.webp` | ColestZen 6 bottles package showing 6 identical bottles |
| `/img/colestzen-3-bottles.webp` | ColestZen 3 bottles package showing 3 identical bottles |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /privacy-policy.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /product-overview.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/ingredients/bitter-melon.svg` | Illustration of Bitter Melon Extract, an ingredient listed for ColestZen |
| `/img/ingredients/cinnamon.svg` | Illustration of Cinnamon, an ingredient listed for ColestZen |
| `/img/ingredients/licorice.svg` | Illustration of Licorice Extract, an ingredient listed for ColestZen |
| `/img/ingredients/gymnema.svg` | Illustration of Gymnema sylvestre, an ingredient listed for ColestZen |
| `/img/ingredients/banaba.svg` | Illustration of Banaba Extract, an ingredient listed for ColestZen |
| `/img/ingredients/mulberry.svg` | Illustration of Mulberry Fruit Powder, an ingredient listed for ColestZen |
| `/img/ingredients/yarrow.svg` | Illustration of Yarrow Herb Powder, an ingredient listed for ColestZen |
| `/img/ingredients/cayenne.svg` | Illustration of Cayenne Pepper Extract, an ingredient listed for ColestZen |
| `/img/ingredients/juniper.svg` | Illustration of Juniper Berry Powder, an ingredient listed for ColestZen |
| `/img/colestzen-bottle.webp` | ColestZen bottle, 60 capsules, label reading Supports Cholesterol Levels |
| `/img/colestzen-bottle-marble-scene.webp` | Single ColestZen bottle on a marble counter with a capsule bowl, green plant and glass of water |
| `/img/ingredients/bitter-melon.svg` | Illustration of Bitter Melon Extract |
| `/img/ingredients/cinnamon.svg` | Illustration of Cinnamon |
| `/img/ingredients/licorice.svg` | Illustration of Licorice Extract |
| `/img/ingredients/gymnema.svg` | Illustration of Gymnema sylvestre |
| `/img/ingredients/banaba.svg` | Illustration of Banaba Extract |
| `/img/ingredients/mulberry.svg` | Illustration of Mulberry Fruit Powder |
| `/img/ingredients/yarrow.svg` | Illustration of Yarrow Herb Powder |
| `/img/ingredients/cayenne.svg` | Illustration of Cayenne Pepper Extract |
| `/img/ingredients/juniper.svg` | Illustration of Juniper Berry Powder |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /product-review.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-studio-closeup.webp` | Studio close-up of the ColestZen bottle label |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /pros-and-cons.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-bottle-marble-scene.webp` | ColestZen bottle on a marble countertop |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /reviews.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-two-bottles-teal-scene.webp` | Two ColestZen bottles on a marble stand with capsules and leaves |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /terms.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |

### /where-to-buy.html

| Image | Alt text |
|---|---|
| `/img/colestzen-logo.webp` | ColestZen logo monogram |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles in the 3-bottle package |
| `/img/colestzen-3-bottles.webp` | Three ColestZen bottles grouped together |
| `/img/colestzen-logo.webp` | ColestZen teal CZ monogram logo in the site footer |
| `/img/colestzen-6-bottles.webp` | Six ColestZen bottles in the 6-bottle package |
| `/img/colestzen-6-bottles.webp` | Six bottles of ColestZen capsules in the 6-bottle package |
