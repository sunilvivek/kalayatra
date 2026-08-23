import type { ArtCategory } from "../types/art";

export interface Tradition {
  id: string;
  title: string;
  tagline: string;
  description: string;
  categoryKey: ArtCategory;
  locationIds: string[];
}

/**
 * Major art traditions explained for visitors (spec §12).
 * Each card links back to concrete map locations via `locationIds`.
 */
export const TRADITIONS: Tradition[] = [
  {
    id: "buddhist",
    title: "Buddhist Art",
    tagline: "Stupas, caves & serenity",
    description:
      "From Ashokan stupas at Sanchi to the painted caves of Ajanta and the limestone friezes of Amaravati, Buddhist patronage created India's earliest large-scale artistic programmes — later radiating over the Himalaya to Ladakh's Alchi.",
    categoryKey: "Buddhist Art",
    locationIds: ["sanchi", "ajanta", "amaravati", "alchi", "ellora"],
  },
  {
    id: "temple",
    title: "Hindu Temple Art",
    tagline: "Architecture as cosmos",
    description:
      "Between the 7th and 13th centuries temple building became India's dominant artistic enterprise: Pallava experiments at Mahabalipuram, Chandella climax at Khajuraho, Odisha's chariot-sun at Konark and Chola grandeur at Thanjavur.",
    categoryKey: "Hindu Temple Art",
    locationIds: ["mahabalipuram", "khajuraho", "konark", "thanjavur", "hampi", "puri"],
  },
  {
    id: "mughal",
    title: "Mughal Art",
    tagline: "The imperial synthesis",
    description:
      "The Mughal kitabkhana fused Persian, Timurid and Indic craft into miniature painting of unmatched refinement, while imperial workshops raised architecture from Humayun's Tomb to the Taj Mahal itself.",
    categoryKey: "Mughal Art",
    locationIds: ["agra", "delhi"],
  },
  {
    id: "rajput-pahari",
    title: "Rajput & Pahari Painting",
    tagline: "Courts of the plains and hills",
    description:
      "Rajput courts at Mewar, Jaipur and across Rajasthan kept a bold-coloured narrative idiom alive; in the Himalayan foothills the Pahari schools — above all Kangra — brought miniature painting to its lyrical peak.",
    categoryKey: "Rajput Art",
    locationIds: ["udaipur", "jaipur", "kangra"],
  },
  {
    id: "jain",
    title: "Jain Art",
    tagline: "Devotion in detail",
    description:
      "Jain patrons financed illuminated Kalpasutra manuscripts, shared great cave complexes at Ellora and Khajuraho, and raised the monumental Bahubali statue at Shravanabelagola — an art of meticulous devotion.",
    categoryKey: "Jain Art",
    locationIds: ["ahmedabad", "ellora", "khajuraho", "shravanabelagola"],
  },
  {
    id: "folk-tribal",
    title: "Folk & Tribal Arts",
    tagline: "Living traditions",
    description:
      "Women's wall painting in Mithila, pattachitra icon painting around Puri, Kalighat satire in colonial Kolkata and the Gond kalam born at Bhopal's Bharat Bhavan — vernacular genius now shown worldwide.",
    categoryKey: "Folk Art",
    locationIds: ["madhubani", "puri", "kolkata", "bhopal"],
  },
  {
    id: "south-indian",
    title: "South Indian Traditions",
    tagline: "Bronze, granite & gold",
    description:
      "Pallava beginnings at Mamallapuram matured into Chola bronze casting and imperial temple building, flowing through Vijayanagara into Tanjore, Mysore and Kerala mural lineages — a continuous classical stream.",
    categoryKey: "South Indian Art",
    locationIds: ["thanjavur", "mahabalipuram", "hampi", "mysore", "kochi"],
  },
  {
    id: "modern-contemporary",
    title: "Modern & Contemporary",
    tagline: "India argues with itself",
    description:
      "The Bengal School's swadeshi aesthetics, Santiniketan's humanism, the Bombay Progressives, Baroda's theorised figuration and Kochi's biennale — each generation redefining what Indian art could be.",
    categoryKey: "Modern Indian Art",
    locationIds: ["kolkata", "shantiniketan", "mumbai", "vadodara", "chennai", "kochi"],
  },
];
