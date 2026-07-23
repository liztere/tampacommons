// Category colors and labels
const catColors = {
  farm: "#3B6D11",
  market: "#0F6E56",
  apothecary: "#534AB7",
  compost: "#854F0B",
  native: "#0C447C",
  art: "#993556",
  activist: "#A32D2D",
  lgbtq: "#185FA5",
  env: "#1D9E75",
  mutual: "#993C1D",
  dance: "#7F77DD",
  network: "#5F5E5A"
};

const catLabels = {
  farm: "Farm / Garden",
  market: "Market",
  apothecary: "Apothecary",
  compost: "Composting",
  native: "Native Plants",
  env: "Environment",
  activist: "Activist Group",
  lgbtq: "LGBTQ+",
  mutual: "Mutual Aid",
  art: "Art Collective",
  dance: "Dance",
  network: "Network / Directory"
};

const catTagBg = {
  farm: "#EAF3DE",
  market: "#E1F5EE",
  apothecary: "#EEEDFE",
  compost: "#FAEEDA",
  native: "#E6F1FB",
  env: "#E1F5EE",
  activist: "#FCEBEB",
  lgbtq: "#E6F1FB",
  mutual: "#FAECE7",
  art: "#FBEAF0",
  dance: "#EEEDFE",
  network: "#F1EFE8"
};

