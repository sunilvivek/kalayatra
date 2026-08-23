import { ArrowRight, Map as MapIcon, Palette } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { ART_LOCATIONS } from "../data/artLocations";
import { useReveal } from "../hooks/useReveal";

const COLLAGE = [
  ART_LOCATIONS.find((l) => l.id === "ajanta"),
  ART_LOCATIONS.find((l) => l.id === "madhubani"),
  ART_LOCATIONS.find((l) => l.id === "thanjavur"),
].filter((l): l is NonNullable<typeof l> => Boolean(l));

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-heading"
      className="reveal relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="heritage-pattern absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_70%_at_75%_20%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-20 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium tracking-wide text-body">
            <Palette className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            An interactive cultural atlas of India
          </span>

          <h1
            id="hero-heading"
            className="mt-5 font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-heading sm:text-5xl xl:text-6xl"
          >
            Explore the Artistic Heritage of&nbsp;India
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            Journey across centuries of paintings, sculptures, architecture, crafts, and artistic
            traditions through an interactive map of India.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#map"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-sm transition-all hover:bg-accent-strong hover:shadow-md focus-visible:outline-2"
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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent hover:text-accent"
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
                    ? "col-span-2 rotate-[-1.5deg]"
                    : i === 1
                      ? "rotate-[1.5deg]"
                      : "rotate-[-2deg]"
                }
              >
                <figure className="overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:rotate-0">
                  <ImageWithFallback
                    src={loc.image}
                    alt={loc.imageAlt}
                    loading="eager"
                    className="aspect-[4/3] rounded-xl"
                  />
                  <figcaption className="flex items-center justify-between px-2 py-1.5 text-[11px] text-muted">
                    <span className="font-medium text-heading">{loc.name.split("—")[0].trim()}</span>
                    <span>{loc.state}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
