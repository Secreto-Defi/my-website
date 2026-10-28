// Selección curada de guías de La Agenda de SecretoDefi (Substack).
// Para añadir una: copia el "slug" de la URL del post (lo que va tras /p/).
// "subscribersOnly" marca los posts de la edición de pago.
// Las descripciones están escritas tras leer cada post completo.

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
      "Cómo posicionarte pronto en redes y perp DEX nuevos, con la verdad por delante sobre lo que está y no está confirmado.",
    guides: [
      {
        title: "Tier list de Perp DEXs: dónde farmeo airdrops antes que el resto",
        slug: "tier-list-de-perp-dexs-donde-farmeo",
        description:
          "Mi ranking de perp DEX en tres niveles, con los cinco criterios que uso para puntuarlos: dónde tradeo hoy, dónde farmeo sin token todavía y qué vigilo de cerca.",
        date: "2026-07-17",
      },
      {
        title: "Posiciónate en la L1 de Circle antes de que sea más difícil",
        slug: "como-farmear-arc-testnet-paso-a-paso",
        description:
          "Paso a paso para farmear la testnet de Arc, la L1 de Circle, sin capital: faucet, swaps, liquidez, lending y una rutina semanal. No hay airdrop confirmado.",
        date: "2026-07-31",
        subscribersOnly: true,
      },
      {
        title: "Las trincheras de Robinhood están muy calientes",
        slug: "primeros-pasos-en-robinhood-chain",
        description:
          "Guía paso a paso para entrar en Robinhood Chain: añadir la red, puentear fondos y qué hacer dentro, y por qué el «airdrop de Robinhood» no está confirmado.",
        date: "2026-07-28",
      },
    ],
  },
  {
    id: "liquidez-y-yield",
    title: "Liquidez y yield",
    description:
      "Cómo funcionan las pools, los incentivos y las estrategias de rendimiento, y los riesgos que hay detrás.",
    guides: [
      {
        title: "Guía definitiva para usar Meteora en Solana (primera parte)",
        slug: "guia-definitiva-para-usar-meteora",
        description:
          "Los conceptos básicos del DLMM de Meteora: cómo funcionan los bins de liquidez y por qué mejoran la eficiencia del capital, con un ejemplo práctico. Primera parte de una serie.",
        date: "2024-08-24",
        subscribersOnly: true,
      },
      {
        title: "Estrategia Anti-Sawtooth en Meteora",
        slug: "estrategia-anti-sawtooth-en-meteora",
        description:
          "Cómo rellenar con una posición Curve el hueco de liquidez que dejan dos posiciones bid-ask seguidas, para cobrar fees en todo el rango.",
        date: "2025-03-04",
      },
      {
        title: "Entiende los hooks de las v4 de Uniswap para generar más APR",
        slug: "uniswap-v4-y-los-hooks-el-super-poder",
        description:
          "Qué es un hook, qué permite (comisiones dinámicas, órdenes límite, TWAMM), un ejemplo de «impuesto de creador» y cómo protegerte de un hook malicioso.",
        date: "2026-10-02",
      },
      {
        title: "Entiende el flywheel de los DEX ve(3,3)",
        slug: "como-funcionan-los-dex-ve33-y-por",
        description:
          "Por qué los LPs cobran emisiones mientras quien bloquea el token cobra las fees, cómo funciona el voto por epoch y dónde está el riesgo de inflación, con Nest en HyperEVM como ejemplo.",
        date: "2026-08-28",
      },
      {
        title: "Entiende cómo funcionan los loops de Pendle",
        slug: "pt-looping-en-pendle-de-donde-sale",
        description:
          "Qué es un PT, cómo el looping multiplica el APY y de dónde sale de verdad un «72%», cómo se monta paso a paso y los dos riesgos clave: carry negativo y liquidación.",
        date: "2026-08-22",
        subscribersOnly: true,
      },
      {
        title: "Analiza tus pools y conoce si estás siendo rentable o no",
        slug: "como-monitorizo-mis-pools-de-hyperevm",
        description:
          "Las seis métricas para saber si una posición de liquidez concentrada bate a holdear, cómo leerlas y reglas para decidir cuándo tocarla, con Krystal en HyperEVM.",
        date: "2026-08-13",
        subscribersOnly: true,
      },
    ],
  },
  {
    id: "mercados-y-narrativas",
    title: "Mercados y narrativas",
    description:
      "Qué se mueve en activos del mundo real, mercados de predicción y la infraestructura de trading onchain.",
    guides: [
      {
        title:
          "RWA onchain: cómo se trada oro, acciones y petróleo en cripto (y por qué es LA narrativa de 2026)",
        slug: "rwa-onchain-como-se-trada-oro-acciones",
        description:
          "Qué es un RWA, cómo se operan oro, acciones y petróleo en cadena (tokenizados o con perpetuos) y los riesgos: custodio, liquidez, regulación y apalancamiento.",
        date: "2026-10-19",
      },
      {
        title:
          "TxFlow: la L1 que no quiere que construyas liquidez (y por qué eso lo cambia todo)",
        slug: "txflow-la-l1-que-no-quiere-que-construyas",
        description:
          "La tesis de TxFlow, una L1 donde las aplicaciones se conectan a una liquidez compartida, cómo funciona y los riesgos de posicionarse antes de que haya token.",
        date: "2026-08-17",
      },
      {
        title: "Polymarket > Las Finanzas de la Información",
        slug: "polymarket-las-finanzas-de-la-informacion",
        description:
          "Cómo funciona Polymarket (libro de órdenes híbrido, oráculo de UMA, tipos de mercado), el papel de ICE y X, y los escenarios del posible token $POLY. Análisis de noviembre de 2025.",
        date: "2025-11-12",
      },
      {
        title: "HIP-3 DE HYPERLIQUID > Creación de mercados sin permiso",
        slug: "hip-3-de-hyperliquid-creacion-de",
        description:
          "Cómo permite HIP-3 que cualquier equipo despliegue su propio mercado perpetuo en Hyperliquid: stake, subasta de despliegue, oráculo e incentivos para creadores y traders. Análisis de septiembre de 2025, con nota de actualización.",
        date: "2025-09-22",
      },
    ],
  },
  {
    id: "herramientas-y-riesgo",
    title: "Herramientas y gestión del riesgo",
    description:
      "Herramientas para investigar y protegerte, y cómo reconocer las trampas más comunes antes de pagar o firmar nada.",
    guides: [
      {
        title: "10 herramientas necesarias para tu día a día",
        slug: "10-herramientas-necesaria-para-tu",
        description:
          "Diez herramientas y hábitos: seguimiento de airdrops y de rondas de financiación, datos onchain, calculadora de impermanent loss, comprobación de contratos y enlaces, y un agregador para mover fondos entre redes.",
        date: "2024-08-08",
      },
      {
        title: "Si no tienes capital propio, usa las Prop Firms para capitalizarte",
        slug: "cuentas-de-fondeo-en-cripto-como",
        description:
          "Cómo funciona de verdad una cuenta de fondeo, qué exige la evaluación, por qué solo una minoría llega a cobrar y un checklist de señales de alerta antes de pagar.",
        date: "2026-10-11",
        subscribersOnly: true,
      },
    ],
  },
];
