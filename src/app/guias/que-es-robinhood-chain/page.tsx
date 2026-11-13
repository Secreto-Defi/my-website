import { getPillar } from "../pilares";
import PillarPage, { pillarMetadata } from "../pillar-page";
import {
  B,
  Callout,
  Code,
  DataTable,
  ExternalLink,
  GlossaryLink,
  GuideLink,
  H3,
  InternalLink,
  Li,
  Note,
  Ol,
  P,
  Ul,
} from "../pillar-ui";

const PILLAR = getPillar("/guias/que-es-robinhood-chain");
const CAMPAIGN = "robinhood-chain";
const TITLE = "Qué es Robinhood Chain y cómo funciona | Secreto Defi";
const DESCRIPTION =
  "Qué es Robinhood Chain, cómo funcionan los Stock Tokens, qué puedes hacer desde España, cómo añadir la red y puentear fondos, y qué riesgos tiene.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt:
    "Qué es Robinhood Chain y cómo funciona | La Agenda de SecretoDefi",
});

const DOCS = "https://docs.robinhood.com/chain";
const NEWSROOM =
  "https://robinhood.com/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/";

export default function RobinhoodChainPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Qué es Robinhood Chain: la capa 2 de Robinhood, los Stock Tokens y sus riesgos"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            Robinhood Chain es una{" "}
            <GlossaryLink id="capa-2">capa 2</GlossaryLink> de Ethereum creada
            por Robinhood, el bróker estadounidense, y construida con la
            tecnología de Arbitrum. Su red principal está abierta desde el 1 de
            julio de 2026 y está pensada para negociar activos del mundo real
            tokenizados, sobre todo acciones y ETF de Estados Unidos, además de
            las aplicaciones DeFi habituales.
          </P>
          <P>
            En esta página te explico cómo funciona la red, qué son exactamente
            los Stock Tokens y qué derechos dan, qué puedes hacer desde España y
            qué no, qué hay en el ecosistema, cómo se añade la red a tu wallet y
            qué riesgos asumes. Está escrita con la documentación oficial y
            fuentes citadas, y las cifras que cambian a menudo llevan su fecha
            de consulta.
          </P>
        </>
      }
      summary={[
        "Robinhood Chain es una capa 2 de Ethereum operada por Robinhood y construida con la tecnología de Arbitrum. Está en mainnet desde el 1 de julio de 2026, paga el gas en ETH y no tiene token propio.",
        "Los Stock Tokens no son acciones: según su documentación son títulos de deuda tokenizados emitidos por Robinhood Assets (Jersey) Limited, que dan exposición al precio pero ningún derecho sobre la acción ni sobre la empresa.",
        "Robinhood no ha anunciado ningún token ni airdrop de la red. Lo que sí existe es un programa de puntos de Lighter, el exchange de perpetuos integrado en Robinhood Wallet, que es de un tercero y tiene sus propias condiciones.",
        "Es una red joven y centralizada: L2BEAT indica que todavía no alcanza su nivel mínimo (Stage 0), que hay un único secuenciador y que existe un filtro de transacciones capaz de bloquear incluso las que se fuerzan desde Ethereum.",
        "Entrar es fácil y salir es lento: un depósito por el puente oficial tarda unos 10 minutos, pero retirar a Ethereum por esa misma vía tarda 7 días. Los puentes rápidos de terceros evitan la espera a cambio de una comisión y de confiar en ellos.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es Robinhood Chain",
          children: (
            <>
              <P>
                Según su documentación, Robinhood Chain es una blockchain de
                capa 2 sin permisos y compatible con Ethereum, construida sobre
                el marco de cadenas dedicadas de Arbitrum. «Sin permisos»
                significa que cualquiera puede desplegar contratos o usar la red
                con una wallet normal, sin pedir autorización a Robinhood. El
                gas se paga en ETH.
              </P>
              <P>
                La red no nació de cero. En junio de 2025 Robinhood lanzó para
                clientes europeos más de 200 acciones y ETF tokenizados sobre
                Arbitrum One, y anunció que preparaba su propia cadena. La red
                de pruebas pública llegó en febrero de 2026 y la principal el 1
                de julio de 2026, presentada en un evento en Londres.
              </P>
              <DataTable
                caption="Ficha de Robinhood Chain (documentación de Robinhood y L2BEAT, consultadas el 13 de noviembre de 2026)."
                head={["", "Robinhood Chain"]}
                rows={[
                  ["Tipo", "Capa 2 de Ethereum sobre tecnología de Arbitrum, con pruebas de fraude."],
                  ["En mainnet desde", "1 de julio de 2026."],
                  ["Token de gas", "ETH."],
                  ["Token propio", "No tiene."],
                  ["Quién la opera", "Robinhood, con un único secuenciador."],
                  ["Chain ID", "4663."],
                  ["Para qué está pensada", "Acciones y ETF tokenizados, y DeFi alrededor de ellos."],
                ]}
              />
              <Callout title="No hay token ni airdrop de Robinhood Chain">
                Robinhood no ha anunciado ningún token de la red ni ningún
                airdrop. Los incentivos que existen son de aplicaciones de
                terceros, como el programa de puntos de Lighter. Cualquier web
                que te ofrezca reclamar un «airdrop de Robinhood» debe hacerte
                sospechar.
              </Callout>
            </>
          ),
        },
        {
          id: "como-funciona",
          title: "Cómo funciona: secuenciador, comisiones, puente y gobierno",
          children: (
            <>
              <H3>Un único secuenciador</H3>
              <P>
                Las transacciones las ordena y ejecuta un secuenciador, que
                después publica los datos en Ethereum. Según la documentación,
                el orden es por llegada: no se puede pagar más para adelantar a
                otros. La confirmación inicial llega en menos de un segundo, el
                lote se publica en Ethereum en cuestión de minutos y la
                finalidad de Ethereum llega unos 13 minutos después de esa
                publicación.
              </P>
              <H3>Comisiones</H3>
              <P>
                Cada transacción paga dos componentes en ETH: la ejecución en la
                capa 2, que la documentación describe como muy baja y estable, y
                el coste de publicar los datos en Ethereum, que sube cuando
                Ethereum está congestionado. Tu wallet los muestra sumados.
              </P>
              <P>
                Durante los primeros 90 días Robinhood cubrió el gas de las
                operaciones hechas desde Robinhood Wallet. Esa subvención
                terminó a finales de septiembre de 2026, según crypto.news y
                CryptoTicker. Quien usaba otra wallet siempre pagó su gas.
              </P>
              <H3>El puente y el plazo de 7 días</H3>
              <DataTable
                caption="Cómo mover fondos entre Ethereum y Robinhood Chain (documentación de Robinhood, consultada el 13 de noviembre de 2026)."
                head={["", "Puente oficial de Arbitrum", "Puentes de terceros"]}
                rows={[
                  [
                    "Depósito",
                    "Unos 10 minutos.",
                    "De segundos a minutos.",
                  ],
                  [
                    "Retirada a Ethereum",
                    "7 días de periodo de impugnación y una transacción final en Ethereum, con su gas.",
                    "De segundos a minutos.",
                  ],
                  [
                    "En quién confías",
                    "En la propia red y en Ethereum.",
                    "Además, en el servicio que uses (Relay, Across, Stargate, Chainlink CCIP, LiFi).",
                  ],
                  [
                    "Coste",
                    "El gas.",
                    "El gas más la comisión del servicio, que la documentación no detalla.",
                  ],
                ]}
              />
              <P>
                La documentación añade un detalle útil: si un depósito por el
                puente oficial falla en la capa 2, por ejemplo por gas
                insuficiente, los fondos no se pierden y se pueden reclamar
                desde la interfaz del puente durante 7 días.
              </P>
              <H3>Quién puede cambiar las reglas</H3>
              <P>
                Según la página de gobierno, el protocolo lo controla un consejo
                de seguridad de ocho firmantes: dos puestos son de Robinhood y
                los otros seis de BitGo, Chainlink Labs, Fireblocks Trust
                Company, Offchain Labs, Paxos y Talos. Las acciones ordinarias
                necesitan seis firmas y esperan siete días; las de emergencia
                necesitan siete firmas y se aplican sin espera. La validación
                del estado usa el sistema BoLD de Arbitrum con un conjunto
                cerrado de validadores: hoy son dos, operados por Offchain Labs
                y Alchemy.
              </P>
              <P>
                Por usar la tecnología de Arbitrum, la red entrega el 10 % de
                sus ingresos netos al ecosistema de Arbitrum, según la ficha
                publicada por la Arbitrum Foundation.
              </P>
            </>
          ),
        },
        {
          id: "stock-tokens",
          title: "Stock Tokens: qué son y qué no son",
          children: (
            <>
              <P>
                Es el producto por el que existe la red, y también el que más
                confusión genera. Un Stock Token sigue el precio de una acción o
                un ETF de Estados Unidos, pero no es esa acción.
              </P>
              <P>
                Según la{" "}
                <ExternalLink href={`${DOCS}/stock-tokens`}>
                  documentación de Robinhood
                </ExternalLink>
                , los Stock Tokens son títulos de deuda tokenizados emitidos por
                Robinhood Assets (Jersey) Limited. Dan exposición económica al
                activo subyacente, pero ningún derecho legal ni de propiedad
                sobre él ni frente a la empresa que lo emite. No votas en la
                junta ni eres accionista. La propia web del emisor indica que
                este no está regulado y advierte de que puedes perder parte o
                toda la inversión.
              </P>
              <Ul>
                <Li>
                  <B>Son tokens ERC-20 normales.</B> Se guardan en tu wallet y se
                  pueden usar en DeFi: intercambiarlos en un DEX, aportarlos
                  como garantía o prestarlos.
                </Li>
                <Li>
                  <B>Los dividendos no llegan en efectivo.</B> Dividendos y
                  splits se reflejan con un multiplicador en cadena que cambia
                  cuántas acciones representa cada token. El saldo de tu wallet
                  no varía.
                </Li>
                <Li>
                  <B>Se negocian en cadena a cualquier hora,</B> pero los
                  creadores de mercado solo pueden emitir y quemar tokens de
                  lunes a sábado de madrugada (hora central europea). Fuera de
                  esa ventana, y sobre todo el fin de semana, el precio en
                  cadena puede alejarse del de la acción real.
                </Li>
                <Li>
                  <B>No los compras al emisor.</B> Solo los participantes
                  autorizados pueden suscribirlos directamente; el resto los
                  compra en el mercado, en DEX como Uniswap o Arcus.
                </Li>
                <Li>
                  <B>Cada token tiene un oráculo de Chainlink</B> que publica su
                  precio en cadena, ya ajustado por el multiplicador.
                </Li>
              </Ul>
              <H3>Stock Tokens y Classic Stock Tokens no son lo mismo</H3>
              <DataTable
                caption="Las dos generaciones de acciones tokenizadas de Robinhood (comunicado de Robinhood del 1 de julio de 2026, documentación y The Block)."
                head={["", "Stock Tokens", "Classic Stock Tokens"]}
                rows={[
                  [
                    "Dónde viven",
                    "En Robinhood Chain, en tu wallet.",
                    "En la app de Robinhood Europe, sobre Arbitrum One.",
                  ],
                  [
                    "Qué son",
                    "Títulos de deuda tokenizados de Robinhood Assets (Jersey) Limited.",
                    "Contratos derivados entre tú y Robinhood, emitidos bajo MiFID II.",
                  ],
                  [
                    "Custodia",
                    "La tuya: autocustodia.",
                    "Dentro de la app.",
                  ],
                  [
                    "Uso en DeFi",
                    "Sí.",
                    "No.",
                  ],
                  [
                    "Horario",
                    "En cadena, a cualquier hora.",
                    "Aproximadamente 24 horas, cinco días a la semana.",
                  ],
                ]}
              />
              <P>
                Para entender dónde encajan dentro de la tokenización de activos
                reales, tienes el contexto general en la entrada{" "}
                <GlossaryLink id="rwa">RWA</GlossaryLink> del glosario y en{" "}
                <GuideLink
                  slug="rwa-onchain-como-se-trada-oro-acciones"
                  campaign={CAMPAIGN}
                >
                  RWA onchain: cómo se trada oro, acciones y petróleo en cripto
                </GuideLink>
                .
              </P>
            </>
          ),
        },
        {
          id: "espana",
          title: "Qué puedes hacer desde España y qué no",
          children: (
            <>
              <P>
                Hay que separar dos cosas: usar la red y usar cada producto. La
                red es abierta y cualquiera puede añadirla a su wallet. Los
                productos tienen sus propias restricciones por país, y son las
                que importan.
              </P>
              <DataTable
                wide
                caption="Disponibilidad por producto según las fuentes oficiales (consultadas el 13 de noviembre de 2026). No sustituye a comprobar tu caso en la app o en los términos."
                head={["Producto", "Qué dicen las fuentes", "Desde España"]}
                rows={[
                  [
                    "La red (añadirla, puentear, usar un DEX)",
                    "Sin permisos: basta una wallet compatible.",
                    "Accesible.",
                  ],
                  [
                    "Stock Tokens",
                    "Disponibles en Robinhood Wallet en más de 120 países, según cada jurisdicción. Excluidos: Estados Unidos, Canadá, Reino Unido, Suiza, Emiratos Árabes Unidos y países sancionados.",
                    "España no figura entre las exclusiones que publica Robinhood, pero ninguna fuente oficial la cita expresamente: compruébalo en la app.",
                  ],
                  [
                    "Classic Stock Tokens",
                    "Siguen disponibles en la app de Robinhood Europe.",
                    "Depende de que la app esté disponible para ti.",
                  ],
                  [
                    "Perpetuos de Lighter en Robinhood Wallet",
                    "Solo en jurisdicciones seleccionadas. No disponibles para residentes de Reino Unido, Estados Unidos, Canadá, Suiza, Emiratos Árabes Unidos, Singapur y otras restringidas.",
                    "España no aparece en esa lista, que no es cerrada. Revisa los términos de Lighter.",
                  ],
                  [
                    "Robinhood Earn",
                    "Para usuarios elegibles de Estados Unidos, en la app principal.",
                    "No disponible.",
                  ],
                ]}
              />
              <P>
                Que un contrato inteligente te deje operar no significa que el
                producto se te pueda ofrecer legalmente. Los Stock Tokens son
                valores, y su venta está restringida en varias jurisdicciones:
                antes de comprar, lee el folleto base y las condiciones finales
                que el emisor publica en su web.
              </P>
              <Note>
                Esta guía no es asesoramiento legal ni fiscal. La tributación en
                España de un título de deuda tokenizado que sigue a una acción
                puede no coincidir con la de la acción ni con la de una
                criptomoneda: consúltalo con un asesor.
              </Note>
            </>
          ),
        },
        {
          id: "ecosistema",
          title: "Qué hay en la red: DEX, préstamos, perpetuos y memecoins",
          children: (
            <>
              <P>
                En su resumen oficial de principios de noviembre de 2026,
                recogido por TechFlow, Robinhood daba estas cifras de valor
                bloqueado por protocolo, con datos del 3 de noviembre:
              </P>
              <DataTable
                caption="Principales protocolos de Robinhood Chain por TVL a 3 de noviembre de 2026 (resumen oficial de Robinhood, vía TechFlow)."
                head={["Protocolo", "Qué es", "TVL"]}
                rows={[
                  ["Morpho", "Mercados de préstamos.", "582 M$"],
                  ["Uniswap", "DEX principal de la red.", "280 M$"],
                  ["Lighter", "Exchange de perpetuos.", "112 M$"],
                  ["Arcus", "DEX de acciones tokenizadas.", "63,6 M$"],
                ]}
              />
              <Ul>
                <Li>
                  <B>Uniswap</B> está desplegado desde el primer día y concentra
                  la mayor parte del volumen de intercambio.
                </Li>
                <Li>
                  <B>Morpho</B> es la base de los préstamos, y según ese resumen
                  ya admite acciones tokenizadas como garantía para pedir
                  stablecoins.
                </Li>
                <Li>
                  <B>USDG</B>, la stablecoin emitida por Paxos, es la moneda de
                  referencia de la red y el margen que usa Lighter.
                </Li>
                <Li>
                  <B>Arcus</B>, creado por el equipo de dYdX según The Block,
                  permite negociar más de 200 acciones tokenizadas desde
                  Robinhood Wallet.
                </Li>
                <Li>
                  Hay además agregadores y puentes (1inch, Relay, LayerZero),
                  oráculos de Chainlink y proyectos más recientes como Pendle,
                  Aerodrome o Ramses.
                </Li>
              </Ul>
              <H3>La otra mitad de la historia: los memecoins</H3>
              <P>
                La red se presentó para acciones tokenizadas, pero buena parte
                de su actividad ha venido de la especulación con memecoins.
                Según un análisis de TechTimes de julio de 2026, citado por
                Datawallet, más del 80 % de los primeros 9.000 millones de
                dólares de actividad vino de ahí. CryptoTicker contaba a finales
                de septiembre unos 646.000 tokens creados en el launchpad Pons
                desde julio, y crypto.news situaba el volumen de acciones
                tokenizadas en Uniswap en torno al 3 % del volumen total de los
                DEX en las primeras seis semanas.
              </P>
              <P>
                Esto importa por dos motivos: las cifras de volumen y de
                usuarios no miden el interés por las acciones tokenizadas, y la
                mayoría de los tokens que verás listados no tienen auditoría ni
                equipo conocido.
              </P>
            </>
          ),
        },
        {
          id: "lighter",
          title: "Lighter en Robinhood Wallet y los puntos de LIT",
          children: (
            <>
              <P>
                Lighter es un{" "}
                <GlossaryLink id="perp-dex">exchange descentralizado de perpetuos</GlossaryLink>{" "}
                que Robinhood integró en su wallet el día del lanzamiento. Según
                la página de ayuda de Robinhood, quien opera es Lighter:
                Robinhood actúa solo como proveedor de tecnología, las
                operaciones son sin custodia y no puede intervenir ni revertir
                una liquidación.
              </P>
              <Ul>
                <Li>
                  <B>Margen en USDG.</B> Se deposita desde la wallet, en
                  Robinhood Chain, en el contrato de Lighter. Desde julio de
                  2026 Lighter acepta también Stock Tokens como garantía, según
                  The Defiant.
                </Li>
                <Li>
                  <B>Costes.</B> Los pagos de{" "}
                  <GlossaryLink id="funding-rate">funding</GlossaryLink> se
                  liquidan cada hora entre posiciones largas y cortas, y una
                  liquidación puede costar hasta un 1 %, que va al fondo de
                  seguro de Lighter.
                </Li>
                <Li>
                  <B>Riesgo.</B> El ejemplo de la propia página: con un
                  apalancamiento de 5x, un movimiento del 20 % en contra puede
                  eliminar todo el margen de la posición.
                </Li>
              </Ul>
              <H3>El programa de puntos</H3>
              <P>
                Con el lanzamiento, Lighter reservó tokens LIT para la comunidad
                de Robinhood: The Block lo cifró en unos 11 millones de dólares.
                Según el comunicado de Robinhood, operar perpetuos desde
                Robinhood Wallet da el doble de puntos que hacerlo desde la web
                de Lighter, y esos puntos se convierten en LIT con las
                condiciones que fije Lighter.
              </P>
              <P>
                La página de ayuda de Robinhood lo deja claro: el programa es de
                Lighter, no de Robinhood, y Lighter puede cambiar los criterios,
                el valor de los puntos o cerrar el programa en cualquier
                momento. No hay publicada una fecha de fin ni una tasa de
                conversión.
              </P>
              <P>
                Farmear puntos operando perpetuos tiene un coste real en
                comisiones, funding y riesgo de liquidación. Antes de hacerlo,
                lee la guía de{" "}
                <InternalLink href="/guias/perp-dex-y-farmeo-de-puntos#coste">
                  perp DEX y farmeo de puntos
                </InternalLink>
                , donde explico cómo calcular si compensa. El paso a paso de esta
                campaña está en{" "}
                <GuideLink
                  slug="robinhood-te-paga-lit-por-operar"
                  campaign={CAMPAIGN}
                >
                  Robinhood te paga $LIT por operar
                </GuideLink>
                .
              </P>
            </>
          ),
        },
        {
          id: "cifras",
          title: "Robinhood Chain en cifras",
          children: (
            <>
              <P>
                Las cifras de esta sección son una foto del 13 de noviembre de
                2026, salvo donde se indica otra fecha, y cambian a diario.
                Además, cada fuente mide el valor bloqueado de forma distinta,
                así que no son comparables entre sí.
              </P>
              <DataTable
                caption="Datos de Robinhood Chain (DefiLlama y L2BEAT, consultados el 13 de noviembre de 2026)."
                head={["Dato", "Valor", "Fuente"]}
                rows={[
                  ["TVL en DeFi", "≈ 1.028 M$", "DefiLlama"],
                  [
                    "Máximo de TVL",
                    "≈ 1.153 M$ (22 de octubre de 2026)",
                    "DefiLlama",
                  ],
                  ["Volumen en DEX, 24 horas", "≈ 641 M$", "DefiLlama"],
                  ["Volumen en DEX, 30 días", "≈ 20.760 M$", "DefiLlama"],
                  [
                    "Valor total asegurado",
                    "≈ 2.000 M$, algo más de la mitad con supuestos de confianza adicionales",
                    "L2BEAT",
                  ],
                  [
                    "Volumen acumulado en DEX",
                    "≈ 120.460 M$ (3 de noviembre de 2026)",
                    "Robinhood, vía TechFlow",
                  ],
                ]}
              />
              <P>
                Un dato para poner el volumen en contexto: CryptoTicker midió en
                DefiLlama unos 55.280 millones de dólares de volumen en DEX en
                los 30 días anteriores al 28 de septiembre de 2026, justo antes
                de que terminara la subvención del gas. El 13 de noviembre esa
                misma métrica rondaba los 20.760 millones, cerca de un 62 %
                menos. Mientras tanto, el TVL se ha mantenido en torno a los
                1.000 millones.
              </P>
            </>
          ),
        },
        {
          id: "riesgos",
          title: "Riesgos de Robinhood Chain",
          children: (
            <>
              <Ul>
                <Li>
                  <B>Centralización.</B> L2BEAT indica que la red todavía no
                  alcanza su nivel mínimo de madurez (Stage 0), porque el
                  requisito de software de nodo disponible está en revisión.
                  Hay un único secuenciador operado por Robinhood y solo dos
                  actores autorizados pueden impugnar un estado incorrecto.
                </Li>
                <Li>
                  <B>Filtro de transacciones.</B> Según L2BEAT, la red incluye
                  un mecanismo que permite a un actor autorizado registrar
                  transacciones para que fallen, incluso si se fuerzan desde
                  Ethereum. La consecuencia, en palabras de ese análisis, es que
                  la inclusión forzada no es una vía de escape fiable frente a
                  la censura. A mediados de noviembre de 2026 la lista superaba
                  las 6.200 entradas.
                </Li>
                <Li>
                  <B>Actualizaciones sin espera.</B> L2BEAT señala que los
                  contratos pueden actualizarse de inmediato con siete de las
                  ocho firmas, sin plazo para que los usuarios salgan antes de
                  un cambio que no quieran.
                </Li>
                <Li>
                  <B>Los Stock Tokens no son acciones.</B> Dependes de la
                  solvencia del emisor, una sociedad de Jersey que no está
                  regulada. No tienes derechos de accionista y la documentación
                  advierte de que puedes perder toda la inversión.
                </Li>
                <Li>
                  <B>Precio fuera de horario.</B> Con el mercado cerrado no se
                  emiten ni se queman tokens, así que el precio en cadena puede
                  desviarse y la liquidez es menor.
                </Li>
                <Li>
                  <B>Salida lenta.</B> Retirar a Ethereum por el puente oficial
                  tarda 7 días. Los puentes rápidos dependen de la liquidez y de
                  la seguridad de un tercero.
                </Li>
                <Li>
                  <B>Memecoins y estafas.</B> Se crean miles de tokens al día
                  sin auditoría. Aplica lo de siempre: desconfía de lo que
                  llegue con prisa, lee lo que firmas y revisa tus permisos. Lo
                  explico en la guía de{" "}
                  <InternalLink href="/guias/seguridad-en-defi#estafas">
                    seguridad en DeFi
                  </InternalLink>
                  .
                </Li>
                <Li>
                  <B>Perpetuos.</B> Operar con{" "}
                  <GlossaryLink id="apalancamiento">apalancamiento</GlossaryLink>{" "}
                  puede{" "}
                  <GlossaryLink id="liquidacion">liquidarte</GlossaryLink>, y
                  Robinhood no puede revertirlo.
                </Li>
                <Li>
                  <B>Contratos de terceros.</B> Robinhood indica en su
                  documentación que listar un protocolo no supone respaldarlo ni
                  garantizarlo.
                </Li>
                <Li>
                  <B>Regulación.</B> Las acciones tokenizadas son un producto
                  nuevo y su tratamiento regulatorio puede cambiar, también la
                  lista de países donde se ofrecen.
                </Li>
              </Ul>
              <Callout title="Lo que la marca no cambia">
                Que detrás esté una empresa cotizada reduce algunos riesgos, como
                el de un equipo anónimo, pero no los de esta lista. Usar
                Robinhood Chain con tu wallet es DeFi: no hay un servicio de
                atención al cliente que te devuelva una firma equivocada.
              </Callout>
            </>
          ),
        },
        {
          id: "empezar",
          title: "Cómo añadir la red y empezar paso a paso",
          children: (
            <>
              <DataTable
                caption="Parámetros oficiales de la red principal (documentación de Robinhood, consultada el 13 de noviembre de 2026)."
                head={["Parámetro", "Valor"]}
                rows={[
                  ["Nombre de la red", "Robinhood Chain"],
                  ["Chain ID", "4663"],
                  ["RPC", "https://rpc.mainnet.chain.robinhood.com/"],
                  ["Símbolo", "ETH"],
                  ["Explorador", "https://robinhoodchain.blockscout.com"],
                ]}
              />
              <Ol>
                <Li>
                  <B>Prepara una wallet dedicada.</B> Repasa antes los hábitos
                  de la guía de{" "}
                  <InternalLink href="/guias/seguridad-en-defi#habitos">
                    seguridad en DeFi
                  </InternalLink>
                  .
                </Li>
                <Li>
                  <B>Añade la red a mano.</B> Copia los parámetros de la tabla
                  desde la documentación oficial, no desde un buscador ni desde
                  un mensaje. Comprueba que el Chain ID es <Code>4663</Code>.
                </Li>
                <Li>
                  <B>Puentea poco al principio.</B> Usa el puente oficial de
                  Arbitrum si no tienes prisa, y recuerda que la vuelta por esa
                  vía tarda 7 días. Si eliges un puente rápido, entra desde su
                  web oficial.
                </Li>
                <Li>
                  <B>Deja ETH para el gas.</B> Ya no hay subvención: cada
                  operación paga su comisión.
                </Li>
                <Li>
                  <B>Empieza por lo conocido.</B> Un intercambio pequeño en
                  Uniswap te enseña cómo se comporta la red sin exponerte a
                  tokens recién creados.
                </Li>
                <Li>
                  <B>Si vas a comprar Stock Tokens,</B> comprueba primero tu
                  elegibilidad, verifica la dirección del contrato en la
                  documentación oficial y mira el precio de la acción real antes
                  de operar fuera de horario.
                </Li>
                <Li>
                  <B>Revisa tus permisos</B> de vez en cuando y revoca los que
                  ya no uses.
                </Li>
              </Ol>
              <P>
                Si quieres el recorrido con capturas y una rutina de uso, lo
                tienes en{" "}
                <GuideLink
                  slug="primeros-pasos-en-robinhood-chain"
                  campaign={CAMPAIGN}
                >
                  Las trincheras de Robinhood están muy calientes
                </GuideLink>
                .
              </P>
            </>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es Robinhood Chain?",
          answer:
            "Una capa 2 de Ethereum creada y operada por Robinhood, construida con la tecnología de Arbitrum. Está en mainnet desde el 1 de julio de 2026, usa ETH para el gas y está pensada para negociar acciones y ETF tokenizados y para las aplicaciones DeFi que se construyan alrededor.",
        },
        {
          question: "¿Robinhood Chain tiene token o airdrop?",
          answer:
            "No. La red paga el gas en ETH y Robinhood no ha anunciado ningún token ni airdrop. Los incentivos que existen son de aplicaciones de terceros, como el programa de puntos de Lighter, con sus propias condiciones.",
        },
        {
          question: "¿Un Stock Token es una acción?",
          answer:
            "No. Según la documentación de Robinhood, es un título de deuda tokenizado emitido por Robinhood Assets (Jersey) Limited que sigue el precio de una acción o un ETF. Da exposición económica, pero ningún derecho legal ni de propiedad sobre la acción ni frente a la empresa.",
        },
        {
          question: "¿Se puede usar Robinhood Chain desde España?",
          answer:
            "La red es abierta y cualquiera puede añadirla a su wallet. Cada producto tiene sus restricciones: España no figura entre las exclusiones que Robinhood publica para los Stock Tokens ni para los perpetuos de Lighter, pero ninguna fuente oficial la cita expresamente, así que hay que comprobarlo en la app y en los términos. Robinhood Earn es solo para Estados Unidos.",
        },
        {
          question: "¿Cómo añado Robinhood Chain a mi wallet?",
          answer:
            "Añadiendo la red a mano con los parámetros oficiales: Chain ID 4663, RPC https://rpc.mainnet.chain.robinhood.com/, símbolo ETH y explorador https://robinhoodchain.blockscout.com. Cópialos de la documentación oficial de Robinhood.",
        },
        {
          question: "¿Cuánto tarda retirar fondos a Ethereum?",
          answer:
            "Por el puente oficial de Arbitrum, 7 días de periodo de impugnación más una transacción final en Ethereum. Los depósitos tardan unos 10 minutos. Los puentes de terceros retiran en segundos o minutos, a cambio de una comisión y de confiar en ese servicio.",
        },
        {
          question: "¿Qué es el programa de LIT de Lighter?",
          answer:
            "Un programa de puntos de Lighter, el exchange de perpetuos integrado en Robinhood Wallet. Según el comunicado de Robinhood, operar desde la wallet da el doble de puntos que desde la web de Lighter, y los puntos se convierten en tokens LIT con las condiciones de Lighter, que puede cambiarlas o cerrar el programa cuando quiera.",
        },
        {
          question: "¿Es segura Robinhood Chain?",
          answer:
            "Tiene detrás a una empresa cotizada y un consejo de seguridad con firmas de varias instituciones, pero es una red joven y centralizada. L2BEAT indica que aún no alcanza su nivel mínimo de madurez, que hay un único secuenciador y que existe un filtro capaz de bloquear transacciones. A eso se suman el riesgo del emisor de los Stock Tokens y el de cada aplicación que uses.",
        },
        {
          question: "¿Cobran dividendos los Stock Tokens?",
          answer:
            "No en efectivo. Según la documentación, dividendos y splits se reflejan con un multiplicador en cadena que cambia cuántas acciones representa cada token, sin modificar el saldo de tu wallet.",
        },
      ]}
      sources={[
        { label: "Robinhood Chain Docs: introducción", href: DOCS },
        {
          label: "Robinhood Chain Docs: añadir la red a la wallet",
          href: `${DOCS}/add-network-to-wallet`,
        },
        { label: "Robinhood Chain Docs: puentes", href: `${DOCS}/bridging` },
        {
          label: "Robinhood Chain Docs: gas y comisiones",
          href: `${DOCS}/gas-and-fees`,
        },
        {
          label: "Robinhood Chain Docs: finalidad de las transacciones",
          href: `${DOCS}/transaction-finality`,
        },
        { label: "Robinhood Chain Docs: gobierno", href: `${DOCS}/governance` },
        {
          label: "Robinhood Chain Docs: Stock Tokens",
          href: `${DOCS}/stock-tokens`,
        },
        {
          label: "Robinhood Assets (Jersey) Limited: emisor de los Stock Tokens",
          href: "https://docs.robinhood.com/rhj",
        },
        {
          label: "Robinhood Assets (Jersey) Limited: jurisdicciones restringidas",
          href: "https://docs.robinhood.com/rhj/restricted-jurisdictions",
        },
        {
          label: "Robinhood: comunicado del lanzamiento de la mainnet (1 de julio de 2026)",
          href: NEWSROOM,
        },
        {
          label: "Robinhood: ayuda sobre los perpetuos en Robinhood Wallet",
          href: "https://robinhood.com/us/en/support/articles/robinhood-wallet-perpetual-futures/",
        },
        {
          label: "Arbitrum: Robinhood Chain llega a mainnet (1 de julio de 2026)",
          href: "https://blog.arbitrum.io/robinhood-chain-mainnet/",
        },
        {
          label: "Arbitrum Foundation: ficha del lanzamiento de Robinhood Chain",
          href: "https://forum.arbitrum.foundation/t/arbitrumdao-factsheet-robinhood-chain-mainnet-launch/31041",
        },
        {
          label: "L2BEAT: análisis de riesgos de Robinhood Chain",
          href: "https://l2beat.com/scaling/projects/robinhood",
        },
        {
          label: "DefiLlama: Robinhood Chain",
          href: "https://defillama.com/chain/robinhood-chain",
        },
        {
          label: "The Block: Robinhood Chain llega a mainnet (1 de julio de 2026)",
          href: "https://www.theblock.co/news/business/2026-07-01-robinhood-chain-goes-live-mainnet-alongside-24-7-tokenized-stocks-lighter-perps-planned-crypto-agentic-trading-406918",
        },
        {
          label: "The Defiant: Lighter acepta Stock Tokens como garantía (20 de julio de 2026)",
          href: "https://thedefiant.io/news/defi/lighter-makes-stock-tokens-eligible-collateral-on-robinhood-chain",
        },
        {
          label: "crypto.news: fin de la subvención del gas (4 de septiembre de 2026)",
          href: "https://crypto.news/robinhood-chain-flipped-solana-revenue-gas-subsidy-expires/",
        },
        {
          label: "CryptoTicker: ecosistema y fin del gas gratis (28 de septiembre de 2026)",
          href: "https://cryptoticker.io/es/robinhood-chain-ecosistema-fin-del-gas-gratis/",
        },
        {
          label: "TechFlow: resumen oficial de Robinhood Chain (5 de noviembre de 2026)",
          href: "https://www.techflowpost.com/en-US/article/35123",
        },
        {
          label: "Datawallet: estadísticas de Robinhood Chain (2 de septiembre de 2026)",
          href: "https://www.datawallet.com/es/cripto/robinhood-chain-statistics",
        },
      ]}
      relatedSlugs={[
        "primeros-pasos-en-robinhood-chain",
        "robinhood-te-paga-lit-por-operar",
        "rwa-onchain-como-se-trada-oro-acciones",
        "tier-list-de-perp-dexs-donde-farmeo",
        "hip-3-de-hyperliquid-creacion-de",
      ]}
    />
  );
}
