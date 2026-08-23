import { ArrowRight, Landmark, Map as MapIcon, Palette } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { ART_LOCATIONS } from "../data/artLocations";
import { useReveal } from "../hooks/useReveal";

const COLLAGE = [
  ART_LOCATIONS.find((l) => l.id === "ajanta"),
  ART_LOCATIONS.find((l) => l.id === "madhubani"),
  ART_LOCATIONS.find((l) => l.id === "thanjavur"),
].filter((l): l is NonNullable<typeof l> => Boolean(l));

const PETAL_DEGREES = Array.from({ length: 12 }, (_, i) => i * 30);

function Mandala({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="0.5">
        <circle cx="100" cy="100" r="98" />
        <circle cx="100" cy="100" r="78" />
        <circle cx="100" cy="100" r="46" />
        <circle cx="100" cy="100" r="16" />
        {PETAL_DEGREES.map((deg) => (
          <path
            key={deg}
            d="M100 24 C 89 53, 89 66, 100 79 C 111 66, 111 53, 100 24 Z"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
      </g>
    </svg>
  );
}

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-heading"
      className="reveal relative overflow-hidden"
    >
      {/* Decorative background: faint pattern + layered mandalas + festival aurora */}
      <div
        aria-hidden="true"
        className="heritage-pattern absolute inset-0 opacity-25 [mask-image:radial-gradient(60%_60%_at_20%_10%,black,transparent)]"
      />
      <Mandala className="absolute -top-44 -right-44 h-[580px] w-[580px] text-accent opacity-[0.08] dark:opacity-[0.12]" />
      <Mandala className="absolute -bottom-56 -left-40 h-[440px] w-[440px] text-indigo opacity-[0.07] dark:opacity-[0.11]" />
      <div
        aria-hidden="true"
        className="absolute top-24 left-[38%] hidden h-[300px] w-[300px] rounded-full bg-rani/10 blur-3xl lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[30%] h-[320px] w-[320px] rounded-full bg-saffron/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-20 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium tracking-wide text-body">
            <Palette className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            KalaYatra — an interactive journey through Indian art
          </span>

          <h1
            id="hero-heading"
            className="mt-5 font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-heading sm:text-5xl xl:text-6xl"
          >
            Explore the{" "}
            <span className="text-gradient-festival italic font-medium">
              Artistic&nbsp;Heritage
            </span>{" "}
            of India
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            Journey across centuries of paintings, sculptures, architecture, crafts, and artistic
            traditions through an interactive map of India.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#map"
              className="btn-festival group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-on-accent shadow-sm hover:-translate-y-px hover:shadow-md focus-visible:outline-2"
            >
              <MapIcon className="h-4 w-4" aria-hidden="true" />
              Explore the Map
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#traditions"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-heading transition-all hover:-translate-y-px hover:border-accent hover:text-accent focus-visible:outline-2"
            >
              <Palette className="h-4 w-4" aria-hidden="true" />
              Explore Art Traditions
            </a>
          </div>

          <p className="mt-6 text-xs text-muted">
            30 featured locations · 14 art traditions · imagery from Wikimedia Commons · built for
            study & exploration
          </p>
        </div>

        {/* Image collage */}
        <div className="relative mx-auto hidden w-full max-w-lg md:block">
          <ul className="grid grid-cols-2 gap-4">
            {COLLAGE.map((loc, i) => (
              <li
                key={loc.id}
                className={
                  i === 0
                    ? "col-span-2 rotate-[-1deg]"
                    : i === 1
                      ? "rotate-[1.25deg]"
                      : "rotate-[-1.75deg]"
                }
              >
                <figure className="overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:rotate-0">
                  <ImageWithFallback
                    src={loc.image}
                    alt={loc.imageAlt}
                    loading="eager"
                    className={
                      i === 0 ? "aspect-[16/9] rounded-xl" : "aspect-[4/3] rounded-xl"
                    }
                  />
                  <figcaption className="flex items-center justify-between px-2 py-1.5 text-[11px] text-muted">
                    <span className="font-medium text-heading">{loc.name.split("—")[0].trim()}</span>
                    <span>{loc.state}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          {/* Floating badge */}
          <div className="absolute -bottom-7 -left-7 flex max-w-[230px] rotate-[1.5deg] items-center gap-3 rounded-2xl border border-border bg-surface/90 p-3.5 pr-5 shadow-xl shadow-black/10 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 hover:rotate-0">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
              <Landmark className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <p className="text-xs leading-snug font-medium text-heading">
              Includes UNESCO World&nbsp;Heritage sites across 2,000+ years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
