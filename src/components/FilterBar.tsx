import { RotateCcw, Landmark, Crown, Palette, Brush, Flower2, Amphora, Building2 } from "lucide-react";
import { ART_CATEGORIES, MEDIUMS, type ArtCategory, type Medium } from "../types/art";

interface Props {
  activeCategories: ArtCategory[];
  activeMediums: Medium[];
  hasActiveFilters: boolean;
  onToggleCategory: (category: ArtCategory) => void;
  onToggleMedium: (medium: Medium) => void;
  onClearCategories: () => void;
  onReset: () => void;
}

const chipBase =
  "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors";

/* Legend categories matching marker icons — 8 traditions */
const legendCategories = [
  { label: "Temple Architecture", categories: ["Hindu Temple Art"], icon: Building2, color: "#c98a12" },
  { label: "Painting", categories: ["Bengal School", "Modern Indian Art", "Contemporary Indian Art"], icon: Palette, color: "#d96c8a" },
  { label: "Sculpture", categories: ["Jain Art", "Medieval Indian Art", "South Indian Art", "Tribal Art"], icon: Building2, color: "#8a5a83" },
  { label: "Buddhist Art", categories: ["Buddhist Art"], icon: Flower2, color: "#b04a17" },
  { label: "Folk Art", categories: ["Folk Art"], icon: Brush, color: "#d96c8a" },
  { label: "Ancient Art", categories: ["Ancient Indian Art"], icon: Amphora, color: "#8c6a2f" },
  { label: "Architecture", categories: ["Hindu Temple Art", "Jain Art", "Medieval Indian Art", "South Indian Art", "Tribal Art"], icon: Building2, color: "#3e7cb1" },
  { label: "Royal / Mughal", categories: ["Mughal Art", "Rajput Art", "Pahari Art"], icon: Crown, color: "#3e7cb1" },
] as const;

/* Map art categories to Lucide icon components for filter chips */
function getCategoryIcon(cat: ArtCategory) {
  switch (cat) {
    case "Buddhist Art":
      return Flower2;
    case "Hindu Temple Art":
    case "Jain Art":
    case "Medieval Indian Art":
    case "South Indian Art":
    case "Tribal Art":
      return Building2;
    case "Mughal Art":
    case "Rajput Art":
    case "Pahari Art":
      return Crown;
    case "Bengal School":
    case "Modern Indian Art":
    case "Contemporary Indian Art":
      return Palette;
    case "Folk Art":
      return Brush;
    case "Ancient Indian Art":
      return Amphora;
    default:
      return Landmark;
  }
}

/* Check if any category in a legend group is active */
function isLegendGroupActive(groupCategories: readonly string[], activeCategories: ArtCategory[]): boolean {
  return groupCategories.some((cat) => activeCategories.includes(cat as ArtCategory));
}

/* Toggle all categories in a legend group */
function toggleLegendGroup(groupCategories: readonly string[], activeCategories: ArtCategory[], onToggleCategory: (cat: ArtCategory) => void) {
  const anyActive = groupCategories.some((cat) => activeCategories.includes(cat as ArtCategory));
  groupCategories.forEach((cat) => {
    const catKey = cat as ArtCategory;
    if (anyActive === activeCategories.includes(catKey)) {
      onToggleCategory(catKey);
    }
  });
}

export default function FilterBar({
  activeCategories,
  activeMediums,
  hasActiveFilters,
  onToggleCategory,
  onToggleMedium,
  onClearCategories,
  onReset,
}: Props) {
  const categoriesAll = activeCategories.length === 0;

  return (
    <div className="space-y-4">
      {/* --- Custom Legend with marker-matching icons --- */}
      <fieldset>
        <legend className="mb-2 text-xs font-semibold tracking-wider text-muted uppercase">
          Map Legend
        </legend>
        <div className="flex flex-wrap gap-2">
          {legendCategories.map((group) => {
            const Icon = group.icon;
            const active = isLegendGroupActive(group.categories, activeCategories);
            return (
              <button
                key={group.label}
                type="button"
                aria-pressed={active}
                onClick={() => toggleLegendGroup(group.categories, activeCategories, onToggleCategory)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors ${
                  active
                    ? "border-accent bg-accent-soft text-accent-strong"
                    : "border-border bg-surface text-body hover:border-accent/60 hover:text-heading"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${active ? "text-accent-strong" : "text-muted"}`} aria-hidden="true" style={{ color: group.color }} />
                <span>{group.label}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* --- Functional Filter Chips (full category list) --- */}
      <fieldset>
        <legend className="mb-1.5 text-xs font-semibold tracking-wider text-muted uppercase">
          Filter by Tradition
        </legend>
        <div
          role="group"
          aria-label="Filter by art tradition"
          className="chip-scroll flex gap-2 overflow-x-auto pb-2"
        >
          <button
            type="button"
            aria-pressed={categoriesAll}
            onClick={onClearCategories}
            className={`${chipBase} ${
              categoriesAll
                ? "border-accent bg-accent text-on-accent"
                : "border-border bg-surface text-body hover:border-accent/60 hover:text-heading"
            }`}
          >
            All Traditions
          </button>
          {ART_CATEGORIES.map((cat) => {
            const active = activeCategories.includes(cat);
            const Icon = getCategoryIcon(cat);
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => onToggleCategory(cat)}
                className={`${chipBase} ${
                  active
                    ? "border-accent bg-accent text-on-accent"
                    : "border-border bg-surface text-body hover:border-accent/60 hover:text-heading"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${active ? "text-on-accent" : "text-current"}`} aria-hidden="true" />
                <span>{cat.replace(" Indian Art", "").replace(" School", " Sch.")}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-wrap items-end justify-between gap-3">
        <fieldset>
          <legend className="mb-1.5 text-xs font-semibold tracking-wider text-muted uppercase">
            Medium / Form
          </legend>
          <div
            role="group"
            aria-label="Filter by medium"
            className="flex flex-wrap gap-2"
          >
            {MEDIUMS.map((medium) => {
              const active = activeMediums.includes(medium);
              return (
                <button
                  key={medium}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onToggleMedium(medium)}
                  className={`${chipBase} ${
                    active
                      ? "border-gold bg-gold/15 text-heading"
                      : "border-border bg-surface text-body hover:border-gold/60 hover:text-heading"
                  }`}
                >
                  {medium}
                </button>
              );
            })}
          </div>
        </fieldset>

        {hasActiveFilters ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/50 px-4 py-1.5 text-[13px] font-semibold text-accent transition-colors hover:bg-accent hover:text-on-accent"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Reset filters
          </button>
        ) : null}
      </div>
    </div>
  );
}