// Páginas guía con contenido propio ("pilares"): explican un tema completo y
// llevan a las guías de La Agenda de SecretoDefi. Esta lista alimenta el
// sitemap, las tarjetas de /guias, los enlaces de la portada y el bloque
// "Sigue aprendiendo" de cada página, así que al añadir una página nueva basta
// con registrarla aquí (y poner sus fechas en lib/updated.ts).
import {
  AIRDROP_GUIDE_PUBLISHED,
  AIRDROP_GUIDE_UPDATED,
  HYPERLIQUID_GUIDE_PUBLISHED,
  HYPERLIQUID_GUIDE_UPDATED,
  IL_GUIDE_PUBLISHED,
  IL_GUIDE_UPDATED,
  METEORA_GUIDE_PUBLISHED,
  METEORA_GUIDE_UPDATED,
  PERP_GUIDE_PUBLISHED,
  PERP_GUIDE_UPDATED,
  SECURITY_GUIDE_PUBLISHED,
  SECURITY_GUIDE_UPDATED,
  YIELD_GUIDE_PUBLISHED,
  YIELD_GUIDE_UPDATED,
} from "../lib/updated";

export type Pillar = {
  href: string; // ruta de la página, p. ej. "/guias/que-es-un-airdrop"
  name: string; // título corto: migas de pan, tarjetas y enlaces
  description: string; // una o dos frases para las tarjetas
  published: string; // YYYY-MM-DD
  updated: string; // YYYY-MM-DD
};

export const PILLARS: Pillar[] = [
  {
    href: "/guias/que-es-un-airdrop",
    name: "Qué es un airdrop y cómo farmearlo",
    description:
      "Qué es un airdrop, qué tipos hay, cómo farmearlo paso a paso y cómo evitar las estafas más comunes.",
    published: AIRDROP_GUIDE_PUBLISHED,
    updated: AIRDROP_GUIDE_UPDATED,
  },
  {
    href: "/guias/seguridad-en-defi",
    name: "Seguridad en DeFi: aprobaciones y estafas",
    description:
      "Qué son las aprobaciones y las firmas Permit, cómo revocarlas, qué estafas son las más comunes y qué hacer si te vacían la wallet.",
    published: SECURITY_GUIDE_PUBLISHED,
    updated: SECURITY_GUIDE_UPDATED,
  },
  {
    href: "/guias/perp-dex-y-farmeo-de-puntos",
    name: "Perp DEX y farmeo de puntos",
    description:
      "Qué es un perp DEX, cómo funcionan los programas de puntos, cuánto cuesta farmearlos y qué riesgos tienen, con un caso real.",
    published: PERP_GUIDE_PUBLISHED,
    updated: PERP_GUIDE_UPDATED,
  },
  {
    href: "/guias/que-es-hyperliquid",
    name: "Qué es Hyperliquid y cómo funciona",
    description:
      "Qué es Hyperliquid, cómo funcionan HyperCore, HyperEVM y el token HYPE, qué es HIP-3, cuánto cuesta operar y qué riesgos tiene.",
    published: HYPERLIQUID_GUIDE_PUBLISHED,
    updated: HYPERLIQUID_GUIDE_UPDATED,
  },
  {
    href: "/guias/yield-farming-y-liquidez-concentrada",
    name: "Yield farming y liquidez concentrada",
    description:
      "De dónde sale el rendimiento, cómo funciona la liquidez concentrada, qué riesgos tiene y cómo empezar con cabeza.",
    published: YIELD_GUIDE_PUBLISHED,
    updated: YIELD_GUIDE_UPDATED,
  },
  {
    href: "/guias/que-es-la-perdida-impermanente",
    name: "Qué es la pérdida impermanente",
    description:
      "Por qué ocurre, cómo se calcula con un ejemplo, cuándo la compensan las comisiones y cómo reducirla.",
    published: IL_GUIDE_PUBLISHED,
    updated: IL_GUIDE_UPDATED,
  },
  {
    href: "/guias/que-es-meteora",
    name: "Qué es Meteora y cómo funciona el DLMM",
    description:
      "Qué es Meteora en Solana, cómo funcionan los bins, las estrategias Spot, Curve y Bid-Ask, las comisiones, el token MET y los riesgos.",
    published: METEORA_GUIDE_PUBLISHED,
    updated: METEORA_GUIDE_UPDATED,
  },
];

export const getPillar = (href: string): Pillar => {
  const pillar = PILLARS.find((item) => item.href === href);
  if (!pillar) throw new Error(`Página guía "${href}" no registrada en pilares.ts`);
  return pillar;
};
