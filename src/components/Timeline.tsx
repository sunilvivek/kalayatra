import { History, MapPin } from "lucide-react";
import { PERIODS } from "../data/periods";
import { ART_LOCATIONS } from "../data/artLocations";
import type { PeriodGroup } from "../types/art";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

interface Props {
  activePeriod: PeriodGroup | null;
  onSelectPeriod: (period: PeriodGroup | null) => void;
  onLocateLocation: (id: string) => void;
}

export default function Timeline({ activePeriod, onSelectPeriod, onLocateLocation }: Props) {
  const ref = useReveal<HTMLElement>();
  const activeInfo = PERIODS.find((p) => p.group === activePeriod) ?? null;
  const matching =
    activeInfo !== null ? ART_LOCATIONS.filter((l) => l.periodGroup === activeInfo.group) : [];

  return (
    <section id="timeline" ref={ref} aria-labelledby="timeline-heading" className="reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Historical Development"
          icon={History}
          headingId="timeline-heading"
          title="A Journey Through Time"
          description="Indian art evolved across distinct historical eras. Select a period to highlight the map locations that belong to it and see how artistic styles spread across regions over time."
        />

        {/* Stepper */}
        <div role="group" aria-label="Filter by historical period" className="relative mt-10">
          <div aria-hidden="true" className="absolute top-[21.5px] right-6 left-6 h-px bg-border" />
          <ol className="chip-scroll relative flex gap-4 overflow-x-auto pb-3">
            {PERIODS.map((period, i) => {
              const active = period.group === activePeriod;
              const count = ART_LOCATIONS.filter((l) => l.periodGroup === period.group).length;
              return (
                <li key={period.group} className="min-w-[150px] flex-1 shrink-0">
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => onSelectPeriod(active ? null : period.group)}
                    title={period.range}
                    className="group flex w-full flex-col items-center gap-2 rounded-xl px-2 py-2 text-center transition-colors focus-visible:outline-2"
                  >
                    <span
                      aria-hidden="true"
                      className={`grid h-11 w-11 place-items-center rounded-full border font-serif text-sm font-semibold transition-all ${
                        active
                          ? "border-accent bg-accent text-on-accent shadow-md ring-4 ring-accent/15"
                          : "border-border bg-surface text-body group-hover:border-accent group-hover:text-accent"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`font-serif text-sm font-semibold leading-tight ${
                        active ? "text-accent-strong" : "text-heading"
                      }`}
                    >
                      {period.label}
                    </span>
                    <span className="text-[11px] whitespace-nowrap text-muted">{period.range}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
                        active ? "bg-accent text-on-accent" : "bg-accent-soft text-accent-strong"
                      }`}
                    >
                      {count} {count === 1 ? "site" : "sites"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Detail panel */}
        <div
          key={activeInfo?.group ?? "none"}
          className="animate-fade-in-up mt-4 rounded-2xl border border-border bg-surface p-5 sm:p-7"
        >
          {activeInfo ? (
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold text-heading sm:text-2xl">
                    {activeInfo.label}
                  </h3>
                  <span className="text-xs font-semibold tracking-wide text-gold uppercase">
                    {activeInfo.range}
                  </span>
                </div>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-body">
                  {activeInfo.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Representative art forms of the ${activeInfo.label} era`}>
                  {activeInfo.artForms.map((form) => (
                    <li
                      key={form}
                      className="rounded-full border border-border bg-bg-deep px-3 py-1 text-xs font-medium text-body"
                    >
                      {form}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-bg-deep p-4">
                <h4 className="text-xs font-semibold tracking-wider text-muted uppercase">
                  Locations of this era ({matching.length})
                </h4>
                <ul className="mt-3 flex max-h-44 flex-col gap-1 overflow-y-auto pr-1">
                  {matching.map((loc) => (
                    <li key={loc.id}>
                      <button
                        type="button"
                        onClick={() => onLocateLocation(loc.id)}
                        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-left text-sm text-body transition-colors hover:bg-accent-soft hover:text-accent-strong"
                      >
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                        {loc.name}
                        <span className="ml-auto pl-2 text-[11px] whitespace-nowrap text-muted">
                          {loc.state}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="py-2 text-center text-sm text-muted">
              Select a period above to explore how Indian art developed — from prehistoric rock
              shelters to today's biennales.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
