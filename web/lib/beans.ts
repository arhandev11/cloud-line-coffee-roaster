import type { Lang } from "./i18n";

type Localized = Record<Lang, string>;

export type Bean = {
  slug: string;
  name: string;
  // Sampled from the printed bag label; each bean keeps its own colour.
  label: string;
  // Where on the label the name sits, so white type lands on the darker stretch.
  nameAlign: "center" | "end";
  process: Localized;
  origin: string;
  variety: string;
  altitude: string;
  producer?: string;
  notes: Localized;
  notesWithMilk?: Localized;
  roast?: Localized;
  sizes: string;
};

export const BEANS: Bean[] = [
  {
    slug: "berries-bomb",
    name: "Berries Bomb",
    label: "linear-gradient(90deg, #8D54F9, #C572A5 50%, #FD8F4E)",
    nameAlign: "center",
    process: { en: "Natural", id: "Natural" },
    origin: "Gayo & Guji",
    variety: "Arabica",
    altitude: "1950–2300 masl",
    notes: {
      en: "Lavender, berries, orange blossom, floral finish",
      id: "Lavender, beri, orange blossom, akhir floral",
    },
    notesWithMilk: {
      en: "Berry jam, chocolate caramel, citrus floral",
      id: "Selai beri, cokelat karamel, sitrus floral",
    },
    roast: { en: "Espresso roast", id: "Sangrai espresso" },
    sizes: "200 g / 1 kg",
  },
  {
    slug: "finca-las-flores",
    name: "Finca Las Flores",
    label: "linear-gradient(90deg, #E36367, #B55BA9 50%, #8456E9)",
    nameAlign: "center",
    process: { en: "Natural anaerobic", id: "Natural anaerob" },
    origin: "Huila, Colombia",
    variety: "Chiroso",
    altitude: "1400–1500 masl",
    producer: "Finca Las Flores",
    notes: {
      en: "Lavender, banana, blueberry, chocolate",
      id: "Lavender, pisang, blueberry, cokelat",
    },
    sizes: "60 g",
  },
  {
    slug: "gicumbi",
    name: "Gicumbi",
    label: "linear-gradient(180deg, #FFE183, #F25E62 50%, #4C1024)",
    nameAlign: "end",
    process: { en: "Natural anaerobic", id: "Natural anaerob" },
    origin: "North Gicumbi, Rwanda",
    variety: "Mixed",
    altitude: "2000 masl",
    producer: "Local farmers",
    notes: {
      en: "Blood orange, red apple, florals, berries, sugarcane",
      id: "Jeruk darah, apel merah, floral, beri, tebu",
    },
    sizes: "150 g",
  },
  {
    slug: "malino",
    name: "Malino",
    label: "linear-gradient(180deg, #BFFDB1, #24907C 50%, #0C3720)",
    nameAlign: "end",
    process: { en: "Honey", id: "Honey" },
    origin: "Malino, South Sulawesi",
    variety: "Typica",
    altitude: "1400–1500 masl",
    producer: "Yolan Tirta",
    notes: {
      en: "Green apple, orange, berries, brown sugar",
      id: "Apel hijau, jeruk, beri, gula merah",
    },
    sizes: "150 g",
  },
  {
    slug: "berlina-estate",
    name: "Berlina Estate",
    label: "linear-gradient(225deg, #EDDB82, #A8B728 30%, #3A5320 68%, #132C14)",
    nameAlign: "end",
    process: { en: "Washed", id: "Washed" },
    origin: "Chiriquí, Panama",
    variety: "Geisha",
    altitude: "2000 masl",
    producer: "Berlina Estate",
    notes: {
      en: "Jasmine, mandarin orange, pome fruit, nectarine",
      id: "Melati, jeruk mandarin, buah pir-apel, nektarin",
    },
    sizes: "60 g",
  },
];
