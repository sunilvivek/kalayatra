import { Landmark } from "lucide-react";

const EXPLORE_LINKS = [
  { href: "#map", label: "Interactive Map" },
  { href: "#locations", label: "Location Explorer" },
  { href: "#timeline", label: "Historical Timeline" },
  { href: "#traditions", label: "Art Traditions" },
];

const SOURCE_LINKS = [
  { href: "https://whc.unesco.org/en/statesparties/in", label: "UNESCO" },
  { href: "https://asi.nic.in/", label: "Archaeological Survey of India" },
  { href: "https://www.indiaculture.gov.in/", label: "Ministry of Culture" },
  { href: "https://commons.wikimedia.org/wiki/Category:Art_of_India", label: "Wikimedia Commons" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-deep">
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-on-accent">
                <Landmark className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold text-heading">
                Indian Art History Map
              </span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-body">
              An interactive educational exploration of India's artistic heritage.
            </p>
            <p className="mt-4 text-xs font-semibold tracking-widest text-gold uppercase">
              Explore · Learn · Discover
            </p>
          </div>

          <nav aria-label="Footer explore links">
            <h3 className="text-xs font-semibold tracking-wider text-muted uppercase">Explore</h3>
            <ul className="mt-3 space-y-2">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-body transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer source links">
            <h3 className="text-xs font-semibold tracking-wider text-muted uppercase">
              Sources & References
            </h3>
            <ul className="mt-3 space-y-2">
              {SOURCE_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-body underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>Created as an educational project. © {new Date().getFullYear()} Indian Art History Map.</p>
          <p>Map data © OpenStreetMap contributors · Imagery via Wikimedia Commons</p>
        </div>
      </div>
    </footer>
  );
}
