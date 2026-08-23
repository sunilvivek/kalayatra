import {
  Brush,
  Castle,
  Crown,
  Feather,
  Landmark,
  Layers,
  Palette,
  Users,
  type LucideIcon,
} from "lucide-react";
import { TRADITIONS } from "../data/traditions";
import { ART_LOCATIONS } from "../data/artLocations";
import { CATEGORY_META, type ArtCategory } from "../types/art";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

interface Props {
  onExploreTradition: (category: ArtCategory) => void;
  onLocateLocation: (id: string) => void;
}

const ICONS: Record<string, LucideIcon> = {
  buddhist: Landmark,
  temple: Castle,
  mughal: Crown,
  "rajput-pahari": Feather,
  jain: Layers,
  "folk-tribal": Users,
  "south-indian": Palette,
  "modern-contemporary": Brush,
};

export default function ArtTraditions({ onExploreTradition, onLocateLocation }: Props) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="traditions"
      ref={ref}
      aria-labelledby="traditions-heading"
      className="reveal border-y border-border bg-bg-deep"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Movements & Schools"
          align="center"
          headingId="traditions-heading"
          title="Major Art Traditions of India"
          description="Each tradition links directly to the map locations where it can be studied. Select a card to filter the map."
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {TRADITIONS.map((t) => {
            const Icon = ICONS[t.id] ?? Brush;
            const color = CATEGORY_META[t.categoryKey].color;
            const sites = t.locationIds
              .map((id) => ART_LOCATIONS.find((l) => l.id === id))
              .filter((l): l is NonNullable<typeof l> => Boolean(l));

            return (
              <li key={t.id}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{ backgroundColor: color }}
                  />
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ backgroundColor: `${color}1f`, color }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-heading">{t.title}</h3>
                  <p className="mt-0.5 text-[11px] font-semibold tracking-wider text-gold uppercase">
                    {t.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body">{t.description}</p>

                  <div className="mt-auto pt-5">
                    <p className="text-[11px] font-medium text-muted">Key locations</p>
                    <ul className="mt-1.5 flex flex-wrap gap-1" aria-label={`${t.title} locations`}>
                      {sites.map((site) => (
                        <li key={site.id}>
                          <button
                            type="button"
                            onClick={() => onLocateLocation(site.id)}
                            title={`Show ${site.name} on the map`}
                            className="rounded-full border border-border bg-bg-deep px-2 py-0.5 text-[11px] text-body transition-colors hover:border-accent hover:text-accent"
                          >
                            {site.name.split("—")[0].trim()}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => onExploreTradition(t.categoryKey)}
                      aria-label={`Filter map by ${t.title}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                    >
                      View on map →
                    </button>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
