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
      href: "/guias/que-es-meteora#bins",
      label: "Cómo funciona el DLMM: bins, bin step y estrategias de Meteora",
    },
    definition:
      "Modelo de liquidez concentrada de Meteora, en Solana. Divide el rango de precios en «bins» discretos, cada uno con un precio fijo, y permite elegir cómo distribuir la liquidez entre ellos. Las comisiones se ajustan de forma dinámica con la volatilidad.",
    guides: [
      "masterclass-amms-vs-clmms-vs-dlmms",
      "guia-definitiva-para-usar-meteora",
    ],
  },
  {
    id: "meteora",
    name: "Meteora",
    more: {
      href: "/guias/que-es-meteora",
      label: "Guía completa: qué es Meteora y cómo funciona el DLMM",
    },
    definition:
      "Conjunto de productos de liquidez de Solana. Los principales son el DLMM (liquidez concentrada por bins), el DAMM v2 (un AMM configurable) y la Dynamic Bonding Curve (lanzamiento de tokens). Su token es MET.",
    guides: ["actualizaciones-importantes-en-meteora"],
  },
  {
    id: "bin",
    name: "Bin (DLMM)",
    more: {
      href: "/guias/que-es-meteora#bins",
      label: "Cómo funcionan los bins, con la fórmula del precio",
    },
    definition:
      "Cada uno de los puntos de precio en los que el DLMM de Meteora reparte la liquidez. Cada bin tiene un precio fijo y solo uno está activo a la vez: el que contiene el precio de mercado, donde se ejecutan los swaps. Dentro del bin activo no hay slippage mientras quede liquidez en él.",
    guides: ["guia-definitiva-para-usar-meteora"],
  },
  {
    id: "bin-step",
    name: "Bin step",
    more: {
      href: "/guias/que-es-meteora#bins",
      label: "Qué rango cubre una posición según el bin step",
    },
    definition:
      "Distancia de precio entre dos bins vecinos del DLMM, medida en puntos básicos (un punto básico es un 0,01 %). El máximo es de 400 puntos básicos, un 4 % entre bins. Un bin step pequeño suele usarse en pares estables y uno grande, en pares volátiles.",
    guides: ["guia-definitiva-para-usar-meteora-370"],
  },
  {
    id: "spot-curve-bid-ask",
    name: "Spot, Curve y Bid-Ask (Meteora)",
    more: {
      href: "/guias/que-es-meteora#estrategias",
      label: "Las tres formas de repartir la liquidez, comparadas",
    },
    definition:
      "Las tres formas de repartir la liquidez entre los bins del DLMM. Spot la reparte de forma uniforme; Curve la concentra en el centro del rango; Bid-Ask hace lo contrario, con más liquidez en los bordes, y se usa en mercados volátiles o para entrar y salir de forma escalonada.",
    guides: [
      "la-guia-definitiva-para-usar-meteora",
      "estrategia-anti-sawtooth-en-meteora",
    ],
  },
  {
    id: "freeze-authority",
    name: "Freeze Authority",
    more: {
      href: "/guias/que-es-meteora#riesgos",
      label: "Cómo detectar tokens con trampas antes de aportar liquidez",
    },
    definition:
      "Permiso que algunos tokens de Solana conservan y que permite a su creador congelar compras, ventas o transferencias. En un token nuevo es una señal de riesgo: Meteora y herramientas como JupShield muestran un aviso cuando está activo.",
    guides: ["actualizaciones-importantes-en-meteora-69e"],
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
    id: "pendle",
    name: "Pendle",
    more: {
      href: "/guias/que-es-pendle",
      label: "Guía completa: qué es Pendle, cómo funcionan PT y YT y qué riesgos tiene",
    },
    definition:
      "Protocolo de DeFi que separa un activo que genera rendimiento en dos tokens negociables, el PT (principal) y el YT (rendimiento), con una fecha de vencimiento. Permite fijar un rendimiento, apostar por que suba o aportar liquidez a esos mercados. Tiene además Boros, para operar tipos de financiación con margen, y PendleLoop, para hacer looping.",
    guides: [
      "ptyt-el-rendimiento-tokenizado",
      "pt-looping-en-pendle-de-donde-sale",
    ],
  },
  {
    id: "pt-y-yt",
    name: "PT y YT (Pendle)",
    more: {
      href: "/guias/que-es-pendle#tokenizacion",
      label: "Cómo se divide un activo en SY, PT y YT",
    },
    definition:
      "En Pendle, un activo que genera rendimiento se divide en dos tokens. El PT (Principal Token) se canjea 1:1 por el activo al vencimiento y se compra con descuento, lo que equivale a un rendimiento fijo implícito. El YT (Yield Token) da derecho al rendimiento variable que genere el activo hasta el vencimiento.",
    guides: ["ptyt-el-rendimiento-tokenizado"],
  },
  {
    id: "sy-standardized-yield",
    name: "SY (Standardized Yield)",
    more: {
      href: "/guias/que-es-pendle#tokenizacion",
      label: "Cómo se divide un activo en SY, PT y YT",
    },
    definition:
      "Estándar de Pendle para envolver un token que genera rendimiento. Pendle crea los PT y los YT a partir del SY, y su AMM negocia PT contra SY. En la mayoría de los casos 1 SY equivale a 1 unidad del activo, pero no siempre, y la app suele hacer la conversión por ti.",
    guides: ["ptyt-el-rendimiento-tokenizado"],
  },
  {
    id: "apy-implicito",
    name: "APY implícito (Pendle)",
    more: {
      href: "/guias/que-es-pendle#pt",
      label: "Cómo se calcula el rendimiento fijo de un PT",
    },
    definition:
      "En Pendle, el rendimiento anual que descuenta el mercado para un activo hasta el vencimiento, calculado a partir del precio del PT y del YT. Coincide con el APY fijo de quien compra el PT y lo mantiene hasta el vencimiento, y se compara con el APY subyacente, el rendimiento real reciente del activo.",
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
    more: {
      href: "/guias/perp-dex-y-farmeo-de-puntos",
      label: "Guía completa: qué es un perp DEX y cómo farmear sus puntos",
    },
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
    more: {
      href: "/guias/que-es-hyperliquid#hips",
      label: "Reglas de HIP-3 y qué riesgos tiene",
    },
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
    more: {
      href: "/guias/perp-dex-y-farmeo-de-puntos#que-es",
      label: "Cómo funciona el funding en un perp DEX",
    },
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
    id: "staking-liquido",
    name: "Staking líquido (liquid staking)",
    more: {
      href: "/guias/que-es-kinetiq#que-es",
      label: "Staking nativo frente a staking líquido, con el ejemplo de HYPE",
    },
    definition:
      "Forma de hacer staking en la que depositas tus tokens en un protocolo, este los delega en validadores y te entrega a cambio un token que representa tu depósito (LST). Ese token acumula las recompensas y se puede vender o usar en DeFi sin esperar el plazo de retiro, a cambio de asumir el riesgo de los contratos del protocolo y el de que el token cotice por debajo de su valor.",
    guides: [],
  },
  {
    id: "kinetiq",
    name: "Kinetiq",
    more: {
      href: "/guias/que-es-kinetiq",
      label: "Guía completa: qué es Kinetiq, cómo funciona kHYPE y qué riesgos tiene",
    },
    definition:
      "Protocolo de staking líquido de Hyperliquid. Recibe HYPE, lo delega en validadores con su sistema StakeHub y entrega kHYPE. Tiene además una vault de estrategias (Earn), mercados de perpetuos HIP-3 (Markets), un servicio para lanzar exchanges HIP-3 (Launch), la capa 2 Elysium y el token de gobernanza KNTQ.",
    guides: [],
  },
  {
    id: "khype",
    name: "kHYPE",
    more: {
      href: "/guias/que-es-kinetiq#khype",
      label: "Cómo funciona kHYPE: tipo de cambio, recompensas y comisión",
    },
    definition:
      "Token de staking líquido de Kinetiq en HyperEVM. Representa HYPE en staking y no aumenta en cantidad: lo que sube con las recompensas es su tipo de cambio frente a HYPE. Se puede retirar por HYPE en un plazo de 8 o 9 días o vender en un mercado al instante.",
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
      href: "/guias/seguridad-en-defi#habitos",
      label: "Hábitos de seguridad para proteger tu wallet",
    },
  },
  {
    id: "liquidacion",
    name: "Liquidación",
    more: {
      href: "/guias/perp-dex-y-farmeo-de-puntos#que-es",
      label: "Cómo se liquida una posición en un perp DEX",
    },
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
    more: {
      href: "/guias/perp-dex-y-farmeo-de-puntos#que-es",
      label: "Apalancamiento, margen y liquidación en un perp DEX",
    },
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
  {
    id: "aprobacion-de-tokens",
    name: "Aprobación de tokens (allowance)",
    definition:
      "Permiso que das a un contrato inteligente para que gaste, en tu nombre, una cantidad de uno de tus tokens. Hace falta para operar en muchos protocolos DeFi, no caduca por sí solo y desconectar la wallet de la web no lo elimina: hay que revocarlo. Una aprobación ilimitada expone todo el saldo de ese token, también el que deposites después.",
    guides: ["como-evitar-que-te-vacien-la-wallet"],
    more: {
      href: "/guias/seguridad-en-defi#aprobaciones",
      label: "Qué son las aprobaciones y cómo revocarlas",
    },
  },
  {
    id: "permit-y-permit2",
    name: "Permit y Permit2",
    definition:
      "Formas de conceder una aprobación de tokens con una firma que no cuesta gas, en lugar de con una transacción. Permit (EIP-2612) solo lo soportan algunos tokens; Permit2, creado por Uniswap, funciona con cualquiera y añade subaprobaciones con caducidad. Son cómodos, pero algunas wallets no los avisan como una aprobación y los estafadores los usan para vaciar wallets.",
    guides: [],
    more: {
      href: "/guias/seguridad-en-defi#firmas",
      label: "Cómo funcionan las firmas Permit y cómo cortarlas",
    },
  },
  {
    id: "eip-7702",
    name: "EIP-7702 (delegación de cuenta)",
    definition:
      "Mejora de Ethereum, activada con la actualización Pectra, que permite a una cuenta normal delegar su ejecución en un contrato, por ejemplo para agrupar varias operaciones en una sola transacción. Una delegación a un contrato malicioso es una vía nueva de robo: conviene revisar las delegaciones activas y revocarlas desde la propia wallet.",
    guides: [],
    more: {
      href: "/guias/seguridad-en-defi#firmas",
      label: "Permit, Permit2 y EIP-7702: las firmas que dan permisos",
    },
  },
  {
    id: "drainer",
    name: "Drainer (wallet drainer)",
    definition:
      "Kit de phishing que usa una web falsa, a menudo un falso reclamo de airdrop o de mint, para que conectes tu wallet y firmes una aprobación, una firma Permit o una delegación. Con esa firma, un script mueve tus activos sin necesitar tu frase semilla. Se combate leyendo lo que firmas y revisando tus permisos con regularidad.",
    guides: [
      "como-evitar-que-te-vacien-la-wallet",
      "10-herramientas-necesaria-para-tu",
    ],
    more: {
      href: "/guias/seguridad-en-defi#estafas",
      label: "Las estafas más comunes y cómo reconocerlas",
    },
  },
  {
    id: "phishing",
    name: "Phishing (en cripto)",
    definition:
      "Engaño para que entregues tu frase semilla o firmes algo malicioso haciéndose pasar por una web, un soporte o una cuenta legítimos: enlaces en mensajes o anuncios, falsos reclamos de airdrop, cuentas de redes sociales hackeadas. Ningún servicio legítimo te pide la frase semilla. Entra siempre desde los enlaces oficiales y verifica el dominio.",
    guides: ["10-herramientas-necesaria-para-tu"],
    more: {
      href: "/guias/seguridad-en-defi#estafas",
      label: "Las estafas más comunes y cómo reconocerlas",
    },
  },
  {
    id: "address-poisoning",
    name: "Address poisoning (envenenamiento de direcciones)",
    definition:
      "Estafa en la que el atacante te envía una transacción de valor insignificante, a menudo de cero tokens, desde una dirección que empieza y termina igual que otra con la que has operado, para que aparezca en tu historial. Si la copias de ahí por error, le envías los fondos. Verifica siempre la dirección completa y guarda las habituales en tus contactos.",
    guides: ["como-evitar-que-te-vacien-la-wallet"],
    more: {
      href: "/guias/seguridad-en-defi#estafas",
      label: "Cómo funciona el address poisoning y cómo evitarlo",
    },
  },
  {
    id: "frase-semilla",
    name: "Frase semilla (seed phrase)",
    definition:
      "Lista de palabras, normalmente 12 o 24, con la que se recupera una wallet y todas sus claves. Quien la tenga controla los fondos, y ningún servicio legítimo te la pedirá. No la compartas, no la escribas en ninguna web y no le hagas capturas de pantalla; guárdala sin conexión.",
    guides: [],
    more: {
      href: "/guias/seguridad-en-defi#habitos",
      label: "Hábitos de seguridad para proteger tu wallet",
    },
  },
  {
    id: "hardware-wallet",
    name: "Hardware wallet (cartera física)",
    definition:
      "Dispositivo que guarda tus claves privadas y firma las transacciones sin que la clave salga de él, así que te protege aunque tu ordenador esté comprometido. Te permite confirmar en su pantalla lo que firmas, pero no evita que firmes tú una aprobación maliciosa.",
    guides: [],
    more: {
      href: "/guias/seguridad-en-defi#habitos",
      label: "Hábitos de seguridad para proteger tu wallet",
    },
  },
  {
    id: "firma-a-ciegas",
    name: "Firma a ciegas (blind signing) y Clear Signing",
    definition:
      "Firmar una transacción o un mensaje que la wallet muestra en datos técnicos que una persona no puede interpretar, sin saber qué autorizas. Clear Signing, basado en el estándar ERC-7730 y presentado en mayo de 2026, busca que las wallets describan en lenguaje claro lo que hará cada operación; depende de que cada wallet lo integre.",
    guides: [],
    more: {
      href: "/guias/seguridad-en-defi#firmas",
      label: "Por qué importa entender lo que firmas",
    },
  },
  {
    id: "hyperliquid",
    name: "Hyperliquid",
    definition:
      "Blockchain de capa 1 centrada en un exchange descentralizado, con libros de órdenes de perpetuos y de spot totalmente en cadena y un token propio, HYPE. Su estado se divide en HyperCore, donde viven los libros, el margen y las liquidaciones, y HyperEVM, un entorno de contratos inteligentes compatible con Ethereum.",
    guides: [
      "hip-3-de-hyperliquid-creacion-de",
      "tier-list-de-perp-dexs-donde-farmeo",
    ],
    more: {
      href: "/guias/que-es-hyperliquid",
      label: "Guía completa: qué es Hyperliquid y cómo funciona",
    },
  },
  {
    id: "hype",
    name: "HYPE (token de Hyperliquid)",
    definition:
      "Token nativo de Hyperliquid. Se usa para pagar el gas en HyperEVM, para hacer staking y delegar en validadores, para reducir las comisiones de trading y como stake exigido a quien despliega mercados HIP-3. El 31 % de su oferta se repartió entre usuarios el 29 de noviembre de 2024.",
    guides: [],
    more: {
      href: "/guias/que-es-hyperliquid#hype",
      label: "Reparto, utilidad y staking de HYPE",
    },
  },
  {
    id: "hypercore-y-hyperevm",
    name: "HyperCore y HyperEVM",
    definition:
      "Los dos componentes del estado de Hyperliquid, asegurados por el mismo consenso (HyperBFT). HyperCore incluye los libros de órdenes de perpetuos y de spot, el margen y las liquidaciones. HyperEVM es un entorno de contratos inteligentes de propósito general, con HYPE como token de gas, cuyos contratos pueden leer el estado de HyperCore y enviarle acciones.",
    guides: ["como-monitorizo-mis-pools-de-hyperevm"],
    more: {
      href: "/guias/que-es-hyperliquid#que-es",
      label: "Cómo está construido Hyperliquid",
    },
  },
  {
    id: "margen-cruzado-y-aislado",
    name: "Margen cruzado y margen aislado",
    definition:
      "Dos modos de colateral en los mercados de perpetuos. En margen cruzado, todas tus posiciones comparten el colateral de la cuenta: aprovechas mejor el capital, pero una pérdida puede arrastrar al resto. En margen aislado, el colateral de cada posición queda limitado a ese activo y solo arriesgas ese margen.",
    guides: [],
    more: {
      href: "/guias/que-es-hyperliquid#perps",
      label: "Margen, funding y liquidaciones en Hyperliquid",
    },
  },
  {
    id: "auto-deleveraging",
    name: "Auto-deleveraging (ADL)",
    definition:
      "Último recurso de un exchange de derivados para seguir siendo solvente. En Hyperliquid, si el valor de una cuenta (o de una posición aislada) se vuelve negativo, se cierran posiciones con beneficio del lado contrario, al precio mark anterior, ordenadas por beneficio no realizado y apalancamiento. Por eso una posición ganadora puede cerrarse sin que tú lo hayas decidido.",
    guides: [],
    more: {
      href: "/guias/que-es-hyperliquid#perps",
      label: "Cómo se liquida una posición en Hyperliquid",
    },
  },
  {
    id: "hlp",
    name: "HLP (Hyperliquidity Provider)",
    definition:
      "Vault comunitario de Hyperliquid al que cualquiera puede aportar liquidez para compartir sus resultados. Hace market making con varias estrategias, ejecuta liquidaciones y recibe parte de las comisiones de trading; los depósitos se bloquean 4 días desde el último depósito. Comparte ganancias y pérdidas, así que no es un rendimiento garantizado.",
    guides: [],
    more: {
      href: "/guias/que-es-hyperliquid#ecosistema",
      label: "Qué es el HLP dentro de Hyperliquid",
    },
  },
];
