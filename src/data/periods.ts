import type { PeriodGroup } from "../types/art";

export interface PeriodInfo {
  group: PeriodGroup;
  label: string;
  range: string;
  summary: string;
  artForms: string[];
}

/**
 * Timeline periods (spec §11). `group` matches ArtLocation.periodGroup.
 */
export const PERIODS: PeriodInfo[] = [
  {
    group: "Ancient",
    label: "Ancient",
    range: "Prehistory – c. 550 CE",
    summary:
      "From prehistoric rock shelters through the Mauryan, Satavahana, Kushan and Gupta eras, patronage built stupas, excavated caves and painted murals whose classical poise still defines Indian art.",
    artForms: ["Rock painting", "Stupa & rock-cut architecture", "Buddhist narrative sculpture", "Tempera murals"],
  },
  {
    group: "Medieval",
    label: "Medieval",
    range: "c. 550 – 1500 CE",
    summary:
      "Regional dynasties — Pallava, Chola, Chandella, Eastern Ganga, Rashtrakuta, Vijayanagara — competed through temple building, while Jain manuscript painting opened India's illustrated-book tradition.",
    artForms: ["Nagara & Dravida temples", "Bronze casting", "Temple sculpture programmes", "Manuscript illumination"],
  },
  {
    group: "Mughal & Rajput",
    label: "Mughal & Rajput",
    range: "c. 1550 – 1900 CE",
    summary:
      "Imperial Mughal ateliers perfected miniature painting and marble architecture; Rajput, Pahari and Deccan courts answered with parallel schools of remarkable independence.",
    artForms: ["Miniature painting", "Mughal architecture", "Ragamala series", "Gesso-gold panels"],
  },
  {
    group: "Colonial",
    label: "Colonial",
    range: "c. 1750 – 1947",
    summary:
      "Company-school naturalism, art schools and museums reshaped taste; in answer, the Bengal School formulated a swadeshi aesthetic that made art a language of cultural self-definition.",
    artForms: ["Company painting", "Kalighat pat", "Academic oil painting", "Bengal School watercolours"],
  },
  {
    group: "Modern",
    label: "Modern",
    range: "c. 1900 – 1980",
    summary:
      "Santiniketan's humanism, the Bombay Progressive Artists' Group and Baroda's theorised figuration carried Indian art into international modernism on its own terms.",
    artForms: ["Progressive modernism", "Narrative figuration", "Open-air sculpture", "Printmaking"],
  },
  {
    group: "Contemporary",
    label: "Contemporary",
    range: "1980 – today",
    summary:
      "Adivasi painters entered the gallery, biennales anchored Kochi, and Indian artists now work globally while regional traditions keep evolving at home.",
    artForms: ["Gond & Mithila on canvas", "Installation & new media", "Biennale culture", "Global market practice"],
  },
];
