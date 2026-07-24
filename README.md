# Tampa Commons

A free, open resource directory for Tampa Bay.

**Live site:** tampacommons.org

---

## What this?

Tampa Commons is a directory of regenerative farms, mutual aid networks, activist groups, native plant nurseries, LGBTQ+ resources, ethical alternatives and more across Hillsborough, Pinellas, and Manatee Counties.

No ads, algorithms, or login required.

---

## Features

- **Interactive map** with 49 ( and growing) community resources
-  **Filter by category** (Farms, Mutual Aid, Activist Groups, etc.)
-  **Events calendar** with recurring community events
-  **Mobile-friendly** responsive design
-  **Offline-ready**  runs entirely client-side

---

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Maps:** Leaflet.js + OpenStreetMap
- **Hosting:** Deployed to Netlify from Github

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

For the maintainer: submissions currently need to be manually added to app.js's resources array after review:
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



---

## Forking for Your Own Region

Want to build a version of this for your own city? See FORKING.md for a full walkthrough. replacing the resource data, recentering the map, rebranding, and redeploying.

### Deploy

Netlify
Push code to GitHub
Go to netlify.com
"New site from Git" -> Select your repo
Deploy settings: Leave everything default
You get a free *.netlify.app subdomain

GitHub Pages
Go to repo Settings -> Pages
Source: Deploy from branch -> main -> /root
Save
Your site will be at https://yourusername.github.io/region-commons/

Vercel
Push code to GitHub
Go to vercel.com
Import your GitHub repo
Done

## Contributing

This is a community project. Contributions welcome!

To add a resource or event: Use the submission form on the site; it goes straight to a volunteer moderator for review. No git or coding needed.

To improve the site itself (bug fixes, features, accessibility, performance): See CONTRIBUTING.md for the full contributor workflow.

To report an error:

Open an issue with the resource name and what needs fixing

**To become a maintainer:**
- Email tampacommons@tuta.io

---

## Roadmap

- [x] Launch with 49 resources
- [x] Events calendar
- [ ] Connect to Airtable for community editing
- [x] Add submission form (Formspree or Airtable)
- [ ] Photo uploads for resources
- [ ] "Near me" geolocation feature
- [ ] Print-friendly directory view

---

## Philosophy

Tampa Commons operates on a few core principles:

1. **Free and open** - No paywalls,  logins, or tracking
2. **Community-maintained** - maintained by residents 
3. **Locally-focused** - Only resources in the Tampa Bay tri-county area
4. **Ethical alternatives** — Prioritize regenerative, sustainable, and/or community-oriented resources
5. **Accessible** - Works on any device, any browser

---

## License

**Code:** MIT License (see LICENSE file)
**Content/Data:** CC BY 4.0 (Creative Commons Attribution)

You're free (and highly encouraged) to:
- Use this code for your own community directory
- Fork and adapt for your city
- Improve and submit pull requests

Just give credit and keep it free.

---

## Credits

**Started by:** [Liztere Fiol](https://liztere.net) in 2026  
**Built with:** Leaflet.js, OpenStreetMap, love 
**Inspired by:** MutualAidNYC, WeRegenerate.earth

---

## Contact

- **Website:** tampacommons.org
- **Email:** tampacommons@tuta.io
- **Report issues:** [GitHub Issues](https://github.com/liztere/tampa-commons/issues)

---


