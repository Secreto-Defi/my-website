import { getPillar } from "../pilares";
import PillarPage, { pillarMetadata } from "../pillar-page";
import {
  B,
  Callout,
  DataTable,
  GlossaryLink,
  GuideLink,
  H3,
  InternalLink,
  Li,
  Ol,
  P,
  Ul,
} from "../pillar-ui";

const PILLAR = getPillar("/guias/que-es-risex");
const CAMPAIGN = "risex";
const TITLE = "Qué es RiseX y cómo funcionan sus puntos | Secreto Defi";
const DESCRIPTION =
  "Qué es RiseX, el perp DEX de RISE Chain: cómo funciona, cuánto cuesta operar, cómo se reparten los puntos de Ignite, qué pasó con el vault XLP y qué riesgos tiene.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt: "Qué es RiseX y cómo funcionan sus puntos | La Agenda de SecretoDefi",
});

const DOCS = "https://docs.risechain.com/docs/risex";

export default function RisexPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Qué es RiseX: el perp DEX de RISE Chain, los puntos de Ignite y sus riesgos"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            RiseX (la marca lo escribe RISEx) es un{" "}
            <GlossaryLink id="perp-dex">exchange descentralizado de perpetuos</GlossaryLink>{" "}
            con libro de órdenes que funciona sobre RISE Chain, una{" "}
            <GlossaryLink id="capa-2">capa 2</GlossaryLink> de Ethereum. Todavía
            no tiene token, y desde julio de 2026 reparte puntos cada semana con
            un programa llamado Ignite.
          </P>
          <P>
            En esta página te explico cómo funciona, cuánto cuesta operar, qué
            mercados tiene, cómo se reparten los puntos y qué he aprendido
            farmeándolos, qué es el vault XLP y qué le pasó en agosto, y qué
            riesgos asumes. Está escrita con la documentación oficial y fuentes
            citadas, y las cifras que cambian a menudo llevan su fecha de
            consulta.
          </P>
        </>
      }
      summary={[
        "RiseX es un exchange de perpetuos con libro de órdenes en cadena, construido sobre RISE Chain, una capa 2 de Ethereum. Según su documentación, el cruce de órdenes, el margen y la liquidación se ejecutan dentro de la propia cadena.",
        "Operar no es gratis: el nivel base paga un 0,03 % como taker y un 0,01 % como maker, y las comisiones bajan con el volumen de 14 días. La garantía es USDC y el apalancamiento máximo es de 50x en BTC y ETH.",
        "No tiene token. El programa Ignite reparte 200.000 puntos cada semana desde el 20 de julio de 2026 y terminará, como tarde, en el segundo trimestre de 2027. RiseX no publica la fórmula ni ha fijado ningún valor para el punto.",
        "El volumen por sí solo puntúa poco: el programa pondera los costes pagados, el interés abierto y el tiempo que se mantienen las posiciones. En mi caso, 1,65 millones de dólares de volumen dieron 195 puntos en el primer reparto.",
        "Es una plataforma joven: L2BEAT indica que RISE Chain no alcanza su nivel mínimo de madurez y que sus contratos pueden actualizarse sin plazo de espera, y el 3 de agosto de 2026 un fallo de configuración permitió retirar 673.011 USDC del vault XLP.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es RiseX",
          children: (
            <>
              <P>
                Su documentación lo define como un exchange de futuros
                perpetuos totalmente en cadena y compatible con la máquina
                virtual de Ethereum. Según esa documentación, no usa un motor de cruce fuera de la cadena: las órdenes, el cruce, el margen y la liquidación son
                contratos que se ejecutan en RISE Chain.
              </P>
              <P>
                RISE Chain y RiseX son del mismo equipo, RISE Labs, cuyo
                consejero delegado es Sam Battenally. Según un comunicado de
                junio de 2025, el proyecto había captado 8 millones de dólares,
                con Galaxy Ventures en la última ronda y Vitalik Buterin y Stani
                Kulechov, fundador de Aave, entre los primeros inversores. RiseX
                se anunció en noviembre de 2025 y los términos de uso los firma
                la sociedad RiseX Global SA.
              </P>
              <DataTable
                caption="Ficha de RiseX (documentación de RISE, términos de uso de RiseX y L2BEAT, consultados el 19 de noviembre de 2026)."
                head={["", "RiseX"]}
                rows={[
                  ["Qué es", "Exchange descentralizado de perpetuos con libro de órdenes en cadena."],
                  ["Dónde funciona", "RISE Chain, una capa 2 de Ethereum construida con OP Stack."],
                  ["Garantía", "USDC, por ahora."],
                  ["Comisiones base", "0,03 % taker y 0,01 % maker."],
                  ["Token", "No tiene. Reparte puntos con el programa Ignite."],
                  ["Acceso", "Con código de un usuario activo, según la documentación."],
                  ["Empresa", "RiseX Global SA firma los términos; el desarrollo es de RISE Labs."],
                ]}
              />
              <P>
                Un detalle práctico: la documentación indica que RiseX sigue en
                una fase de acceso restringido y que para entrar hace falta el
                código de alguien que ya opere en la plataforma. Otras fuentes hablan ya de entrada con un simple enlace de invitación, así que compruébalo al registrarte. El contexto
                general de este tipo de exchanges está en la guía de{" "}
                <InternalLink href="/guias/perp-dex-y-farmeo-de-puntos">
                  perp DEX y farmeo de puntos
                </InternalLink>
                .
              </P>
            </>
          ),
        },
        {
          id: "como-funciona",
          title: "Cómo funciona por dentro",
          children: (
            <>
              <P>
                La documentación destaca tres piezas que se ejecutan en cadena, como contratos de RISE Chain.
              </P>
              <Ul>
                <Li>
                  <B>Clearinghouse.</B> Comprueba la salud de cada cuenta, fija
                  cuánto apalancamiento puede tomar y gestiona las
                  liquidaciones.
                </Li>
                <Li>
                  <B>Libro de órdenes.</B> Gestiona cada mercado y actualiza su
                  estado aproximadamente cada milisegundo.
                </Li>
                <Li>
                  <B>Oráculo.</B> Envía precios al exchange cada 500
                  milisegundos.
                </Li>
              </Ul>
              <P>
                Todo eso es posible por la cadena sobre la que corre. Según su
                documentación, RISE Chain es un rollup optimista construido con
                OP Stack, que publica sus datos en EigenDA, liquida en Ethereum
                y usa pruebas de fraude basadas en conocimiento cero. Anuncia una ejecución de bloques en torno a un milisegundo y una latencia de extremo a
                extremo de unos 3 milisegundos por orden.
              </P>
              <H3>En qué se diferencia de Hyperliquid y de Lighter</H3>
              <P>
                <InternalLink href="/guias/que-es-hyperliquid">
                  Hyperliquid
                </InternalLink>{" "}
                es una cadena propia con sus validadores.{" "}
                <InternalLink href="/guias/que-es-lighter">Lighter</InternalLink>{" "}
                es una capa 2 hecha a medida que demuestra cada lote de
                operaciones con pruebas de validez. RiseX es una aplicación
                sobre una capa 2 de propósito general, de modo que otros
                contratos de esa cadena pueden interactuar con el exchange en la
                misma transacción. Esa es su apuesta: que el libro de órdenes
                sea una pieza más de DeFi y no una isla.
              </P>
              <Callout title="En cadena no significa descentralizado">
                Que las órdenes se crucen en contratos verificables no quita que
                la cadena tenga un único operador centralizado y que sus contratos puedan actualizarse al instante. Lo detallo en
                la sección de riesgos.
              </Callout>
            </>
          ),
        },
        {
          id: "comisiones",
          title: "Cuánto cuesta operar",
          children: (
            <>
              <P>
                RiseX cobra comisiones desde el primer dólar. El nivel depende
                del volumen que hayas hecho en los últimos 14 días.
              </P>
              <DataTable
                caption="Comisiones de RiseX por nivel (documentación de RISE, consultada el 19 de noviembre de 2026)."
                head={["Nivel", "Volumen de 14 días", "Taker", "Maker"]}
                rows={[
                  ["1", "Desde 0 $", "0,030 %", "0,010 %"],
                  ["2", "5 millones de dólares", "0,025 %", "0,0075 %"],
                  ["3", "25 millones", "0,021 %", "0,005 %"],
                  ["4", "100 millones", "0,017 %", "0,0025 %"],
                  ["5", "500 millones", "0,0155 %", "0 %"],
                  ["6", "1.000 millones", "0,015 %", "0 %"],
                ]}
              />
              <P>
                No hay programa de reembolsos para creadores de mercado, aunque
                la documentación ofrece solicitar un periodo de prueba con mejor
                nivel de comisiones.
              </P>
              <H3>Otros costes</H3>
              <Ul>
                <Li>
                  <B>
                    <GlossaryLink id="funding-rate">Funding</GlossaryLink>.
                  </B>{" "}
                  Se paga cada hora directamente entre posiciones largas y cortas; la documentación lo describe como un pago entre usuarios y limita por defecto la tasa a ±4 % por hora.
                </Li>
                <Li>
                  <B>Liquidación.</B> Si te liquidan, RiseX puede quedarse hasta
                  un 1 %.
                </Li>
                <Li>
                  <B>Retardo artificial.</B> RiseX añade una demora a cada orden
                  para proteger a quien pone liquidez. Para quien opera a mano
                  desde la web, la documentación indica 300 milisegundos en las
                  órdenes taker y 200 en las maker; las cancelaciones no tienen
                  demora.
                </Li>
                <Li>
                  <B>Deslizamiento.</B> En mercados con poca profundidad, una
                  orden a mercado grande mueve el precio en tu contra.
                </Li>
              </Ul>
            </>
          ),
        },
        {
          id: "mercados",
          title: "Qué se puede operar",
          children: (
            <>
              <P>
                De momento solo hay perpetuos. La documentación anuncia el
                mercado al contado como próxima incorporación, sin fecha.
              </P>
              <DataTable
                wide
                caption="Mercados de RiseX (documentación de RISE, consultada el 19 de noviembre de 2026)."
                head={["Tipo", "Ejemplos", "Apalancamiento máximo"]}
                rows={[
                  ["Criptomonedas grandes", "BTC y ETH.", "50x."],
                  ["Otras criptomonedas", "BNB, SOL y HYPE.", "20x."],
                  ["Altcoins", "XRP, ENA, MON, WLD o XMR.", "10x; 5x en las más pequeñas y 3x en AERO."],
                  ["Materias primas", "Oro, plata y petróleo.", "25x en el oro y 20x en el resto."],
                  ["Acciones y ETF", "QQQ, SPY, NVDA, TSLA, META o GOOGL.", "25x en los ETF de índices, 20x en las acciones grandes y 10x o 5x en el resto."],
                ]}
              />
              <Ul>
                <Li>
                  <B>Garantía.</B> USDC, por ahora. La documentación prevé aceptar
                  otros tokens con un sistema de margen de cartera que todavía
                  es una propuesta en borrador.
                </Li>
                <Li>
                  <B>Margen.</B> Cruzado o{" "}
                  <GlossaryLink id="margen-cruzado-y-aislado">
                    aislado
                  </GlossaryLink>
                  , a elegir por posición.
                </Li>
                <Li>
                  <B>Límites por mercado.</B> Cada mercado tiene un tope de
                  interés abierto. En los pequeños ese tope es bajo, así que no
                  admiten posiciones grandes.
                </Li>
                <Li>
                  <B>Depósitos.</B> Desde Ethereum, Arbitrum o Base. Tardan
                  entre 3 y 5 minutos y llegan a través de un puente de
                  LayerZero.
                </Li>
              </Ul>
            </>
          ),
        },
        {
          id: "puntos",
          title: "Los puntos de Ignite",
          children: (
            <>
              <P>
                Ignite es la primera temporada completa del programa de puntos
                de RiseX. Estas son sus reglas publicadas.
              </P>
              <DataTable
                caption="Programa Ignite (documentación y blog de RISE, consultados el 19 de noviembre de 2026)."
                head={["", "Ignite"]}
                rows={[
                  ["Inicio", "20 de julio de 2026."],
                  ["Reparto", "200.000 puntos cada semana, los martes a las 14:00 UTC."],
                  ["Fin", "Como tarde, en el segundo trimestre de 2027."],
                  ["Para quién", "El 100 % de los puntos va a usuarios de RiseX: traders, proveedores de liquidez e integradores."],
                  ["Referidos", "Un 10 % adicional de los puntos de tus referidos, sin restárselos a ellos."],
                  ["Temporada 0", "Reparto retroactivo para quien operó antes de Ignite."],
                ]}
              />
              <H3>Qué puntúa</H3>
              <P>
                RiseX enumera los criterios, pero avisa de que no publica la
                fórmula ni los pesos y de que el modelo cambia cada semana.
              </P>
              <Ul>
                <Li>
                  <B>Sofisticación de la actividad.</B> El blog oficial dice que
                  la operativa con intención puntúa más que el flujo mecánico o
                  de tipo wash trading.
                </Li>
                <Li>
                  <B>Costes totales.</B> Comisiones pagadas, deslizamiento y
                  precios de ejecución desfavorables.
                </Li>
                <Li>
                  <B>Volumen,</B> tanto maker como taker.
                </Li>
                <Li>
                  <B>Interés abierto y tiempo.</B> Cuánto mantienes abierto y
                  durante cuánto tiempo.
                </Li>
              </Ul>
              <P>
                Existe además el Impact Pool, un sorteo semanal de puntos entre
                quienes hacen operaciones de 50.000 dólares o más que cruzan el libro: cada participante tiene un 50 % de opciones y el premio es proporcional al deslizamiento pagado.
              </P>
              <H3>Lo que he aprendido farmeándolo</H3>
              <P>
                Empecé generando volumen con un bot de creación de mercado. En
                el primer reparto, 1,65 millones de dólares de volumen bruto se
                quedaron en unos 675.000 de volumen ponderado y en 195 puntos. Estimé el coste de aquella semana en unos 2,3 dólares por punto. La explicación estaba en los propios
                criterios: órdenes maker, sin deslizamiento y sin posiciones
                abiertas apenas suman.
              </P>
              <P>
                La cuenta completa está en{" "}
                <GuideLink
                  slug="genere-16m-de-volumen-en-risex-para"
                  campaign={CAMPAIGN}
                >
                  Generé $1,6M de volumen en RiseX para solo 195 puntos
                </GuideLink>{" "}
                y la configuración del bot, en{" "}
                <GuideLink
                  slug="como-genere-14-millones-de-dolares"
                  campaign={CAMPAIGN}
                >
                  Cómo generé 1,4 millones de dólares de volumen farmeando RiseX
                </GuideLink>
                .
              </P>
              <Callout title="Un punto no es un token">
                RiseX no ha publicado ticker, oferta, fecha ni tasa de
                conversión. Su documentación habla de «un equipo y un token»
                para RISE y RiseX, y el comunicado de Ignite menciona una futura
                distribución. CryptoRank recoge además una ronda comunitaria de unos 2 millones de dólares en agosto de 2025 a cuenta de ese futuro token. Pero nada de eso es un compromiso con cifras para quien acumula puntos. Lo
                que gastes en comisiones y deslizamiento sí es dinero real. Y
                ojo: los términos de uso prohíben el wash trading, y el programa dice puntuar menos el flujo mecánico o de tipo wash trading.
              </Callout>
            </>
          ),
        },
        {
          id: "xlp",
          title: "El vault XLP y el incidente de agosto",
          children: (
            <>
              <P>
                XLP es el vault comunitario de RiseX. Tiene dos funciones: pone
                liquidez en los libros de órdenes y absorbe las posiciones de
                las cuentas liquidadas. Cualquiera puede depositar USDC y recibe
                a cambio participaciones cuyo valor sube o baja con el resultado
                del vault.
              </P>
              <Ul>
                <Li>
                  <B>Reparto del capital.</B> Un 70 % a creación de mercado en
                  criptomonedas, un 25 % en activos reales y un 5 % a
                  liquidaciones.
                </Li>
                <Li>
                  <B>Entradas y salidas.</B> Funciona por épocas de 12 horas.
                  Los depósitos y las retiradas entran en cola y se ejecutan al
                  cerrar la época.
                </Li>
                <Li>
                  <B>Límite de retirada.</B> En cada época solo puede salir el
                  10 % del valor del vault, por orden de llegada. Si se alcanza,
                  toca esperar a la siguiente.
                </Li>
                <Li>
                  <B>Riesgo.</B> La documentación lo dice sin rodeos: no es un
                  producto neutral al mercado y tendrá caídas.
                </Li>
              </Ul>
              <H3>Qué pasó el 3 de agosto de 2026</H3>
              <P>
                Según el comunicado de RiseX que recogen ChainCatcher y
                DefiLlama, un error de configuración en la estrategia de activos
                reales del vault, presente desde su despliegue el 13 de julio,
                permitió a una dirección no autorizada retirar 673.011,56 USDC.
                El equipo afirma que lo detectó en minutos y lo corrigió en menos de una hora, que no encontró
                fallos similares y que compensó por completo a los depositantes
                de XLP con parte de las comisiones de julio.
              </P>
              <P>
                En septiembre, según la prensa especializada, RiseX envió un
                mensaje en cadena al atacante ofreciéndole quedarse el 20 % si
                devolvía el resto antes del 23 de septiembre. No he encontrado
                confirmación de que los fondos se devolvieran, ni el informe
                detallado que el equipo prometió.
              </P>
              <P>
                La lectura es doble. La cantidad fue pequeña y, según el equipo, la asumió el protocolo y no los usuarios. Pero el fallo llegó a producción en
                un contrato nuevo, tres semanas después de desplegarlo.
              </P>
            </>
          ),
        },
        {
          id: "cifras",
          title: "RiseX en cifras",
          children: (
            <>
              <DataTable
                caption="Cifras de RiseX según DefiLlama, consultadas el 19 de noviembre de 2026. Cambian a diario."
                head={["Dato", "Valor"]}
                rows={[
                  ["Valor depositado (TVL)", "Unos 21,8 M$, cerca de su máximo (22,1 M$ el 7 de noviembre)."],
                  ["Volumen de perpetuos (30 días)", "Unos 4.100 M$."],
                  ["Interés abierto", "Entre 36 y 37 M$."],
                ]}
              />
              <P>
                Es un exchange pequeño. Para situarlo: Lighter rondaba esos
                mismos días los 667 M$ de valor depositado y los 82.000 M$ de
                volumen mensual. Y fíjate en la proporción dentro del propio
                RiseX: el volumen de un mes es unas 190 veces el capital
                depositado y más de 100 veces el interés abierto. Es un patrón habitual en plataformas donde buena parte de la actividad busca puntos.
              </P>
            </>
          ),
        },
        {
          id: "riesgos",
          title: "Riesgos de RiseX",
          children: (
            <>
              <Ul>
                <Li>
                  <B>Cadena inmadura.</B> L2BEAT indica que RISE Chain ni
                  siquiera alcanza Stage 0, su nivel mínimo, porque no existe
                  software público que permita reconstruir el estado de la red a
                  partir de los datos disponibles.
                </Li>
                <Li>
                  <B>Actualizaciones al instante.</B> Según L2BEAT, una
                  multifirma de 3 de 5 puede cambiar los contratos principales
                  sin plazo de espera, así que no hay ventana para salir antes
                  de un cambio que no quieras.
                </Li>
                <Li>
                  <B>Operador centralizado.</B> El secuenciador es único y
                  podría adelantarse a las transacciones de los usuarios. Si
                  falla quien publica el estado en Ethereum, las retiradas se
                  congelan.
                </Li>
                <Li>
                  <B>Datos fuera de Ethereum.</B> Los datos de las transacciones
                  se publican en EigenDA, una red externa.
                </Li>
                <Li>
                  <B>Puente.</B> El USDC que usas en RiseX es una versión
                  puenteada con LayerZero. Si el puente falla, ese token puede
                  perder su respaldo.
                </Li>
                <Li>
                  <B>Contratos nuevos.</B> Las auditorías que cita la
                  documentación son de Cantina, para el exchange, y de yAudit,
                  para el vault XLP. El incidente de agosto ocurrió igualmente.
                </Li>
                <Li>
                  <B>
                    <GlossaryLink id="liquidacion">Liquidación</GlossaryLink>.
                  </B>{" "}
                  Con{" "}
                  <GlossaryLink id="apalancamiento">apalancamiento</GlossaryLink>
                  , un movimiento pequeño en contra cierra tu posición, y en
                  mercados poco profundos el precio se mueve más.
                </Li>
                <Li>
                  <B>Puntos sin valor conocido.</B> Puedes gastar en comisiones
                  durante meses por algo que quizá valga menos de lo que costó.
                </Li>
                <Li>
                  <B>Términos de uso.</B> La empresa limita su responsabilidad a
                  100 dólares o a las comisiones de los últimos seis meses, lo
                  que sea menor, y somete las disputas a arbitraje bajo la ley
                  de Panamá.
                </Li>
              </Ul>
              <P>
                Los hábitos básicos para no perder fondos por una firma o un
                enlace falso están en la guía de{" "}
                <InternalLink href="/guias/seguridad-en-defi">
                  seguridad en DeFi
                </InternalLink>
                .
              </P>
            </>
          ),
        },
        {
          id: "espana",
          title: "¿Se puede usar RiseX desde España?",
          children: (
            <>
              <P>
                Los términos de uso, actualizados el 25 de marzo de 2026,
                enumeran las jurisdicciones prohibidas. España no está en la
                lista.
              </P>
              <DataTable
                caption="Jurisdicciones prohibidas según los términos de uso de RiseX (consultados el 19 de noviembre de 2026). No sustituye a leer los términos."
                head={["Grupo", "Países o territorios"]}
                rows={[
                  ["Norteamérica y Reino Unido", "Estados Unidos y sus dependencias, Canadá y Reino Unido."],
                  ["Europa del Este", "Rusia, Bielorrusia y las regiones de Ucrania no controladas por su Gobierno."],
                  ["Oriente Medio y Asia", "Irán, Irak, Líbano, Siria, Yemen, Palestina, Afganistán, Myanmar, Corea del Norte y Vietnam."],
                  ["África", "Libia, Mali, Senegal, Sudán, Sudán del Sur y Zimbabue."],
                  ["América", "Cuba, Haití y Venezuela."],
                ]}
              />
              <P>
                Que no figure no equivale a una autorización. Los términos
                reservan a la empresa el derecho de rechazar clientes de
                cualquier otro país, prevén el bloqueo geográfico y prohíben
                ocultar la ubicación con una VPN. Los perpetuos son productos
                apalancados y de alto riesgo, y comprobar que puedes usarlos es
                responsabilidad tuya.
              </P>
            </>
          ),
        },
        {
          id: "empezar",
          title: "Cómo empezar con cabeza",
          children: (
            <>
              <Ol>
                <Li>
                  <B>Entra desde la web oficial</B> (rise.trade) y con un código
                  de acceso de alguien de confianza.
                </Li>
                <Li>
                  <B>Usa una wallet dedicada</B> y deposita poco al principio.
                </Li>
                <Li>
                  <B>Prueba una retirada pronto,</B> con una cantidad pequeña,
                  para conocer el proceso antes de necesitarlo.
                </Li>
                <Li>
                  <B>Empieza con apalancamiento bajo</B> y margen aislado.
                </Li>
                <Li>
                  <B>Mide el coste por punto.</B> Suma comisiones, deslizamiento
                  y funding de la semana y divídelo entre los puntos recibidos
                  el martes. Sin ese número no sabes si te compensa.
                </Li>
                <Li>
                  <B>No persigas solo volumen.</B> Los criterios premian las
                  posiciones mantenidas y los costes reales, no las órdenes que
                  entran y salen.
                </Li>
                <Li>
                  <B>Si depositas en XLP,</B> hazlo sabiendo que puede caer y
                  que salir puede llevar más de una época.
                </Li>
              </Ol>
              <P>
                Dónde encaja RiseX frente al resto de exchanges en los que opero
                lo tienes en{" "}
                <GuideLink
                  slug="tier-list-de-perp-dexs-donde-farmeo"
                  campaign={CAMPAIGN}
                >
                  Tier list de Perp DEXs
                </GuideLink>
                .
              </P>
            </>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es RiseX?",
          answer:
            "Un exchange descentralizado de perpetuos con libro de órdenes en cadena, construido sobre RISE Chain, una capa 2 de Ethereum. Lo desarrolla RISE Labs, usa USDC como garantía y todavía no tiene token.",
        },
        {
          question: "¿RiseX tiene token o airdrop?",
          answer:
            "No tiene token. Desde el 20 de julio de 2026 reparte 200.000 puntos semanales con el programa Ignite, que terminará como tarde en el segundo trimestre de 2027. RiseX no ha publicado ticker, fecha ni tasa de conversión de los puntos.",
        },
        {
          question: "¿Cómo se ganan puntos en RiseX?",
          answer:
            "Según la documentación, por la calidad de la actividad, los costes pagados (comisiones, deslizamiento y ejecuciones desfavorables), el volumen maker y taker, y el interés abierto y el tiempo que se mantienen las posiciones. La fórmula y los pesos no se publican y cambian cada semana. Los referidos dan un 10 % adicional.",
        },
        {
          question: "¿Cuánto cuesta operar en RiseX?",
          answer:
            "En el nivel base, un 0,03 % como taker y un 0,01 % como maker, con descuentos según el volumen de 14 días. A eso se suman el funding horario entre usuarios, hasta un 1 % si te liquidan y el deslizamiento.",
        },
        {
          question: "¿Qué es el vault XLP?",
          answer:
            "El vault comunitario de RiseX: pone liquidez en los libros de órdenes y absorbe las posiciones liquidadas. Se deposita USDC, funciona por épocas de 12 horas y en cada época solo puede retirarse el 10 % de su valor. No es neutral al mercado y puede perder.",
        },
        {
          question: "¿Han hackeado RiseX?",
          answer:
            "El 3 de agosto de 2026 un error de configuración en una estrategia del vault XLP permitió a una dirección no autorizada retirar 673.011,56 USDC. Según RiseX, lo corrigió en menos de una hora y compensó a los depositantes con parte de las comisiones de julio. No he encontrado confirmación de que los fondos se recuperaran.",
        },
        {
          question: "¿Es seguro RiseX?",
          answer:
            "Sus contratos están auditados por Cantina y yAudit y su lógica se ejecuta en cadena, pero la plataforma es joven y centralizada: L2BEAT indica que RISE Chain no alcanza su nivel mínimo de madurez, que tiene un único secuenciador y que sus contratos pueden actualizarse sin plazo de espera.",
        },
        {
          question: "¿Se puede usar RiseX desde España?",
          answer:
            "España no figura entre las jurisdicciones prohibidas de sus términos de uso, que sí excluyen a Estados Unidos, Canadá y Reino Unido, entre otros. Eso no equivale a una autorización: los términos pueden cambiar y comprobar que puedes operar es responsabilidad tuya.",
        },
        {
          question: "¿Cómo se accede a RiseX?",
          answer:
            "Según su documentación, RiseX sigue en una fase de acceso restringido: hace falta el código de un usuario que ya opere en la plataforma. Los depósitos se hacen en USDC desde Ethereum, Arbitrum o Base.",
        },
      ]}
      sources={[
        { label: "RISE Docs: introducción a RiseX", href: DOCS },
        { label: "RISE Docs: preguntas frecuentes de RiseX", href: `${DOCS}/faq` },
        {
          label: "RISE Docs: arquitectura técnica",
          href: `${DOCS}/about/Architecture`,
        },
        { label: "RISE Docs: RISE Chain", href: `${DOCS}/core/overview` },
        { label: "RISE Docs: acceso", href: `${DOCS}/onboarding/access` },
        { label: "RISE Docs: depósitos", href: `${DOCS}/onboarding/deposits` },
        { label: "RISE Docs: puente", href: `${DOCS}/core/bridge` },
        { label: "RISE Docs: comisiones", href: `${DOCS}/trading/fees` },
        {
          label: "RISE Docs: tipos de cuenta y retardos",
          href: `${DOCS}/trading/account-types`,
        },
        { label: "RISE Docs: mercados", href: `${DOCS}/trading/markets` },
        { label: "RISE Docs: funding", href: `${DOCS}/trading/funding` },
        {
          label: "RISE Docs: liquidaciones",
          href: `${DOCS}/trading/liquidations`,
        },
        { label: "RISE Docs: hoja de ruta", href: `${DOCS}/features/roadmap` },
        { label: "RISE Docs: puntos", href: `${DOCS}/rewards/points` },
        {
          label: "RISE Docs: referidos y afiliados",
          href: `${DOCS}/rewards/Referrals-Affiliates-Program`,
        },
        { label: "RISE Docs: Impact Pool", href: `${DOCS}/rewards/impact-pool` },
        { label: "RISE Docs: vault XLP", href: `${DOCS}/xlpvault/about` },
        { label: "RISE Docs: auditorías", href: `${DOCS}/contracts/audits` },
        {
          label: "Blog de RISE: temporada 1 de puntos, Ignite",
          href: "https://blog.risechain.com/rise-points-season-1-ignite-everything-you-need-to-know/",
        },
        { label: "RiseX: términos de uso", href: "https://www.rise.trade/en/terms" },
        { label: "L2BEAT: RISE", href: "https://l2beat.com/scaling/projects/rise" },
        { label: "DefiLlama: RISEx", href: "https://defillama.com/protocol/risex" },
        { label: "CryptoRank: RISE Chain", href: "https://cryptorank.io/ico/rise-chain" },
        {
          label: "Decrypt (comunicado): RISEx lanza Ignite (24 de julio de 2026)",
          href: "https://decrypt.co/374238/risex-launches-ignite-season-1-points-program-following-3b-in-volume-during-the-early-access-phase",
        },
        {
          label: "Decrypt (comunicado): RISE presenta MarketCore y RISEx (13 de noviembre de 2025)",
          href: "https://decrypt.co/348534/rise-evolves-beyond-fastest-layer-2-into-the-home-for-global-markets-with-rise-marketcore-and-risex",
        },
        {
          label: "Decrypt (comunicado): Galaxy Ventures respalda RISE Chain (9 de junio de 2025)",
          href: "https://decrypt.co/324190/galaxy-ventures-backs-rise-chain-8m-raised-to-launch-fastest-zone-for-real-time-apps-on-ethereum",
        },
        {
          label: "ChainCatcher: retirada no autorizada en el vault XLP de RISEx (4 de agosto de 2026)",
          href: "https://www.chaincatcher.com/en/article/2280260",
        },
        {
          label: "KuCoin News: RISEx ofrece el 20 % al atacante (19 de septiembre de 2026)",
          href: "https://www.kucoin.com/news/flash/risex-offers-20-of-stolen-funds-to-attacker-in-white-hat-deal",
        },
      ]}
      relatedSlugs={[
        "genere-16m-de-volumen-en-risex-para",
        "como-genere-14-millones-de-dolares",
        "los-agents-de-treadfi-como-elegir",
        "tier-list-de-perp-dexs-donde-farmeo",
        "robinhood-te-paga-lit-por-operar",
      ]}
    />
  );
}
