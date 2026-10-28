// Selección curada de guías de La Agenda de SecretoDefi (Substack).
// Para añadir una: copia el "slug" de la URL del post (lo que va tras /p/).
// "subscribersOnly" marca los posts de la edición de pago.

export type Guide = {
  title: string;
  slug: string;
  description: string;
  date: string; // YYYY-MM-DD
  subscribersOnly?: boolean;
};

export type GuideGroup = {
  id: string;
  title: string;
  description: string;
  guides: Guide[];
};

export const GUIDE_GROUPS: GuideGroup[] = [
  {
    id: "airdrops-y-farming",
    title: "Airdrops y farming",
    description:
      "Cómo cazar airdrops con cabeza, qué herramientas usar y dónde hacerlo.",
    guides: [
      {
        title: "Tier list de Perp DEXs: dónde farmeo airdrops antes que el resto",
        slug: "tier-list-de-perp-dexs-donde-farmeo",
        description:
          "Mi ranking personal: dónde tradeo hoy, dónde farmeo sin token todavía y qué vigilo de cerca.",
        date: "2026-07-17",
      },
      {
        title: "Los Airdrops no están muertos y hoy es más fácil que nunca farmearlos",
        slug: "los-airdrops-no-estan-muertos-y-hoy",
        description:
          "Si tienes liquidez a largo plazo, aprovecha la eficiencia de capital que te dan estas oportunidades.",
        date: "2024-10-20",
      },
      {
        title:
          "Utiliza las testnets para aprender a usar una red y todo su ecosistema mientras calificamos para el airdrop de su token",
        slug: "utiliza-las-testnets-para-aprender",
        description:
          "Farmear testnets incentivadas es una forma de aprender una red desde dentro y optar al airdrop de su token.",
        date: "2024-06-28",
      },
      {
        title: "10 herramientas necesaria para tu día a día",
        slug: "10-herramientas-necesaria-para-tu",
        description:
          "Tenerlo todo en la cabeza no es buena idea: las herramientas que uso para organizarme en el día a día.",
        date: "2024-08-08",
      },
    ],
  },
  {
    id: "liquidez-y-yield",
    title: "Liquidez y yield",
    description:
      "Cómo funcionan las pools, los incentivos y las estrategias para generar rendimiento, y los riesgos que hay detrás.",
    guides: [
      {
        title: "Guía definitiva para usar Meteora en Solana (primera parte)",
        slug: "guia-definitiva-para-usar-meteora",
        description:
          "Todos los conceptos necesarios para montar pools de liquidez concentrada y ganar comisiones mientras farmeas su airdrop. Primera parte de una serie.",
        date: "2024-08-24",
        subscribersOnly: true,
      },
      {
        title: "Estrategia Anti-Sawtooth en Meteora",
        slug: "estrategia-anti-sawtooth-en-meteora",
        description:
          "Qué es la estrategia anti-sawtooth y cómo funciona, explicada en unos 10 minutos.",
        date: "2025-03-04",
      },
      {
        title: "Entiende los hooks de las v4 de Uniswap para generar más APR",
        slug: "uniswap-v4-y-los-hooks-el-super-poder",
        description:
          "Qué es esa casilla nueva al crear una pool, para qué sirve de verdad y por qué un hook malicioso puede subir las fees al 100% o bloquear tus retiradas.",
        date: "2026-10-02",
      },
      {
        title: "Entiende el flywheel de los DEX ve(3,3)",
        slug: "como-funcionan-los-dex-ve33-y-por",
        description:
          "El modelo que reparte las fees a quien bloquea el token, no a los LPs, explicado con Nest como ejemplo.",
        date: "2026-08-28",
      },
      {
        title: "Entiendo cómo funcionan los loops de Pendle",
        slug: "pt-looping-en-pendle-de-donde-sale",
        description:
          "Qué es, cómo se monta paso a paso y los dos riesgos que conviene conocer: carry negativo y liquidación.",
        date: "2026-08-22",
        subscribersOnly: true,
      },
    ],
  },
  {
    id: "mercados-y-narrativas",
    title: "Mercados y narrativas",
    description:
      "Qué está pasando en perpetuos, activos del mundo real, mercados de predicción y nuevas cadenas.",
    guides: [
      {
        title:
          "RWA onchain: cómo se trada oro, acciones y petróleo en cripto (y por qué es LA narrativa de 2026)",
        slug: "rwa-onchain-como-se-trada-oro-acciones",
        description:
          "Qué es operable de los activos del mundo real en cadena, dónde y cómo posicionarte.",
        date: "2026-10-19",
      },
      {
        title: "HIP-3 DE HYPERLIQUID > Creación de mercados sin permiso",
        slug: "hip-3-de-hyperliquid-creacion-de",
        description:
          "¿Caminamos hacia una creación de mercados descentralizada y sin permisos o es solo apariencia?",
        date: "2025-09-22",
      },
      {
        title: "Polymarket > Las Finanzas de la Información",
        slug: "polymarket-las-finanzas-de-la-informacion",
        description:
          "Cómo los mercados de predicción han evolucionado más allá de la especulación.",
        date: "2025-11-12",
      },
      {
        title: "Las trincheras de Robinhood están muy calientes",
        slug: "primeros-pasos-en-robinhood-chain",
        description:
          "Guía paso a paso para entrar en la L2 de Robinhood: añadir la red, puentear fondos y qué hacer dentro.",
        date: "2026-07-28",
      },
    ],
  },
  {
    id: "estrategia-y-mercados",
    title: "Estrategia y gestión del riesgo",
    description:
      "Cómo leer el mercado y reducir la exposición cuando hace falta.",
    guides: [
      {
        title: "Estrategia Antifrágil (Parte 1/3)",
        slug: "estrategia-antifragil-parte-13",
        description: "Cómo reducir nuestra exposición al mercado y ganar más.",
        date: "2025-02-25",
      },
      {
        title: "Estrategia AntiFrágil (2/3)",
        slug: "estrategia-antifragil-23",
        description: "Cómo detectar euforias y crisis financieras.",
        date: "2025-03-11",
      },
      {
        title: "Estrategia Antifrágil (3/3)",
        slug: "estrategia-antifragil-33",
        description: "Indicadores y herramientas.",
        date: "2025-04-01",
      },
      {
        title: "¿Cómo funcionan los mercados financieros?",
        slug: "como-funcionan-los-mercados-financieros",
        description:
          "Stan Weinstein y Richard Wyckoff para entender cómo se mueven los mercados financieros.",
        date: "2024-11-05",
      },
    ],
  },
];
