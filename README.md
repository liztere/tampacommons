# Tampa Commons

A free, open, community-maintained resource directory for Tampa Bay.

**Live site:** [Coming soon]

---

## What is this?

Tampa Commons is a directory of regenerative farms, mutual aid networks, activist groups, native plant nurseries, LGBTQ+ resources, and ethical alternatives across Hillsborough, Pinellas, and Manatee Counties.

No ads. No algorithms. No login required. Just neighbors helping neighbors.

---

## Launch Checklist

The site is fully built and functional. These are the remaining steps — all require your own accounts/payment, so they're not something that can be done for you:

- [ ] **Register a domain** (tampacommons.org or similar) — Namecheap, Porkbun, etc. (~$12–15/yr)
- [ ] **Connect the domain to Netlify/GitHub Pages** and update DNS
- [ ] **Set up email forwarding** for hello@tampacommons.org → your real inbox (usually free through your registrar)
- [ ] **Create a Formspree account** (formspree.io, free tier) and replace `YOUR_FORM_ID` in `index.html`'s `<form action="...">` with your real form endpoint — the submit form is fully wired, it just needs this one ID
- [ ] **Create an Open Collective account** and replace the placeholder link in the Support section
- [ ] **Create a Ko-fi account** and replace that placeholder link too
- [ ] **Update `og:url` and `og:image`** in `index.html`'s `<head>` once your real domain is live (currently placeholder `tampacommons.org` URLs)

Everything else — favicon, meta tags, robots.txt, sitemap, LICENSE, the actual map/filter/events functionality — is done and ready to deploy as-is.

---

## Features

- 🗺️ **Interactive map** with 49 community resources
- 🔍 **Filter by category** (Farms, Mutual Aid, Activist Groups, etc.)
- 📅 **Events calendar** with recurring community events
- 📱 **Mobile-friendly** responsive design
- 🌐 **Offline-ready** — runs entirely client-side

---

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Maps:** Leaflet.js + OpenStreetMap
- **Hosting:** Deploy to Netlify, GitHub Pages, or Vercel
- **No build step** — just edit and push

---

## Project Structure

```
/
├── index.html          # Main page structure
├── styles.css          # All styling
├── app.js              # Map, filters, events logic
├── .gitignore          
└── README.md           
```

---

## Local Development

1. Clone this repo
2. Open `index.html` in your browser
3. That's it! No build tools needed.

**Live server (optional):**
```bash
# Python
python3 -m http.server 8000

# Node
npx http-server

# VS Code
Install "Live Server" extension and right-click index.html
```

---

## Adding Resources

### Option 1: Edit JavaScript directly (current)
Open `app.js` and add to the `resources` array:

```javascript
{
  name: "Resource Name",
  cat: "farm",  // farm, market, mutual, activist, etc.
  lat: 27.9583,
  lng: -82.4404,
  desc: "Short description",
  url: "https://example.com"
}
```

### Option 2: Airtable backend (future)
See `FRAMEWORK_DECISION.md` for instructions on connecting to Airtable for community editing.

---

## Deploy

### Netlify (Recommended)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git" → Select your repo
4. Deploy settings: Leave everything default
5. Done! You get a free `*.netlify.app` subdomain

### GitHub Pages
1. Go to repo Settings → Pages
2. Source: Deploy from branch → `main` → `/root`
3. Save
4. Your site will be at `https://yourusername.github.io/tampa-commons/`

### Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Done!

---

## Contributing

This is a community project. Contributions welcome!

**To add a resource:**
1. Fork this repo
2. Add the resource to `app.js`
3. Submit a pull request

**To report an error:**
- Open an issue with the resource name and what needs fixing

**To become a maintainer:**
- Email hello@tampacommons.org

---

## Roadmap

- [x] Launch with 49 resources
- [x] Events calendar
- [ ] Connect to Airtable for community editing
- [ ] Add submission form (Google Forms or Airtable)
- [ ] Photo uploads for resources
- [ ] "Near me" geolocation feature
- [ ] Print-friendly directory view

---

## Philosophy

Tampa Commons operates on a few core principles:

1. **Free and open** — No paywalls, no logins, no tracking
2. **Community-maintained** — Built by neighbors for neighbors
3. **Locally-focused** — Only resources in the Tampa Bay tri-county area
4. **Ethical alternatives** — Prioritize regenerative, community-oriented resources
5. **Accessible** — Works on any device, any browser, no JavaScript required for core content

---

## License

**Code:** MIT License (see LICENSE file)
**Content/Data:** CC BY 4.0 (Creative Commons Attribution)

You're free to:
- Use this code for your own community directory
- Fork and adapt for your city
- Improve and submit pull requests

Just give credit and keep it free.

---

## Credits

**Started by:** [Your name] in 2026  
**Built with:** Leaflet.js, OpenStreetMap, community labor  
**Inspired by:** MutualAidNYC, Regenerate Tampa Bay, WeRegenerate.earth

---

## Contact

- **Website:** tampacommons.org
- **Email:** hello@tampacommons.org
- **Report issues:** [GitHub Issues](https://github.com/yourusername/tampa-commons/issues)

---

Made with ❤️ in Tampa Bay
