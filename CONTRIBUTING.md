# Contributing to Tampa Commons

Hi. thanks for wanting to help improve Tampa Commons. This doc is my (the maintainer's) guide for how I'd like code contributions handled.

**A quick note on scope:** this guide is for people improving the *site itself*; bug fixes, new features, performance, accessibility, design work. If you just want to add a resource or event to the directory, you don't need any of this; use the submission form on the site instead. That goes straight to me for review, no git required.

---

## What kind of contributions are useful right now

- Bug fixes (map, filters, events calendar, form)
- Accessibility improvements (keyboard navigation, screen reader support, color contrast)
- Performance/page-weight improvements (this project intentionally follows a low-tech, low-energy ethos)
- Small design refinements that stay consistent with the current look-- unless you can really sweep me off my feet with whatever design you can come up with.
- Mobile responsiveness fixes
- Better error handling in `app.js`

If you want to propose something bigger (a new section, a different data backend, a rewrite of some part of the site), please open an issue first and describe it before writing code. I'd rather talk it through than ask you to redo a big pull request.

---

## Before you start

1. **Open an issue first** if the change isn't a small, obvious fix. This avoids two people working on the same thing, and lets me weigh in before you spend time on it.
2. Check the [Roadmap](README.md#roadmap) in the README. if something's already planned or in progress, I'll mention it there.

---

## How to contribute

### 1. Fork the repo

Click **Fork** on the [GitHub repo page](https://github.com/liztere/tampacommons) - this gives you your own copy to work from.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/tampacommons.git
cd tampacommons
```

### 3. Create a branch

Please don't work directly on `main`. Name the branch after what it does:

```bash
git checkout -b fix-mobile-nav-overlap
```

### 4. Make your changes

The project is intentionally simple — plain HTML, CSS, and JavaScript, no build step, no framework, no dependencies to install. To test:

```bash
# just open index.html directly in a browser, or run a local server:
python3 -m http.server 8000
# then visit http://localhost:8000
```

A few things I care about, in order of priority:

- **Keep it dependency-free.** No npm packages, no frameworks, no build tools. If a change requires adding a build step, let's discuss it in an issue first since that's a bigger decision than a typical PR.
- **Keep it light.** This site is built around a low-energy, low-page-weight philosophy. Please avoid adding large libraries, web fonts, or anything that meaningfully increases page weight, unless the feature genuinely requires it.
- **Match the existing code style.** Look at how `app.js` and `styles.css` are already organized (plain functions, CSS custom properties for theming) and follow the same patterns rather than introducing a new style.
- **Test in an actual browser before opening the PR.** Since there's no build step and no test suite yet, manual testing is the only check. please click through the feature/fix you changed, on both desktop and mobile widths, before submitting.

### 5. Commit with a clear message

```bash
git add .
git commit -m "Fix nav overlapping hero text on narrow viewports"
```

Please avoid vague messages like "fix stuff" or "updates" — a short sentence describing *what* changed is enough.

### 6. Push to your fork

```bash
git push origin fix-mobile-nav-overlap
```

### 7. Open a pull request

On GitHub, you'll see a prompt to open a PR against `main`. In the description, include:

- What the change does and why
- Before/after screenshots if it's a visual change
- Anything you tested (or couldn't test)

### 8. Review

I'll review it, leave comments if I have questions or want changes, and merge once it looks good. I'll try to respond within a few days. if I've gone quiet longer than that, feel free to ping the PR.

---

## Code organization, for reference

```
tampacommons/
├── index.html          # Page structure/content
├── styles.css           # All styling (CSS custom properties for colors/fonts at the top)
├── app.js               # Map, filters, events, form handling
├── vendor/leaflet/      # Self-hosted Leaflet library (not loaded from a CDN, intentionally)
├── favicon.svg
├── og-share.png          # Social share preview image
├── robots.txt / sitemap.xml
└── README.md / CONTRIBUTING.md / FORKING.MD 
```

There's no separate backend right now; resource data lives directly in `app.js` as JavaScript arrays (`resources` and `events`). If you're contributing a data-layer change (e.g. wiring this up to Airtable), please read `FRAMEWORK_DECISION.md` first since I've already thought through the tradeoffs there.

---

## What I'd rather you not do

- Please don't submit PRs that add new resources/events directly to `app.js`; send those through the submission form instead, so they go through the same review process as everyone else's submissions.
- Please don't introduce a JS framework, CSS framework, or build tool without discussing it in an issue first.
- Please don't add tracking scripts, analytics, or third-party embeds; no ads, no tracking is a core project value.

---

## Questions

Open an issue, or email me directly at hello@tampacommons.org.

Thanks for helping make this better.
