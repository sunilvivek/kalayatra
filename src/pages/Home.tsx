import { useCallback, useMemo, useState } from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ArtMap from "../components/ArtMap";
import LocationDetails from "../components/LocationDetails";
import LocationGrid from "../components/LocationGrid";
import Timeline from "../components/Timeline";
import ArtTraditions from "../components/ArtTraditions";
import { getValidLocations } from "../data/artLocations";
import type { ArtCategory, Medium, PeriodGroup } from "../types/art";

interface Props {
  theme: "light" | "dark";
}

function scrollToMapOnMobile() {
  if (typeof window === "undefined") return;
  if (!window.matchMedia("(min-width: 1024px)").matches) {
    document.getElementById("map")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Home({ theme }: Props) {
  const allLocations = useMemo(() => getValidLocations(), []);

  const [query, setQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState<ArtCategory[]>([]);
  const [activeMediums, setActiveMediums] = useState<Medium[]>([]);
  const [activePeriod, setActivePeriod] = useState<PeriodGroup | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  /* ------------------------------ filtering ----------------------------- */

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allLocations.filter((loc) => {
      if (activeCategories.length > 0 && !activeCategories.some((c) => loc.categories.includes(c)))
        return false;
      if (activeMediums.length > 0 && !activeMediums.some((m) => loc.mediums.includes(m)))
        return false;
      if (activePeriod && loc.periodGroup !== activePeriod) return false;
      if (q) {
        const haystack =
          [
            loc.name,
            loc.state,
            loc.region,
            loc.period,
            loc.periodGroup,
            ...loc.categories,
            ...loc.mediums,
            ...loc.artForms,
            ...loc.artists,
            ...loc.artworks.map((a) => a.name),
          ]
            .join(" ")
            .toLowerCase() ?? "";
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [allLocations, query, activeCategories, activeMediums, activePeriod]);

  const hasActiveFilters =
    query.trim().length > 0 ||
    activeCategories.length > 0 ||
    activeMediums.length > 0 ||
    activePeriod !== null;

  const resetFilters = useCallback(() => {
    setQuery("");
    setActiveCategories([]);
    setActiveMediums([]);
    setActivePeriod(null);
  }, []);

  /* ------------------------------ selection ----------------------------- */

  const selectedInListIndex = useMemo(
    () => filtered.findIndex((l) => l.id === selectedId),
    [filtered, selectedId]
  );

  const selectLocation = useCallback((id: string) => {
    setSelectedId(id);
    scrollToMapOnMobile();
  }, []);

  const stepSelection = useCallback(
    (delta: 1 | -1) => {
      if (filtered.length === 0 || selectedInListIndex < 0) return;
      const next =
        (selectedInListIndex + delta + filtered.length) % filtered.length;
      const target = filtered[next];
      if (target) setSelectedId(target.id);
    },
    [filtered, selectedInListIndex]
  );

  const handleToggleCategory = useCallback((category: ArtCategory) => {
    setActiveCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  }, []);

  const handleToggleMedium = useCallback((medium: Medium) => {
    setActiveMediums((prev) =>
      prev.includes(medium) ? prev.filter((m) => m !== medium) : [...prev, medium]
    );
  }, []);

  const handleSelectPeriod = useCallback((period: PeriodGroup | null) => {
    setActivePeriod(period);
    if (period) scrollToMapOnMobile();
  }, []);

  const handleExploreTradition = useCallback((category: ArtCategory) => {
    resetFilters();
    setActiveCategories([category]);
    document.getElementById("map")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [resetFilters]);

  const selectedLocation = useMemo(
    () => allLocations.find((l) => l.id === selectedId) ?? null,
    [allLocations, selectedId]
  );

  /* ------------------------------- render ------------------------------- */

  return (
    <>
      <Hero />
      <Stats filteredCount={filtered.length} />

      {/* Explore: search + filters + map + details */}
      <section id="explore" aria-labelledby="explore-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-accent uppercase">
              Interactive Atlas
            </p>
            <h2
              id="explore-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
            >
              Explore the Map
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
              Every marker represents a site where Indian art history was made. Select a marker, card
              or tradition to open its full story.
            </p>
          </header>

          <div className="mt-7 space-y-4">
            <SearchBar value={query} onChange={setQuery} resultCount={filtered.length} />
            <FilterBar
              activeCategories={activeCategories}
              activeMediums={activeMediums}
              hasActiveFilters={hasActiveFilters}
              onToggleCategory={handleToggleCategory}
              onToggleMedium={handleToggleMedium}
              onClearCategories={() => setActiveCategories([])}
              onReset={resetFilters}
            />
          </div>

          <p aria-live="polite" className="sr-only">
            {filtered.length} locations currently shown.
          </p>

          <div
            id="map"
            className="mt-6 grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <ArtMap
              locations={filtered}
              selectedId={selectedId}
              onSelect={selectLocation}
              theme={theme}
            />
            <LocationDetails
              location={selectedLocation}
              position={selectedInListIndex}
              total={filtered.length}
              onPrev={() => stepSelection(-1)}
              onNext={() => stepSelection(1)}
              onClose={() => setSelectedId(null)}
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section
        id="locations"
        aria-labelledby="locations-heading"
        className="border-t border-border bg-bg-deep"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                Location Explorer
              </p>
              <h2
                id="locations-heading"
                className="mt-2 font-serif text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
              >
                Browse All Locations
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Select any card to fly to its marker and open the detailed story panel.
              </p>
            </div>
            <p
              aria-live="polite"
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted"
            >
              Showing {filtered.length} of {allLocations.length} art locations
            </p>
          </header>

          <div className="mt-8">
            <LocationGrid
              locations={filtered}
              totalCount={allLocations.length}
              selectedId={selectedId}
              onExplore={selectLocation}
              onReset={resetFilters}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline
        activePeriod={activePeriod}
        onSelectPeriod={handleSelectPeriod}
        onLocateLocation={(id) => {
          resetFilters();
          selectLocation(id);
        }}
      />

      {/* Traditions */}
      <ArtTraditions
        onExploreTradition={handleExploreTradition}
        onLocateLocation={(id) => {
          resetFilters();
          selectLocation(id);
        }}
      />
    </>
  );
}
