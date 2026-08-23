import { RotateCcw } from "lucide-react";
import { ART_CATEGORIES, CATEGORY_META, MEDIUMS, type ArtCategory, type Medium } from "../types/art";

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
    <div className="space-y-3">
      <fieldset>
        <legend className="mb-1.5 text-xs font-semibold tracking-wider text-muted uppercase">
          Art Tradition
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
            const meta = CATEGORY_META[cat];
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
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 shrink-0 rounded-full ${active ? "ring-1 ring-white/60" : ""}`}
                  style={{ backgroundColor: meta.color }}
                />
                {cat.replace(" Indian Art", "").replace(" School", " Sch.")}
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
