import { useState } from "react";
import { Landmark, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface Props {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { href: "#map", label: "Map" },
  { href: "#locations", label: "Locations" },
  { href: "#timeline", label: "Timeline" },
  { href: "#traditions", label: "Traditions" },
  { href: "#about", label: "About" },
];

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-on-accent shadow-sm">
            <Landmark className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[15px] font-semibold tracking-tight text-heading sm:text-base">
              Indian Art History Map
            </span>
            <span className="hidden text-[11px] tracking-wide text-muted uppercase sm:block">
              An Interactive Cultural Atlas
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link rounded-full px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-surface-2 hover:text-heading"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-body md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-bg px-4 pb-4 md:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body hover:bg-surface-2 hover:text-heading"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
