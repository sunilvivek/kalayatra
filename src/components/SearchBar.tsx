import { Search, X } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
}

export default function SearchBar({ value, onChange, resultCount }: Props) {
  return (
    <div className="w-full">
      <div className="relative">
        <Search
          className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
        <input
          type="search"
          id="location-search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search Ajanta, Madhubani, temple, Mughal, Rajasthan, Tanjore…"
          aria-label="Search art locations by name, state, art form, artist or artwork"
          className="h-12 w-full rounded-2xl border border-border bg-surface pr-11 pl-11 text-sm text-heading shadow-sm transition-colors placeholder:text-muted focus:border-accent focus:outline-none"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-heading"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>
      {value.trim() ? (
        <p aria-live="polite" className="mt-2 text-xs text-muted">
          {resultCount > 0
            ? `Search results: ${resultCount} location${resultCount === 1 ? "" : "s"}`
            : "No art locations found. Try another search term."}
        </p>
      ) : (
        <p aria-live="polite" className="mt-2 text-xs text-muted">
          Searching {resultCount} location{resultCount === 1 ? "" : "s"}
        </p>
      )}
    </div>
  );
}
