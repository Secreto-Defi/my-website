import type { ReactNode } from "react";
import { getPillar } from "../pilares";
import PillarPage, { pillarMetadata } from "../pillar-page";
import {
  B,
  DataTable,
  GlossaryLink,
  GuideLink,
  InternalLink,
  Li,
  Note,
  Ol,
  P,
  Ul,
} from "../pillar-ui";

const PILLAR = getPillar("/guias/yield-farming-y-liquidez-concentrada");
const CAMPAIGN = "yield-farming";
const TITLE = "Guía de yield farming y liquidez concentrada | Secreto Defi";
const DESCRIPTION =
  "Qué es el yield farming, de dónde sale el rendimiento, cómo funciona la liquidez concentrada, qué riesgos tiene y cómo empezar con cabeza. Guía en español.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt:
    "Yield farming y liquidez concentrada: guía para empezar | La Agenda de SecretoDefi",
});

const G = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <GuideLink slug={slug} campaign={CAMPAIGN}>
    {children}
  </GuideLink>
);

export default function YieldFarmingPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Yield farming y liquidez concentrada: guía para empezar"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            El yield farming consiste en poner tus criptomonedas a trabajar en
            protocolos DeFi (prestándolas, aportando liquidez a un exchange
            descentralizado o bloqueándolas) para obtener un rendimiento. El
            problema es que casi nadie explica de dónde sale ese rendimiento ni
            qué hay que vigilar, y un porcentaje llamativo en pantalla no dice
            nada de eso.
          </P>
          <P>
            Esta guía ordena lo esencial: de dónde sale el rendimiento, qué
            estrategias existen, cómo funciona la liquidez concentrada (el modelo
            más usado hoy para cobrar comisiones), qué riesgos tiene y cómo
            empezar con una rutina razonable. Cuando una idea merece más
            detalle, te llevo a la guía de La Agenda de SecretoDefi donde la
            desarrollo.
          </P>
        </>
      }
      summary={[
        "El rendimiento sale de cuatro fuentes: comisiones de trading, intereses de préstamos, incentivos en tokens y rendimiento propio del activo. Antes de entrar, averigua cuál de ellas estás cobrando.",
        "En liquidez concentrada eliges un rango de precios: el mismo capital genera más comisiones mientras el precio esté dentro, pero también más pérdida impermanente y exige vigilar la posición.",
        "Un APR llamativo casi siempre tiene una explicación: poco historial, emisiones en un token que puede caer o un par muy volátil.",
        "Empieza con poco capital, entiende el par que eliges y compara siempre contra haber mantenido los tokens.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es el yield farming",
          children: (
            <>
              <P>
                El yield farming, o farmeo de rendimiento, consiste en usar tus
                criptoactivos en protocolos DeFi para obtener una rentabilidad:
                prestándolos, aportando liquidez a un exchange descentralizado o
                bloqueándolos en un protocolo. Hay estrategias muy simples, como
                depositar una stablecoin en un mercado de préstamos, y otras muy
                complejas, con apalancamiento y varias capas de protocolos. Tienes
                la definición corta en el{" "}
                <GlossaryLink id="yield-farming">glosario</GlossaryLink>.
              </P>
              <P>
                No es lo mismo que{" "}
                <InternalLink href="/guias/que-es-un-airdrop">
                  farmear un airdrop
                </InternalLink>
                . En el yield farming buscas un rendimiento que cobras mientras tu
                capital está dentro; en el farmeo de airdrops buscas un posible
                reparto futuro de tokens que no está garantizado. A veces
                coinciden, porque el mismo uso de un protocolo puede darte
                rendimiento hoy y puntos para un posible reparto mañana.
              </P>
              <P>
                Lo importante es que el rendimiento no sale de la nada: alguien lo
                paga. Entender quién lo paga es lo que separa un rendimiento
                sostenible de otro que depende de que siga entrando gente.
              </P>
            </>
          ),
        },
        {
          id: "de-donde-sale",
          title: "De dónde sale el rendimiento",
          children: (
            <>
              <P>
                Casi todo el rendimiento en DeFi viene de una de estas cuatro
                fuentes. Antes de depositar, averigua cuál de ellas estás
                cobrando:
              </P>
              <DataTable
                caption="Fuentes de rendimiento en DeFi"
                head={[
                  "Fuente",
                  "Cómo funciona",
                  "Quién lo paga",
                  "Riesgo principal",
                ]}
                rows={[
                  [
                    "Comisiones de trading",
                    "Cobras una parte de cada operación que pasa por tu liquidez.",
                    "Los traders.",
                    "Pérdida impermanente y falta de volumen.",
                  ],
                  [
                    "Intereses de préstamos",
                    "Depositas un activo en un mercado de préstamos y cobras intereses.",
                    "Quien pide prestado.",
                    "Fallos del contrato, tipos que cambian a diario y deuda incobrable en caídas fuertes.",
                  ],
                  [
                    "Incentivos en tokens",
                    "El protocolo reparte su propio token a quien aporta liquidez o deposita.",
                    "El propio proyecto, emitiendo más token.",
                    "Que el token baje de precio o que el incentivo termine.",
                  ],
                  [
                    "Rendimiento propio del activo",
                    "El activo genera rendimiento por sí mismo: staking, tokens de staking líquido, activos del mundo real o pagos de funding en estrategias delta-neutral.",
                    "La red, el emisor del activo o el mercado de derivados.",
                    "Pérdida de paridad, penalizaciones (slashing), riesgo del emisor o un funding que cambia de signo.",
                  ],
                ]}
              />
              <P>
                La pregunta clave es quién paga. Si no encuentras a nadie que
                pague de verdad (un trader, un prestatario, la red), lo habitual
                es que lo pague el propio token en forma de inflación. Esa es la
                diferencia entre un rendimiento sostenible y uno «de incentivo»:
                el segundo dura mientras dure la emisión y el precio del token que
                cobras.
              </P>
              <P>
                Un ejemplo claro son los DEX ve(3,3): los proveedores de liquidez
                cobran emisiones del token del protocolo, y las comisiones van a
                quien bloquea ese token. El APR que ves para un LP en uno de
                ellos son emisiones, no comisiones. Lo desmonto paso a paso en{" "}
                <G slug="como-funcionan-los-dex-ve33-y-por">
                  Entiende el flywheel de los DEX ve(3,3)
                </G>
                . La diferencia entre APR y APY la tienes en el{" "}
                <GlossaryLink id="apr-y-apy">glosario</GlossaryLink>.
              </P>
              <P>
                Los pagos de funding de los perpetuos son otra fuente de
                rendimiento: lo que cobra uno de los dos lados (largos o cortos)
                lo paga el otro, y la tasa puede cambiar de signo. Cómo funcionan
                lo explico en la guía de{" "}
                <InternalLink href="/guias/perp-dex-y-farmeo-de-puntos#que-es">
                  perp DEX y farmeo de puntos
                </InternalLink>
                .
              </P>
            </>
          ),
        },
        {
          id: "estrategias",
          title: "Estrategias, de menos a más riesgo",
          children: (
            <>
              <P>
                Estas son las estrategias más habituales, ordenadas de menos a
                más riesgo y, en general, de menos a más gestión:
              </P>
              <Ol>
                <Li>
                  <B>Prestar un activo.</B> Depositas, por ejemplo, una
                  stablecoin en un mercado de préstamos y cobras el interés que
                  pagan los prestatarios. Casi no requiere gestión; el riesgo
                  principal es el del contrato y el del propio mercado.
                </Li>
                <Li>
                  <B>Staking y staking líquido.</B> Bloqueas un token para
                  asegurar una red y cobras recompensas. En el{" "}
                  <GlossaryLink id="staking">staking líquido</GlossaryLink>{" "}
                  recibes un token que puedes seguir usando, a costa de añadir el
                  riesgo del contrato que lo emite.
                </Li>
                <Li>
                  <B>Pools de liquidez de rango completo.</B> Es el AMM clásico:
                  depositas dos tokens y cobras comisiones sin elegir rango. Es
                  sencillo, pero tu capital se aprovecha poco y tienes{" "}
                  <GlossaryLink id="impermanent-loss">
                    pérdida impermanente
                  </GlossaryLink>
                  .
                </Li>
                <Li>
                  <B>Liquidez concentrada.</B> Eliges el rango: más comisiones
                  por dólar, pero más gestión y más pérdida impermanente. Lo
                  explico más abajo.
                </Li>
                <Li>
                  <B>Pools con emisiones (ve(3,3) y similares).</B> Cobras tokens
                  de incentivo, y el rendimiento depende de que el token aguante.
                </Li>
                <Li>
                  <B>Rendimiento tokenizado.</B> Pendle separa un activo en PT
                  (principal) y YT (rendimiento) para fijar un rendimiento o
                  especular con él. Tienes la definición de{" "}
                  <GlossaryLink id="pt-y-yt">PT y YT</GlossaryLink> en el
                  glosario.
                </Li>
                <Li>
                  <B>Looping y apalancamiento.</B> Pides prestado para multiplicar
                  tu exposición: amplifica ganancias y pérdidas y añade riesgo de
                  liquidación. En{" "}
                  <G slug="pt-looping-en-pendle-de-donde-sale">esta guía</G>{" "}
                  explico de dónde sale el APY de un loop y sus dos riesgos
                  clave: el carry negativo y la liquidación.
                </Li>
              </Ol>
            </>
          ),
        },
        {
          id: "liquidez-concentrada",
          title: "Liquidez concentrada: cómo funciona",
          children: (
            <>
              <P>
                En un AMM clásico, tu liquidez se reparte por todo el rango de
                precios posible, de cero a infinito, y la mayor parte nunca se
                usa. La{" "}
                <GlossaryLink id="liquidez-concentrada">
                  liquidez concentrada
                </GlossaryLink>
                , que Uniswap introdujo con la versión 3 en mayo de 2021, te deja
                elegir el rango en el que quieres que trabaje tu capital. Uniswap
                anunció que permitiría una eficiencia de capital de hasta 4.000
                veces la de la versión 2 para quien aporta liquidez en un rango
                muy estrecho (del 0,1 %).
              </P>
              <P>Tres consecuencias que conviene tener claras:</P>
              <Ul>
                <Li>
                  <B>Más comisiones por cada dólar.</B> Mientras el precio está
                  dentro de tu rango, tu capital respalda más liquidez y cobra más
                  comisiones que el mismo capital en un rango completo.
                </Li>
                <Li>
                  <B>Si el precio sale del rango, dejas de cobrar.</B> Si el
                  precio baja por debajo del rango, tu posición queda entera en el
                  token que ha perdido valor; si sube por encima, queda entera en
                  el otro. En ambos casos no genera comisiones y tienes que
                  decidir si esperas, mueves el rango o sales.
                </Li>
                <Li>
                  <B>Más pérdida impermanente por cada movimiento.</B> La misma
                  concentración que multiplica las comisiones multiplica la
                  pérdida.
                </Li>
              </Ul>
              <DataTable
                caption="Rango centrado en el precio de entrada, frente a una pool de rango completo (cifras aproximadas)"
                head={[
                  "Rango",
                  "Eficiencia del capital",
                  "Pérdida si el precio sube hasta el borde superior",
                  "Misma subida en rango completo",
                ]}
                rows={[
                  ["±1\u00a0%", "unas 200 veces", "0,25 %", "menos de 0,01 %"],
                  ["±5\u00a0%", "unas 40 veces", "1,2 %", "0,03 %"],
                  ["±10\u00a0%", "unas 20 veces", "2,3 %", "0,11 %"],
                  ["±25\u00a0%", "unas 8 veces", "5,2 %", "0,62 %"],
                  ["±50\u00a0%", "unas 4 veces", "8,9 %", "2,0 %"],
                ]}
              />
              <Note>
                Cálculo propio con la fórmula de liquidez de Uniswap v3, para una
                posición abierta en el centro del rango, antes de comisiones y
                comparada con mantener los tokens. Si el precio baja hasta el
                borde inferior, la pérdida es algo mayor.
              </Note>
              <P>
                La tabla muestra el compromiso de la liquidez concentrada: un
                rango estrecho multiplica las comisiones mientras el precio no se
                mueve, pero la pérdida impermanente crece aproximadamente en la
                misma proporción y te saca del rango con movimientos pequeños. Un
                rango ancho cobra menos, pero exige menos vigilancia. En la guía
                sobre{" "}
                <InternalLink href="/guias/que-es-la-perdida-impermanente">
                  qué es la pérdida impermanente
                </InternalLink>{" "}
                tienes cómo se calcula y cómo reducirla.
              </P>
              <P>
                Meteora, en Solana, lo implementa con un modelo propio, el{" "}
                <GlossaryLink id="dlmm">DLMM</GlossaryLink>: divide el rango en{" "}
                <em>bins</em>, cada uno con un precio fijo, y los intercambios
                dentro de un mismo bin no sufren slippage. Las comisiones se
                ajustan de forma dinámica con la volatilidad, y puedes repartir la
                liquidez entre bins con tres estrategias: Spot (reparto
                uniforme), Curve (concentrada alrededor del precio) y Bid-Ask (la
                inversa de Curve, útil para entrar o salir de forma escalonada y
                para capturar volatilidad), según la documentación de Meteora.
              </P>
              <P>
                Lo desarrollo en mi serie sobre Meteora, que empieza en{" "}
                <G slug="guia-definitiva-para-usar-meteora">
                  la guía definitiva para usar Meteora
                </G>
                , y en{" "}
                <G slug="estrategia-anti-sawtooth-en-meteora">
                  Estrategia Anti-Sawtooth
                </G>{" "}
                explico cómo rellenar con una posición Curve el hueco que dejan
                dos posiciones bid-ask seguidas.
              </P>
            </>
          ),
        },
        {
          id: "riesgos",
          title: "Riesgos: lo que más conviene vigilar",
          children: (
            <Ul>
              <Li>
                <B>Pérdida impermanente.</B> Si el precio de los dos tokens de una
                pool cambia el uno respecto al otro, tu posición puede valer menos
                que si los hubieras guardado.
              </Li>
              <Li>
                <B>Salir del rango.</B> En liquidez concentrada, si el precio se
                sale de tu rango dejas de cobrar comisiones.
              </Li>
              <Li>
                <B>Riesgo de contrato y de oráculo.</B> Un fallo o un ataque a un
                protocolo puede costarte los fondos. Una auditoría reduce el
                riesgo, pero no lo elimina.
              </Li>
              <Li>
                <B>Aprobaciones y firmas.</B> Para depositar en una pool das
                permiso a un contrato para mover tus tokens. Si ese permiso queda
                abierto y el contrato resulta malicioso o lo atacan, pueden
                vaciarte esos tokens. Revisa lo que firmas y revoca lo que ya no
                uses, como explico en la guía de{" "}
                <InternalLink href="/guias/seguridad-en-defi#aprobaciones">
                  seguridad en DeFi
                </InternalLink>
                .
              </Li>
              <Li>
                <B>Contratos de terceros dentro de la pool.</B> En Uniswap v4, un{" "}
                <GlossaryLink id="hook-uniswap-v4">hook</GlossaryLink> mal
                diseñado o malicioso puede subir las comisiones o bloquear
                retiradas. Cómo comprobarlo, en{" "}
                <G slug="uniswap-v4-y-los-hooks-el-super-poder">esta guía</G>.
              </Li>
              <Li>
                <B>Incentivos que se acaban.</B> Si parte del rendimiento es el
                token del proyecto, el APR cae cuando el token baja de precio o
                cuando terminan las emisiones.
              </Li>
              <Li>
                <B>Tokens nuevos y trampas.</B> En las pools de tokens recién
                creados abundan las estafas. En Solana, algunos tokens conservan
                una «Freeze Authority» que permite congelar fondos; Meteora
                muestra un aviso en esos casos, como expliqué en{" "}
                <G slug="actualizaciones-importantes-en-meteora-69e">
                  esta guía de febrero de 2025
                </G>
                .
              </Li>
              <Li>
                <B>Pérdida de paridad.</B> Una stablecoin o un token de staking
                líquido puede perder su valor de referencia.
              </Li>
              <Li>
                <B>Costes.</B> El gas, las comisiones de apertura y el slippage al
                entrar, salir o reequilibrar pueden comerse el rendimiento de las
                posiciones pequeñas.
              </Li>
              <Li>
                <B>Apalancamiento.</B> Estrategias como el{" "}
                <GlossaryLink id="looping">looping</GlossaryLink> añaden riesgo de{" "}
                <GlossaryLink id="liquidacion">liquidación</GlossaryLink>.
              </Li>
              <Li>
                <B>Impuestos.</B> Cada país los trata de forma distinta. Guarda un
                registro de tus operaciones y consulta a un asesor fiscal.
              </Li>
            </Ul>
          ),
        },
        {
          id: "empezar",
          title: "Cómo empezar paso a paso",
          children: (
            <Ol>
              <Li>
                <B>Decide cuánto puedes permitirte perder.</B> Empieza con una
                cantidad que no te afecte si sale mal y con una cartera dedicada,
                separada de tus ahorros.
              </Li>
              <Li>
                <B>Empieza por lo sencillo.</B> Prestar un activo o abrir una
                posición de rango amplio te enseña cómo funciona todo con menos
                gestión.
              </Li>
              <Li>
                <B>Elige un protocolo con historial.</B> Prioriza los que llevan
                tiempo en marcha, con liquidez real y auditorías públicas, y entra
                siempre desde los enlaces de su cuenta oficial.
              </Li>
              <Li>
                <B>Averigua de dónde sale el rendimiento.</B> Usa la tabla de
                arriba: ¿son comisiones, intereses, incentivos o rendimiento del
                activo?
              </Li>
              <Li>
                <B>Mira el rendimiento real, no el de 24 horas.</B> Un APR
                calculado con el día anterior puede estar inflado. En Meteora
                puedes filtrar el Fee/TVL por franjas horarias: yo uso las de 2 a
                4 horas si voy a operar ya y la de 12 horas si es a largo plazo, y
                descarto lo que tiene APR pero ni TVL ni volumen. Lo cuento, con un
                ejemplo, en{" "}
                <G slug="actualizaciones-importantes-en-meteora">esta guía</G>.
              </Li>
              <Li>
                <B>Elige el rango según cuánto vayas a vigilar.</B> Un rango ancho
                exige menos atención; uno estrecho rinde más mientras funciona y
                se queda fuera antes.
              </Li>
              <Li>
                <B>Compara siempre contra mantener.</B> Apunta el valor con el
                que entras y compara cada cierto tiempo la posición más las
                comisiones cobradas con lo que valdrían los tokens guardados. En{" "}
                <G slug="como-monitorizo-mis-pools-de-hyperevm">esta guía</G>{" "}
                explico las seis métricas que uso.
              </Li>
              <Li>
                <B>Define las reglas de salida antes de entrar.</B> Cuándo
                reequilibras, cuándo cierras y qué pérdida estás dispuesto a
                asumir. Y revisa de vez en cuando los permisos que has dado a cada
                aplicación.
              </Li>
            </Ol>
          ),
        },
        {
          id: "errores",
          title: "Errores frecuentes al empezar",
          children: (
            <Ul>
              <Li>
                <B>Perseguir el APR más alto del día.</B> Los porcentajes más
                llamativos suelen ser de tokens recién lanzados, con poca liquidez
                y mucho riesgo.
              </Li>
              <Li>
                <B>Abrir rangos estrechos sin poder vigilarlos.</B> Si no puedes
                reequilibrar, un rango ancho suele convenirte más.
              </Li>
              <Li>
                <B>Ignorar los costes en posiciones pequeñas.</B> Calcula
                cuántas semanas necesitas para cubrir el gas y las comisiones de
                apertura.
              </Li>
              <Li>
                <B>No comparar con mantener los tokens.</B> Cobrar comisiones no
                significa salir ganando.
              </Li>
              <Li>
                <B>Concentrarlo todo en un token nuevo o en un solo protocolo.</B>{" "}
                Diversificar limita el daño si algo falla.
              </Li>
            </Ul>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es el yield farming?",
          answer:
            "Usar tus criptoactivos en protocolos DeFi (prestándolos, aportando liquidez o bloqueándolos) para obtener un rendimiento en forma de comisiones, intereses o tokens de incentivo.",
        },
        {
          question: "¿Cuánto se puede ganar con yield farming?",
          answer:
            "No hay una cifra fiable: el rendimiento cambia a diario con el uso del protocolo y con los incentivos, y no está garantizado. Desconfía de cualquier porcentaje presentado como seguro, y recuerda que puedes perder parte o todo el capital.",
        },
        {
          question: "¿Es seguro el yield farming?",
          answer:
            "No. Tiene riesgos de contrato inteligente, de pérdida impermanente, de tokens que se desploman, de pérdida de paridad y de liquidación si usas apalancamiento. Se puede reducir el riesgo con cantidades pequeñas y protocolos con historial, pero no eliminarlo.",
        },
        {
          question: "¿Cuánto dinero hace falta para empezar?",
          answer:
            "Depende de la red y del protocolo. Para aprender basta con una cantidad pequeña, pero el gas y las comisiones de apertura pesan más cuanto más pequeña es la posición, así que conviene comprobar que no se coman el rendimiento.",
        },
        {
          question: "¿Qué es mejor, liquidez concentrada o de rango completo?",
          answer:
            "Depende de cuánto tiempo y conocimiento tengas. La concentrada rinde más por dólar mientras el precio está dentro del rango, pero exige vigilar y reequilibrar y sufre más pérdida impermanente. La de rango completo es más sencilla y no se sale del rango, a cambio de menos comisiones por dólar.",
        },
        {
          question: "¿Qué diferencia hay entre APR y APY?",
          answer:
            "El APR es la rentabilidad anual sin reinvertir los intereses; el APY incluye el interés compuesto. En DeFi ambos son estimaciones basadas en el rendimiento reciente y cambian de un día para otro.",
        },
        {
          question: "¿Hay que pagar impuestos por el yield farming?",
          answer:
            "Depende de tu país y de cada caso. Guarda un registro de fechas, importes y carteras, y consulta a un asesor fiscal antes de declarar o de vender.",
        },
      ]}
      sources={[
        {
          label: "Uniswap: anuncio de Uniswap v3 y la liquidez concentrada",
          href: "https://blog.uniswap.org/uniswap-v3",
        },
        {
          label: "Meteora: qué es un DLMM (documentación oficial)",
          href: "https://docs.meteora.ag/dlmm/dlmm-overview/what-is-dlmm",
        },
      ]}
      relatedSlugs={[
        "masterclass-amms-vs-clmms-vs-dlmms",
        "guia-definitiva-para-usar-meteora",
        "actualizaciones-importantes-en-meteora",
        "estrategia-anti-sawtooth-en-meteora",
        "como-funcionan-los-dex-ve33-y-por",
        "uniswap-v4-y-los-hooks-el-super-poder",
        "como-monitorizo-mis-pools-de-hyperevm",
        "pt-looping-en-pendle-de-donde-sale",
      ]}
    />
  );
}
