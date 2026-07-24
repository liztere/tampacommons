# Forking Tampa Commons for Your Own Region

if you're reading this, you're probably looking to build a version of this site for your own city or region. That's great, and it's exactly why this project is open source. This doc walks through everything you'll need to change to make it yours.

This is a different guide than `CONTRIBUTING.md`, that one's for people improving *this* Tampa Bay site. This one's for standing up your *own* independent copy, with your own resources, branding, and domain.

Estimated time: 1–3 hours depending on how much you customize.

---

## Step 1: Fork and clone

1. Click **Fork** on the [GitHub repo](https://github.com/liztere/tampacommons)
2. Clone your fork locally:
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

You may want to rename the repo itself (e.g. `austin-commons`, `pdx-commons`) — you can do this in your fork's GitHub Settings before or after cloning.

---

## Step 2: Replace the resource data (the big one)

Open `app.js` and find the `resources` array near the top. Every entry looks like this:

```javascript
{name: "Meacham Urban Farm", cat: "farm", lat: 27.9583, lng: -82.4404, desc: "Organic veg, pasture-raised meats, raw dairy. Thu–Fri 2–6 PM.", url: "https://www.meachamfarm.com/"}
```

**Delete all the existing Tampa Bay entries and replace them with your own region's resources.** Each entry needs:
- `name` — resource name
- `cat` — one of the existing category keys (`farm`, `market`, `apothecary`, `compost`, `native`, `env`, `activist`, `lgbtq`, `mutual`, `art`, `dance`, `network`) or new ones you define (see Step 4)
- `lat` / `lng` — coordinates (right-click any location on Google Maps → click the coordinates to copy them)
- `desc` — a short one-sentence description
- `url` — website, or `""` if none

Do the same for the `events` array below it if you want a working events calendar, otherwise you can leave it empty (`const events = [];`) and the section will just show nothing, or you can remove the Events section from `index.html` entirely (see Step 6).

---

## Step 3: Recenter the map

In `app.js`, find:

```javascript
mainMap = L.map("main-map", {zoomControl: true}).setView([27.9, -82.55], 11);
```

Replace `[27.9, -82.55]` with your region's center coordinates, and adjust `11` (the zoom level) — lower numbers zoom out further, higher numbers zoom in tighter. For a metro area, 10–12 usually works well; for a smaller city, try 12–13.

---

## Step 4: Update categories (if needed)

If your region's resources don't fit the existing 12 categories, you'll need to update three places in `app.js`, all near the top:

- `catColors` — hex color for each category's map pin and tag
- `catLabels` — the human-readable name shown in the UI
- `catTagBg` — a light background tint for each category's tag pill

Add/remove/rename entries in all three objects together, using the same key across all three. Then update the category filter list in `index.html` (search for `filter-pill` and `cat-card` ,there's a hardcoded pill button and category card for each one).

---

## Step 5: Rebrand the text and identity

Search-and-replace these across `index.html`, `README.md`, `CONTRIBUTING.md`, and `favicon.svg`:

| Find | Replace with |
|---|---|
| `Tampa Commons` | Your project name |
| `Tampa Bay` | Your region's name |
| `tampacommons.org` | Your domain |
| `hello@tampacommons.org` | Your contact email |
| `Hillsborough, Pinellas, and Manatee Counties` | Your counties/region description |

Also update:
- `<title>` tag in `index.html`
- The `<meta name="description">`, `og:title`, `og:description`, `twitter:title`, `twitter:description` tags
- The hero headline text (`hero-h1`, `hero-sub`) further down `index.html`
- The About section's text (currently tells Tampa Commons' origin story; rewrite for yours)

---

## Step 6: Regenerate the share image and favicon

The `og-share.png` (social preview image) and `favicon.svg` both have "Tampa Commons" baked in visually; these are images, not text, so search-and-replace won't touch them. You'll need to recreate them yourself (any image editor, keeping the same dimensions (`og-share.png` is 1200×630px; `favicon.svg` is a 32×32 viewBox)

---

## Step 7: Update the color palette (optional)

If you want different colors from the current warm-parchment, edit the CSS custom properties at the very top of `styles.css`:

```css
:root {
  --cream: #F0ECD9;   /* page background */
  --ink: #1A1A16;     /* body text */
  --clay: #A8431E;    /* accent color (links, buttons) */
  /* ...etc */
}
```

Everything else in the stylesheet references these variables, so changing them here updates the whole site consistently.

---

## Step 8: Update the support/submission links

- **Formspree:** the submission form's `action=""` attribute in `index.html` points to a Formspree endpoint; create your own free Formspree account and swap in your own form ID
- **Open Collective / Ko-fi:** update the links in the Support section to your own accounts, or remove that section entirely if you don't want to solicit donations
- **License note:** the `LICENSE` file and README both mention CC BY 4.0 for directory content. Keep, change, or remove this depending on how you want your own data licensed

---

## Step 9: Deploy

Same process as the original:
1. Push your changes to your forked GitHub repo
2. Connect it to Netlify (or your host of choice) — see `GIT_SETUP.md` and `QUICK_START.md` for the original walkthrough, which applies the same way to your fork
3. Register your own domain and point it at your deployment
4. Set up email forwarding for a custom address if you want

---

## What you probably don't need to touch

- `vendor/leaflet/`; the self-hosted map library works the same regardless of region
- The lazy-loading map logic, event filtering, and search functionality in `app.js`; all region-agnostic
- `robots.txt` / `sitemap.xml`; just update the domain inside them (Step 5 covers this)

---

## A request

If you build a version of this for your own city, I'd love to hear about it; feel free to email hello@tampacommons.org and let me know. Not required, just would be nice to see this spread.

Good luck with your region's cyber commons.
