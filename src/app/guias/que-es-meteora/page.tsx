import type { ReactNode } from "react";
import { getPillar } from "../pilares";
import PillarPage, { pillarMetadata } from "../pillar-page";
import {
  B,
  Callout,
  Code,
  DataTable,
  Formula,
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

const PILLAR = getPillar("/guias/que-es-meteora");
const CAMPAIGN = "meteora";
const TITLE = "Qué es Meteora y cómo funciona el DLMM | Secreto Defi";
const DESCRIPTION =
  "Qué es Meteora en Solana, cómo funcionan los bins y el DLMM, las estrategias Spot, Curve y Bid-Ask, las comisiones y los riesgos. Guía en español.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt:
    "Qué es Meteora y cómo funciona el DLMM: guía para empezar | La Agenda de SecretoDefi",
});

const G = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <GuideLink slug={slug} campaign={CAMPAIGN}>
    {children}
  </GuideLink>
);

export default function QueEsMeteoraPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Qué es Meteora y cómo funciona el DLMM: guía para empezar"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            Meteora es un conjunto de productos de liquidez de Solana. Uno de
            los principales es el DLMM, un modelo de liquidez concentrada que
            divide el precio en escalones llamados bins y te deja elegir en
            cuáles colocas tu capital. Aprovecha mejor el capital que una pool
            clásica mientras el precio se queda en tu rango, pero exige más
            gestión, y casi nadie explica qué hay debajo de la interfaz.
          </P>
          <P>
            Esta guía ordena lo esencial con datos de la documentación oficial,
            cada uno con su fecha: qué es Meteora, cómo funcionan los bins y el
            bin step, las estrategias Spot, Curve y Bid-Ask, de dónde salen las
            comisiones, cómo se gestionan las posiciones y las órdenes límite,
            qué se sabe del token MET y qué riesgos tiene. Complementa la guía
            de{" "}
            <InternalLink href="/guias/yield-farming-y-liquidez-concentrada">
              yield farming y liquidez concentrada
            </InternalLink>{" "}
            y la de{" "}
            <InternalLink href="/guias/que-es-la-perdida-impermanente">
              pérdida impermanente
            </InternalLink>
            ; cuando una idea merece más detalle, te llevo al post de La Agenda
            de SecretoDefi donde la desarrollo.
          </P>
        </>
      }
      summary={[
        "El DLMM de Meteora divide el precio en bins, cada uno con un precio fijo. Las operaciones dentro del bin activo no sufren slippage, y tú eliges en qué bins colocas la liquidez y con qué forma: Spot, Curve o Bid-Ask.",
        "Cobras comisiones de trading (una base más una variable que sube con la volatilidad) solo mientras el precio está dentro de tu rango, y no se reinvierten solas: hay que reclamarlas.",
        "Los riesgos principales son la pérdida impermanente, salirte del rango, los tokens nuevos con trampas y el riesgo de contrato y operativo. Ni las auditorías ni las estrategias los eliminan.",
        "Antes de abrir una posición, mira el Fee/TVL en franjas cortas y no solo el APR de 24 horas, descarta las pools sin volumen y empieza con poco capital.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es Meteora",
          children: (
            <>
              <P>
                Meteora es un conjunto de productos de liquidez construidos sobre
                Solana. Su documentación los agrupa en productos principales,
                auxiliares y heredados. Estos son los que conviene conocer:
              </P>
              <DataTable
                caption="Productos de Meteora más relevantes, según su documentación"
                head={["Producto", "Qué es", "Para qué se usa"]}
                rows={[
                  [
                    "DLMM",
                    "Liquidez concentrada dividida en bins de precio, con comisiones dinámicas y varias formas de repartir la liquidez.",
                    "Aportar liquidez eligiendo tú el rango y la forma. Es el tema de esta guía.",
                  ],
                  [
                    "DAMM v2",
                    "Un AMM configurable de producto constante. Admite un rango de precio fijo o un modo de rango completo en el que parte de las comisiones puede reinvertirse en la pool. Cada posición está respaldada por un NFT.",
                    "Lanzamientos de tokens, launchpads y proveedores de liquidez.",
                  ],
                  [
                    "Dynamic Bonding Curve (DBC)",
                    "Producto sin permisos para lanzar tokens: el precio sigue una curva configurable en una pool virtual y, al alcanzar un umbral, los fondos reunidos siembran una pool DAMM v2.",
                    "Creadores de tokens y launchpads.",
                  ],
                  [
                    "Alpha Vault",
                    "Bóveda previa al lanzamiento: los participantes depositan antes de que la pool abra al público y la bóveda compra el token en la ventana previa a la activación. Se conecta a una pool DLMM o DAMM.",
                    "Equipos que lanzan un token y quienes quieren participar desde el principio.",
                  ],
                ]}
              />
              <P>
                El DLMM es el producto con el que un proveedor de liquidez
                individual decide dónde y cómo coloca su capital. Según
                DefiLlama, el DLMM tenía unos 148 millones de dólares de{" "}
                <GlossaryLink id="tvl">TVL</GlossaryLink> el 5 de noviembre de
                2026 y había movido unos 3.360 millones en volumen de
                operaciones en los 30 días anteriores. Son cifras que cambian a
                diario y solo indican tamaño, no seguridad ni rendimiento.
              </P>
              <P>
                Mis guías de Meteora son de 2024 y 2025 y describen la interfaz
                de aquel momento. Meteora cambia con frecuencia (incluso ha
                reorganizado su documentación), así que en esta página manda lo
                que dice la documentación oficial a fecha de hoy, y cada dato que
                puede cambiar lleva su fecha.
              </P>
            </>
          ),
        },
        {
          id: "bins",
          title: "Cómo funciona el DLMM: bins, bin activo y bin step",
          children: (
            <>
              <P>
                En un <GlossaryLink id="amm">AMM</GlossaryLink> clásico, el
                precio sale de una fórmula aplicada a las reservas de la pool. En
                el <GlossaryLink id="dlmm">DLMM</GlossaryLink> (Dynamic Liquidity
                Market Maker), la liquidez se organiza en{" "}
                <GlossaryLink id="bin">bins</GlossaryLink>: cada bin es un único
                punto de precio, y la liquidez depositada en él se ofrece a ese
                precio. El mercado de un par es la suma de todos sus bins. Tres
                ideas lo explican casi todo:
              </P>
              <Ul>
                <Li>
                  <B>Solo hay un bin activo.</B> Es el que contiene el precio de
                  mercado actual y donde se ejecutan los swaps. Los bins por
                  debajo del activo contienen uno de los dos tokens y los de por
                  encima, el otro. Cuando una operación consume la liquidez del
                  bin activo, el precio pasa al siguiente bin.
                </Li>
                <Li>
                  <B>Dentro de un bin no hay slippage.</B> Las operaciones se
                  ejecutan al precio fijo del bin mientras quede liquidez en él.
                  Si una operación es grande y cruza varios bins, el precio sí se
                  mueve, y ahí aparece el{" "}
                  <GlossaryLink id="slippage">slippage</GlossaryLink>.
                </Li>
                <Li>
                  <B>El bin step marca la distancia entre bins.</B> Es la
                  separación de precio entre dos bins vecinos, medida en puntos
                  básicos (un punto básico es un 0,01 %), con un máximo de 400
                  puntos básicos, es decir, un 4 % entre bins. Con un{" "}
                  <GlossaryLink id="bin-step">bin step</GlossaryLink> pequeño la
                  escalera de precios es más fina y suele usarse en pares
                  estables o muy líquidos; con uno grande, cubres más rango con
                  menos bins, y suele usarse en pares volátiles.
                </Li>
              </Ul>
              <P>
                El precio de cada bin sigue esta fórmula de la documentación,
                donde i es el número del bin:
              </P>
              <Formula>Precio del bin i = (1 + bin step / 10.000) ^ i</Formula>
              <P>
                Con un bin step de 25, cada bin es un 0,25 % más caro que el
                anterior: la documentación pone como ejemplo SOL a 20 dólares,
                cuyos siguientes bins estarían en unos 20,05 y 20,10 dólares. El
                bin step, junto con el número de bins, decide cuánto precio cubre
                tu posición:
              </P>
              <DataTable
                caption="Variación de precio entre el primer y el último bin de una posición de 70 bins (cifras aproximadas)"
                head={["Bin step", "Salto entre bins", "Rango que cubren 70 bins"]}
                rows={[
                  ["1", "0,01 %", "≈ 0,7 %"],
                  ["10", "0,10 %", "≈ 7 %"],
                  ["25", "0,25 %", "≈ 19 %"],
                  ["100", "1 %", "≈ 99 % (casi el doble)"],
                  [
                    "400 (máximo)",
                    "4 %",
                    "≈ 15 veces el precio inicial",
                  ],
                ]}
              />
              <Note>
                Cálculo propio con la fórmula anterior, entre el precio del
                primer bin y el del último de una posición de 70 bins (69
                saltos). Una posición de 1.400 bins con bin step de 25 cubriría
                unas 33 veces el precio inicial.
              </Note>
              <P>
                Una posición empieza con un diseño de 70 bins, y las posiciones
                dinámicas pueden crecer hasta 1.400 bins sin cerrarse, algo útil
                si el precio se mueve mucho. Un detalle práctico: en el DLMM no
                recibes un token de LP ni un NFT. Tu posición es una cuenta que
                registra cuánta liquidez tienes en cada bin y qué comisiones y
                recompensas puedes reclamar.
              </P>
              <P>
                Lo explico con ejemplos en la serie de La Agenda: los bins y la
                eficiencia del capital en{" "}
                <G slug="guia-definitiva-para-usar-meteora">la primera parte</G>{" "}
                y el bin step en{" "}
                <G slug="guia-definitiva-para-usar-meteora-370">la segunda</G>.
                Si quieres ver la diferencia con un AMM clásico y con otros
                modelos de liquidez concentrada, la tienes en la{" "}
                <G slug="masterclass-amms-vs-clmms-vs-dlmms">
                  masterclass de AMMs, CLMMs y DLMMs
                </G>
                .
              </P>
            </>
          ),
        },
        {
          id: "estrategias",
          title: "Estrategias: Spot, Curve y Bid-Ask",
          children: (
            <>
              <P>
                Además de elegir el rango, eliges cómo repartes la liquidez entre
                los bins. Hay tres formas:
              </P>
              <DataTable
                caption="Las tres formas de repartir la liquidez en el DLMM, según la documentación de Meteora"
                head={[
                  "Forma",
                  "Cómo reparte la liquidez",
                  "Suele usarse para",
                  "Ojo con",
                ]}
                rows={[
                  [
                    "Spot",
                    "De forma uniforme: la misma liquidez en cada bin del rango.",
                    "Una exposición equilibrada a un rango. La interfaz ofrece tres presets: Concentrated (entre 1 y 3 bins), Spread (entre 20 y 30) y Wide (unos 50).",
                    "Concentrated se sale del rango con facilidad y exige vigilarlo de cerca; Wide cobra menos comisiones por dólar.",
                  ],
                  [
                    "Curve",
                    "Concentrada alrededor del centro del rango.",
                    "Pares estables o mercados tranquilos, donde el precio se mueve poco.",
                    "Si el precio se aleja del centro se sale del rango antes; conviene reequilibrar más a menudo cuando sube la volatilidad.",
                  ],
                  [
                    <span key="bid-ask" className="whitespace-nowrap">
                      Bid-Ask
                    </span>,
                    "La inversa de Curve: más liquidez en los bordes del rango.",
                    "Mercados volátiles y entradas o salidas escalonadas (DCA).",
                    "Es más avanzada que Spot, y su liquidez puede quedar lejos del precio actual hasta que el precio llegue a los bordes.",
                  ],
                ]}
              />
              <Note>
                Spot-Concentrated, Spot-Spread y Spot-Wide son presets de la
                interfaz construidos sobre la forma Spot, no formas distintas.
                Datos de la documentación de Meteora a 5 de noviembre de 2026.
              </Note>
              <P>
                El compromiso es el de toda la liquidez concentrada: una posición
                estrecha gana más mientras el precio se queda dentro, pero se
                queda inactiva antes; una ancha aguanta más movimiento, pero
                reparte cada dólar entre más bins. La propia documentación
                advierte de que las estrategias mejoran la eficiencia del
                capital, pero no eliminan la{" "}
                <GlossaryLink id="impermanent-loss">
                  pérdida impermanente
                </GlossaryLink>{" "}
                ni el riesgo de salirse del rango. En la serie, las tres formas
                están explicadas con ejemplos en{" "}
                <G slug="la-guia-definitiva-para-usar-meteora">la cuarta parte</G>
                .
              </P>
              <H3>Comprar o vender poco a poco con liquidez de un solo lado</H3>
              <P>
                Si depositas solo el token de cotización (por ejemplo USDC) en
                bins por debajo del precio actual, ese capital se va convirtiendo
                en el otro token a medida que el precio baja: es una compra
                escalonada. Al revés, si depositas solo el token base por encima
                del precio actual, se va vendiendo a medida que sube. La
                documentación plantea ambos usos como DCA, con Bid-Ask o con
                bins por debajo o por encima del precio. Si el precio nunca llega
                a esos bins no se ejecuta nada, y si cae mucho, la posición acaba
                entera en el token que ha perdido valor.
              </P>
              <H3>El hueco entre dos posiciones Bid-Ask</H3>
              <P>
                Cuando abres dos posiciones Bid-Ask seguidas, justo donde acaba
                una y empieza la otra queda un tramo con poca liquidez. En{" "}
                <G slug="estrategia-anti-sawtooth-en-meteora">
                  Estrategia Anti-Sawtooth
                </G>{" "}
                explico cómo rellenarlo con una posición Curve: destino el 80 %
                de la liquidez a las dos Bid-Ask y el 20 % restante a la Curve
                dentro de la segunda.
              </P>
            </>
          ),
        },
        {
          id: "comisiones",
          title: "Comisiones: de dónde sale lo que cobras",
          children: (
            <>
              <P>
                Cada swap paga una comisión de trading, que se reparte entre los
                bins por los que pasa la operación. Se compone de dos partes:
              </P>
              <Ul>
                <Li>
                  <B>Comisión base.</B> Es la mínima de la pool y depende, entre
                  otros factores, del bin step. Una base baja puede atraer más
                  volumen; una alta cobra más por cada dólar operado.
                </Li>
                <Li>
                  <B>Comisión variable.</B> Sube con la volatilidad, cuando las
                  operaciones cruzan más bins o llegan en rápida sucesión, y baja
                  cuando la actividad se calma. La comisión total tiene un tope
                  del 10 % por swap, según la página de fórmulas de la
                  documentación.
                </Li>
              </Ul>
              <P>
                Una parte de esa comisión va al protocolo. Según la página de
                ingresos del protocolo de Meteora, en las pools estándar es el 10
                % (lo fija el operador o el preset de la pool) y el resto es para
                los proveedores de liquidez; en las Launch Pool es el 20 %, y en
                las pools con órdenes límite, la parte de la comisión que
                corresponde a las órdenes se reparte a medias entre el protocolo
                y quien las colocó. Cuatro detalles que conviene tener claros:
              </P>
              <Ul>
                <Li>
                  <B>Solo cobran los bins por los que pasa una operación.</B> Si
                  el precio sale de tu rango, tu posición deja de cobrar hasta
                  que vuelva o la recoloques.
                </Li>
                <Li>
                  <B>No se reinvierten solas.</B> Las comisiones y las
                  recompensas quedan pendientes de reclamar hasta que las
                  reclamas. En febrero de 2025, Meteora añadió botones para
                  reclamarlas todas de una vez y una vista en Portfolio con las
                  no reclamadas, como cuento en{" "}
                  <G slug="actualizaciones-importantes-en-meteora-69e">
                    esta guía
                  </G>
                  .
                </Li>
                <Li>
                  <B>Cada pool decide en qué token se cobran.</B> El modo de
                  cobro (<Code>InputOnly</Code> u <Code>OnlyY</Code>) lo elige
                  quien crea la pool: con el primero, la comisión se cobra en el
                  token que entra en la operación; con el segundo, siempre en el
                  token Y, normalmente el de cotización (SOL o USDC). Míralo si
                  te importa en qué token cobras.
                </Li>
                <Li>
                  <B>Un APR alto no es una promesa.</B> Es una estimación con las
                  comisiones recientes, y cambia a diario.
                </Li>
              </Ul>
              <H3>Cómo leer el APR sin engañarte</H3>
              <P>
                Meteora permite filtrar el Fee/TVL por franjas horarias, y la
                franja cambia mucho el resultado. En mi guía de febrero de 2025
                muestro un caso real con un token que acababa de recibir un pico
                de volumen:
              </P>
              <DataTable
                caption="APR de la misma pool según la franja del Fee/TVL (token $FARTNOY, febrero de 2025)"
                head={["Franja", "APR mostrado"]}
                rows={[
                  ["24 horas", "654 %"],
                  ["12 horas", "68 %"],
                  ["4 horas", "7 %"],
                ]}
              />
              <P>
                El APR de 24 horas arrastraba el pico del día anterior; el de las
                últimas 4 horas mostraba que el volumen ya se había apagado. Mi
                regla, según esa guía: mirar las franjas de 2 a 4 horas si vas a
                operar ya y la de 12 horas si es a largo plazo, y descartar lo
                que tiene APR pero ni TVL ni volumen. La explico con más
                ejemplos en{" "}
                <G slug="actualizaciones-importantes-en-meteora">
                  ¡Actualizaciones importantes en Meteora! (Parte 1)
                </G>
                .
              </P>
            </>
          ),
        },
        {
          id: "posiciones",
          title: "Posiciones: abrirlas, gestionarlas y cerrarlas",
          children: (
            <>
              <Ul>
                <Li>
                  <B>Rango y forma.</B> Eliges el precio mínimo y el máximo y la
                  forma de reparto. En febrero de 2025, la interfaz permitía
                  mover el rango hasta el precio actual con el cursor y ver cómo
                  se distribuían los bins antes de confirmar.
                </Li>
                <Li>
                  <B>Costes de apertura.</B> Abrir una posición tiene costes en
                  SOL, y la interfaz distingue entre los reembolsables y los que
                  no (en febrero de 2025 los etiquetaba como refundable y non
                  refundable). Comprueba lo que te muestra antes de confirmar.
                </Li>
                <Li>
                  <B>Reclamar y cerrar.</B> Según la documentación, una posición
                  solo se puede cerrar cuando no queda liquidez, comisiones ni
                  recompensas pendientes. En febrero de 2025, el botón Withdraw
                  &amp; Close All cerraba todas las posiciones de una vez y, según
                  mi guía de entonces, permitía recuperar 0,05 SOL de la
                  comisión de apertura reembolsable; la cantidad puede haber
                  cambiado.
                </Li>
                <Li>
                  <B>Recolocar el rango.</B> Si el precio se sale, puedes esperar,
                  recolocar o cerrar. Las posiciones dinámicas permiten ampliar o
                  recortar el rango sin cerrar la posición.
                </Li>
                <Li>
                  <B>Seguimiento.</B> En Portfolio ves las comisiones sin
                  reclamar y el precio actual, para saber de un vistazo si estás
                  dentro del rango. Para ir más allá, tienes las guías de{" "}
                  <G slug="guia-definitiva-meteora-terminada">Metlex</G> y de{" "}
                  <G slug="monitoriza-tus-posiciones-de-meteora">
                    DLMM live data
                  </G>
                  , dos herramientas de terceros que describo en posts de 2024:
                  comprueba que siguen operativas.
                </Li>
                <Li>
                  <B>Operadores.</B> Las posiciones dinámicas permiten delegar la
                  gestión en otra dirección (un operador). La documentación
                  avisa: delega solo en direcciones en las que confíes.
                </Li>
              </Ul>
              <H3>Órdenes límite en el DLMM</H3>
              <P>
                El DLMM permite colocar liquidez en bins concretos para que actúe
                como una orden de compra o de venta a un precio elegido. No es un
                libro de órdenes aparte: es una cuenta en la cadena que coloca
                liquidez en los bins seleccionados, hasta 50 por orden. En el
                lado de compra se coloca el token Y en o por debajo del bin
                activo para comprar el token X si el precio baja; en el de venta,
                el token X en o por encima, para venderlo si sube.
              </P>
              <P>
                La ejecución no está garantizada: la orden solo se ejecuta si el
                flujo de operaciones llega al bin elegido y consume su liquidez,
                así que puede no llegar a ejecutarse o hacerlo solo en parte, y
                sigue abierta hasta que la canceles. Además, una pool funciona
                con minería de liquidez (recompensas) o con órdenes límite, pero
                no con las dos a la vez.
              </P>
            </>
          ),
        },
        {
          id: "met",
          title: "El token MET: qué dicen las fuentes",
          children: (
            <>
              <P>
                MET es el token de Meteora. Esto es lo que indican su página de
                tokenomics, su libro blanco MiCAR, sus anuncios y la prensa a 5
                de noviembre de 2026:
              </P>
              <Ul>
                <Li>
                  <B>Lanzamiento (TGE):</B> el 23 de octubre de 2025, con un
                  suministro total de 1.000.000.000 MET, de los que 480.000.000
                  (el 48 %) estaban en circulación ese día, según la página de
                  tokenomics.
                </Li>
                <Li>
                  <B>Reparto:</B> según esa página, el 52 % restante, un 18 % del
                  equipo y un 34 % de la reserva de Meteora, no se desbloqueó en
                  el lanzamiento: tiene un mes de cliff y 72 meses de
                  liberación, con el primer desbloqueo el 23 de noviembre de 2025
                  y el último el 23 de octubre de 2031. El libro blanco MiCAR
                  (versión 1.1, de octubre de 2025) da otras cifras: 470
                  millones de MET en circulación (el 47 %), un 18 % para el
                  equipo, un 35 % de reserva y, para el 53 % que no circulaba, un
                  cliff de 12 meses con 60 meses de liberación lineal. Si vas a
                  tomar una decisión, contrasta ambas fuentes.
                </Li>
              </Ul>
              <DataTable
                caption="Reparto del suministro de MET según la página de tokenomics de Meteora"
                head={["Reparto", "% del total", "Libre en el TGE"]}
                rows={[
                  ["Mercurial Holders", "15\u00a0%", "100\u00a0%"],
                  ["LP Stimulus Plan", "15\u00a0%", "100\u00a0%"],
                  ["Mercurial Reserve", "5\u00a0%", "100\u00a0%"],
                  ["Jupiter Stakers", "3\u00a0%", "100\u00a0%"],
                  ["Launchpads & Launchpool Ecosystem", "3\u00a0%", "100\u00a0%"],
                  ["TGE Reserve", "3\u00a0%", "100\u00a0%"],
                  ["Offchain Contributors", "2\u00a0%", "100\u00a0%"],
                  ["M3M3 Plan", "2\u00a0%", "100\u00a0%"],
                  ["Team", "18\u00a0%", "0\u00a0%"],
                  ["Meteora Reserve", "34\u00a0%", "0\u00a0%"],
                ]}
              />
              <Ul>
                <Li>
                  <B>Airdrop:</B> la temporada 1 se podía reclamar hasta el 23 de
                  enero de 2026 (13:00 UTC), y su elegibilidad se basó en
                  puntos, actividad como proveedor de liquidez, contribuciones
                  fuera de la cadena y otros criterios. Las condiciones de la
                  temporada 2, para proveedores de liquidez de DLMM y DAMM v2 por
                  su actividad entre el 1 de julio de 2025 y el 30 de junio de
                  2026, fijan los reclamos del 21 de julio al 21 de octubre de
                  2026. Según la prensa, un tramo aparte de 6 millones de MET
                  para colaboradores que ayudaron a captar proveedores de
                  liquidez, como educadores y desarrolladores, tiene un
                  comprobador abierto hasta el 31 de diciembre de 2026.
                </Li>
                <Li>
                  <B>Utilidad según el libro blanco:</B> MET es el activo de
                  utilidad y coordinación del ecosistema. Da acceso o prioridad
                  en programas de liquidez y lanzamientos y, sujeto a una
                  activación posterior que el documento sitúa en 2026, podrá
                  usarse en staking a cambio de puntos de participación no
                  transferibles.
                </Li>
                <Li>
                  <B>Lo que no da, según el libro blanco:</B> no otorga derechos
                  de propiedad, voto, gobernanza ni reparto de beneficios, no
                  representa una participación, no da derecho a dividendos ni a
                  reembolsos y el emisor no puede canjearlo.
                </Li>
              </Ul>
              <H3>Después del libro blanco: staking y recompras</H3>
              <Ul>
                <Li>
                  <B>Staking con pagos en USDC:</B> el 20 de julio de 2026
                  Meteora lanzó, como piloto de tres meses, un programa de
                  Referral Staking que reparte en USDC una parte de las
                  comisiones de trading del DLMM entre quienes hacen staking de
                  MET y quienes traen a otros proveedores de liquidez. Funciona
                  por ciclos de aproximadamente un mes, con un tope de 0,1 USDC
                  por MET y ciclo, y quien retira el staking antes de que acabe
                  el ciclo pierde lo acumulado en él.
                </Li>
                <Li>
                  <B>Resultados del staking:</B> según Solana Compass, el ciclo 2
                  terminó el 21 de septiembre de 2026 con más de 89 millones de
                  MET en staking y más de 700.000 USDC repartidos, y los pagos de
                  los dos primeros ciclos se pueden reclamar hasta el 31 de marzo
                  de 2027. Las fuentes consultadas no confirman si el programa
                  continúa después del piloto.
                </Li>
                <Li>
                  <B>Recompra y puntos:</B> el 10 de diciembre de 2025, en una
                  publicación en X recogida por ChainCatcher, Meteora informó de
                  que había gastado 10 millones de USDC en recomprar alrededor
                  del 2,3 % de los MET durante el cuarto trimestre y de que las
                  recompras seguirían por la misma dirección. Presentó además
                  los Comet Points, un sistema de puntos que se consigue
                  haciendo staking de MET o usando sus productos.
                </Li>
                <Li>
                  <B>Cómo leerlo:</B> el libro blanco dice que MET no da derecho
                  a beneficios, y el staking con pagos y las recompras son
                  programas de Meteora, no derechos del token, así que pueden
                  cambiar o terminar.
                </Li>
              </Ul>
              <Note>
                La página de tokenomics lista una sola quema hecha por el equipo
                de Meteora: 2.261.990 MET, el 25 de octubre de 2025. Aquí no doy
                precios ni valoraciones: cambian cada minuto y esta guía no
                recomienda comprar ni hacer staking de ningún token. Un reparto
                así es un ejemplo de{" "}
                <InternalLink href="/guias/que-es-un-airdrop">
                  airdrop por usar un protocolo
                </InternalLink>
                , que nunca está garantizado de antemano.
              </Note>
            </>
          ),
        },
        {
          id: "riesgos",
          title: "Riesgos: lo que más conviene vigilar",
          children: (
            <>
              <Ul>
                <Li>
                  <B>Pérdida impermanente.</B> Las estrategias del DLMM no la
                  eliminan, y con rangos estrechos la pérdida por cada movimiento
                  del precio es mayor. Cómo se calcula y cómo reducirla, en la
                  guía de{" "}
                  <InternalLink href="/guias/que-es-la-perdida-impermanente">
                    pérdida impermanente
                  </InternalLink>
                  .
                </Li>
                <Li>
                  <B>Salirte del rango y gestión activa.</B> Si el precio sale de
                  tu rango, la posición queda entera en uno de los dos tokens y
                  deja de cobrar hasta que el precio vuelva o la recoloques. La
                  documentación reconoce que el DLMM puede aprovechar mejor el
                  capital que un AMM tradicional, pero exige una gestión más
                  activa de la posición.
                </Li>
                <Li>
                  <B>Tokens nuevos y trampas.</B> En las pools de tokens recién
                  creados abundan las estafas. Meteora muestra un aviso de
                  riesgo potencial del token y recomienda comprobarlo en
                  Rugcheck, mirar JupShield (que marca rugpulls, actividad de
                  acuñación sospechosa, Freeze Authority activa y poca liquidez)
                  y la puntuación Organic Score de Jupiter antes de comprar o de
                  aportar liquidez. La{" "}
                  <GlossaryLink id="freeze-authority">
                    Freeze Authority
                  </GlossaryLink>{" "}
                  permite al creador congelar compras, ventas o transferencias;
                  expliqué el aviso en{" "}
                  <G slug="actualizaciones-importantes-en-meteora-69e">
                    esta guía de febrero de 2025
                  </G>
                  . Y en la{" "}
                  <G slug="actualizaciones-importantes-en-meteora">
                    primera parte de esas actualizaciones
                  </G>{" "}
                  califico de operación de alto riesgo un token creado hacía 24
                  horas, con 17 millones de dólares de capitalización y una
                  narrativa muy justita, aunque tuviera TVL y volumen.
                </Li>
                <Li>
                  <B>Riesgo de contrato.</B> La documentación enlaza 15 informes
                  de auditoría del programa DLMM, de Zenith, Offside Labs,
                  OtterSec, Sherlock y Sec3, para versiones desde la 0.8.2 hasta
                  la 0.13.0 y de principios de 2024. Una auditoría reduce el
                  riesgo, pero no lo elimina.
                </Li>
                <Li>
                  <B>Riesgo operativo y de equipo.</B> Según DefiLlama, el 17 de
                  enero de 2026 Meteora perdió 1,5 millones de dólares cuando su
                  equipo transfirió fondos a una contraparte OTC fraudulenta que
                  se hacía pasar por un comprador legítimo de tokens; DefiLlama
                  lo clasifica como ingeniería social (suplantación). Es un
                  recordatorio de que el riesgo de un protocolo incluye a las
                  personas que lo gestionan.
                </Li>
                <Li>
                  <B>Permisos, firmas y phishing.</B> Para operar firmas
                  transacciones y das permisos. La documentación de Meteora
                  recuerda que su equipo nunca te escribirá por mensaje directo
                  ni te pedirá que te unas a otro Discord, y que nunca debes dar
                  ni mostrar tu clave privada. Si tu wallet se ve comprometida,
                  mueve los activos a una nueva. Más hábitos en la guía de{" "}
                  <InternalLink href="/guias/seguridad-en-defi#aprobaciones">
                    seguridad en DeFi
                  </InternalLink>
                  .
                </Li>
                <Li>
                  <B>Costes.</B> Los costes de apertura no reembolsables, el gas
                  y el slippage al entrar o salir pueden comerse el rendimiento
                  de las posiciones pequeñas.
                </Li>
                <Li>
                  <B>Impuestos.</B> Cada país los trata de forma distinta. Guarda
                  un registro de tus operaciones y consulta a un asesor fiscal.
                </Li>
              </Ul>
              <Callout title="Contexto: la demanda por el token LIBRA">
                En febrero de 2025, tras el desplome del token LIBRA (lanzado en
                Solana y promocionado en redes por el presidente argentino Javier
                Milei), Meteora y su cofundador Ben Chow se vieron envueltos en
                la polémica. Chow sostuvo que la implicación de Meteora se limitó
                al apoyo técnico, y dimitió como cofundador pocos días después.
                Inversores presentaron una demanda colectiva en Nueva York contra
                los organizadores del token, Meteora y Chow, y a finales de
                septiembre de 2026 la jueza Jennifer L. Rochon, del tribunal
                federal del Distrito Sur de Nueva York, la desestimó: no se
                acreditó que Meteora pudiera ser demandada como asociación o
                sociedad ni la intención fraudulenta de Chow, y denegó el permiso
                para presentar una segunda versión. Fue una decisión sobre los
                requisitos legales de la demanda, no sobre si los hechos
                alegados eran ciertos. Lo cuento porque es parte del contexto de
                cualquier protocolo en el que vayas a depositar capital.
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
                <B>Prepara una cartera dedicada.</B> Usa una wallet aparte de tus
                ahorros, con algo de SOL para las comisiones de red, y entra
                siempre desde los enlaces de la cuenta oficial de Meteora en X
                (@MeteoraAG). Los hábitos de protección, en la guía de{" "}
                <InternalLink href="/guias/seguridad-en-defi#habitos">
                  seguridad en DeFi
                </InternalLink>
                .
              </Li>
              <Li>
                <B>Elige un par que puedas entender.</B> Mira el TVL, el volumen
                y los avisos de riesgo del token (Freeze Authority, JupShield,
                Rugcheck). Un APR alto en una pool sin TVL ni volumen se
                descarta.
              </Li>
              <Li>
                <B>Mira el rendimiento real.</B> Compara el Fee/TVL en franjas
                cortas (de 2 a 4 horas si vas a operar ya, 12 horas si es a
                largo plazo) en lugar de fiarte del de 24 horas.
              </Li>
              <Li>
                <B>Elige bin step, rango y forma según cuánto vayas a vigilar.</B>{" "}
                Un rango ancho o un Spot-Wide exige menos atención; uno estrecho
                rinde más mientras funciona y se queda fuera antes. Para entrar o
                salir poco a poco, Bid-Ask de un solo lado.
              </Li>
              <Li>
                <B>Abre con poco capital y vigila el principio.</B> El APR cambia
                constantemente y los primeros momentos de una pool son los que
                más conviene seguir. Revisa en la interfaz los costes de
                apertura, reembolsables o no, antes de confirmar.
              </Li>
              <Li>
                <B>Reclama las comisiones y compara con mantener.</B> No se
                reinvierten solas. Apunta el valor con el que entras y compara
                cada cierto tiempo la posición más las comisiones con lo que
                valdrían los tokens guardados. En{" "}
                <G slug="como-monitorizo-mis-pools-de-hyperevm">esta guía</G>{" "}
                explico las seis métricas que uso.
              </Li>
              <Li>
                <B>Define la salida antes de entrar.</B> Cuándo recolocas el
                rango, cuándo cierras y qué pérdida estás dispuesto a asumir.
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
                <B>Fiarse del APR de 24 horas.</B> Puede arrastrar un pico del
                día anterior que ya no existe.
              </Li>
              <Li>
                <B>Abrir una posición y olvidarla.</B> Sale del rango, deja
                comisiones sin reclamar y el depósito en SOL sin recuperar.
              </Li>
              <Li>
                <B>Entrar en un token de hace unas horas solo por el APR.</B>{" "}
                Suelen tener poca liquidez, mucho riesgo y, a veces, trampas.
              </Li>
              <Li>
                <B>Usar rangos estrechos sin poder reequilibrar.</B> Si no puedes
                vigilar la posición, un rango ancho suele convenirte más.
              </Li>
              <Li>
                <B>No comparar con mantener los tokens.</B> Cobrar comisiones no
                significa salir ganando.
              </Li>
            </Ul>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es Meteora?",
          answer:
            "Un conjunto de productos de liquidez sobre Solana. Entre los principales están el DLMM (liquidez concentrada por bins), el DAMM v2 (un AMM configurable) y la Dynamic Bonding Curve (lanzamiento de tokens).",
        },
        {
          question: "¿Qué es el DLMM de Meteora?",
          answer:
            "Dynamic Liquidity Market Maker: un modelo de liquidez concentrada en el que el precio se divide en bins, cada uno con un precio fijo. Eliges en qué bins colocas tu liquidez y con qué forma (Spot, Curve o Bid-Ask), y las operaciones dentro del bin activo no sufren slippage.",
        },
        {
          question: "¿Qué es un bin y qué es el bin step?",
          answer:
            "Un bin es un punto de precio donde se guarda liquidez. El bin step es la distancia de precio entre dos bins vecinos, en puntos básicos, con un máximo de 400 (un 4 %). Un bin step pequeño suele usarse en pares estables y uno grande, en pares volátiles.",
        },
        {
          question: "¿Qué diferencia hay entre Spot, Curve y Bid-Ask?",
          answer:
            "Spot reparte la liquidez de forma uniforme; Curve la concentra en el centro del rango; Bid-Ask hace lo contrario, con más liquidez en los bordes, y se usa en mercados volátiles o para entrar y salir de forma escalonada.",
        },
        {
          question: "¿Qué pasa si el precio sale de mi rango?",
          answer:
            "La posición deja de cobrar comisiones y queda entera en uno de los dos tokens (el que ha perdido valor, si el precio baja). Puedes esperar a que el precio vuelva, recolocar el rango o cerrar la posición.",
        },
        {
          question: "¿Las comisiones se reinvierten solas?",
          answer:
            "No. Las comisiones y las recompensas no se reinvierten de forma automática: quedan pendientes de reclamar hasta que las reclamas.",
        },
        {
          question: "¿Cuánto se gana con Meteora?",
          answer:
            "No hay una cifra fiable. El APR que muestra la interfaz es una estimación con las comisiones recientes y cambia a diario: en un ejemplo de febrero de 2025, el APR de 24 horas de un token era del 654 % y el de las últimas 4 horas, del 7 %. Además, puedes salir perdiendo frente a mantener los tokens.",
        },
        {
          question: "¿Es seguro Meteora? ¿Se puede perder dinero?",
          answer:
            "Sí se puede perder dinero. Además de la pérdida impermanente y del riesgo de salirse del rango, hay riesgo de tokens que se desploman o tienen trampas y de contrato y operativo. El DLMM tiene 15 informes de auditoría enlazados en la documentación, pero una auditoría no elimina el riesgo, y en enero de 2026 DefiLlama registró una pérdida de 1,5 millones de dólares por una suplantación en una operación OTC. Empieza con poco capital.",
        },
        {
          question: "¿Para qué sirve el token MET?",
          answer:
            "Según su libro blanco MiCAR (octubre de 2025), MET es el activo de utilidad y coordinación del ecosistema de Meteora: da acceso o prioridad en programas de liquidez y lanzamientos y, tras una activación posterior, permitirá hacer staking a cambio de puntos de participación no transferibles. El libro blanco dice que no da derechos de propiedad, gobernanza ni reparto de beneficios. Después, Meteora lanzó un piloto de staking que reparte en USDC parte de las comisiones del DLMM (desde el 20 de julio de 2026) y anunció que había recomprado MET por 10 millones de dólares en el cuarto trimestre de 2025. Son programas de la empresa que pueden cambiar, no derechos del token (a 5 de noviembre de 2026).",
        },
        {
          question: "¿Sigue abierto el airdrop de Meteora?",
          answer: (
            <>
              Depende de la temporada. El reclamo de la temporada 1 se cerró el
              23 de enero de 2026 y el de la temporada 2 para proveedores de
              liquidez, el 21 de octubre de 2026. Según la prensa, un tramo
              aparte de 6 millones de MET para colaboradores tiene un
              comprobador abierto hasta el 31 de diciembre de 2026. Entra solo
              desde la web oficial de Meteora, nunca desde enlaces que te lleguen
              por mensaje, y recuerda que ningún programa de puntos garantiza un
              reparto futuro. Cómo funcionan los airdrops y cómo evitar las
              estafas, en la guía de{" "}
              <InternalLink href="/guias/que-es-un-airdrop">
                qué es un airdrop
              </InternalLink>
              .
            </>
          ),
        },
      ]}
      sources={[
        {
          label: "Meteora: qué es el DLMM (documentación oficial)",
          href: "https://docs.meteora.ag/core-products/dlmm/what-is-dlmm",
        },
        {
          label: "Meteora: estrategias y casos de uso del DLMM",
          href: "https://docs.meteora.ag/core-products/dlmm/strategies-and-use-cases",
        },
        {
          label: "Meteora: posiciones dinámicas del DLMM",
          href: "https://docs.meteora.ag/core-products/dlmm/dynamic-positions",
        },
        {
          label: "Meteora: órdenes límite del DLMM",
          href: "https://docs.meteora.ag/core-products/dlmm/limit-order",
        },
        {
          label: "Meteora: modo de cobro de comisiones del DLMM",
          href: "https://docs.meteora.ag/core-products/dlmm/collect-fee-mode",
        },
        {
          label: "Meteora: fórmulas del DLMM (precio de los bins y comisiones)",
          href: "https://docs.meteora.ag/core-products/dlmm/formulas",
        },
        {
          label: "Meteora: ingresos del protocolo y reparto de comisiones",
          href: "https://docs.meteora.ag/protocol/protocol-revenues",
        },
        {
          label: "Meteora: DAMM v2",
          href: "https://docs.meteora.ag/core-products/damm-v2/what-is-damm-v2",
        },
        {
          label: "Meteora: Dynamic Bonding Curve",
          href: "https://docs.meteora.ag/core-products/dbc",
        },
        {
          label: "Meteora: Alpha Vault",
          href: "https://docs.meteora.ag/helper-products/alpha-vault/what-is-alpha-vault",
        },
        {
          label: "Meteora: tokenomics de MET",
          href: "https://docs.meteora.ag/protocol/met/tokenomics",
        },
        {
          label: "Meteora: preguntas frecuentes del lanzamiento de MET",
          href: "https://docs.meteora.ag/protocol/met/faq",
        },
        {
          label: "Meteora: libro blanco MiCAR del token MET (PDF)",
          href: "https://static.meteora.ag/whitepaper/mica.pdf",
        },
        {
          label: "Meteora: condiciones del airdrop de la temporada 2",
          href: "https://docs.meteora.ag/protocol/met/s2-airdrop-terms",
        },
        {
          label: "Solana Compass: lanzamiento del Referral Staking de MET",
          href: "https://solanacompass.com/news/meteoras-referral-staking-program-draws-65-million-met-in-its-first-four-days",
        },
        {
          label: "Solana Compass: ciclo 2 del Referral Staking de MET",
          href: "https://solanacompass.com/news/meteora-referral-staking-cycle-2-distributes-over-700k-in-usdc-more-than-double-cycle-1",
        },
        {
          label: "ChainCatcher: recompra de MET y Comet Points",
          href: "https://www.chaincatcher.com/en/article/2228361",
        },
        {
          label: "Crypto Briefing: tramo de 6 millones de MET para colaboradores",
          href: "https://cryptobriefing.com/meteora-season-2-met-allocation-checker/",
        },
        {
          label: "Meteora: auditorías del DLMM",
          href: "https://docs.meteora.ag/resources/audits/dlmm",
        },
        {
          label: "Meteora: cómo mantenerte seguro",
          href: "https://docs.meteora.ag/user-guides/staying-safe-on-meteora",
        },
        {
          label: "DefiLlama: Meteora DLMM (TVL y volumen)",
          href: "https://defillama.com/protocol/meteora-dlmm",
        },
        {
          label: "DefiLlama: Meteora (registro de incidentes)",
          href: "https://defillama.com/protocol/meteora",
        },
        {
          label: "crypto.news: la demanda por LIBRA contra Meteora y Chow, desestimada",
          href: "https://crypto.news/libra-lawsuit-dismissed-as-court-rejects-claims-against-meteora-and-chow/",
        },
        {
          label: "Bitcoin.com News: un juez desestima la demanda colectiva por LIBRA",
          href: "https://news.bitcoin.com/regulation-and-legal/us-judge-dismisses-libra-crypto-class-action-against-kelsier/",
        },
        {
          label: "The Block: Ben Chow dimite como cofundador de Meteora",
          href: "https://www.theblock.co/news/web3/2025-02-18-meteora-co-founder-ben-chow-resigns-amid-libra-scandal-341412",
        },
      ]}
      relatedSlugs={[
        "actualizaciones-importantes-en-meteora",
        "actualizaciones-importantes-en-meteora-69e",
        "estrategia-anti-sawtooth-en-meteora",
        "guia-definitiva-para-usar-meteora",
        "guia-definitiva-para-usar-meteora-370",
        "la-guia-definitiva-para-usar-meteora",
        "masterclass-amms-vs-clmms-vs-dlmms",
        "monitoriza-tus-posiciones-de-meteora",
      ]}
    />
  );
}
