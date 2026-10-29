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
      {
        title:
          "Robinhood te paga $LIT por operar: así se activa el 2x que casi nadie usa",
        slug: "robinhood-te-paga-lit-por-operar",
        description:
          "Cómo ganar el doble de puntos de $LIT operando los perpetuos de Lighter desde la Robinhood Wallet y no desde su web, con los pasos para posicionarte y los riesgos: no hay airdrop de Robinhood confirmado, la liquidez es baja y los incentivos se acaban.",
        date: "2026-08-05",
      },
      {
        title:
          "Cómo generé 1,4 millones de dólares de volumen farmeando RiseX (con un bot y sin saber tradear)",
        slug: "como-genere-14-millones-de-dolares",
        description:
          "Cómo farmear volumen en RiseX con un bot de market making de TreadFi: la configuración, la regla del spread según la volatilidad y los resultados reales de todos los ciclos, pérdidas incluidas.",
        date: "2026-07-21",
        subscribersOnly: true,
      },
      {
        title:
          "Los Agents de TreadFi: cómo elegir el mejor par y proteger tu PNL sin ser trader",
        slug: "los-agents-de-treadfi-como-elegir",
        description:
          "Cómo usar los agentes de IA de TreadFi para elegir el mejor par donde farmear, vigilar el coste y proteger el PNL, con acceso de solo lectura, un ejemplo real y los límites del sistema.",
        date: "2026-07-24",
        subscribersOnly: true,
      },
      {
        title: "Generé $1,6M de volumen en RiseX para solo 195 puntos...",
        slug: "genere-16m-de-volumen-en-risex-para",
        description:
          "Qué puntúa de verdad el programa Ignite de RiseX, con números reales: el volumen de un bot de market making dio pocos puntos. El giro a delta neutral, los errores cometidos y los riesgos.",
        date: "2026-08-10",
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
        title: "Guía definitiva para usar Meteora en Solana (segunda parte)",
        slug: "guia-definitiva-para-usar-meteora-370",
        description:
          "El bin-step explicado: qué es un bin, cómo el porcentaje entre bins define el rango que genera comisiones, por qué un bin-step pequeño rinde más pero arriesga más pérdida impermanente, y la estrategia bid-ask.",
        date: "2024-08-27",
        subscribersOnly: true,
      },
      {
        title: "Guía definitiva para usar Meteora (parte 3)",
        slug: "guia-definitiva-para-usar-meteora-6c6",
        description:
          "Las novedades de la dApp de Meteora: retirar liquidez de una sola moneda, el aviso cuando el precio de la pool se desvía del mercado, la alerta por depósitos grandes (20 % del TVL o más) y cómo seguir tus posiciones desde Portfolio.",
        date: "2024-08-30",
        subscribersOnly: true,
      },
      {
        title: "La guía definitiva para usar Meteora (Parte 4)",
        slug: "la-guia-definitiva-para-usar-meteora",
        description:
          "Las tres estrategias de liquidez de los DLMM de Meteora: Spot (concentrado, spread y wide), Curve y Bid-Ask. Para qué mercado sirve cada una y cuándo toca reequilibrar.",
        date: "2024-09-02",
        subscribersOnly: true,
      },
      {
        title: "Masterclass AMMs vs CLMMs vs DLMMs",
        slug: "masterclass-amms-vs-clmms-vs-dlmms",
        description:
          "En qué se diferencian un AMM, un CLMM y un DLMM, y qué parámetros revisar antes de abrir una posición en Meteora (bin step, comisiones base, máxima y dinámica), con sus riesgos.",
        date: "2024-09-05",
        subscribersOnly: true,
      },
      {
        title: "Sé un experto en la liquidez concentrada",
        slug: "se-un-experto-en-la-liquidez-concentrada",
        description:
          "Cómo usar Hawksight, un agregador de liquidez para Solana, con un ejemplo práctico: rebalanceo automático de rangos, reinversión de fees, stop loss y take profit. Escrita con el producto en beta: comprueba sus condiciones actuales.",
        date: "2024-09-09",
        subscribersOnly: true,
      },
      {
        title: "¡Actualizaciones importantes en Meteora! (Parte 1)",
        slug: "actualizaciones-importantes-en-meteora",
        description:
          "Cómo usar las franjas horarias del Fee/TVL de Meteora para ver el APR real de una pool y descartar tokens sin volumen, con un ejemplo en el que un 654 % de APR a 24 horas se queda en un 7 % en las últimas 4.",
        date: "2025-02-12",
      },
      {
        title: "¡Actualizaciones importantes en Meteora! (Parte 2)",
        slug: "actualizaciones-importantes-en-meteora-69e",
        description:
          "Las novedades de seguridad y gestión de Meteora: el aviso de Freeze Authority, reclamar todas las fees o cerrar todas las posiciones de una vez, y mejoras en Portfolio, al añadir y retirar liquidez y en las comisiones de apertura.",
        date: "2025-02-17",
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
        title: "PT/YT > El rendimiento tokenizado",
        slug: "ptyt-el-rendimiento-tokenizado",
        description:
          "Qué son los tokens PT y YT de Pendle y cómo separan principal y rendimiento, con un ejemplo paso a paso, su uso para cobertura y especulación, el impacto en los LPs y un caso práctico con stHYPE en HyperEVM y Valantis.",
        date: "2025-09-05",
        subscribersOnly: true,
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
      {
        title: "Cómo hedgear el Impermanent Loss de tus LPs (con perps y lending)",
        slug: "como-hedgear-el-impermanent-loss",
        description:
          "Qué es el Impermanent Loss y cómo neutralizarlo con una posición corta en un perp (delta-neutral): cómo se monta, el funding que a veces cobras por estar corto y los riesgos reales: liquidación, rebalanceo y cuándo no compensa.",
        date: "2026-10-28",
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
        title: "Sé un detective onchain",
        slug: "se-un-detective-onchain",
        description:
          "Cómo usar InsightX para ver cómo se reparte un token entre sus holders, agrupar wallets en clusters y detectar wallets proxy, con un ejemplo práctico paso a paso.",
        date: "2025-01-26",
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
