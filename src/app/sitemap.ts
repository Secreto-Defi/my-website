import type { MetadataRoute } from "next";

import { GUIDE_GROUPS } from "./guias/guides";

const SITE_URL = "https://www.secretodefi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/guias`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...GUIDE_GROUPS.map((group) => ({
      url: `${SITE_URL}/guias/${group.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
