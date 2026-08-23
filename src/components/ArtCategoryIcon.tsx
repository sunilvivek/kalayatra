/** All art tradition categories matched to Lucide icons. */
type ArtCategory =
  | "temple"
  | "painting"
  | "sculpture"
  | "buddhist"
  | "folk"
  | "ancient"
  | "architecture"
  | "royal";

const iconMap: Record<ArtCategory, string> = {
  temple: "Landmark",
  painting: "Palette",
  sculpture: "Landmark",
  buddhist: "Flower2",
  folk: "Brush",
  ancient: "Amphora",
  architecture: "Building2",
  royal: "Crown",
};

/**
 * Reusable icon component for art tradition categories.
 *
 * Renders the appropriate Lucide SVG icon with category-specific styling.
 * The `category` prop is case-sensitive and must match one of the `ArtCategory` values.
 */
export default function ArtCategoryIcon({ category }: { category: ArtCategory }) {
  const IconName = iconMap[category];

  if (!IconName) {
    return <span aria-hidden="true" className="text-muted">?</span>;
  }

  // Import the icon dynamically to avoid side-effects at module init
  // (lucide-react auto-installs globals, but this keeps things explicit)
  // We use the `ReactNode` import approach instead of dynamic `import()` to stay
  // compatible with the project's Vite/Tailwind setup.
  const IconComponent = (window as any).__LUCIDE_ICONS__?.[IconName];
  if (!IconComponent) {
    return <span aria-hidden="true" className="text-muted">?</span>;
  }

  return <IconComponent className="h-4 w-4 text-current" aria-hidden="true" />;
}

/** Full name for tooltip / legend text. */
export const artCategoryNames: Record<ArtCategory, string> = {
  temple: "Temple Architecture",
  painting: "Painting",
  sculpture: "Sculpture",
  buddhist: "Buddhist Art",
  folk: "Folk Art",
  ancient: "Ancient Art",
  architecture: "Architecture",
  royal: "Royal / Mughal Art",
};