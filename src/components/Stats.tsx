import { useMemo } from "react";
import { ART_LOCATIONS } from "../data/artLocations";
import { ART_CATEGORIES, PERIOD_GROUPS } from "../types/art";
import { useReveal } from "../hooks/useReveal";

interface Props {
  filteredCount: number;
}

export default function Stats({ filteredCount }: Props) {
  const ref = useReveal<HTMLElement>();

  const statesCount = useMemo(
    () => new Set(ART_LOCATIONS.map((l) => l.state)).size,
    []
  );

  const stats = [
    { value: String(ART_LOCATIONS.length), label: "Featured Locations", note: "in this dataset", color: "var(--accent)" },
    { value: String(ART_CATEGORIES.length), label: "Art Traditions", note: "covered by filters", color: "var(--rani)" },
    { value: "2,000+", label: "Years of Heritage", note: "prehistoric to contemporary", color: "var(--saffron)" },
    { value: `${statesCount}+`, label: "States & Regions", note: "across India", color: "var(--teal)" },
  ];

  return (
    <section ref={ref} aria-label="Project statistics" className="reveal border-y border-border bg-bg-deep">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface px-5 py-5 text-center transition-colors hover:border-accent/50"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] transition-transform duration-300 group-hover:scale-x-110"
                style={{ background: `linear-gradient(90deg, ${s.color}, color-mix(in srgb, ${s.color} 35%, transparent))` }}
              />
              <dd className="font-serif text-3xl font-semibold sm:text-4xl" style={{ color: s.color }}>
                {s.value}
              </dd>
              <dt className="mt-1.5 text-sm font-semibold text-heading">{s.label}</dt>
              <p className="mt-0.5 text-xs text-muted">{s.note}</p>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-center text-xs text-muted">
          Figures describe this project's curated dataset of{" "}
          {PERIOD_GROUPS.length} historical periods — currently showing{" "}
          {filteredCount} location{filteredCount === 1 ? "" : "s"} under your active search and
          filters.
        </p>
      </div>
    </section>
  );
}
