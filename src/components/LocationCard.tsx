import { ArrowUpRight, MapPin } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { CATEGORY_META, primaryCategory, type ArtLocation } from "../types/art";

interface Props {
  location: ArtLocation;
  selected: boolean;
  onExplore: (id: string) => void;
}

export default function LocationCard({ location, selected, onExplore }: Props) {
  const meta = CATEGORY_META[primaryCategory(location)];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        selected ? "border-accent ring-2 ring-accent/30" : "border-border"
      }`}
    >
      <button
        type="button"
        onClick={() => onExplore(location.id)}
        aria-label={`Explore ${location.name} on the map`}
        className="text-left"
      >
        <ImageWithFallback
          src={location.image}
          alt={location.imageAlt}
          className="aspect-[16/10] w-full"
        />
      </button>

      <div className="flex grow flex-col p-5">
        <div className="flex items-center gap-2 text-[11px] font-medium">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-semibold text-white"
            style={{ backgroundColor: meta.color }}
          >
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
