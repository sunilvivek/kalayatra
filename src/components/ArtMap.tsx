import { useEffect, useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { CATEGORY_META, primaryCategory, type ArtLocation } from "../types/art";

interface Props {
  locations: ArtLocation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  theme: "light" | "dark";
}

/* Map primary category to the appropriate Lucide icon component name */
function getIconName(category: string): string {
  switch (category) {
    case "Ancient Indian Art":
      return "Amphora";
    case "Buddhist Art":
      return "Flower2";
    case "Hindu Temple Art":
    case "Jain Art":
    case "Medieval Indian Art":
    case "South Indian Art":
    case "Tribal Art":
      return "Building2";
    case "Mughal Art":
    case "Rajput Art":
    case "Pahari Art":
      return "Crown";
    case "Bengal School":
    case "Modern Indian Art":
    case "Contemporary Indian Art":
      return "Palette";
    case "Folk Art":
      return "Brush";
    default:
      return "Landmark";
  }
}

/* --- Custom category-coded markers -------------------------------------- */

const iconCache = new Map<string, L.DivIcon>();

function markerIcon(location: ArtLocation, selected: boolean): L.DivIcon {
  const key = `${location.id}:${selected ? 1 : 0}`;
  const cached = iconCache.get(key);
  if (cached) return cached;

  const primary = primaryCategory(location);
  const iconName = getIconName(primary);
  const meta = CATEGORY_META[primary];
  const colour = meta?.color || "#8c6a2f";

  // Generate SVG markup for the Lucide icon
  const iconSvg = renderIconSvg(iconName, colour);

  const html = `<div class="art-marker ${selected ? "art-marker--selected" : ""}" \
role="img" aria-label="${location.name} — ${primary}">${iconSvg}</div>`;

  const icon = L.divIcon({
    className: "",
    html,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
  });
  iconCache.set(key, icon);
  return icon;
}

/* Simple SVG rendering for Lucide icons ---------------------------------- */

function renderIconSvg(name: string, color: string): string {
  // Minimal inline SVGs for each Lucide icon we need
  const svgs: Record<string, string> = {
    Amphora: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2z"/><path d="M6 10h12"/><path d="M8 14v6"/><path d="M16 14v6"/></svg>`,
    Brush: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6"/><path d="M9 9h6"/></svg>`,
    Building2: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-8h6v8"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M8 18h8"/></svg>`,
    Crown: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    Flower2: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c3.87 0 7.09 1.36 9.5 3.36L18 5l-1.39 5.71c-.7.3-1.42.63-2.19.75L11 13l9 5 2-7-9-5-2 7zM4 4c5.52 0 10 4.48 10 10s-4.48 10-10 10S4 15.52 4 10 4 4z"/></svg>`,
    Landmark: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5M2 7l10 5 10-5M2 12l10 5 10-5M2 17l10 5 10-5"/></svg>`,
    Palette: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="18" cy="12" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M13.5 9a2.5 2.5 0 0 0 0 5H12a5 5 0 0 0 0 10h1.5a2.5 2.5 0 0 0 0-5"/></svg>`,
  };

  return svgs[name] || svgs.Landmark;
}

/* --- Imperative map behaviours ------------------------------------------ */

function MapController({ selected }: { selected: ArtLocation | null }) {
  const map = useMap();

  useEffect(() => {
    if (!selected) return;
    const target: L.LatLngExpression = [selected.latitude, selected.longitude];
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      map.setView(target, Math.max(map.getZoom(), 6), { animate: false });
    } else {
      map.flyTo(target, Math.max(map.getZoom(), 6), { duration: 1.05 });
    }
  }, [selected, map]);

  return null;
}

/* --- Component ----------------------------------------------------------- */

const INDIA_CENTER: L.LatLngTuple = [22.8, 80];
const INDIA_BOUNDS: L.LatLngBoundsLiteral = [
  [5.5, 66],
  [37.5, 98.5],
];

export default function ArtMap({ locations, selectedId, onSelect, theme }: Props) {
  const selected = useMemo(
    () => locations.find((l) => l.id === selectedId) ?? null,
    [locations, selectedId]
  );

  const tileUrl =
    theme === "dark"
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

  const attribution =
    theme === "dark"
      ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <div className="map-shell h-[420px] overflow-hidden rounded-2xl border border-border shadow-sm sm:h-[520px] lg:h-full lg:min-h-[640px]">
      <MapContainer
        center={INDIA_CENTER}
        zoom={5}
        minZoom={4}
        maxZoom={12}
        zoomControl={true}
        scrollWheelZoom={false}
        maxBounds={INDIA_BOUNDS}
        maxBoundsViscosity={0.75}
        attributionControl={true}
        className="h-full w-full"
      >
        <TileLayer key={theme} url={tileUrl} attribution={attribution} />
        <MapController selected={selected} />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.latitude, loc.longitude]}
            icon={markerIcon(loc, loc.id === selectedId)}
            zIndexOffset={loc.id === selectedId ? 1000 : 0}
            eventHandlers={{ click: () => onSelect(loc.id) }}
          >
            <Popup>
              <div className="space-y-1">
                <p className="font-serif text-[15px] font-semibold text-heading">{loc.name}</p>
                <p className="text-xs text-muted">
                  {loc.state} · {loc.periodGroup}
                </p>
                <button
                  type="button"
                  onClick={() => onSelect(loc.id)}
                  className="mt-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-accent hover:bg-accent-strong"
                >
                  View full details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Screen-reader accessible alternative to the interactive canvas */}
      <ul id="sr-location-index" className="sr-only">
        {locations.map((loc) => (
          <li key={loc.id}>
            {loc.name}, {loc.state}. Latitude {loc.latitude.toFixed(4)}, longitude{" "}
            {loc.longitude.toFixed(4)}.
          </li>
        ))}
      </ul>
    </div>
  );
}