// Resources data
const resources = [
  {name: "Meacham Urban Farm", cat: "farm", lat: 27.9583, lng: -82.4404, desc: "Organic veg, pasture-raised meats, raw dairy. Thu–Fri 2–6 PM.", url: "https://www.meachamfarm.com/"},
  {name: "Sweetwater Organic Farm", cat: "farm", lat: 27.9752, lng: -82.4735, desc: "Nonprofit 6-acre urban organic farm. CSA and education programs.", url: "https://www.sweetwater-organic.org/"},
  {name: "15th Street Farm", cat: "farm", lat: 27.9680, lng: -82.4460, desc: "Soil-to-fork education, farm-to-table dinners, community building.", url: "https://www.15thstfarm.com/"},
  {name: "Brick Street Farms", cat: "farm", lat: 27.7707, lng: -82.6396, desc: "Urban hydroponic farm. Pesticide-free leafy greens. On-site market.", url: "https://brickstreetfarms.com/"},
  {name: "TrailBale Farm", cat: "farm", lat: 27.9800, lng: -82.3600, desc: "Regenerative family farm. Chickens, pigs, turkeys, grass-finished beef.", url: "https://www.trailbale.com/"},
  {name: "Life Farms", cat: "farm", lat: 27.9659, lng: -82.7990, desc: "Regenerative organic farm. Veg, herbs, flowers, microgreens. CSA.", url: "https://www.lifefarms.net/"},
  {name: "Peach Pit Farms", cat: "farm", lat: 27.8610, lng: -82.2280, desc: "Small regenerative farm. Fruits, veg, herbs. Markets & by appt.", url: "https://peachpitfarms.com/"},
  {name: "Sustainable Living Project", cat: "farm", lat: 27.9621, lng: -82.4388, desc: "Urban farm, workshops, education, resilience building.", url: "https://www.slptampa.com/"},
  {name: "Saturday Morning Market", cat: "market", lat: 27.7740, lng: -82.6364, desc: "Large weekly market. Farm-fresh produce, artisanal foods, crafts.", url: "https://saturdaymorningmarket.com/"},
  {name: "Ybor City Saturday Market", cat: "market", lat: 27.9602, lng: -82.4380, desc: "Weekly market in historic Ybor City. Since 2000.", url: "https://ybormarket.com/"},
  {name: "Water Street Sunday Market", cat: "market", lat: 27.9445, lng: -82.4538, desc: "Weekly pedestrian-friendly market. 50–100+ vendors.", url: "https://www.tampabaymarkets.com/"},
  {name: "Heights Night Market", cat: "market", lat: 27.9730, lng: -82.4672, desc: "Evening market in Tampa Heights.", url: "https://www.tampabaymarkets.com/"},
  {name: "Modern Herbal Apothecary", cat: "apothecary", lat: 27.8959, lng: -82.5064, desc: "Clinical herbalist, bulk apothecary, cafe, micro-farm. 6412 S MacDill.", url: "https://modernherbalshop.com/"},
  {name: "The Sanctum Apothecary", cat: "apothecary", lat: 27.7721, lng: -82.6389, desc: "Bulk herbs from small family farms. Holistic focus.", url: "https://sanctumstpete.com/"},
  {name: "The Herbal Apothecary FL", cat: "apothecary", lat: 27.9500, lng: -82.4600, desc: "Woman-owned eco-friendly wellness store.", url: "https://www.theherbalapothecaryfl.com/"},
  {name: "Suncoast Compost", cat: "compost", lat: 27.9583, lng: -82.4414, desc: "Weekly food scrap pickup across Tampa Bay.", url: "https://www.suncoastcompost.com/"},
  {name: "O-Town Compost", cat: "compost", lat: 27.9500, lng: -82.4710, desc: "5-gallon bucket swap. Residential, business, event use.", url: "https://o-towncompost.com/"},
  {name: "Little Red Wagon Nursery", cat: "native", lat: 27.9302, lng: -82.5009, desc: "Florida native plants. Butterfly host and nectar plants.", url: "https://littleredwagonnativenursery.com/"},
  {name: "Wilcox Nursery", cat: "native", lat: 27.8743, lng: -82.7884, desc: "Est. 1941. Native trees, shrubs, wildflowers. Largo.", url: "https://www.wilcoxnursery.com/"},
  {name: "Sweet Bay Nursery", cat: "native", lat: 27.5710, lng: -82.4410, desc: "Premier native plant nursery since 1995. Parrish.", url: "https://sweetbaynursery.com/"},
  {name: "Wise Hands Native Nursery", cat: "native", lat: 27.7900, lng: -82.6600, desc: "Wholesale native wildflowers, grasses, shrubs.", url: "https://wisehandsnativenursery.com/"},
  {name: "Tampa Bay Waterkeeper", cat: "env", lat: 27.9506, lng: -82.4572, desc: "Protects Tampa Bay watershed. Advocacy, testing, litigation.", url: "https://www.tampabaywaterkeeper.org/"},
  {name: "Suncoast Waterkeeper", cat: "env", lat: 27.7726, lng: -82.6386, desc: "Defends Suncoast waterways through advocacy and legal action.", url: "https://www.suncoastwaterkeeper.org/"},
  {name: "Tampa Bay Sierra Club", cat: "env", lat: 27.9508, lng: -82.4582, desc: "Phosphate mining, clean water, climate, renewable energy.", url: "https://www.sierraclub.org/florida/tampa-bay"},
  {name: "Tampa Bay Watch", cat: "env", lat: 27.7730, lng: -82.6400, desc: "Protects and restores Tampa Bay marine and wetland environments.", url: "https://www.tampabaywatch.org/"},
  {name: "Bike/Walk Tampa Bay", cat: "env", lat: 27.9506, lng: -82.4592, desc: "Coalition for walkable, bikeable Tampa Bay.", url: "https://www.bikewalktampabay.org/"},
  {name: "Tampa DSA", cat: "activist", lat: 27.9530, lng: -82.4610, desc: "Worker rights, anti-racism, LGBTQ+ rights, environmental justice.", url: "https://www.tampadsa.org/"},
  {name: "TATU – Tenants Union", cat: "activist", lat: 27.9510, lng: -82.4560, desc: "Renters organizing for better conditions and lower rents.", url: "https://organize.directory/tampa"},
  {name: "Progress Florida", cat: "activist", lat: 27.9480, lng: -82.4580, desc: "Statewide research and education on social and environmental justice.", url: "https://progressflorida.org/"},
  {name: "Bay Area Legal Services", cat: "activist", lat: 27.9467, lng: -82.4594, desc: "Free legal help. Housing, tenant rights, family law.", url: "https://bals.org/"},
  {name: "Tampa Food Not Bombs", cat: "mutual", lat: 27.9504, lng: -82.4553, desc: "Free vegan/vegetarian meals. Mon & Wed 7 PM, 905 N Marion St.", url: "https://www.facebook.com/TampaFoodNotBombs/"},
  {name: "Black Collective Movement", cat: "mutual", lat: 27.9550, lng: -82.4520, desc: "Aid packages, food, water, clothing for vulnerable communities.", url: ""},
  {name: "Community Aid Network", cat: "mutual", lat: 27.9570, lng: -82.4540, desc: "Essential goods and services for Tampa Bay community members.", url: ""},
  {name: "Equality Florida", cat: "lgbtq", lat: 27.9500, lng: -82.4570, desc: "Florida's largest LGBTQ+ civil rights organization.", url: "https://www.eqfl.org/"},
  {name: "PFLAG Tampa", cat: "lgbtq", lat: 27.9490, lng: -82.4600, desc: "Support, education, advocacy for LGBTQ+ people and families.", url: "https://pflagtampa.org/"},
  {name: "Metro Tampa Bay", cat: "lgbtq", lat: 27.7600, lng: -82.6450, desc: "100+ programs including LGBTQ+ community and wellness services.", url: "https://www.metrotampabay.org/"},
  {name: "St. Pete Pride", cat: "lgbtq", lat: 27.7700, lng: -82.6380, desc: "Celebrates and supports the LGBTQIA+ community.", url: "https://stpetepride.com/"},
  {name: "TT Art Collective", cat: "art", lat: 27.9520, lng: -82.4610, desc: "Art shows, live painting, murals, commissions.", url: "https://www.ttartcollective.com/"},
  {name: "Bay Area Street Collective", cat: "art", lat: 27.9510, lng: -82.4580, desc: "Showcases local street artists across Tampa Bay.", url: "https://www.bayareastreetcollective.com/"},
  {name: "Tampa Arts Alliance", cat: "art", lat: 27.9530, lng: -82.4560, desc: "Nonprofit uniting artists and community for exhibitions.", url: "https://tampaartsalliance.org/"},
  {name: "Tampa City Dance Center", cat: "dance", lat: 27.9540, lng: -82.4590, desc: "Acro, jazz, hip hop, contemporary for all ages.", url: "https://tcdancecenter.com/"},
  {name: "LUX Dance Collective", cat: "dance", lat: 27.9460, lng: -82.4620, desc: "Community dance programs for ages 2–18 at all levels.", url: ""},
  {name: "WeRegenerate.earth", cat: "network", lat: 27.9500, lng: -82.4565, desc: "National regenerative products & services directory. Find and list regenerative offerings near you. Includes events calendar, forums, and disaster resources.", url: "https://weregenerate.earth/"},
  {name: "Regenerate Tampa Bay", cat: "network", lat: 27.9515, lng: -82.4575, desc: "Curated local directory of regenerative farms, markets, apothecaries, native nurseries, and sustainable resources across Tampa Bay. The origin of this commons.", url: "https://regeneratetampabay.org/"},
  {name: "Sustany Foundation", cat: "network", lat: 27.9525, lng: -82.4585, desc: "Nonprofit supporting local sustainability and resiliency programs. Maintains a comprehensive links directory of regional sustainability resources.", url: "https://sustany.org/"},
  {name: "Eco Pass", cat: "network", lat: 27.9535, lng: -82.4595, desc: "Directory of vetted eco-friendly local businesses for green dining, experiences, and shopping across Tampa Bay.", url: "https://www.ecopass.me/"}
];

