import type { MetadataRoute } from "next";

import { GUIDE_GROUPS, type GuideGroup } from "./guias/guides";
import { PILLARS } from "./guias/pilares";
import { GLOSSARY_UPDATED } from "./lib/updated";

const SITE_URL = "https://www.secretodefi.com";

// Fecha de la última actualización de cada página con contenido propio.
const PILLAR_UPDATED = new Map(PILLARS.map((pillar) => [pillar.href, pillar.updated]));

// Fecha (AAAA-MM-DD) del último cambio en los temas indicados: la guía más
// reciente o la página destacada. Las fechas en este formato se ordenan bien
// como texto.
const latestOf = (groups: GuideGroup[]) =>
  groups
    .flatMap((group) => [
      ...group.guides.map((guide) => guide.date),
      ...(group.featured ?? []).map((page) => PILLAR_UPDATED.get(page.href)),
    ])
    .filter((date): date is string => Boolean(date))
    .reduce((a, b) => (a > b ? a : b));

// Solo se indica <lastmod> donde hay una fecha real. Poner la fecha de cada
// compilación en todas las páginas haría que Google dejase de fiarse de ella.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/guias`,
      lastModified: latestOf(GUIDE_GROUPS),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...PILLARS.map((pillar) => ({
      url: `${SITE_URL}${pillar.href}`,
      lastModified: pillar.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...GUIDE_GROUPS.map((group) => ({
      url: `${SITE_URL}/guias/${group.id}`,
      lastModified: latestOf([group]),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/glosario`,
      lastModified: GLOSSARY_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${SITE_URL}/legal`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
