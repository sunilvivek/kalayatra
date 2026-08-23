# KalaYatra · कलायात्रा

*“A journey through art”* — an interactive digital museum of India's artistic heritage. A real geographic map plotting **30 significant art locations** across **14 traditions** and more than **2,000 years** of creative practice, from prehistoric rock shelters to contemporary biennales.

![Tech](https://img.shields.io/badge/React-19-61dafb) ![Tech](https://img.shields.io/badge/TypeScript-strict-3178c6) ![Tech](https://img.shields.io/badge/Vite-8-646cff) ![Tech](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8) ![Tech](https://img.shields.io/badge/Leaflet-1.9-199900)

---

## Description

KalaYatra is a single-page web application that visualises the **geographic spread and influence of different art styles across India**. Each location on the real OpenStreetMap-based map opens a rich information panel containing photographs (Wikimedia Commons), historical context, documented artists and makers, major artworks and monuments, and a statement of the site's significance.

## Objective

To explore the geographic diversity of Indian art — allowing users to see *where* artistic traditions arose, *when* they flourished, and *how* styles travelled across regions and historical periods.

## Features

- **Real interactive map** (Leaflet + OpenStreetMap / CARTO tiles) focused on India with zoom controls, bounds clamping and popups
- **Category-coded markers** — each tradition has its own marker colour *and* a two-letter code so category is never communicated by colour alone; selected markers pulse
- **30 curated locations** spanning Maharashtra, Madhya Pradesh, Uttar Pradesh, Bihar, Odisha, West Bengal, Rajasthan, Gujarat, Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh, Himachal Pradesh, Delhi and Ladakh
- **Rich detail panels**: image with credit, description, historical context, artists & makers, major works & monuments, significance, external "read more" link
- **Full-text search** across names, states, regions, periods, traditions, art forms, artists and artworks — with live result counts and empty-state guidance
- **Two-dimensional filtering**: 14 art traditions + 4 media (Painting / Sculpture / Architecture / Crafts), multi-select chips with active states and one-click reset
- **Interactive timeline** (Ancient → Medieval → Mughal & Rajput → Colonial → Modern → Contemporary) that highlights matching locations, explains each era and lists representative art forms
- **Art traditions section** connecting eight major movements directly to their map locations
- **Location explorer grid** fully synchronised with the map — selecting a card flies the map to the marker
- **Dark mode** with persisted preference (localStorage) and theme-aware map tiles
- **Responsive layout**: side-by-side map/details on desktop, stacked flow on mobile — no horizontal overflow
- **Accessibility**: semantic HTML, keyboard-operable controls with visible focus rings, ARIA labels/live regions, descriptive alt text, screen-reader location index, `prefers-reduced-motion` respected
- **Robustness**: designed image fallbacks, defensive data validation, React error boundary, graceful empty states

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Map | Leaflet + react-leaflet v5 |
| Icons | Lucide React |

*React Router was deliberately omitted: the experience is a single continuous page with anchor navigation, so an additional routing dependency would be unnecessary.*

## Project Structure

```
src/
├── components/
│   ├── AboutSection.tsx      # Educational purpose + sources
│   ├── ArtMap.tsx            # Leaflet map, custom markers, fly-to controller
│   ├── ArtTraditions.tsx     # Major movements linked to locations
│   ├── ErrorBoundary.tsx     # Crash isolation
│   ├── FilterBar.tsx         # Tradition + medium filter chips
│   ├── Footer.tsx            # Brand, links, sources
│   ├── Hero.tsx              # Landing section with image collage
│   ├── ImageWithFallback.tsx # Designed image fallback
│   ├── LocationCard.tsx      # Explorer card
│   ├── LocationDetails.tsx   # Selected-location story panel
│   ├── LocationGrid.tsx      # Card grid + empty state
│   ├── Navbar.tsx            # Sticky nav + mobile menu
│   ├── SearchBar.tsx         # Full-text search + result counts
│   ├── Stats.tsx             # Dataset statistics strip
│   ├── ThemeToggle.tsx       # Dark mode switch
│   └── Timeline.tsx          # Historical period explorer
├── data/
│   ├── artLocations.ts       # The 30-location dataset
│   ├── periods.ts            # Timeline era content
│   └── traditions.ts         # Art tradition cards
├── hooks/
│   ├── useReveal.ts          # Scroll-reveal (IntersectionObserver)
│   └── useTheme.ts           # Persisted dark mode
├── pages/
│   └── Home.tsx              # State management + composition
├── types/
│   └── art.ts                # Interfaces, taxonomy, marker palette
├── App.tsx
├── index.css                 # Design system (Tailwind v4 tokens)
└── main.tsx
```

## Data Sources

Historical content follows mainstream scholarship as summarised by:

- [UNESCO World Heritage Centre](https://whc.unesco.org/en/statesparties/in) — site descriptions and dates
- [Archaeological Survey of India](https://asi.nic.in/) — monument protection and context
- [Ministry of Culture, Government of India](https://www.indiaculture.gov.in/)
- [National Museum, New Delhi](https://nationalmuseumindia.gov.in/)
- Reputable museum collections (e.g. British Museum Amaravati holdings)

**Imagery:** all site photographs are openly licensed files served from [Wikimedia Commons](https://commons.wikimedia.org/); every image carries a credit line and descriptive alt text, and a designed fallback replaces any image that fails to load.

Where individual artists are unknown to history the dataset says so explicitly rather than inventing names, and contested attributions use cautious wording ("attributed", "c.", "tradition holds").

## Installation

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build    # type-checks then produces dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Educational Purpose

Indian art is often taught as a sequence of styles detached from place. This project re-attaches the styles to geography:

- **Filter by tradition** to see where Buddhist, Jain, temple, folk or modern practices cluster;
- **Select a timeline era** to watch patronage migrate — from cave monasteries in the Deccan, to imperial ateliers in Agra and Delhi, to colonial art schools in Kolkata, Madras and Bombay, to contemporary districts in Baroda, Bhopal and Kochi;
- **Compare regions** through consistent metadata (period, medium, forms, makers) for every site.

Together these interactions demonstrate how artistic influence spread, overlapped and evolved across the subcontinent over two millennia — geography as a lens on art history.
