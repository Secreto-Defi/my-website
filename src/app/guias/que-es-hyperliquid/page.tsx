import type { ReactNode } from "react";
import { getPillar } from "../pilares";
import PillarPage, { pillarMetadata } from "../pillar-page";
import {
  B,
  Callout,
  DataTable,
  ExternalLink,
  Formula,
  GlossaryLink,
  GuideLink,
  H3,
  InternalLink,
  Li,
  Ol,
  P,
  Ul,
} from "../pillar-ui";

const PILLAR = getPillar("/guias/que-es-hyperliquid");
const CAMPAIGN = "hyperliquid";
const TITLE = "Qué es Hyperliquid: perps, HYPE y HIP-3 | Secreto Defi";
const DESCRIPTION =
  "Qué es Hyperliquid, cómo funcionan HyperCore, HyperEVM y el token HYPE, qué es HIP-3, cuánto cuesta operar y qué riesgos tiene. Guía en español.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt: "Qué es Hyperliquid: perps, HYPE y HIP-3 | La Agenda de SecretoDefi",
});

const G = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <GuideLink slug={slug} campaign={CAMPAIGN}>
    {children}
  </GuideLink>
);

// La documentación responde con las dos grafías del espacio (minúscula y
// mayúscula); cada enlace usa la que se comprobó al redactar la página.
const DOCS = "https://hyperliquid.gitbook.io/hyperliquid-docs";
const DOCS_CAP = "https://hyperliquid.gitbook.io/Hyperliquid-docs";

