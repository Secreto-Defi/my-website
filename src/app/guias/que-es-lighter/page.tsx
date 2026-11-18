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

const PILLAR = getPillar("/guias/que-es-lighter");
const CAMPAIGN = "lighter";
const TITLE = "Qué es Lighter (LIT) y cómo funciona | Secreto Defi";
const DESCRIPTION =
  "Qué es Lighter, cómo funciona su exchange de perpetuos sin comisiones, para qué sirve el token LIT, qué pasó el 16 de noviembre de 2026 y qué riesgos tiene.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt: "Qué es Lighter (LIT) y cómo funciona | La Agenda de SecretoDefi",
});

const DOCS = "https://docs.lighter.xyz";

export default function LighterPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Qué es Lighter: el perp DEX sin comisiones, el token LIT y sus riesgos"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            Lighter es un{" "}
            <GlossaryLink id="perp-dex">exchange descentralizado de perpetuos</GlossaryLink>{" "}
            que funciona como una{" "}
            <GlossaryLink id="capa-2">capa 2</GlossaryLink> de Ethereum hecha a
            medida para operar. Su reclamo es que las cuentas normales no pagan
            comisiones de trading, y su particularidad técnica es que el cruce
            de órdenes y las liquidaciones se demuestran con pruebas
            criptográficas que se verifican en Ethereum.
          </P>
          <P>
            En esta página te explico cómo funciona por dentro, de dónde sale el
            dinero si no cobra comisiones, qué se puede operar, para qué sirve
            el token LIT, qué es Lighter en Robinhood Chain, qué pasó en el
            incidente del 16 de noviembre de 2026 y qué riesgos asumes. Está
            escrita con la documentación oficial y fuentes citadas, y las cifras
            que cambian a menudo llevan su fecha de consulta.
          </P>
        </>
      }
      summary={[
        "Lighter es un exchange descentralizado de perpetuos construido como una capa 2 de Ethereum específica para trading. Los fondos se depositan en contratos de Ethereum y cada lote de operaciones se valida allí con una prueba criptográfica.",
        "Las cuentas Standard no pagan comisión de maker ni de taker, a cambio de 300 ms de latencia en las órdenes que cruzan el libro. Quien paga son las cuentas Premium y Plus, pensadas para operativa de alta frecuencia, y de ahí salen los ingresos.",
        "LIT es el token de la plataforma: 1.000 millones de oferta máxima, la mitad para el ecosistema. Hacer staking da acceso al fondo de liquidez LLP, un 6 % anual fijo y descuentos en las cuentas Premium, y el protocolo recompra LIT con sus ingresos.",
        "El 16 de noviembre de 2026 un atacante retiró unos 10,4 millones de USDC con las claves API de un trader. Según Lighter, el fallo estuvo en un software de firma ajeno a sus SDK oficiales y ni el protocolo ni los contratos se vieron afectados.",
        "L2BEAT la clasifica en Stage 0: hay un único operador, los contratos pueden actualizarse sin plazo de espera y el operador debe reportar los precios de los oráculos con honestidad. Operar con apalancamiento añade el riesgo de liquidación.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es Lighter",
          children: (
            <>
              <P>
                Su documentación la define como una plataforma de trading
                descentralizada diseñada para la seguridad, la escala y el
                rendimiento, y afirma que es el primer exchange que ofrece cruce
                de órdenes y liquidaciones verificables. En la práctica es un
                libro de órdenes como el de un exchange centralizado, pero los
                fondos están en contratos de Ethereum y no en manos de la
                empresa.
              </P>
              <P>
                Detrás está Elliot Technologies, Inc., la sociedad que figura en
                sus términos de uso. Según Fortune, la fundó Vladimir Novakovski
                en 2022 al reconvertir una startup anterior, y en noviembre de
                2025 cerró una ronda de 68 millones de dólares liderada por
                Founders Fund y Ribbit Capital, con participación de Haun
                Ventures y Robinhood, a una valoración de unos 1.500 millones
                según fuentes anónimas del mismo artículo. El token LIT empezó a
                cotizar el 30 de diciembre de 2025.
              </P>
              <DataTable
                caption="Ficha de Lighter (documentación de Lighter, L2BEAT, Fortune y The Block, consultados el 18 de noviembre de 2026)."
                head={["", "Lighter"]}
                rows={[
                  ["Qué es", "Exchange descentralizado de perpetuos con libro de órdenes."],
                  ["Dónde funciona", "En su propia capa 2 de Ethereum (Lighter Core) y, como exchange separado, en Robinhood Chain."],
                  ["Garantía principal", "USDC en Lighter Core y USDG en Robinhood Chain."],
                  ["Comisiones", "Cero para cuentas Standard; de pago para Premium y Plus."],
                  ["Token", "LIT, con oferta máxima de 1.000 millones."],
                  ["Empresa", "Elliot Technologies, Inc."],
                  ["Madurez según L2BEAT", "Stage 0."],
                ]}
              />
              <P>
                Si vienes de{" "}
                <InternalLink href="/guias/que-es-hyperliquid">
                  Hyperliquid
                </InternalLink>
                , la diferencia de fondo es dónde vive cada uno: Hyperliquid es
                una cadena propia con sus validadores, y Lighter es una capa 2
                que publica sus datos y sus pruebas en Ethereum. El contexto
                general de este tipo de plataformas está en la guía de{" "}
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
                La documentación describe Lighter Core con cuatro piezas. Lo
                importante es qué hace cada una y en cuál tienes que confiar.
              </P>
              <Ul>
                <Li>
                  <B>Contratos en Ethereum.</B> Guardan los activos depositados
                  y la raíz del estado de Lighter. Solo actualizan ese estado
                  cuando se verifica una prueba.
                </Li>
                <Li>
                  <B>Secuenciador.</B> Ordena las transacciones por orden de
                  llegada y ejecuta las operaciones. Es lo que te da la
                  confirmación rápida.
                </Li>
                <Li>
                  <B>Prover.</B> Genera pruebas de que cada lote de
                  transacciones firmadas se ejecutó según las reglas, y las
                  agrega en una sola prueba por lote.
                </Li>
                <Li>
                  <B>Datos en Ethereum.</B> Con cada lote se publican en
                  Ethereum los cambios de cada cuenta, comprimidos. Según la
                  documentación, esos datos bastan para reconstruir el estado de
                  todos los usuarios.
                </Li>
              </Ul>
              <P>
                Eso es lo que significa «verificable»: no hace falta creer que
                el exchange cruzó bien tu orden o liquidó a quien tocaba, porque
                un contrato en Ethereum rechaza cualquier lote que no cumpla las
                reglas.
              </P>
              <H3>La salida de emergencia</H3>
              <P>
                Hay una cola de peticiones prioritarias en Ethereum para
                operaciones críticas, como retirar, salir de un pool o cerrar
                una posición. El secuenciador debe atenderlas en un plazo
                fijado. Si no lo hace, se activa el modo de escape: el contrato
                se congela y cada usuario puede reconstruir su saldo con los
                datos publicados y retirarlo directamente en Ethereum. L2BEAT
                cifra ese plazo en 14 días de censura o caída del secuenciador.
              </P>
              <Callout title="Verificable no significa descentralizado">
                Las pruebas garantizan que las reglas se cumplen, no quién
                decide las reglas. L2BEAT recuerda que solo el operador puede
                enviar y probar lotes, que los contratos se han actualizado
                siempre por la vía rápida y que los precios de los oráculos los
                reporta el secuenciador sin que se verifiquen sus firmas. Lo
                detallo en la sección de riesgos.
              </Callout>
            </>
          ),
        },
        {
          id: "comisiones",
          title: "Comisiones: por qué es gratis y quién paga",
          children: (
            <>
              <P>
                Lighter tiene tres tipos de cuenta. La que se crea por defecto
                no paga comisiones, pero opera con más retardo. Las otras dos
                pagan a cambio de velocidad o de más capacidad de envío de
                órdenes.
              </P>
              <DataTable
                wide
                caption="Tipos de cuenta en Lighter Core (documentación de Lighter, consultada el 18 de noviembre de 2026). Las comisiones de Premium bajan hasta un 30 % según el LIT en staking."
                head={["Cuenta", "Maker / taker", "Latencia taker", "Para quién"]}
                rows={[
                  ["Standard (por defecto)", "0 % / 0 %", "300 ms", "Usuarios normales."],
                  ["Plus", "0,005 % / 0,005 %", "300 ms", "Quien necesita más límite de peticiones y no depende de la latencia."],
                  ["Premium", "0,004 % / 0,028 % sin staking", "140 ms", "Alta frecuencia y creadores de mercado."],
                ]}
              />
              <P>
                El modelo es ese: el usuario minorista opera gratis y más lento,
                y los operadores profesionales pagan por ir más rápido. Según la
                documentación, el protocolo recompra LIT con los ingresos por
                comisiones.
              </P>
              <H3>Lo que sí pagas aunque la cuenta sea gratis</H3>
              <Ul>
                <Li>
                  <B>Órdenes avanzadas.</B> Las órdenes TWAP y las peticiones de
                  cotización (RFQ) pagan un 0,01 % también en la cuenta
                  Standard.
                </Li>
                <Li>
                  <B>
                    <GlossaryLink id="funding-rate">Funding</GlossaryLink>.
                  </B>{" "}
                  Se liquida cada hora entre posiciones largas y cortas, sin
                  comisión para el exchange. El tope por defecto es del 0,5 %
                  por hora, y algunos mercados tienen topes distintos.
                </Li>
                <Li>
                  <B>Liquidación.</B> Si te liquidan, el motor puede quedarse
                  hasta un 1 %, que va al fondo LLP.
                </Li>
                <Li>
                  <B>Diferencial y deslizamiento.</B> Como en cualquier libro de
                  órdenes, una orden a mercado paga el diferencial entre compra
                  y venta.
                </Li>
                <Li>
                  <B>Entrar y salir.</B> Depositar desde otra red pasa por
                  puentes e intercambios con su propio coste, y la retirada
                  rápida usa un fondo de liquidez distinto de la retirada normal
                  por Ethereum.
                </Li>
              </Ul>
            </>
          ),
        },
        {
          id: "mercados",
          title: "Qué se puede operar en Lighter",
          children: (
            <>
              <DataTable
                wide
                caption="Productos de Lighter (documentación de Lighter, consultada el 18 de noviembre de 2026)."
                head={["Producto", "Qué es", "A tener en cuenta"]}
                rows={[
                  [
                    "Perpetuos de criptomonedas",
                    "Contratos sin vencimiento sobre BTC, ETH y decenas de altcoins.",
                    "Apalancamiento máximo de 50x en BTC y ETH y mucho menor en tokens pequeños.",
                  ],
                  [
                    "Perpetuos de activos reales (RWA)",
                    "Acciones, ETF, índices, materias primas y divisas, abiertos 24/7.",
                    "Fuera del horario del mercado real el precio se deriva del propio libro de órdenes.",
                  ],
                  [
                    "Mercados pre-IPO",
                    "Perpetuos sobre la valoración de una empresa antes de salir a bolsa.",
                    "Se cierran y liquidan tras la salida a bolsa, con una fórmula fijada de antemano.",
                  ],
                  [
                    "Spot y cuenta unificada",
                    "Compra y venta al contado, con margen compartido entre spot y perpetuos.",
                    "ETH, weETH y XAUT pueden servir de garantía con un descuento sobre su valor.",
                  ],
                  [
                    "Opciones binarias",
                    "Mercados de dos resultados, como si BTC sube o baja en 15 minutos.",
                    "Sin apalancamiento ni liquidación: la pérdida máxima es lo que pagas.",
                  ],
                  [
                    "Public Pools y LLP",
                    "Fondos donde un operador opera con el dinero de los depositantes.",
                    "El LLP es el fondo del protocolo y solo admite depósitos de quien tiene LIT en staking.",
                  ],
                ]}
              />
              <P>
                La tabla de especificaciones de la documentación recoge cerca de
                200 mercados de perpetuos. El apalancamiento máximo depende del
                activo: 50x en BTC, ETH, las principales divisas y el S&amp;P
                500; 20x en la mayoría de acciones estadounidenses; y entre 3x y
                10x en los tokens con menos liquidez.
              </P>
              <H3>El LLP: fondo de liquidez y fondo de seguro a la vez</H3>
              <P>
                El LLP (Lighter Liquidity Pool) es una cuenta única que hace de
                contrapartida en la operativa del fondo y en las liquidaciones.
                Cuando una cuenta cae por debajo de su margen de cierre, el LLP
                asume sus posiciones. Si tampoco puede cubrir la pérdida, entra
                el{" "}
                <GlossaryLink id="auto-deleveraging">
                  auto-desapalancamiento
                </GlossaryLink>
                , que cierra posiciones contrarias de otros usuarios.
              </P>
              <P>
                Depositar en el LLP es, por tanto, aceptar ese riesgo. La
                documentación reparte el capital en estrategias separadas (por
                ejemplo, cripto, divisas y activos reales) de modo que la
                pérdida de una no arrastre a las demás, y fija una espera de 5
                minutos para retirar en Lighter Core. Es un papel parecido al
                del{" "}
                <GlossaryLink id="hlp">HLP</GlossaryLink> de Hyperliquid.
              </P>
            </>
          ),
        },
        {
          id: "lit",
          title: "El token LIT: reparto, staking y recompras",
          children: (
            <>
              <P>
                LIT (Lighter Infrastructure Token) se lanzó el 30 de diciembre
                de 2025. Según The Block, la mitad de la oferta se reservó al
                ecosistema y la otra mitad al equipo y a los inversores.
              </P>
              <DataTable
                caption="Reparto de LIT (The Block, 30 de diciembre de 2025)."
                head={["Destino", "Parte de la oferta", "Condiciones"]}
                rows={[
                  ["Airdrop", "25 %", "Para los participantes de las dos temporadas de puntos de 2025."],
                  ["Resto del ecosistema", "25 %", "Incentivos futuros y acuerdos estratégicos."],
                  ["Equipo", "26 %", "Un año de bloqueo y tres de liberación lineal."],
                  ["Inversores", "24 %", "Un año de bloqueo y tres de liberación lineal."],
                ]}
              />
              <Callout title="Ojo con el calendario de desbloqueos">
                Si el año de bloqueo cuenta desde el lanzamiento del token, los
                tokens del equipo y de los inversores (el 50 % de la oferta)
                empezarían a liberarse a finales de diciembre de 2026. Es un
                cálculo mío a partir de las condiciones publicadas, no una fecha
                confirmada por Lighter: compruébala antes de tomar decisiones.
              </Callout>
              <H3>Para qué sirve hacer staking de LIT</H3>
              <Ul>
                <Li>
                  <B>Acceso al LLP.</B> Solo quien tiene LIT en staking puede
                  depositar en el LLP, a razón de hasta 10 USDC por cada LIT.
                </Li>
                <Li>
                  <B>Rendimiento fijo.</B> El staking paga un 6 % anual fijo en
                  LIT, que según la documentación se compra en el mercado.
                </Li>
                <Li>
                  <B>Descuentos en Premium.</B> De un 2,5 % con 1.000 LIT a un
                  30 % con 500.000 LIT, además de más límite de envío de
                  órdenes. No afecta a la cuenta Standard, que ya es gratuita.
                </Li>
                <Li>
                  <B>Salida.</B> Retirar el staking tiene un bloqueo de 3 días.
                </Li>
              </Ul>
              <P>
                Existe además un sistema de créditos de comisión: quien quiere
                un nivel Premium más alto sin tener tanto LIT puede pagarlo por
                adelantado en LIT durante un periodo, y ese pago se reparte
                entre quienes hacen staking.
              </P>
              <H3>Recompras</H3>
              <P>
                La documentación indica que el protocolo recompra LIT con los
                ingresos por comisiones, mediante órdenes repartidas a lo largo
                del día. DefiLlama calculaba, a 18 de noviembre de 2026, unos
                5,68 M$ de ingresos del protocolo en 30 días y unos 4,65 M$
                destinados a los titulares del token en ese periodo.
              </P>
              <P>
                Ese mismo día LIT cotizaba en torno a 2,85 dólares, con una
                capitalización de unos 714 M$ y una valoración totalmente
                diluida de unos 2.805 M$. La distancia entre las dos cifras es
                la parte de la oferta que todavía no circula.
              </P>
            </>
          ),
        },
        {
          id: "robinhood-chain",
          title: "Lighter en Robinhood Chain",
          children: (
            <>
              <P>
                Desde el lanzamiento de{" "}
                <InternalLink href="/guias/que-es-robinhood-chain">
                  Robinhood Chain
                </InternalLink>{" "}
                existe una segunda instancia de Lighter en esa red. Su
                documentación insiste en que es un exchange separado: usa la
                misma tecnología, pero las cuentas, los saldos y las claves API
                no se comparten con Lighter Core.
              </P>
              <DataTable
                wide
                caption="Diferencias entre las dos instancias (documentación de Lighter, consultada el 18 de noviembre de 2026)."
                head={["", "Lighter Core", "Lighter en Robinhood Chain"]}
                rows={[
                  ["Red de depósito", "Ethereum.", "Robinhood Chain."],
                  ["Garantía principal", "USDC.", "USDG."],
                  ["Otras garantías", "ETH, weETH y XAUT.", "Acciones y ETF tokenizados, como SPY, QQQ, NVDA o AAPL."],
                  ["Cuenta Standard", "0 % / 0 %.", "0 % / 0 %."],
                  ["Niveles Premium", "Según el LIT en staking.", "Según el volumen de 14 días; no hay staking de LIT."],
                  ["Espera para retirar del LLP", "5 minutos.", "Ninguna."],
                ]}
              />
              <H3>El programa de puntos</H3>
              <P>
                Es el único programa de puntos que la documentación de Lighter
                detalla hoy en su sección de programas. Los puntos de Robinhood
                Chain se reparten de dos formas, en tiempo real y cada viernes, y
                dependen del volumen, de las posiciones mantenidas, de las
                comisiones pagadas y de usar como garantía activos distintos de
                USDG.
              </P>
              <Ul>
                <Li>
                  <B>Robinhood Wallet.</B> El multiplicador va de 1x a 2x según
                  la parte del volumen que hagas desde la app móvil de Robinhood
                  Wallet.
                </Li>
                <Li>
                  <B>Referidos.</B> Quien refiere recibe el 10 % de los puntos
                  de sus referidos, y el referido un 10 % más en los puntos
                  semanales.
                </Li>
                <Li>
                  <B>Cobertura.</B> Cubrir en Lighter Core una posición de
                  Robinhood Chain puede multiplicar por 2,5 los puntos
                  semanales, en la dirección que Lighter fije cada semana.
                </Li>
                <Li>
                  <B>Lo que no puntúa.</B> La actividad entre dos cuentas
                  Standard no da puntos.
                </Li>
              </Ul>
              <P>
                La página del programa no indica cuántos LIT se repartirán, a
                qué tasa se convertirán los puntos ni cuándo termina. El
                comunicado de Robinhood sí habla de 11 millones de tokens LIT
                reservados para su comunidad. Lighter puede retirar o revertir
                puntos en cualquier momento, también después de cerrar el
                programa, y prohíbe expresamente las cuentas{" "}
                <GlossaryLink id="sybil">sybil</GlossaryLink> y la participación
                automatizada o artificial.
              </P>
              <P>
                Cómo activar el multiplicador de Robinhood Wallet lo cuento paso
                a paso en{" "}
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
          title: "Lighter en cifras",
          children: (
            <>
              <DataTable
                caption="Cifras de Lighter según DefiLlama, consultadas el 18 de noviembre de 2026. Cambian a diario."
                head={["Dato", "Valor"]}
                rows={[
                  ["Valor depositado (TVL)", "Unos 667 M$."],
                  ["TVL por red", "Ethereum 484 M$, Robinhood Chain 102 M$ y zkLighter 83 M$."],
                  ["Volumen de perpetuos (30 días)", "Unos 82.070 M$."],
                  ["Interés abierto", "Unos 577 M$."],
                  ["Comisiones (30 días)", "Unos 6,95 M$."],
                  ["Ingresos del protocolo (30 días)", "Unos 5,68 M$."],
                ]}
              />
              <P>
                Para ponerlo en contexto, la clasificación de interés abierto de
                DefiLlama daba ese mismo día unos 5.540 M$ a Hyperliquid y unos
                1.170 M$ a Aster. Lighter mueve mucho volumen para el interés
                abierto que mantiene, algo habitual en plataformas con
                comisiones cero y programas de incentivos: el volumen dice
                cuánto se opera, y el interés abierto, cuánto capital hay
                realmente comprometido.
              </P>
              <P>
                L2BEAT, que mide el valor asegurado por la capa 2 con su propio
                criterio, lo situaba en unos 887 M$ el 16 de noviembre de 2026,
                tras una caída del 17,6 % en un día, y recogía un máximo de
                2.120 M$ en los últimos doce meses.
              </P>
            </>
          ),
        },
        {
          id: "incidente",
          title: "El incidente del 16 de noviembre de 2026",
          children: (
            <>
              <P>
                Es el episodio de seguridad más serio de Lighter hasta la fecha
                y conviene entenderlo bien, porque no fue un fallo de los
                contratos y aun así salieron millones.
              </P>
              <Ol>
                <Li>
                  <B>Qué pasó.</B> La mañana del 16 de noviembre (UTC) un
                  atacante tomó el control de las claves API de un trader y
                  retiró fondos. Los análisis en cadena que recogen Cointelegraph
                  y Unchained vieron salir unos 10,39 millones de USDC del
                  contrato de Lighter en Ethereum. Circularon estimaciones de
                  hasta 15,5 millones que Lighter no ha confirmado.
                </Li>
                <Li>
                  <B>Cómo reaccionó Lighter.</B> A las 11:02 UTC suspendió las
                  retiradas y la creación de pools, y activó el modo Guardian de
                  su contrato. Ese mismo día, a las 18:21 UTC, comunicó que
                  depósitos y retiradas volvían a la normalidad.
                </Li>
                <Li>
                  <B>La causa, según su informe.</B> Las cuentas afectadas
                  firmaban con un código propio, distinto de los SDK oficiales,
                  que reutilizaba un valor aleatorio que debe ser único en cada
                  firma. Como las firmas eran públicas, eso permitía calcular la
                  clave privada a partir de dos de ellas. Lighter afirma que su
                  protocolo, sus contratos y su infraestructura no se vieron
                  afectados.
                </Li>
                <Li>
                  <B>Qué se recuperó.</B> Según Lighter, la pausa del Guardian
                  permitió que su consejo de seguridad devolviera unos 5
                  millones de USDC al trader afectado.
                </Li>
                <Li>
                  <B>Qué ha cambiado.</B> Las firmas de las claves API han
                  dejado de ser públicas y mover fondos a un pool público exige
                  ahora la firma de la wallet. Lighter ha anunciado además
                  listas de IP permitidas y límites configurables por clave.
                </Li>
              </Ol>
              <Callout title="Qué significa para ti">
                Si operas a mano desde la web, este fallo no te afectaba: el
                problema estaba en un software de firma de terceros. Si usas
                bots o agentes, la lección es directa: firma solo con los SDK
                oficiales, limita lo que puede hacer cada clave API y rótala si
                tienes dudas. Y quédate con la otra mitad de la historia: el
                mismo mecanismo que permitió recuperar fondos es el que permite
                a Lighter pausar las retiradas de todos.
              </Callout>
            </>
          ),
        },
        {
          id: "riesgos",
          title: "Riesgos de Lighter",
          children: (
            <>
              <Ul>
                <Li>
                  <B>Un único operador.</B> Según L2BEAT, solo el operador
                  centralizado puede enviar y probar lotes, y podría adelantarse
                  a las transacciones de los usuarios.
                </Li>
                <Li>
                  <B>Actualizaciones sin espera.</B> L2BEAT describe un plazo de
                  21 días para actualizar los contratos que el consejo de
                  seguridad puede saltarse, y señala que todas las
                  actualizaciones hasta ahora se han hecho por esa vía rápida.
                  Por eso considera que no hay ventana de salida ante un cambio
                  que no quieras.
                </Li>
                <Li>
                  <B>Oráculos.</B> Los precios de referencia vienen de varios
                  oráculos, pero sus firmas no se verifican en el contrato: hay
                  que confiar en que el secuenciador los reporta bien. Un precio
                  manipulado podría causar pérdidas.
                </Li>
                <Li>
                  <B>Pausas.</B> Los guardianes del contrato pueden detener el
                  procesamiento de lotes y las retiradas hasta 24 o 72 horas,
                  según L2BEAT. Ocurrió el 16 de noviembre de 2026. Además, el
                  10 de octubre de 2025 la plataforma estuvo caída 4,5 horas.
                </Li>
                <Li>
                  <B>Salida de emergencia poco probada.</B> El modo de escape
                  existe, pero L2BEAT advierte de que el código fuente del
                  verificador que lo respalda no está publicado y no se puede
                  regenerar de forma independiente.
                </Li>
                <Li>
                  <B>
                    <GlossaryLink id="liquidacion">Liquidación</GlossaryLink> y
                    auto-desapalancamiento.
                  </B>{" "}
                  Con{" "}
                  <GlossaryLink id="apalancamiento">apalancamiento</GlossaryLink>
                  , un movimiento pequeño en contra puede cerrar tu posición. Y
                  si el LLP no cubre una pérdida ajena, el sistema puede cerrar
                  la tuya aunque vayas ganando.
                </Li>
                <Li>
                  <B>Mercados de activos reales.</B> Fuera del horario del
                  mercado real los precios externos se quedan desfasados y la
                  volatilidad puede dispararse en la apertura. Las posiciones no
                  se ajustan por splits ni otros eventos corporativos: el
                  mercado se cierra y se liquida antes.
                </Li>
                <Li>
                  <B>Claves API.</B> Una clave filtrada permite operar en tu
                  cuenta y, como se vio, sacar valor de ella.
                </Li>
                <Li>
                  <B>Token.</B> LIT tiene la mitad de la oferta en manos de
                  equipo e inversores, pendiente de liberarse a lo largo de
                  varios años.
                </Li>
                <Li>
                  <B>Términos de uso.</B> La empresa limita su responsabilidad a
                  100 dólares o a lo que le hayas pagado, y somete las disputas
                  a arbitraje en Miami.
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
          title: "¿Se puede usar Lighter desde España?",
          children: (
            <>
              <P>
                Lighter publica dos listas de exclusiones distintas, una por
                cada instancia, y España no aparece en ninguna de las dos.
              </P>
              <DataTable
                wide
                caption="Jurisdicciones excluidas según las fuentes oficiales (consultadas el 18 de noviembre de 2026). No sustituye a leer los términos."
                head={["Instancia", "Excluidos", "España"]}
                rows={[
                  [
                    "Lighter Core",
                    "Estados Unidos, Canadá, Reino Unido, China, Corea del Norte, Rusia, Ucrania, Cuba, Irán, Venezuela, Sudán, Bielorrusia, Myanmar y Siria, además de los territorios bajo sanciones (términos de uso del 29 de diciembre de 2025).",
                    "No figura.",
                  ],
                  [
                    "Lighter en Robinhood Chain (puntos y perpetuos)",
                    "Los anteriores salvo que la lista añade Singapur, Suiza, Emiratos Árabes Unidos y Sudán del Sur.",
                    "No figura.",
                  ],
                ]}
              />
              <P>
                Que no figure en una lista de exclusiones no equivale a una
                autorización: los términos pueden cambiar y la empresa indica
                que puede registrar la dirección IP para hacer cumplir las
                restricciones.
                Los perpetuos son productos apalancados y de alto riesgo, y la
                responsabilidad de comprobar que puedes usarlos es tuya.
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
                  <B>Entra desde la web oficial.</B> La documentación enlaza la
                  aplicación en app.lighter.xyz. Después de un incidente
                  suelen aparecer enlaces falsos de «reembolso»: desconfía de
                  cualquiera que te pida conectar la wallet para recuperar
                  fondos.
                </Li>
                <Li>
                  <B>Usa una wallet dedicada</B> y deposita una cantidad pequeña.
                  El mínimo desde la mayoría de redes ronda los 5 dólares.
                </Li>
                <Li>
                  <B>Quédate en la cuenta Standard.</B> Es la que viene por
                  defecto y la única sin comisiones. Las otras solo compensan si
                  operas con algoritmos.
                </Li>
                <Li>
                  <B>Empieza sin apalancamiento o con muy poco</B> y con{" "}
                  <GlossaryLink id="margen-cruzado-y-aislado">
                    margen aislado
                  </GlossaryLink>
                  , para que un error no arrastre el resto de la cuenta.
                </Li>
                <Li>
                  <B>Mira el funding antes de mantener una posición.</B> Se cobra
                  cada hora y en mercados poco líquidos puede ser alto.
                </Li>
                <Li>
                  <B>Prueba a retirar pronto.</B> La retirada segura va a tu
                  propia dirección de Ethereum y la rápida solo admite USDC.
                  Mejor conocer el proceso con poco dinero dentro.
                </Li>
                <Li>
                  <B>Si creas claves API,</B> firma solo con los SDK oficiales y
                  no las pegues en herramientas de terceros.
                </Li>
              </Ol>
              <P>
                Cómo comparo Lighter con otros perp DEX y en cuáles opero lo
                tienes en{" "}
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
          question: "¿Qué es Lighter?",
          answer:
            "Un exchange descentralizado de perpetuos con libro de órdenes, construido como una capa 2 de Ethereum específica para trading. Los fondos se guardan en contratos de Ethereum y cada lote de operaciones se valida allí con una prueba criptográfica. Tiene además una instancia separada en Robinhood Chain.",
        },
        {
          question: "¿De verdad no cobra comisiones?",
          answer:
            "Las cuentas Standard no pagan comisión de maker ni de taker en órdenes normales, a cambio de 300 ms de latencia en las órdenes taker. Sí se pagan el funding entre usuarios, un 0,01 % en órdenes TWAP y RFQ, hasta un 1 % si te liquidan y los costes de entrar y salir. Las cuentas Premium y Plus pagan comisiones.",
        },
        {
          question: "¿Qué es el token LIT y para qué sirve?",
          answer:
            "Es el token de Lighter, con una oferta máxima de 1.000 millones. Hacer staking da acceso al fondo de liquidez LLP (hasta 10 USDC por LIT), un 6 % anual fijo y descuentos en las cuentas Premium. Según la documentación, el protocolo recompra LIT con sus ingresos por comisiones.",
        },
        {
          question: "¿Qué pasó en el hackeo de Lighter de noviembre de 2026?",
          answer:
            "El 16 de noviembre de 2026 un atacante usó las claves API de un trader para retirar unos 10,4 millones de USDC, según los análisis en cadena. Lighter atribuye la filtración a un software de firma ajeno a sus SDK oficiales que reutilizaba valores aleatorios, afirma que el protocolo y los contratos no se vieron afectados, pausó las retiradas unas horas y devolvió unos 5 millones al trader afectado.",
        },
        {
          question: "¿Es seguro Lighter?",
          answer:
            "Sus pruebas criptográficas garantizan que las operaciones siguen las reglas, pero la plataforma es centralizada: L2BEAT la clasifica en Stage 0, con un único operador, contratos que se pueden actualizar sin plazo de espera y oráculos cuyos precios reporta el secuenciador. A eso se suma el riesgo de liquidación de cualquier producto apalancado.",
        },
        {
          question: "¿Se puede usar Lighter desde España?",
          answer:
            "España no figura en las listas de jurisdicciones excluidas que publica Lighter para Lighter Core ni para su instancia de Robinhood Chain. Eso no equivale a una autorización: los términos pueden cambiar y comprobar que puedes operar es responsabilidad tuya.",
        },
        {
          question: "¿En qué se diferencia Lighter de Hyperliquid?",
          answer:
            "Hyperliquid es una cadena propia con sus validadores. Lighter es una capa 2 que publica sus datos y sus pruebas de validez en Ethereum y no cobra comisiones a las cuentas normales. A 18 de noviembre de 2026, Hyperliquid tenía casi diez veces más interés abierto según DefiLlama.",
        },
        {
          question: "¿Hay airdrop o puntos en Lighter ahora?",
          answer:
            "El airdrop de LIT se repartió en diciembre de 2025 entre los participantes de las dos temporadas de puntos de ese año. Hoy el único programa de puntos que detalla la sección de programas de la documentación es el de Lighter en Robinhood Chain, que no publica cuántos LIT repartirá ni cuándo termina y que Lighter puede cambiar o cerrar.",
        },
        {
          question: "¿Qué es el LLP de Lighter?",
          answer:
            "El Lighter Liquidity Pool: el fondo del protocolo que aporta liquidez y hace de fondo de seguro al asumir las posiciones de las cuentas liquidadas. Solo pueden depositar en él quienes tienen LIT en staking, y quien deposita asume el riesgo de esas pérdidas.",
        },
      ]}
      sources={[
        { label: "Lighter Docs: introducción", href: DOCS },
        {
          label: "Lighter Docs: arquitectura técnica de Lighter Core",
          href: `${DOCS}/about-lighter/technical-architecture-lighter-core`,
        },
        {
          label: "Lighter Docs: utilidad de LIT",
          href: `${DOCS}/about-lighter/lit-utility`,
        },
        {
          label: "Lighter Docs: comisiones de trading",
          href: `${DOCS}/trading/trading-fees`,
        },
        {
          label: "Lighter Docs: créditos de comisión en LIT",
          href: `${DOCS}/trading/trading-fees/lit-fee-credits`,
        },
        {
          label: "Lighter Docs: tipos de cuenta",
          href: `${DOCS}/developers/reference/account-types`,
        },
        {
          label: "Lighter Docs: especificaciones de los contratos",
          href: `${DOCS}/trading/contract-specifications`,
        },
        { label: "Lighter Docs: funding", href: `${DOCS}/trading/funding` },
        {
          label: "Lighter Docs: liquidaciones y LLP",
          href: `${DOCS}/trading/liquidations-and-llp-insurance-fund`,
        },
        {
          label: "Lighter Docs: estrategias del LLP",
          href: `${DOCS}/trading/liquidations-and-llp-insurance-fund/llp-strategies`,
        },
        {
          label: "Lighter Docs: Public Pools",
          href: `${DOCS}/trading/public-pools`,
        },
        {
          label: "Lighter Docs: activos del mundo real (RWA)",
          href: `${DOCS}/trading/real-world-assets-rwas`,
        },
        {
          label: "Lighter Docs: mercados pre-IPO",
          href: `${DOCS}/trading/real-world-assets-rwas/pre-ipo-markets`,
        },
        {
          label: "Lighter Docs: margen multiactivo",
          href: `${DOCS}/trading/multi-asset-margin`,
        },
        {
          label: "Lighter Docs: opciones binarias",
          href: `${DOCS}/trading/binary-options`,
        },
        {
          label: "Lighter Docs: depósitos, transferencias y retiradas",
          href: `${DOCS}/developers/integration-guides/deposits-transfers-and-withdrawals`,
        },
        {
          label: "Lighter Docs: Lighter en Robinhood Chain",
          href: `${DOCS}/developers/robinhood-chain/overview`,
        },
        {
          label: "Lighter Docs: puntos de Lighter en Robinhood Chain",
          href: `${DOCS}/programs/lighter-on-robinhood-chain-points`,
        },
        { label: "Lighter: términos de uso", href: "https://lighter.xyz/terms" },
        {
          label: "Lighter en X: informe del incidente del 16 de noviembre de 2026",
          href: "https://x.com/Lighter_xyz/status/2122394446343946717",
        },
        { label: "L2BEAT: Lighter", href: "https://l2beat.com/scaling/projects/lighter" },
        { label: "DefiLlama: Lighter", href: "https://defillama.com/protocol/lighter" },
        {
          label: "The Block: Lighter lanza el token LIT (30 de diciembre de 2025)",
          href: "https://www.theblock.co/post/383940/lighter-native-token-lit",
        },
        {
          label: "Fortune: Lighter levanta 68 millones de dólares (11 de noviembre de 2025)",
          href: "https://fortune.com/2025/11/11/lighter-fundraise-founders-fund-ribbit-capital-haun-ventures-robinhood-vladimir-novakovski/",
        },
        {
          label: "Cointelegraph: Lighter pausa las retiradas tras un exploit de 10 millones (16 de noviembre de 2026)",
          href: "https://cointelegraph.com/news/lighter-dex-pauses-withdrawals-10m-exploit",
        },
        {
          label: "Unchained: Lighter atribuye la retirada a la clave API filtrada de un trader (16 de noviembre de 2026)",
          href: "https://unchainedcrypto.com/lighter-pins-drain-on-traders-leaked-api-key-says-contracts-were-not-hit/",
        },
      ]}
      relatedSlugs={[
        "robinhood-te-paga-lit-por-operar",
        "tier-list-de-perp-dexs-donde-farmeo",
        "robinhood-chain-que-es-y-que-queda-tras-el-hype",
        "como-genere-14-millones-de-dolares",
        "hip-3-de-hyperliquid-creacion-de",
      ]}
    />
  );
}
