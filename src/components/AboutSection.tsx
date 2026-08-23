import { BookOpen, Info } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

const SOURCES = [
  {
    label: "UNESCO World Heritage Centre — India",
    href: "https://whc.unesco.org/en/statesparties/in",
  },
  {
    label: "Archaeological Survey of India",
    href: "https://asi.nic.in/",
  },
  {
    label: "Ministry of Culture, Government of India",
    href: "https://www.indiaculture.gov.in/",
  },
  {
    label: "National Museum, New Delhi",
    href: "https://nationalmuseumindia.gov.in/",
  },
  {
    label: "Wikimedia Commons (imagery)",
    href: "https://commons.wikimedia.org/wiki/Category:Art_of_India",
  },
];

export default function AboutSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} aria-labelledby="about-heading" className="reveal">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Educational Purpose"
              icon={Info}
              headingId="about-heading"
              title={
                <>
                  About This <span className="italic text-accent">Map</span>
                </>
              }
            />

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-body sm:text-base">
              <p>
                This project visualises the geographic diversity of Indian art. By plotting thirty
                significant locations — from prehistoric rock shelters in the Vindhya hills to
                contemporary gallery districts — it allows students and enthusiasts to see how
                artistic traditions arose, travelled, overlapped and evolved across regions and
                historical periods.
              </p>
              <p>
                Filter by tradition or medium to compare, for example, where Buddhist and Jain sites
                cluster; select a timeline era to watch patronage move from cave monasteries to
                imperial courts to modern cities. Every entry pairs the place with its art forms,
                documented makers, major works and historical context.
              </p>
              <p>
                <span className="font-semibold text-heading">A note on accuracy:</span> dates follow
                mainstream scholarship as summarised by UNESCO and the Archaeological Survey of
                India. Where individual artists are unknown to history, we say so explicitly rather
                than inventing names, and contested attributions use cautious wording.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-heading">
              <BookOpen className="h-5 w-5 text-accent" aria-hidden="true" />
              Sources & References
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-body underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl bg-bg-deep p-3.5 text-xs leading-relaxed text-muted">
              Site photographs are served from Wikimedia Commons under open licences; credits appear
              with each image. Map tiles © OpenStreetMap contributors (light) and CARTO (dark).
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
