import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Compass, Landmark, MapPin, X } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { CATEGORY_META, primaryCategory, type ArtLocation } from "../types/art";

interface Props {
  location: ArtLocation | null;
  position: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h4 className="text-xs font-semibold tracking-wider text-muted uppercase">{title}</h4>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-body">{children}</div>
    </section>
  );
}

export default function LocationDetails({
  location,
  position,
  total,
  onPrev,
  onNext,
  onClose,
}: Props) {
  if (!location) {
    return (
      <aside
        aria-label="Location details"
        className="heritage-pattern flex h-full min-h-[320px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface/60 p-8 text-center lg:min-h-[640px]"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-soft">
          <Compass className="h-7 w-7 text-accent" aria-hidden="true" />
        </span>
        <p className="font-serif text-lg font-semibold text-heading">No location selected</p>
        <p className="max-w-[260px] text-sm text-muted">
          Choose a marker on the map, a card below, or search to begin exploring India's art
          heritage.
        </p>
      </aside>
    );
  }

  const catMeta = CATEGORY_META[primaryCategory(location)];

  return (
    <aside
      aria-label={`Details for ${location.name}`}
      className="animate-fade-in-up flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm lg:min-h-[640px]"
    >
      <div
        aria-hidden="true"
        className="h-1 w-full shrink-0 bg-gradient-to-r from-accent via-gold to-accent"
      />
      <ImageWithFallback
        src={location.image}
        alt={location.imageAlt}
        loading="eager"
        className="h-52 w-full shrink-0 sm:h-60"
        credit="Wikimedia Commons"
      />

      <div className="flex grow flex-col overflow-y-auto p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                style={{ backgroundColor: catMeta.color }}
              >
                {catMeta.label}
              </span>
              {location.categories.slice(1, 3).map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
            <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-heading">
              {location.name}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {location.state} · {location.region}
            </p>
            <p className="mt-0.5 text-xs text-muted">Period: {location.period}</p>
            <p className="mt-1 font-mono text-[11px] text-muted">
              {location.latitude.toFixed(2)}° {location.latitude >= 0 ? "N" : "S"} ·{" "}
              {location.longitude.toFixed(2)}° {location.longitude >= 0 ? "E" : "W"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details panel"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Art forms */}
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Art forms at this location">
          {location.artForms.map((form) => (
            <li
              key={form}
              className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent-strong"
            >
              {form}
            </li>
          ))}
        </ul>

        <hr className="my-5 border-border" />

        <div className="space-y-5">
          <Section title="About">
            <p>{location.description}</p>
          </Section>

          <Section title="Historical Context">
            <p>{location.historicalContext}</p>
          </Section>

          <Section title="Artists & Makers">
            <ul className="list-disc space-y-1 pl-4">
              {location.artists.map((artist) => (
                <li key={artist}>{artist}</li>
              ))}
            </ul>
          </Section>

          <Section title="Major Works & Monuments">
            <ul className="space-y-1.5">
              {location.artworks.map((art) => (
                <li key={art.name} className="flex items-start gap-2">
                  <Landmark className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="font-medium text-heading">{art.name}</span>
                    {art.detail ? (
                      <span className="block text-xs text-muted">{art.detail}</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="rounded-xl border border-accent/30 bg-accent-soft p-4">
            <h4 className="text-xs font-semibold tracking-wider text-accent-strong uppercase">
              Significance
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-body">{location.significance}</p>
          </div>

          <p className="text-[11px] leading-relaxed text-muted">
            Image credit: {location.imageCredit}. Historical summaries follow UNESCO and
            Archaeological Survey of India descriptions; uncertain attributions are flagged with
            cautious wording.
          </p>
        </div>

        {/* Footer actions */}
        <div className="mt-auto pt-6">
          <a
            href={location.learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Read more about this site
          </a>

          <nav
            aria-label="Previous or next filtered location"
            className="mt-4 flex items-center justify-between rounded-xl border border-border bg-bg-deep px-2 py-1.5"
          >
            <button
              type="button"
              onClick={onPrev}
              disabled={total <= 1 || position < 0}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-body transition-colors hover:text-accent disabled:opacity-40"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Prev
            </button>
            <span aria-live="polite" className="text-xs text-muted">
              {position >= 0
                ? `${position + 1} of ${total} shown`
                : "Not in current filter results"}
            </span>
            <button
              type="button"
              onClick={onNext}
              disabled={total <= 1 || position < 0}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-body transition-colors hover:text-accent disabled:opacity-40"
            >
              Next <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </aside>
  );
}
