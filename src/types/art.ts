/** Period groups used by the interactive timeline. Ordered chronologically. */
export const PERIOD_GROUPS = [
  "Ancient",
  "Medieval",
  "Mughal & Rajput",
  "Colonial",
  "Modern",
  "Contemporary",
] as const;

export type PeriodGroup = (typeof PERIOD_GROUPS)[number];

/** Artistic traditions (categories) a location can belong to. */
export const ART_CATEGORIES = [
  "Ancient Indian Art",
  "Buddhist Art",
  "Hindu Temple Art",
  "Jain Art",
  "Medieval Indian Art",
  "Mughal Art",
  "Rajput Art",
  "Pahari Art",
  "Bengal School",
  "Folk Art",
  "Tribal Art",
  "South Indian Art",
  "Modern Indian Art",
  "Contemporary Indian Art",
] as const;

export type ArtCategory = (typeof ART_CATEGORIES)[number];

/** Physical media / form filters (spec §10). */
export const MEDIUMS = ["Painting", "Sculpture", "Architecture", "Crafts"] as const;

export type Medium = (typeof MEDIUMS)[number];

export interface Artwork {
  name: string;
  detail?: string;
}

export interface ArtLocation {
  id: string;
  name: string;
  state: string;
  region: string;
  latitude: number;
  longitude: number;
  period: string;
  periodGroup: PeriodGroup;
  categories: ArtCategory[];
  mediums: Medium[];
  artForms: string[];
  description: string;
  historicalContext: string;
  artists: string[];
  artworks: Artwork[];
  significance: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  learnMoreUrl: string;
}

export interface CategoryMeta {
  label: ArtCategory;
  color: string;
  code: string;
}

/**
 * Marker colours per tradition. The two-letter `code` is rendered inside each
 * marker dot so category is never communicated by colour alone.
 */
export const CATEGORY_META: Record<ArtCategory, CategoryMeta> = {
  "Ancient Indian Art": { label: "Ancient Indian Art", color: "#8c6a2f", code: "AN" },
  "Buddhist Art": { label: "Buddhist Art", color: "#b04a17", code: "BU" },
  "Hindu Temple Art": { label: "Hindu Temple Art", color: "#c98a12", code: "HT" },
  "Jain Art": { label: "Jain Art", color: "#5f7f3d", code: "JA" },
  "Medieval Indian Art": { label: "Medieval Indian Art", color: "#8a5a83", code: "MD" },
  "Mughal Art": { label: "Mughal Art", color: "#3e7cb1", code: "MU" },
  "Rajput Art": { label: "Rajput Art", color: "#c25e5e", code: "RA" },
  "Pahari Art": { label: "Pahari Art", color: "#7ba3a8", code: "PA" },
  "Bengal School": { label: "Bengal School", color: "#5b7db1", code: "BE" },
  "Folk Art": { label: "Folk Art", color: "#d96c8a", code: "FO" },
  "Tribal Art": { label: "Tribal Art", color: "#8b5e3c", code: "TR" },
  "South Indian Art": { label: "South Indian Art", color: "#4e7a6a", code: "SI" },
  "Modern Indian Art": { label: "Modern Indian Art", color: "#64748b", code: "MO" },
  "Contemporary Indian Art": { label: "Contemporary Indian Art", color: "#dc2626", code: "CO" },
};

export function primaryCategory(location: ArtLocation): ArtCategory {
  return location.categories[0];
}
