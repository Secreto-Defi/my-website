// Glosario de DeFi en español. Cada término enlaza a las guías de /guias donde
// se explica en profundidad. Los "slug" deben existir en guides.ts (la página
// falla al compilar si alguno no existe).

export type Term = {
  id: string; // ancla (#id) y parte de la URL del término
  name: string;
  definition: string;
  guides: string[]; // slugs de guides.ts
  more?: { href: string; label: string }; // página propia con la explicación completa
};

export const TERMS: Term[] = [
  {
    id: "airdrop",
    name: "Airdrop",
    more: {
      href: "/guias/que-es-un-airdrop",
      label: "Guía completa: qué es un airdrop y cómo farmearlo",
    },
    definition:
      "Reparto gratuito de tokens que un proyecto hace a los usuarios que han usado su producto antes de lanzar el token, normalmente según criterios como la actividad, el volumen o la antigüedad. «Farmear un airdrop» es interactuar de forma sostenida con un protocolo para optar a ese reparto; que llegue a haberlo no está garantizado.",
    guides: [
      "tier-list-de-perp-dexs-donde-farmeo",
      "como-farmear-arc-testnet-paso-a-paso",
    ],
  },
  {
    id: "yield-farming",
    name: "Yield farming",
    more: {
      href: "/guias/yield-farming-y-liquidez-concentrada",
      label: "Guía completa: yield farming y liquidez concentrada para empezar",
    },
    definition:
      "Estrategia que consiste en depositar criptomonedas en protocolos DeFi (pools de liquidez, préstamos, vaults) para obtener un rendimiento en forma de comisiones, intereses o tokens de incentivo. El rendimiento cambia con el uso del protocolo y con los incentivos del momento, y no está asegurado.",
    guides: [
      "guia-definitiva-para-usar-meteora",
      "como-funcionan-los-dex-ve33-y-por",
    ],
  },
  {
    id: "pool-de-liquidez",
    name: "Pool de liquidez (LP)",
    definition:
      "Fondo de dos o más tokens que los usuarios, llamados proveedores de liquidez o LPs, depositan en un exchange descentralizado para que otros puedan intercambiarlos. A cambio, los LPs reciben una parte de las comisiones que genera cada operación.",
    guides: ["masterclass-amms-vs-clmms-vs-dlmms"],
  },
  {
    id: "amm",
    name: "AMM (Automated Market Maker)",
    definition:
      "Tipo de exchange descentralizado que fija los precios con una fórmula matemática aplicada a las reservas de un pool, en lugar de usar un libro de órdenes. Es la base de DEX como Uniswap.",
    guides: ["masterclass-amms-vs-clmms-vs-dlmms"],
  },
  {
    id: "liquidez-concentrada",
    name: "Liquidez concentrada (CLMM)",
    more: {
      href: "/guias/yield-farming-y-liquidez-concentrada#liquidez-concentrada",
      label: "Cómo funciona la liquidez concentrada, con ejemplos de rangos",
    },
    definition:
      "Variante de AMM en la que el proveedor de liquidez elige el rango de precios en el que coloca su capital, en vez de repartirlo por todo el rango posible. Mientras el precio está dentro del rango, el capital trabaja con más eficiencia y genera más comisiones; si el precio se sale, hay que reposicionar la liquidez.",
    guides: [
      "se-un-experto-en-la-liquidez-concentrada",
      "masterclass-amms-vs-clmms-vs-dlmms",
    ],
  },
  {
    id: "dlmm",
    name: "DLMM (Dynamic Liquidity Market Maker)",
    more: {
      href: "/guias/yield-farming-y-liquidez-concentrada#liquidez-concentrada",
      label: "Liquidez concentrada, bins y estrategias Spot, Curve y Bid-Ask",
    },
    definition:
      "Modelo de liquidez concentrada de Meteora, en Solana. Divide el rango de precios en «bins» discretos, cada uno con un precio fijo, y permite elegir cómo distribuir la liquidez entre ellos. Las comisiones se ajustan de forma dinámica con la volatilidad.",
    guides: [
      "masterclass-amms-vs-clmms-vs-dlmms",
      "guia-definitiva-para-usar-meteora",
    ],
  },
  {
    id: "impermanent-loss",
    name: "Impermanent loss (pérdida impermanente)",
    definition:
      "Diferencia entre el valor de los tokens depositados en un pool de liquidez y el que tendrían si simplemente los hubieras mantenido en tu cartera, cuando cambia el precio relativo entre ellos. Se llama «impermanente» porque se reduce si el precio vuelve al punto de entrada, pero se hace real al retirar la liquidez. Las comisiones pueden compensarlo o no.",
    guides: ["como-hedgear-el-impermanent-loss"],
    more: {
      href: "/guias/que-es-la-perdida-impermanente",
      label: "Guía completa: qué es la pérdida impermanente y cómo se calcula",
    },
  },
  {
    id: "apr-y-apy",
    name: "APR y APY",
    more: {
      href: "/guias/yield-farming-y-liquidez-concentrada#de-donde-sale",
      label: "De dónde sale el rendimiento en DeFi",
    },
    definition:
      "El APR es la rentabilidad anual sin reinvertir los intereses; el APY incluye el efecto del interés compuesto. En DeFi son estimaciones basadas en el rendimiento reciente y pueden cambiar de un día para otro, sobre todo cuando parte del rendimiento viene de tokens de incentivo.",
    guides: ["como-monitorizo-mis-pools-de-hyperevm"],
  },
  {
    id: "hook-uniswap-v4",
    name: "Hook (Uniswap v4)",
    definition:
      "Contrato inteligente opcional que, en Uniswap v4, se asocia a una pool para ejecutar código propio en momentos concretos, como antes o después de un swap. Permite, por ejemplo, comisiones dinámicas, pero un hook mal diseñado o malicioso puede perjudicar a quien aporta liquidez, así que conviene comprobar quién lo ha creado.",
    guides: ["uniswap-v4-y-los-hooks-el-super-poder"],
  },
  {
    id: "ve33",
    name: "ve(3,3)",
    definition:
      "Modelo de DEX que combina el vote-escrow (bloquear el token de gobernanza a cambio de poder de voto) con la teoría de juegos (3,3). Quien bloquea el token vota a qué pools van las emisiones y recibe comisiones y recompensas de esas pools, en lugar de los LPs. Parte del rendimiento procede de emisiones del propio token.",
    guides: ["como-funcionan-los-dex-ve33-y-por"],
  },
  {
    id: "pt-y-yt",
    name: "PT y YT (Pendle)",
    definition:
      "En Pendle, un activo que genera rendimiento se divide en dos tokens. El PT (Principal Token) se canjea 1:1 por el activo al vencimiento y se compra con descuento, lo que equivale a un rendimiento fijo implícito. El YT (Yield Token) da derecho al rendimiento variable que genere el activo hasta el vencimiento.",
    guides: ["ptyt-el-rendimiento-tokenizado"],
  },
  {
    id: "looping",
    name: "Looping",
    definition:
      "Estrategia de apalancamiento que consiste en depositar un activo como garantía, pedir prestado contra él, volver a comprar el mismo activo y repetir el ciclo para multiplicar la exposición. Amplifica tanto las ganancias como las pérdidas y añade riesgo de liquidación.",
    guides: ["pt-looping-en-pendle-de-donde-sale"],
  },
  {
    id: "perp-dex",
    name: "Perp DEX",
    definition:
      "Exchange descentralizado de futuros perpetuos: contratos que replican el precio de un activo sin fecha de vencimiento, con apalancamiento y una tasa de financiación (funding) que mantiene su precio cerca del precio spot. Hyperliquid es el ejemplo más conocido.",
    guides: [
      "tier-list-de-perp-dexs-donde-farmeo",
      "robinhood-te-paga-lit-por-operar",
    ],
  },
  {
    id: "rwa",
    name: "RWA (Real World Assets)",
    definition:
      "Activos del mundo real, como oro, acciones, bonos o petróleo, representados con tokens o con contratos derivados en una blockchain para poder operarlos onchain, a cualquier hora y sin intermediarios tradicionales.",
    guides: ["rwa-onchain-como-se-trada-oro-acciones"],
  },
  {
    id: "hip-3",
    name: "HIP-3 (Hyperliquid)",
    definition:
      "Propuesta de mejora de Hyperliquid que permite a terceros lanzar sus propios mercados de perpetuos en la red sin pedir permiso al equipo, cumpliendo ciertos requisitos de stake. Abre la puerta a mercados sobre activos muy variados.",
    guides: ["hip-3-de-hyperliquid-creacion-de"],
  },
  {
    id: "mercado-de-predicciones",
    name: "Mercado de predicciones",
    definition:
      "Plataforma donde se apuesta con dinero real sobre el resultado de eventos futuros, como elecciones, deportes o datos económicos. El precio de cada resultado se interpreta como la probabilidad que el mercado le asigna. Polymarket es el más conocido.",
    guides: ["polymarket-las-finanzas-de-la-informacion"],
  },
  {
    id: "testnet-incentivada",
    name: "Testnet incentivada",
    definition:
      "Red de pruebas de un proyecto en la que los usuarios realizan tareas (swaps, puentes, añadir liquidez) con tokens sin valor real, con la expectativa, no siempre confirmada, de una recompensa futura. Permite farmear un posible airdrop sin arriesgar capital, a cambio de tiempo.",
    guides: ["como-farmear-arc-testnet-paso-a-paso"],
  },
  {
    id: "cuenta-de-fondeo",
    name: "Cuenta de fondeo (prop firm)",
    definition:
      "Servicio en el que una empresa te da acceso a capital para operar después de superar una evaluación, y a cambio te paga un porcentaje de los beneficios. Suele implicar una cuota de entrada y reglas estrictas de gestión del riesgo, así que conviene leerlas con calma antes de empezar.",
    guides: ["cuentas-de-fondeo-en-cripto-como"],
  },
  {
    id: "tvl",
    name: "TVL (Total Value Locked, valor total bloqueado)",
    definition:
      "Valor total de los activos depositados en un protocolo DeFi, normalmente expresado en dólares. Sirve para medir el tamaño y la adopción de un protocolo, pero puede inflarse con incentivos temporales y cambia con el precio de los tokens depositados.",
    guides: [],
  },
  {
    id: "funding-rate",
    name: "Funding rate (tasa de financiación)",
    definition:
      "Pago periódico entre traders largos y cortos en un mercado de perpetuos que mantiene el precio del contrato cerca del precio spot. Con una tasa positiva pagan los largos a los cortos; con una negativa, al revés. Hay que tenerlo en cuenta como coste o ingreso al mantener una posición.",
    guides: [
      "tier-list-de-perp-dexs-donde-farmeo",
      "como-hedgear-el-impermanent-loss",
    ],
  },
  {
    id: "staking",
    name: "Staking",
    definition:
      "Bloquear tokens para participar en la validación y la seguridad de una red proof of stake a cambio de recompensas. En el staking líquido recibes un token que representa tu depósito y que puedes seguir usando en DeFi, a costa de añadir el riesgo del contrato que lo emite.",
    guides: [],
  },
  {
    id: "restaking",
    name: "Restaking",
    definition:
      "Reutilizar activos que ya están en staking para asegurar además otros protocolos o servicios, a cambio de rendimiento adicional. Cada capa añade riesgo, por ejemplo penalizaciones (slashing) si uno de esos servicios falla.",
    guides: [],
  },
  {
    id: "bridge",
    name: "Bridge (puente)",
    definition:
      "Protocolo que permite mover activos de una blockchain a otra. Suele bloquear o quemar el activo en la red de origen y emitir o liberar su equivalente en la de destino. Es una de las piezas con más riesgo técnico de DeFi, así que conviene usar los puentes oficiales de cada red y probar antes con una cantidad pequeña.",
    guides: [],
  },
  {
    id: "slippage",
    name: "Slippage (deslizamiento)",
    definition:
      "Diferencia entre el precio que esperas en una operación y el precio al que realmente se ejecuta, por el movimiento del mercado o por falta de liquidez. En un AMM crece con el tamaño de la operación en relación con la pool, y casi todos los DEX permiten fijar el máximo que toleras.",
    guides: ["masterclass-amms-vs-clmms-vs-dlmms"],
  },
  {
    id: "stablecoin",
    name: "Stablecoin",
    definition:
      "Criptomoneda diseñada para mantener un valor estable, normalmente un dólar. Puede estar respaldada por reservas, como USDC; por criptoactivos sobrecolateralizados; o por mecanismos algorítmicos. No todas mantienen la paridad en todo momento, así que conviene conocer cómo está respaldada la que usas.",
    guides: [],
  },
  {
    id: "wallet-autocustodia",
    name: "Wallet de autocustodia (cartera o billetera)",
    definition:
      "Aplicación o dispositivo donde guardas tus claves privadas y desde el que firmas las transacciones. En autocustodia eres tú quien controla los fondos, sin intermediarios, y por eso proteger la frase semilla es crítico: quien la tenga controla la cartera.",
    guides: [],
    more: {
      href: "/guias/que-es-un-airdrop#seguridad",
      label: "Normas básicas de seguridad al farmear airdrops",
    },
  },
  {
    id: "liquidacion",
    name: "Liquidación",
    definition:
      "Cierre forzoso de una posición apalancada o de un préstamo cuando el valor de la garantía cae por debajo de un umbral. Puede ocurrir en perpetuos y en protocolos de préstamos, y suele suponer perder parte o toda la garantía.",
    guides: [
      "pt-looping-en-pendle-de-donde-sale",
      "como-hedgear-el-impermanent-loss",
    ],
  },
  {
    id: "apalancamiento",
    name: "Apalancamiento",
    definition:
      "Operar con fondos prestados para ampliar la exposición más allá del capital propio. Multiplica tanto las ganancias como las pérdidas y expone a la liquidación si el mercado va en contra.",
    guides: ["pt-looping-en-pendle-de-donde-sale"],
  },
  {
    id: "snapshot",
    name: "Snapshot",
    definition:
      "Foto del estado de una blockchain en un momento concreto, con saldos y posiciones, que un proyecto usa para decidir quién recibe un reparto de tokens y cuánto. Suele hacerse en un bloque o fecha que no se avisa con antelación.",
    guides: [],
    more: {
      href: "/guias/que-es-un-airdrop#tipos",
      label: "Tipos de airdrop y cómo se reparten",
    },
  },
  {
    id: "sybil",
    name: "Sybil (filtro anti-sybil)",
    definition:
      "Práctica de crear muchas cuentas o carteras para multiplicar la recompensa de un reparto. Los proyectos aplican filtros anti-sybil para descartarlas y, a veces, dejan fuera a usuarios legítimos con patrones que parecen sospechosos.",
    guides: [],
    more: {
      href: "/guias/que-es-un-airdrop#como-farmear",
      label: "Cómo farmear un airdrop, paso a paso",
    },
  },
];
