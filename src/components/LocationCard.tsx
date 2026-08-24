import { ArrowUpRight, MapPin, Landmark, Crown, Palette, Brush, Flower2, Amphora, Building2 } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { CATEGORY_META, primaryCategory, type ArtLocation } from "../types/art";

interface Props {
  location: ArtLocation;
  selected: boolean;
  onExplore: (id: string) => void;
}

/* Map art categories to Lucide icon components */
function getCategoryIcon(cat: string) {
  switch (cat) {
    case "Buddhist Art":
      return Flower2;
    case "Hindu Temple Art":
    case "Jain Art":
    case "Medieval Indian Art":
    case "South Indian Art":
    case "Tribal Art":
      return Building2;
    case "Mughal Art":
    case "Rajput Art":
    case "Pahari Art":
      return Crown;
    case "Bengal School":
    case "Modern Indian Art":
    case "Contemporary Indian Art":
      return Palette;
    case "Folk Art":
      return Brush;
    case "Ancient Indian Art":
      return Amphora;
    default:
      return Landmark;
  }
}

export default function LocationCard({ location, selected, onExplore }: Props) {
  const meta = CATEGORY_META[primaryCategory(location)];
  const CategoryIcon = getCategoryIcon(meta.label);

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        selected ? "border-accent ring-2 ring-accent/30" : "border-border"
      }`}
    >
      <span aria-hidden="true" className="h-1 w-full shrink-0" style={{ backgroundColor: meta.color }} />
      <button
        type="button"
        onClick={() => onExplore(location.id)}
        aria-label={`Explore ${location.name} on the map`}
        className="text-left"
      >
        <ImageWithFallback
          src={location.image}
          alt={location.imageAlt}
          className="aspect-[16/10] w-full [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-[1.04]"
        />
      </button>

      <div className="flex grow flex-col p-5">
        <div className="flex items-center gap-2 text-[11px] font-medium">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-semibold text-white"
            style={{ backgroundColor: meta.color }}
          >
            <CategoryIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
            {meta.label}
          </span>
          <span className="text-muted">{location.periodGroup}</span>
        </div>

        <h3 className="mt-3 font-serif text-lg leading-snug font-semibold text-heading">
          <button
            type="button"
            onClick={() => onExplore(location.id)}
            className="text-left transition-colors hover:text-accent"
          >
            {location.name}
          </button>
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          {location.state}
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-body">
          {location.description}
        </p>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => onExplore(location.id)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong focus-visible:outline-2"
          >
            Explore Location
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </article>
  );
}