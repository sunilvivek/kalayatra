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

/* --- Custom category-coded markers -------------------------------------- */

const iconCache = new Map<string, L.DivIcon>();

function markerIcon(location: ArtLocation, selected: boolean): L.DivIcon {
  const key = `${location.id}:${selected ? 1 : 0}`;
  const cached = iconCache.get(key);
  if (cached) return cached;

  const meta = CATEGORY_META[primaryCategory(location)];
  const icon = L.divIcon({
    className: "",
    html: `<div class="art-marker ${selected ? "art-marker--selected" : ""}" style="--dot:${meta.color}" role="img" aria-label="Map marker for ${location.name}"><div class="art-marker__dot"><span class="art-marker__code">${meta.code}</span></div></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -16],
  });
  iconCache.set(key, icon);
  return icon;
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
