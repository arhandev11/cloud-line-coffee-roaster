import type { Metadata } from "next";
import { DICTS, HOME_PATH, type Lang } from "./i18n";

export function homeMetadata(lang: Lang): Metadata {
  const t = DICTS[lang].meta;
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: HOME_PATH[lang],
      languages: { en: HOME_PATH.en, id: HOME_PATH.id },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      locale: lang === "en" ? "en_US" : "id_ID",
      type: "website",
    },
  };
}