// Events data
const events = [
  {title: "Saturday Morning Market", day: "Every Saturday", time: "9 AM – 2 PM", cat: "market", loc: "St. Petersburg Waterfront", url: "https://saturdaymorningmarket.com/"},
  {title: "Ybor City Saturday Market", day: "Every Saturday", time: "9 AM – 3 PM", cat: "market", loc: "Centennial Park, Ybor City", url: "https://ybormarket.com/"},
  {title: "Water Street Sunday Market", day: "Every Sunday", time: "10 AM – 2 PM", cat: "market", loc: "Water Street, Downtown Tampa", url: "https://www.tampabaymarkets.com/"},
  {title: "Heights Night Market", day: "Monthly", time: "5 PM – 10 PM", cat: "market", loc: "Tampa Heights", url: "https://www.tampabaymarkets.com/"},
  {title: "Tampa Food Not Bombs", day: "Every Monday & Wednesday", time: "7 PM", cat: "mutual", loc: "905 N Marion St, Tampa", url: "https://www.facebook.com/TampaFoodNotBombs/"},
  {title: "PFLAG Tampa Monthly Meeting", day: "1st Monday of month", time: "5 – 7 PM", cat: "lgbtq", loc: "Tampa (see website for location)", url: "https://pflagtampa.org/"},
  {title: "Tampa DSA General Meeting", day: "Monthly", time: "TBA", cat: "activist", loc: "Tampa (check tampadsa.org)", url: "https://www.tampadsa.org/"},
  {title: "Tampa Bay Sierra Club Hike", day: "Monthly", time: "Various", cat: "env", loc: "Various Tampa Bay trails", url: "https://www.sierraclub.org/florida/tampa-bay"},
  {title: "Meacham Farm Store Open", day: "Every Thursday & Friday", time: "2 – 6 PM", cat: "farm", loc: "1108 E Scott St, Tampa", url: "https://www.meachamfarm.com/"},
  {title: "15th Street Farm Dinner", day: "Seasonal", time: "TBA", cat: "farm", loc: "Tampa", url: "https://www.15thstfarm.com/"},
  {title: "Suncoast Compost Drop-off", day: "Weekly", time: "Various sites", cat: "compost", loc: "Multiple Tampa Bay locations", url: "https://www.suncoastcompost.com/"},
  {title: "Tampa Bay Watch Volunteer Day", day: "Monthly", time: "8 AM – 12 PM", cat: "env", loc: "Tampa Bay shoreline (varies)", url: "https://www.tampabaywatch.org/"}
];

