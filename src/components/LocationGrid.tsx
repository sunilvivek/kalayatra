import { SearchX } from "lucide-react";
import LocationCard from "./LocationCard";
import type { ArtLocation } from "../types/art";

interface Props {
  locations: ArtLocation[];
  totalCount: number;
  selectedId: string | null;
  onExplore: (id: string) => void;
  onReset: () => void;
}

export default function LocationGrid({
  locations,
  totalCount,
  selectedId,
  onExplore,
  onReset,
}: Props) {
  if (locations.length === 0) {
    return (
      <div className="heritage-pattern flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface/60 px-6 py-16 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-soft">
          <SearchX className="h-7 w-7 text-accent" aria-hidden="true" />
        </span>
        <p className="font-serif text-lg font-semibold text-heading">No art locations found</p>
        <p className="max-w-sm text-sm text-muted">
          Nothing matches your current search and filters. Try another term, or reset the filters to
          see all {totalCount} locations.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="mt-1 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
        >
          Reset filters
        </button>
      </div>
    );
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {locations.map((loc) => (
        <li key={loc.id} className="h-full">
          <LocationCard location={loc} selected={loc.id === selectedId} onExplore={onExplore} />
        </li>
      ))}
    </ul>
  );
}