export default function HyperliquidPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Qué es Hyperliquid y cómo funciona: perps, HYPE y HIP-3"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            Hyperliquid es una blockchain de capa 1 construida alrededor de un
            exchange descentralizado: libros de órdenes de futuros perpetuos y de
            spot que funcionan por completo en cadena, y un token propio, HYPE.
            Es lo que se conoce como un{" "}
            <GlossaryLink id="perp-dex">perp DEX</GlossaryLink>, y en noviembre de
            2024 repartió el 31 % de la oferta de su token entre usuarios que
            habían acumulado puntos.
          </P>
          <P>
            En esta página te explico qué hay dentro (HyperCore y HyperEVM), cómo
            funcionan allí los perpetuos, las liquidaciones y el funding, cuánto
            cuesta operar, para qué sirve HYPE, qué son los HIP y, en particular,
            HIP-3, y qué riesgos tiene. Está escrita con la documentación oficial
            y fuentes citadas, y las cifras que cambian a menudo llevan su fecha
            de consulta.
          </P>
        </>
      }
      summary={[
        "Hyperliquid es una capa 1 propia con dos partes: HyperCore, que contiene los libros de órdenes de perpetuos y spot, el margen y las liquidaciones, y HyperEVM, un entorno de contratos inteligentes tipo Ethereum que comparte su consenso.",
        "Operas desde tu wallet con USDC como colateral y sin gas, salvo el del depósito. Según la documentación consultada el 3 de noviembre de 2026, la comisión base de los perpetuos es del 0,045 % para el taker y del 0,015 % para el maker, con descuentos por volumen y por HYPE en staking.",
        "HIP-3 permite a terceros desplegar sus propios mercados de perpetuos con un stake de 500.000 HYPE. Ha traído perpetuos de activos del mundo real, como materias primas y acciones, pero concentra el riesgo en el oráculo y la liquidez de cada mercado.",
        "HYPE se repartió en 2024 con un 31 % de la oferta para usuarios. Sirve para pagar gas en HyperEVM, hacer staking y reducir comisiones, y las recompras que lo respaldan dependen de unos ingresos que cambian con el mercado.",
        "Es un producto apalancado: puedes perder todo el margen. Además hay riesgos de liquidación y ADL, de oráculos en HIP-3, de depósito y de webs falsas.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es Hyperliquid y cómo está construido",
          children: (
            <>
              <P>
                Hyperliquid se presenta en su documentación como una blockchain
                construida con la visión de un sistema financiero abierto y
                totalmente onchain. La asegura HyperBFT, un consenso propio que la
                documentación describe como una variante de HotStuff, y su estado
                se divide en dos componentes:
              </P>
              <Ul>
                <Li>
                  <B>HyperCore.</B> Incluye los libros de órdenes de futuros
                  perpetuos y de spot totalmente en cadena, junto con el estado
                  del margen y del motor de emparejamiento. Según la
                  documentación, cada orden, cancelación, operación y liquidación
                  ocurre en cadena con finalidad de un bloque, heredada de
                  HyperBFT. También indica que la mainnet soporta unas 200.000
                  órdenes por segundo y que, para un cliente en co-location
                  geográfica, la latencia de extremo a extremo tiene una mediana
                  de 0,2 segundos y un percentil 99 de 0,9 segundos. Son cifras
                  declaradas por el proyecto, no una garantía para el usuario
                  medio.
                </Li>
                <Li>
                  <B>HyperEVM.</B> Es un entorno de contratos inteligentes de
                  propósito general, compatible con Ethereum. No es una cadena
                  aparte: forma parte del mismo estado de Hyperliquid, lo asegura
                  el mismo consenso HyperBFT y su token de gas es HYPE. Los
                  contratos pueden leer el estado de HyperCore (posiciones,
                  balances spot, equity de vaults) y enviarle acciones. Un activo
                  spot de HyperCore puede vincularse a un contrato ERC-20 de
                  HyperEVM, y los traspasos entre ambos entornos se hacen dentro
                  de Hyperliquid, sin un puente externo. Más en el{" "}
                  <GlossaryLink id="hypercore-y-hyperevm">glosario</GlossaryLink>.
                </Li>
              </Ul>
              <P>
                «Descentralizado» significa aquí que operas con tu wallet, sin
                abrir una cuenta en una empresa, y que las órdenes se casan en un
                libro público en cadena. Eso no elimina el riesgo: sigues
                dependiendo de la red de validadores, del depósito desde Arbitrum
                y de los contratos y oráculos del sistema, como verás en la
                sección de riesgos.
              </P>
              <P>
                Si todavía no conoces los perpetuos, el apalancamiento o el
                funding, empieza por la guía de{" "}
                <InternalLink href="/guias/perp-dex-y-farmeo-de-puntos#que-es">
                  perp DEX y farmeo de puntos
                </InternalLink>
                . Aquí me centro en lo que es propio de Hyperliquid.
              </P>
            </>
          ),
        },
        {
          id: "perps",
          title: "Perpetuos en Hyperliquid: margen, funding y liquidaciones",
          children: (
            <>
              <P>
                Los datos de esta sección salen de la documentación oficial
                consultada el 3 de noviembre de 2026 y pueden cambiar con nuevas
                propuestas.
              </P>
              <H3>Margen cruzado y aislado</H3>
              <P>
                El{" "}
                <GlossaryLink id="margen-cruzado-y-aislado">
                  margen cruzado
                </GlossaryLink>{" "}
                es el modo por defecto: todas tus posiciones cruzadas comparten el
                colateral de la cuenta, lo que da la máxima eficiencia de capital.
                Con margen aislado, el colateral de una posición queda limitado a
                ese activo y solo arriesgas ese margen. El apalancamiento solo se
                comprueba al abrir la posición. En cruzado, el precio de
                liquidación real no depende del apalancamiento que configures; en
                aislado sí depende, porque el margen asignado depende del margen
                inicial que fijes.
              </P>
              <H3>Funding</H3>
              <P>
                El <GlossaryLink id="funding-rate">funding</GlossaryLink> se paga
                cada hora: la documentación calcula la tasa a 8 horas y cada hora
                se paga una octava parte, con un tope del 4 % por hora. Si la
                tasa es positiva pagan los largos a los cortos; si es negativa, al
                revés. El pago es el tamaño de la posición por el precio oráculo
                y por la tasa. Los detalles están en la{" "}
                <ExternalLink href={`${DOCS}/trading/funding`}>
                  documentación sobre el funding
                </ExternalLink>
                .
              </P>
              <H3>Liquidación</H3>
              <P>
                Tu posición se{" "}
                <GlossaryLink id="liquidacion">liquida</GlossaryLink> cuando el
                equity de la cuenta cae por debajo del margen de mantenimiento. En
                Hyperliquid, ese margen es la mitad del margen inicial al
                apalancamiento máximo del activo, que varía entre 3x y 40x: va del
                1,25 % en los activos de 40x al 16,7 % en los de 3x. Para
                activarla se usa el precio mark, que combina precios de exchanges
                centralizados con el estado del libro de Hyperliquid y puede
                diferir del precio que ves en el libro, sobre todo en momentos de
                mucha volatilidad.
              </P>
              <DataTable
                wide
                caption="Qué ocurre, escalón a escalón, cuando una posición va mal (documentación de Hyperliquid)."
                head={["Mecanismo", "Cuándo actúa", "Qué te puede pasar"]}
                rows={[
                  [
                    "Liquidación en el libro",
                    "El equity de la cuenta cae por debajo del margen de mantenimiento.",
                    "Se intenta cerrar la posición con órdenes de mercado en el libro. Si con eso vuelves a cumplir el margen de mantenimiento, el colateral restante sigue siendo tuyo.",
                  ],
                  [
                    "Liquidación de respaldo (backstop)",
                    "El equity cae por debajo de 2/3 del margen de mantenimiento sin que la liquidación en el libro haya funcionado.",
                    "El Liquidator Vault, una estrategia del HLP, puede asumir tu posición y no se te devuelve el margen de mantenimiento. En margen cruzado se le transfieren tus posiciones y tu margen cruzados; con una posición aislada, solo esa posición y su margen.",
                  ],
                  [
                    "Auto-deleveraging (ADL)",
                    "El valor de una cuenta, o de una posición aislada, se vuelve negativo.",
                    "Se cierran posiciones con beneficio del lado contrario, al precio mark anterior y contra la cuenta en negativo, para que la plataforma no acumule deuda. La cola se ordena por beneficio no realizado y apalancamiento usado.",
                  ],
                ]}
              />
              <P>
                Dos detalles más. En posiciones de más de 100.000 USDC, la
                liquidación en el libro es parcial: solo se envía el 20 % de la
                posición como orden de mercado. Tras una liquidación parcial hay
                un período de 30 segundos en el que las órdenes de mercado de
                liquidación cubren la posición entera. Y el{" "}
                <GlossaryLink id="auto-deleveraging">ADL</GlossaryLink> es, según
                la documentación, la última salvaguarda de la solvencia de la
                plataforma.
              </P>
            </>
          ),
        },
        {
          id: "comisiones",
          title: "Cuánto cuesta operar",
          children: (
            <>
              <P>
                Las comisiones de los perpetuos dependen del volumen ponderado de
                tus últimos 14 días y de cuánto HYPE tengas en staking. En ese
                volumen, el de spot cuenta el doble, y hay un único nivel de
                comisiones por usuario para todos los activos: perps, perps HIP-3
                y spot.
              </P>
              <DataTable
                caption="Comisiones base de perpetuos por nivel de volumen ponderado de 14 días, sin descuentos por staking (documentación de Hyperliquid, consultada el 3 de noviembre de 2026)."
                head={["Nivel y volumen", "Taker", "Maker"]}
                rows={[
                  ["0 (sin mínimo)", "0,045 %", "0,015 %"],
                  ["1 (más de 5 M$)", "0,040 %", "0,012 %"],
                  ["2 (más de 25 M$)", "0,035 %", "0,008 %"],
                  ["3 (más de 100 M$)", "0,030 %", "0,004 %"],
                  ["4 (más de 500 M$)", "0,028 %", "0 %"],
                  ["5 (más de 2.000 M$)", "0,026 %", "0 %"],
                  ["6 (más de 7.000 M$)", "0,024 %", "0 %"],
                ]}
              />
              <P>El HYPE que tengas en staking rebaja esas tarifas:</P>
              <DataTable
                caption="Descuento en comisiones según el HYPE en staking (documentación de Hyperliquid, consultada el 3 de noviembre de 2026)."
                head={["Nivel", "HYPE en staking", "Descuento"]}
                rows={[
                  ["Wood", "más de 10", "5 %"],
                  ["Bronze", "más de 100", "10 %"],
                  ["Silver", "más de 1.000", "15 %"],
                  ["Gold", "más de 10.000", "20 %"],
                  ["Platinum", "más de 100.000", "30 %"],
                  ["Diamond", "más de 500.000", "40 %"],
                ]}
              />
              <P>
                Además hay tres niveles de rebate para quien aporta mucho volumen
                maker: según la columna «14d weighted maker volume» de la
                documentación, con más del 0,5 %, el 1,5 % o el 3 % la tarifa
                maker pasa a ser negativa (−0,001 %, −0,002 % y −0,003 %), es
                decir, te pagan por poner liquidez en el libro.
              </P>
              <Formula>
                Coste de ida y vuelta = 2 × tarifa taker × tamaño de la posición
              </Formula>
              <P>
                Con la tarifa base, abrir y cerrar como taker una posición de
                10.000 $ cuesta 2 × 0,045 % × 10.000 = 9 $, sin contar el
                slippage ni el funding.
              </P>
              <P>
                En los mercados HIP-3 el deployer puede configurar una cuota
                adicional de comisiones de entre el 0 % y el 300 % (0 % y 100 % en
                «growth mode»), y por encima del 100 % la comisión del protocolo
                sube hasta igualar la del deployer. Así que su coste puede diferir
                del de los mercados nativos: compruébalo antes de operar.
              </P>
              <P>
                Todas estas cifras salen de la{" "}
                <ExternalLink href={`${DOCS}/trading/fees`}>
                  página de comisiones
                </ExternalLink>{" "}
                de la documentación oficial y pueden cambiar.
              </P>
            </>
          ),
        },
        {
          id: "hype",
          title: "El token HYPE: reparto, utilidad y staking",
          children: (
            <>
              <P>
                <GlossaryLink id="hype">HYPE</GlossaryLink> es el token nativo de
                Hyperliquid. Según The Block, el 29 de noviembre de 2024 se
                repartió el 31 % de la oferta (310 millones de tokens, con una
                oferta máxima de 1.000 millones) entre usuarios elegibles, que se
                ganaban esa elegibilidad acumulando puntos durante seis meses.
                Hyperliquid Labs, el equipo que impulsa el proyecto, dice en la
                documentación que se autofinancia y no ha tomado capital externo.
              </P>
              <P>Estas son sus utilidades principales:</P>
              <Ul>
                <Li>
                  <B>Gas en HyperEVM.</B> Es el token con el que se pagan las
                  comisiones de red de HyperEVM.
                </Li>
                <Li>
                  <B>Staking.</B> Se hace dentro de HyperCore: puedes delegar en
                  cualquier número de validadores, cada delegación a un validador
                  se bloquea 1 día y pasar HYPE de la cuenta de staking a la
                  cuenta spot tiene una cola de 7 días, con un máximo de 5 retiros
                  pendientes por dirección. Las recompensas salen de la reserva de
                  emisiones futuras y su tasa es inversamente proporcional a la
                  raíz cuadrada del total en staking: por ejemplo, con 400
                  millones de HYPE en staking la documentación indica
                  aproximadamente un 2,37 % anual.
                </Li>
                <Li>
                  <B>Descuentos en comisiones.</B> Según el HYPE que tengas en
                  staking, como en la tabla anterior.
                </Li>
                <Li>
                  <B>Requisito de HIP-3.</B> Un stake de 500.000 HYPE para
                  desplegar un perp dex.
                </Li>
              </Ul>
              <P>
                El staking tiene sus riesgos: un validador puede ser encarcelado
                (<em>jailing</em>) y, mientras lo esté, no genera recompensas para
                quienes le han delegado. La documentación indica que hoy no hay
                slashing automático y que se reserva para conductas maliciosas
                demostrables. Y el consenso necesita que más de dos tercios del
                stake sea honesto, así que conviene elegir bien a quién delegas.
              </P>
              <H3>De dónde sale el valor de HYPE</H3>
              <P>
                Según CoinDesk (9 de agosto de 2026), el Assistance Fund recibe
                cerca del 97 % de las comisiones de trading, compra HYPE en el
                mercado abierto y lo retira del suministro: unos 44,5 millones de
                HYPE hasta esa fecha, con recompras de casi 290 millones de
                dólares en el tercer trimestre de 2025 y de unos 149 millones en
                el segundo trimestre de 2026. La recompra es una proporción fija
                de los ingresos, así que se contrae cuando estos caen. Con datos
                de DefiLlama, el artículo sitúa los ingresos brutos del protocolo
                en unos 357 millones de dólares en el tercer trimestre de 2025 (su
                máximo) y en unos 202 millones en el segundo trimestre de 2026,
                un 43 % menos, y sostiene que HIP-3 ayuda a explicar por qué
                Hyperliquid retiene menos de la actividad que atrae.
              </P>
              <P>
                También hay desbloqueos programados: el artículo cuenta que el 6
                de agosto se liberaron casi 10 millones de HYPE para los
                contribuyentes principales, dentro de una serie mensual que llega
                hasta 2027. Nada de esto es una promesa de rentabilidad. El precio
                de HYPE ha sido muy volátil: según CoinDesk, rondaba los 55 $ a
                principios de agosto, un 28 % por debajo de su máximo de unos 77 $
                del 16 de junio.
              </P>
            </>
          ),
        },
        {
          id: "hips",
          title: "Los HIP: cómo evoluciona Hyperliquid (de HIP-1 a HIP-4)",
          children: (
            <>
              <P>
                Las Hyperliquid Improvement Proposals (HIP) son las propuestas con
                las que se amplía el protocolo. Las cuatro principales son:
              </P>
              <Ul>
                <Li>
                  <B>HIP-1: estándar de tokens nativos.</B> Define tokens
                  fungibles de suministro máximo fijo, cada uno con un libro de
                  órdenes spot en cadena que cotiza contra USDC. El coste de
                  despliegue se decide en una subasta holandesa.
                </Li>
                <Li>
                  <B>HIP-2: Hyperliquidity.</B> Una estrategia de market making
                  en cadena, inspirada en Uniswap pero integrada con el libro de
                  órdenes nativo, que forma parte de la lógica de bloques y no
                  tiene operadores. Está pensada para dar liquidez a los tokens
                  HIP-1 en sus primeras fases de descubrimiento de precio y, por
                  ahora, solo existe en pares spot contra USDC.
                </Li>
                <Li>
                  <B>
                    <GlossaryLink id="hip-3">HIP-3</GlossaryLink>: perpetuos
                    desplegados por builders.
                  </B>{" "}
                  Lo explico justo debajo.
                </Li>
                <Li>
                  <B>HIP-4: outcome markets.</B> Contratos totalmente
                  colateralizados que liquidan dentro de un rango fijo, sin
                  apalancamiento ni liquidaciones: la base de los mercados de
                  predicción en Hyperliquid.
                </Li>
              </Ul>
              <H3>HIP-3: mercados de perpetuos sin permiso</H3>
              <P>
                HIP-3 permite que un tercero, el deployer, lance su propio
                exchange de perpetuos sobre HyperCore sin pedir permiso al equipo:
                cualquiera que cumpla el requisito de stake puede desplegar un
                perp dex. Cada dex tiene su propio margen, sus libros de órdenes y
                su configuración, pero hereda la infraestructura de HyperCore y se
                opera con la misma API. Estas son las reglas más importantes según
                la documentación:
              </P>
              <Ul>
                <Li>
                  <B>Stake.</B> En mainnet hay que tener en stake 500.000 HYPE, y
                  ese requisito se mantiene como mínimo 183 días después de
                  desplegar el dex; cuando todos los activos se han liquidado, el
                  stake queda libre. La documentación dice que se espera que baje
                  con el tiempo.
                </Li>
                <Li>
                  <B>Control.</B> El deployer define el oráculo y las
                  especificaciones del contrato, fija los precios del oráculo y los
                  límites de apalancamiento, y puede cerrar (<em>settle</em>) el
                  mercado.
                </Li>
                <Li>
                  <B>Liquidaciones de respaldo.</B> Cada dex tiene su propio
                  liquidador de respaldo en cadena, que asume las posiciones
                  liquidables por respaldo y solo acepta activos con margen
                  cruzado habilitado. Si no basta, recurre al ADL para garantizar
                  la solvencia de ese dex.
                </Li>
                <Li>
                  <B>Subastas.</B> Los tres primeros activos de cada dex no
                  requieren subasta; los siguientes se asignan en una subasta
                  holandesa compartida entre todos los dex de perpetuos.
                </Li>
                <Li>
                  <B>Comisiones.</B> Los deployers pueden quedarse con hasta el
                  50 % de las comisiones de trading de sus mercados.
                </Li>
                <Li>
                  <B>Margen cruzado.</B> Activarlo en un activo es irreversible, y
                  la documentación advierte de que los usuarios asumen más riesgo
                  al usar margen cruzado entre dexes de deployers distintos.
                </Li>
                <Li>
                  <B>Slashing.</B> El stake del deployer puede penalizarse por
                  votación de los validadores (la cantidad final es la mediana,
                  ponderada por stake, de los votos): hasta el 100 % por entradas
                  irregulares que causen transiciones de estado inválidas o una
                  caída prolongada de la red, hasta el 50 % por una caída breve y
                  hasta el 20 % por entradas inválidas que degraden el
                  rendimiento. El stake sigue siendo penalizable durante la cola
                  de desbloqueo de 7 días, y lo penalizado se quema: no se reparte
                  entre los usuarios afectados.
                </Li>
              </Ul>
              <P>
                HIP-3 se puso en marcha en mainnet con la actualización de red del
                13 de octubre de 2025, según The Block. Según CoinDesk (agosto de
                2026), los mercados de builders pasaron de cerca del 2 % del
                volumen de perpetuos de Hyperliquid a principios de 2026 a
                aproximadamente la mitad; los perpetuos de activos del mundo real
                marcaron un récord de 3.600 millones de dólares de interés
                abierto, y Trade.xyz, un único deployer, concentra más del 90 % del
                interés abierto de HIP-3. Cómo funciona la creación de mercados la
                analicé en{" "}
                <G slug="hip-3-de-hyperliquid-creacion-de">
                  HIP-3 de Hyperliquid: creación de mercados sin permiso
                </G>{" "}
                (septiembre de 2025, con nota de actualización) y el lado RWA, en{" "}
                <G slug="rwa-onchain-como-se-trada-oro-acciones">
                  RWA onchain: cómo se trada oro, acciones y petróleo en cripto
                </G>
                .
              </P>
              <H3>HIP-4: mercados de resultados</H3>
              <P>
                HIP-4 añade a HyperCore contratos totalmente colateralizados que
                liquidan dentro de un rango fijo, una forma de derivado sin
                apalancamiento ni liquidaciones. Cada mercado tiene dos lados, cada
                uno con su token y normalmente etiquetados «Sí» y «No»; en un
                binario, cada lado liquida a 0 o a 1 al vencimiento, así que la
                pérdida máxima es lo que pagaste al entrar. Según Galaxy Research
                (9 de junio de 2026), se activó en mainnet el 2 de mayo de 2026
                con mercados sobre el precio de BTC, y el primero fue un binario
                diario que liquida al precio mark de BTC en HyperCore (a las 06:00
                UTC, según la documentación). Es la base de los{" "}
                <GlossaryLink id="mercado-de-predicciones">
                  mercados de predicción
                </GlossaryLink>{" "}
                en Hyperliquid; si quieres ver cómo funciona otro, tienes mi
                análisis de{" "}
                <G slug="polymarket-las-finanzas-de-la-informacion">Polymarket</G>.
              </P>
              <P>
                También es lo más reciente y lo que más puede cambiar. La
                documentación dice que las funciones se despliegan por fases, que
                los mercados con varios resultados no formaban parte del
                lanzamiento inicial y que las comisiones son cero durante las
                pruebas iniciales. Galaxy señala como riesgos que la resolución
                depende de votos de validadores, que mientras no llegue el
                despliegue sin permiso solo se publican mercados que los
                validadores puedan resolver con claridad y que Hyperliquid es, por
                ahora, una plataforma offshore y sin regulación. Comprueba su
                estado en la documentación antes de operar.
              </P>
            </>
          ),
        },
        {
          id: "ecosistema",
          title: "HLP, vaults y aplicaciones sobre HyperEVM",
          children: (
            <>
              <P>
                El <GlossaryLink id="hlp">HLP</GlossaryLink> (Hyperliquidity
                Provider) es un protocol vault totalmente comunitario: la
                comunidad puede aportar liquidez al vault y compartir sus
                resultados. Según la documentación, hace market making con varias
                estrategias, ejecuta liquidaciones y recibe parte de las
                comisiones de trading, y los depósitos tienen un bloqueo de 4 días
                desde el último depósito. No es renta fija: es la contraparte de
                las liquidaciones de respaldo y comparte ganancias y pérdidas con
                quienes depositan.
              </P>
              <P>
                Sobre HyperEVM hay protocolos de terceros, entre ellos pools de
                liquidez como los que analizo en{" "}
                <G slug="como-monitorizo-mis-pools-de-hyperevm">
                  Analiza tus pools y conoce si estás siendo rentable o no
                </G>
                . Y si quieres usar perpetuos para cubrir una posición de
                liquidez, tienes{" "}
                <G slug="como-hedgear-el-impermanent-loss">
                  Cómo hedgear el Impermanent Loss de tus LPs
                </G>
                .
              </P>
            </>
          ),
        },
        {
          id: "riesgos",
          title: "Riesgos de usar Hyperliquid",
          children: (
            <>
              <Ul>
                <Li>
                  <B>Apalancamiento y liquidación.</B> Puedes perder todo el
                  margen. Entre la liquidación en el libro, la de respaldo y el
                  ADL (tabla anterior), una posición ganadora también puede
                  cerrarse antes de lo que esperas.
                </Li>
                <Li>
                  <B>Oráculos y liquidez de los mercados HIP-3.</B> El deployer
                  define el oráculo y las especificaciones de cada mercado, así
                  que la calidad de ese oráculo y la liquidez del activo de
                  referencia marcan tu riesgo. Su stake puede penalizarse, pero lo
                  penalizado se quema y no te compensa. Un ejemplo que recoge
                  CoinDesk: una operación en un mercado coreano de preapertura con
                  poca liquidez hizo caer un 19 % el contrato de SK Hynix de
                  Trade.xyz y provocó liquidaciones que la empresa aceptó
                  reembolsar. Que un deployer decida reembolsar es decisión suya,
                  no una garantía del protocolo.
                </Li>
                <Li>
                  <B>Concentración.</B> Trade.xyz concentra más del 90 % del
                  interés abierto de HIP-3 y, según el mismo artículo, las cifras
                  récord de Hyperliquid dependen de las decisiones de oráculo de
                  un solo deployer.
                </Li>
                <Li>
                  <B>Margen cruzado entre dexes.</B> La documentación avisa de que
                  los usuarios asumen más riesgo al usar margen cruzado entre dexes
                  de deployers distintos.
                </Li>
                <Li>
                  <B>Dependencia de ingresos y desbloqueos.</B> Las recompras que
                  respaldan a HYPE son una proporción fija de unos ingresos que
                  han bajado, y hay desbloqueos mensuales de tokens de los
                  contribuyentes principales hasta 2027, como has visto antes.
                </Li>
                <Li>
                  <B>Red de validadores.</B> El consenso necesita que más de dos
                  tercios del stake sea honesto: la red es tan segura como su
                  conjunto de validadores.
                </Li>
                <Li>
                  <B>Depósito desde Arbitrum.</B> Depositas USDC por Arbitrum, lo
                  que en la práctica es un{" "}
                  <GlossaryLink id="bridge">puente</GlossaryLink> entre esa red y
                  Hyperliquid, y los puentes son un objetivo habitual de ataques
                  en DeFi. Prueba primero con una cantidad pequeña.
                </Li>
                <Li>
                  <B>Webs falsas y firmas.</B> Una web falsa de Hyperliquid o un
                  supuesto «reclamo de airdrop» puede vaciarte la wallet. Entra
                  solo escribiendo tú mismo la dirección oficial o desde tus
                  favoritos, lee cada firma y revisa tus permisos: lo explico en
                  la guía de{" "}
                  <InternalLink href="/guias/seguridad-en-defi#estafas">
                    seguridad en DeFi
                  </InternalLink>
                  .
                </Li>
                <Li>
                  <B>Regulación.</B> Los derivados apalancados están regulados en
                  muchos países. Galaxy Research describe a Hyperliquid como una
                  plataforma offshore y, por ahora, sin regulación, y las
                  condiciones de uso pueden excluir algunos territorios: comprueba
                  que puedes usarla desde tu país. Esto no es asesoramiento legal.
                </Li>
              </Ul>
              <Callout title="Una regla práctica">
                Usa Hyperliquid con capital que puedas permitirte perder y no
                dejes en la plataforma más de lo que vayas a operar. Si lo que
                buscas es acumular puntos para un posible airdrop, recuerda que
                ningún programa garantiza una recompensa.
              </Callout>
            </>
          ),
        },
        {
          id: "empezar",
          title: "Cómo empezar paso a paso",
          children: (
            <Ol>
              <Li>
                <B>Prepara tu wallet.</B> Usa una wallet dedicada con solo el
                capital que puedas permitirte perder y repasa los hábitos de la
                guía de{" "}
                <InternalLink href="/guias/seguridad-en-defi#habitos">
                  seguridad en DeFi
                </InternalLink>
                .
              </Li>
              <Li>
                <B>Entra desde la web oficial.</B> Escribe tú mismo
                app.hyperliquid.xyz o usa tus favoritos, nunca un anuncio ni un
                enlace recibido en un mensaje. Según la documentación, puedes
                conectar wallets EVM como Rabby, MetaMask, WalletConnect o
                Coinbase Wallet.
              </Li>
              <Li>
                <B>Activa el trading.</B> Pulsa «Enable Trading» y firma la
                transacción sin gas que te pide la wallet. Lee siempre lo que
                firmas.
              </Li>
              <Li>
                <B>Deposita USDC por Arbitrum.</B> Necesitas un poco de ETH en
                Arbitrum para pagar el gas del depósito; según la documentación,
                operar en Hyperliquid no cuesta gas. Empieza con un depósito
                pequeño.
              </Li>
              <Li>
                <B>Elige el mercado y el margen.</B> Empieza con poco
                apalancamiento y, si puedes, en margen aislado, y calcula tu
                precio de liquidación antes de confirmar la orden.
              </Li>
              <Li>
                <B>Entiende el coste.</B> Comisión según tu nivel, funding cada
                hora y slippage: anota el coste total antes de operar.
              </Li>
              <Li>
                <B>En los mercados HIP-3, lee sus especificaciones.</B> Qué
                oráculo usan, qué horarios, qué apalancamiento y quién es el
                deployer. Usa tamaños pequeños hasta ver cómo se comporta el
                mercado.
              </Li>
              <Li>
                <B>Retira lo que no necesites y revisa tus permisos</B> de vez en
                cuando.
              </Li>
            </Ol>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es Hyperliquid?",
          answer:
            "Una blockchain de capa 1 propia centrada en un exchange descentralizado, con libros de órdenes de perpetuos y de spot totalmente en cadena. Se compone de HyperCore, que contiene los libros, el margen y las liquidaciones, y HyperEVM, un entorno de contratos inteligentes tipo Ethereum. Su token es HYPE.",
        },
        {
          question: "¿Hyperliquid es un exchange descentralizado?",
          answer:
            "En el sentido de que operas con tu wallet y las órdenes se casan en un libro público en cadena, sí. Pero no está libre de riesgos: dependes de su red de validadores, del depósito desde Arbitrum y de los contratos y oráculos del sistema.",
        },
        {
          question: "¿Qué es HYPE y para qué sirve?",
          answer:
            "Es el token nativo de Hyperliquid. Sirve para pagar el gas en HyperEVM, para hacer staking y delegar en validadores, para obtener descuentos en comisiones según el HYPE en staking y como requisito de stake para desplegar mercados HIP-3.",
        },
        {
          question: "¿Qué es HIP-3?",
          answer:
            "Una propuesta de mejora que permite a un tercero, con un stake de 500.000 HYPE, lanzar su propio exchange de perpetuos sobre HyperCore sin pedir permiso. El deployer define el oráculo y las especificaciones de cada mercado y puede quedarse con parte de las comisiones. Es la base de los perpetuos de activos del mundo real, como materias primas y acciones, en Hyperliquid.",
        },
        {
          question: "¿Qué es HIP-4?",
          answer:
            "Los outcome markets de Hyperliquid: contratos totalmente colateralizados que liquidan dentro de un rango fijo, sin apalancamiento ni liquidaciones. Según Galaxy Research, se activaron en mainnet el 2 de mayo de 2026 con un primer mercado binario diario sobre el precio de BTC. Se despliegan por fases, así que comprueba su estado en la documentación antes de operar.",
        },
        {
          question: "¿Cuánto cuesta operar en Hyperliquid?",
          answer:
            "Según la documentación consultada el 3 de noviembre de 2026, la comisión base de los perpetuos es del 0,045 % para el taker y del 0,015 % para el maker. Baja con el volumen ponderado de 14 días y con el HYPE en staking, y operar no cuesta gas: solo depositar. Además pagas o cobras funding cada hora y asumes el slippage de cada orden.",
        },
        {
          question: "¿Habrá otro airdrop de Hyperliquid?",
          answer:
            "No hay garantía. El reparto de génesis fue el 29 de noviembre de 2024 y repartió el 31 % de la oferta de HYPE. Trata cualquier web, mensaje o anuncio que te ofrezca «reclamar» un airdrop de Hyperliquid como un posible intento de phishing y consulta solo los canales oficiales.",
        },
        {
          question: "¿Puedo usar Hyperliquid desde mi país?",
          answer:
            "Para empezar basta con conectar una wallet, según su documentación, pero eso no responde a si te conviene o te está permitido: los derivados apalancados están regulados en muchos países y las condiciones de uso de la plataforma pueden excluir algunos territorios. Revisa los términos oficiales y consulta a un asesor si tienes dudas; esto no es asesoramiento legal.",
        },
      ]}
      sources={[
        {
          label: "Hyperliquid Docs: introducción",
          href: DOCS_CAP,
        },
        {
          label: "Hyperliquid Docs: HyperCore",
          href: `${DOCS}/hypercore/overview`,
        },
        {
          label: "Hyperliquid Docs: cómo usar la HyperEVM",
          href: `${DOCS_CAP}/onboarding/how-to-use-the-hyperevm`,
        },
        {
          label: "Hyperliquid Docs: HyperEVM, interactuar con HyperCore",
          href: `${DOCS}/for-developers/hyperevm/interacting-with-hypercore`,
        },
        {
          label: "Hyperliquid Docs: traspasos entre HyperCore y HyperEVM",
          href: `${DOCS_CAP}/for-developers/hyperevm/hypercore-less-than-greater-than-hyperevm-transfers`,
        },
        {
          label: "Hyperliquid Docs: margen",
          href: `${DOCS}/trading/margining`,
        },
        {
          label: "Hyperliquid Docs: funding",
          href: `${DOCS}/trading/funding`,
        },
        {
          label: "Hyperliquid Docs: liquidaciones",
          href: `${DOCS}/trading/liquidations`,
        },
        {
          label: "Hyperliquid Docs: auto-deleveraging",
          href: `${DOCS_CAP}/trading/auto-deleveraging`,
        },
        {
          label: "Hyperliquid Docs: comisiones",
          href: `${DOCS}/trading/fees`,
        },
        {
          label: "Hyperliquid Docs: staking",
          href: `${DOCS}/hypercore/staking`,
        },
        {
          label: "Hyperliquid Docs: protocol vaults (HLP)",
          href: `${DOCS}/hypercore/vaults/protocol-vaults`,
        },
        {
          label: "Hyperliquid Docs: core contributors",
          href: `${DOCS}/about-hyperliquid/core-contributors`,
        },
        {
          label: "Hyperliquid Docs: HIP-1, estándar de tokens nativos",
          href: `${DOCS_CAP}/hyperliquid-improvement-proposals-hips/hip-1-native-token-standard`,
        },
        {
          label: "Hyperliquid Docs: HIP-2, Hyperliquidity",
          href: `${DOCS}/hyperliquid-improvement-proposals-hips/hip-2-hyperliquidity`,
        },
        {
          label: "Hyperliquid Docs: HIP-3, perpetuos desplegados por builders",
          href: `${DOCS}/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals`,
        },
        {
          label: "Hyperliquid Docs: HIP-4, outcome markets",
          href: `${DOCS}/hyperliquid-improvement-proposals-hips/hip-4-outcome-markets`,
        },
        {
          label: "Hyperliquid Docs: cómo empezar a operar",
          href: `${DOCS}/onboarding/how-to-start-trading`,
        },
        {
          label: "The Block: Hyperliquid reparte más de 1.200 millones de dólares en HYPE (29 de noviembre de 2024)",
          href: "https://www.theblock.co/post/328769/hyperliquid-airdrops-over-1-2-billion-worth-of-tokens-to-users-as-hype-crosses-4-billion-fdv",
        },
        {
          label: "The Block: Hyperliquid activa HIP-3 (13 de octubre de 2025)",
          href: "https://www.theblock.co/post/374306/hyperliquid-activate-hip-3-upgrade",
        },
        {
          label: "CoinDesk: el auge de los perpetuos RWA reduce los ingresos que respaldan a HYPE (9 de agosto de 2026)",
          href: "https://www.coindesk.com/business/2026/08/09/hyperliquid-s-rwa-perps-boom-is-eating-into-the-revenue-that-backs-hype",
        },
        {
          label: "Galaxy Research: HIP-4 y los mercados de predicción (9 de junio de 2026)",
          href: "https://www.galaxy.com/insights/research/hyperliquid-hip-4-prediction-markets-polymarket-kalshi-analysis",
        },
      ]}
      relatedSlugs={[
        "hip-3-de-hyperliquid-creacion-de",
        "tier-list-de-perp-dexs-donde-farmeo",
        "rwa-onchain-como-se-trada-oro-acciones",
        "como-monitorizo-mis-pools-de-hyperevm",
        "como-hedgear-el-impermanent-loss",
        "polymarket-las-finanzas-de-la-informacion",
      ]}
    />
  );
}