// Map icon function
function makeIcon(cat) {
  const c = catColors[cat] || "#888";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" viewBox="0 0 26 34"><path d="M13 0C5.82 0 0 5.82 0 13c0 8.67 13 21 13 21S26 21.67 26 13C26 5.82 20.18 0 13 0z" fill="${c}"/><circle cx="13" cy="13" r="5.5" fill="white" opacity="0.9"/></svg>`;
  return L.divIcon({html: svg, className: "", iconSize: [26, 34], iconAnchor: [13, 34], popupAnchor: [0, -34]});
}

// Map state
let mainMap, mainMarkers = [], currentFilter = "all", currentSearch = "", mapInitialized = false;

// Lightweight decorative hero graphic — plain SVG dots, no tile downloads.
// Positions are a rough normalized projection of each resource's lat/lng onto the 400x400 viewBox.
function renderHeroDots() {
  const svg = document.getElementById("hero-dots");
  if (!svg) return;
  const lats = resources.map(r => r.lat), lngs = resources.map(r => r.lng);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs), maxLng = Math.max(...lngs);
  svg.innerHTML = resources.map(r => {
    const x = ((r.lng - minLng) / (maxLng - minLng)) * 340 + 30;
    const y = (1 - (r.lat - minLat) / (maxLat - minLat)) * 340 + 30;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" fill="${catColors[r.cat] || '#888'}" opacity="0.85"/>`;
  }).join("");
}

// Initialize the real interactive map (tile fetches happen here, deferred until needed)
function initMainMap() {
  if (mapInitialized) return;
  mapInitialized = true;
  mainMap = L.map("main-map", {zoomControl: true}).setView([27.9, -82.55], 11);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "© OpenStreetMap contributors", maxZoom: 19}).addTo(mainMap);
  renderMainMarkers();
}

// Only fetch map tiles once the map section actually scrolls into view —
// visitors who never reach the map never trigger the tile downloads.
function initLazyMapLoading() {
  const target = document.getElementById("main-map");
  if (!target) return;
  if (!("IntersectionObserver" in window)) { initMainMap(); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initMainMap();
        observer.disconnect();
      }
    });
  }, {rootMargin: "200px"});
  observer.observe(target);
}

// Render main map markers
function renderMainMarkers() {
  if (!mapInitialized) { initMainMap(); return; } // renderMainMarkers() runs again inside initMainMap()
  mainMarkers.forEach(m => mainMap.removeLayer(m));
  mainMarkers = [];
  let filtered = resources;
  if (currentFilter !== "all") filtered = filtered.filter(r => r.cat === currentFilter);
  if (currentSearch) filtered = filtered.filter(r => r.name.toLowerCase().includes(currentSearch) || r.desc.toLowerCase().includes(currentSearch));
  document.getElementById("map-count").textContent = `Showing ${filtered.length} resource${filtered.length !== 1 ? "s" : ""}`;
  filtered.forEach(r => {
    const m = L.marker([r.lat, r.lng], {icon: makeIcon(r.cat)})
      .bindPopup(`<div class="popup-cat" style="color:${catColors[r.cat]}">${catLabels[r.cat] || r.cat}</div><div class="popup-name">${r.name}</div><div class="popup-desc">${r.desc}</div>${r.url ? `<a class="popup-link" href="${r.url}" target="_blank">Visit website →</a>` : ""}`)
      .addTo(mainMap);
    mainMarkers.push(m);
  });
  renderCards(filtered);
}

// Handle filter button click
function handleFilter(btn, cat) {
  document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("on"));
  btn.classList.add("on");
  currentFilter = cat;
  renderMainMarkers();
}

// Filter map from category cards
function filterMap(cat) {
  currentFilter = cat;
  const btn = document.querySelector(`.filter-pill[data-cat="${cat}"]`);
  if (btn) {
    document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("on"));
    btn.classList.add("on");
  }
  renderMainMarkers();
  setTimeout(() => document.getElementById("map-section").scrollIntoView({behavior: "smooth"}), 50);
}

// Handle search
function handleSearch(val) {
  currentSearch = val.toLowerCase();
  renderMainMarkers();
}

// Render resource cards
function renderCards(list) {
  const grid = document.getElementById("resource-grid");
  grid.innerHTML = list.map(r => `
    <a class="resource-card" href="${r.url || '#'}" target="${r.url ? '_blank' : '_self'}">
      <div class="resource-tag" style="background:${catTagBg[r.cat] || '#eee'};color:${catColors[r.cat] || '#555'}">${catLabels[r.cat] || r.cat}</div>
      <div class="resource-name">${r.name}</div>
      <div class="resource-desc">${r.desc}</div>
      <div class="resource-meta">
        ${r.url ? `<span>↗ Website</span>` : `<span>No website listed</span>`}
      </div>
    </a>
  `).join("");
}

// Render events
function renderEvents(filter) {
  const list = filter === "all" ? events : events.filter(e => e.cat === filter);
  const grid = document.getElementById("events-grid");
  grid.innerHTML = list.map(e => {
    const col = catColors[e.cat] || "#888";
    const bg = catTagBg[e.cat] || "#eee";
    const label = catLabels[e.cat] || e.cat;
    return `<a href="${e.url || '#'}" target="${e.url ? '_blank' : '_self'}" class="event-card">
      <div class="event-tag" style="background:${bg};color:${col};">${label}</div>
      <div class="event-title">${e.title}</div>
      <div class="event-meta">
        <div class="event-day">${e.day}</div>
        <div class="event-time">${e.time}</div>
        <div class="event-loc">${e.loc}</div>
      </div>
    </a>`;
  }).join("");
}

// Filter events
function filterEvents(cat, btn) {
  document.querySelectorAll(".event-filter-btn").forEach(b => b.classList.remove("on"));
  btn.classList.add("on");
  renderEvents(cat);
}

// Initialize event filters
function initEventFilters() {
  const filterContainer = document.getElementById("event-filters");
  const cats = ["all", "market", "farm", "mutual", "activist", "env", "lgbtq", "compost"];
  const catNames = {all: "All", market: "Markets", farm: "Farms", mutual: "Mutual Aid", activist: "Activist", env: "Environment", lgbtq: "LGBTQ+", compost: "Composting"};
  
  filterContainer.innerHTML = cats.map(cat => 
    `<button class="event-filter-btn ${cat === 'all' ? 'on' : ''}" onclick="filterEvents('${cat}', this)">${catNames[cat]}</button>`
  ).join("");
}

// Initialize category card filter handlers
function initCategoryCardFilters() {
  document.querySelectorAll('.cat-card[data-filter]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = card.getAttribute('data-filter');
      filterMap(cat);
    });
  });
}

// Initialize footer filter handlers
function initFooterFilters() {
  document.querySelectorAll('.footer-col a[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-filter');
      filterMap(cat);
    });
  });
}

// Initialize search input
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }
  
  // Initialize filter pill handlers
  document.querySelectorAll('.filter-pill[data-cat]').forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.getAttribute('data-cat');
      handleFilter(pill, cat);
    });
  });
  
  // Handle resource submission form — posts to Formspree via fetch so the
  // visitor never leaves the page. Requires a real Formspree form ID (see
  // the action="" attribute on the <form> in index.html) before this works.
  const resourceForm = document.getElementById('resource-form');
  const formStatus = document.getElementById('form-status');
  if (resourceForm) {
    resourceForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = resourceForm.querySelector('.form-submit');
      const originalLabel = submitBtn.textContent;

      if (resourceForm.action.includes('YOUR_FORM_ID')) {
        formStatus.textContent = 'This form isn\'t connected yet — see README.md for the 2-minute Formspree setup.';
        formStatus.classList.add('form-status-error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      formStatus.classList.remove('form-status-error');
      formStatus.textContent = '';

      try {
        const response = await fetch(resourceForm.action, {
          method: 'POST',
          body: new FormData(resourceForm),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          resourceForm.reset();
          formStatus.textContent = 'Thank you! Your submission will be reviewed by a volunteer moderator within a few days.';
        } else {
          formStatus.textContent = 'Something went wrong sending that — please try again, or email hello@tampacommons.org directly.';
          formStatus.classList.add('form-status-error');
        }
      } catch (err) {
        formStatus.textContent = 'Network error — please try again, or email hello@tampacommons.org directly.';
        formStatus.classList.add('form-status-error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }
});

// Estimate total page weight from actual transferred bytes (LTM-style transparency note)
function reportPageWeight() {
  const el = document.getElementById("page-weight");
  if (!el || !window.performance || !performance.getEntriesByType) return;
  const resources = performance.getEntriesByType("resource");
  const nav = performance.getEntriesByType("navigation")[0];
  let bytes = nav ? (nav.transferSize || 0) : 0;
  resources.forEach(r => { bytes += r.transferSize || 0; });
  if (bytes === 0) { el.textContent = "Page weight unavailable in this browser"; return; }
  const kb = (bytes / 1024).toFixed(0);
  el.textContent = `This page has loaded ~${kb} KB so far — map tiles load only once you scroll to the map`;
}

// On page load
window.addEventListener("load", () => {
  renderHeroDots();
  initLazyMapLoading();
  initEventFilters();
  initCategoryCardFilters();
  initFooterFilters();
  renderEvents("all");
  setTimeout(reportPageWeight, 500);
});
