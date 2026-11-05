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
  Note,
  Ol,
  P,
  Ul,
} from "../pillar-ui";

const PILLAR = getPillar("/guias/que-es-pendle");
const CAMPAIGN = "pendle";
const TITLE = "Qué es Pendle: PT, YT y rendimiento fijo | Secreto Defi";
const DESCRIPTION =
  "Qué es Pendle, cómo funcionan los tokens PT y YT, cómo se fija un rendimiento o se apuesta por él, las comisiones, sPENDLE y los riesgos. Guía en español.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt:
    "Qué es Pendle y cómo funcionan PT y YT: guía para empezar | La Agenda de SecretoDefi",
});

const G = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <GuideLink slug={slug} campaign={CAMPAIGN}>
    {children}
  </GuideLink>
);

export default function QueEsPendlePage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Qué es Pendle y cómo funcionan PT y YT: guía para empezar"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            Pendle es un protocolo de DeFi que separa un activo que genera
            rendimiento en dos partes que se compran y se venden por separado:
            el principal, que se canjea por el valor del activo al vencimiento, y el
            rendimiento, que se cobra hasta esa fecha. Con la primera fijas un
            rendimiento; con la segunda apuestas a que el rendimiento real será
            mayor del que ya descuenta el mercado. Es muy potente, pero casi
            todas las explicaciones se quedan en «rendimiento fijo» y no dicen
            cuándo deja de serlo.
          </P>
          <P>
            Esta guía ordena lo esencial con datos de la documentación oficial y
            de la app, consultados el 5 de noviembre de 2026 (los que cambian a
            diario llevan su fecha): qué es Pendle, cómo se divide un activo en
            SY, PT y YT, de dónde sale el rendimiento fijo, por qué el YT es una
            apuesta con fecha de caducidad, qué pasa si aportas liquidez, qué
            comisiones cobra, cómo funciona sPENDLE, qué son Boros y PendleLoop
            y qué riesgos tiene cada pieza. Complementa la guía de{" "}
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
        "Pendle divide un activo que genera rendimiento en dos tokens: el PT (principal), que se canjea 1:1 por el activo contable al vencimiento y se compra con descuento, y el YT (rendimiento), que recibe el rendimiento y los puntos hasta esa fecha (menos una comisión del 5 %) y vale cero después.",
        "El rendimiento de un PT es fijo solo si lo mantienes hasta el vencimiento y el activo base no falla. El YT es una apuesta apalancada a que el rendimiento real supere al que ya descuenta su precio, y pierde valor con el tiempo.",
        "Pendle cobra el 5 % del rendimiento que generan los YT y una comisión por swap que baja al acercarse el vencimiento. La mayor parte va a recomprar PENDLE, que se reparte entre los titulares activos de sPENDLE.",
        "Los riesgos principales son el activo base (si pierde su paridad, el PT no te protege), los contratos de terceros y los mercados poco líquidos. El looping añade riesgo de liquidación. «Fijo» no significa garantizado ni sin riesgo.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es Pendle",
          children: (
            <>
              <P>
                Según su documentación, Pendle es un protocolo sin permisos para
                operar con rendimiento: una capa de derivados construida sobre
                activos que ya generan rendimiento en DeFi, como tokens de
                staking líquido, de restaking líquido, stablecoins con
                rendimiento o activos del mundo real. En su núcleo no presta
                dinero: toma un activo que ya rinde y reparte el derecho a su
                principal y el derecho a su rendimiento en dos tokens que se
                negocian en un mercado propio.
              </P>
              <P>
                El problema que quiere resolver es que el rendimiento no es una
                cifra fija. La documentación lo ilustra con una pregunta: cuánto
                vas a ganar prestando 1.000 USDC en Aave. No se puede saber con
                seguridad, porque el rendimiento fluctúa como el precio de los
                tokens: tiende a subir en mercados alcistas y a bajar en los
                bajistas. Con Pendle puedes fijar un rendimiento, apostar por
                que suba o cubrirte si baja.
              </P>
              <DataTable
                caption="Las piezas de Pendle, según su documentación y su app"
                head={["Pieza", "Qué es"]}
                rows={[
                  [
                    "SY (Standardized Yield)",
                    "Versión envuelta del activo con rendimiento, con un formato estándar que Pendle puede dividir y negociar. En la mayoría de los casos 1 SY equivale a 1 unidad del activo, pero no siempre. Casi nunca lo manejas: la app convierte por ti.",
                  ],
                  [
                    "PT (Principal Token)",
                    "El principal: se canjea por el activo contable al vencimiento.",
                  ],
                  [
                    "YT (Yield Token)",
                    "El rendimiento y los puntos del activo hasta el vencimiento.",
                  ],
                  [
                    "Pool de liquidez (LP)",
                    "El AMM de Pendle negocia PT contra SY. Quien aporta liquidez recibe un token LP y cobra una parte de lo que genera el mercado.",
                  ],
                  [
                    "PENDLE y sPENDLE",
                    "El token del protocolo y su versión de staking, que recibe el reparto de las recompras.",
                  ],
                  [
                    "Boros",
                    "Plataforma de Pendle para operar rendimientos con margen, como los tipos de financiación de los perpetuos. Es un producto aparte de PT y YT.",
                  ],
                  [
                    "PendleLoop",
                    "Sección de la app que automatiza el looping: apalancar un activo o un PT contra un mercado de préstamos.",
                  ],
                ]}
              />
              <P>
                Según DefiLlama, Pendle tenía unos 1.014 millones de dólares de{" "}
                <GlossaryLink id="tvl">TVL</GlossaryLink> el 5 de noviembre de
                2026 y había movido unos 1.393 millones en volumen de swaps en
                los 30 días anteriores. La mayor parte del TVL está en Ethereum
                (unos 771 millones, el 76 %), seguida de Monad (152 millones),
                Arbitrum (47), X Layer (23), Hyperliquid L1 (10) y BNB Chain
                (7). Son cifras que cambian a diario y solo indican tamaño, no
                seguridad ni rendimiento. Esta es la evolución del TVL:
              </P>
              <DataTable
                caption="TVL de Pendle en todas las redes, según DefiLlama"
                head={["Fecha", "TVL"]}
                rows={[
                  ["19 de septiembre de 2025 (máximo)", "13.391 M$"],
                  ["6 de noviembre de 2025", "6.288 M$"],
                  ["10 de mayo de 2026", "1.615 M$"],
                  ["8 de agosto de 2026", "1.186 M$"],
                  ["7 de octubre de 2026", "1.262 M$"],
                  ["5 de noviembre de 2026", "1.014 M$"],
                ]}
              />
              <Note>
                Fuente: DefiLlama (API pública del protocolo, consultada el 5 de
                noviembre de 2026). M$ = millones de dólares.
              </Note>
              <P>
                El TVL de hoy está más de un 90 % por debajo del máximo. Mezcla
                muchos factores (el precio de los activos, el capital que busca
                rendimiento fijo, los incentivos de cada mercado) y esta guía no
                atribuye la caída a una causa concreta. Úsalo como termómetro de
                actividad, no como prueba de seguridad.
              </P>
              <P>
                Un detalle importante para quien empieza: según la introducción
                de la documentación, cualquier usuario o protocolo puede crear
                un mercado en la cadena, pero la visibilidad en la interfaz
                oficial pasa por un proceso de revisión, y existe un portal de
                listados para la comunidad. Que un mercado exista en la cadena
                no significa que esté en la app oficial ni que sea seguro; por
                eso conviene entrar solo desde la web oficial y comprobar las
                direcciones del mercado, como explico en el paso a paso.
              </P>
              <P>
                Mis guías de Pendle son de septiembre de 2025 y agosto de 2026 y
                describen las cifras y las pantallas de aquel momento. Pendle
                cambia con frecuencia (en enero de 2026 sustituyó vePENDLE por
                sPENDLE y hoy tiene secciones nuevas como PendleLoop), así que en
                esta página manda la documentación oficial a fecha de hoy, y las
                cifras que cambian a diario llevan su fecha.
              </P>
            </>
          ),
        },
        {
          id: "tokenizacion",
          title: "Cómo se divide un activo: SY, PT y YT",
          children: (
            <>
              <P>
                Imagina un activo que va ganando valor con el tiempo, como un
                token de staking líquido o una stablecoin con rendimiento.
                Pendle hace tres cosas con él:
              </P>
              <Ol>
                <Li>
                  <B>Lo envuelve.</B> El activo se convierte en SY (Standardized
                  Yield), un estándar de Pendle para envolver cualquier token con
                  rendimiento. La app hace la conversión por ti, y también la
                  inversa.
                </Li>
                <Li>
                  <B>Lo divide.</B> Por cada unidad del activo contable que
                  depositas como SY se crean 1 PT y 1 YT con la misma fecha de
                  vencimiento (la cantidad exacta depende del tipo de cambio del
                  SY). Cada combinación de activo
                  y fecha es un mercado distinto, y un mismo activo puede tener
                  varios vencimientos.
                </Li>
                <Li>
                  <B>Los negocia.</B> PT y YT se compran y se venden en el AMM
                  de Pendle (y, según la app, también con órdenes límite) sin
                  esperar al vencimiento.
                </Li>
              </Ol>
              <P>
                Las dos mitades siempre suman el activo entero. Según la
                documentación, 1 unidad del activo contable crea 1 PT y 1 YT, y 1 PT
                junto con 1 YT se devuelven por 1 unidad del activo contable. El
                AMM de Pendle mantiene esa relación de precios en todo momento:
              </P>
              <Formula>
                Precio del PT + Precio del YT = Precio del activo contable
              </Formula>
              <P>
                El activo contable (<em>accounting asset</em> en la
                documentación) es la unidad en la que se mide el rendimiento y
                en la que se canjea el PT. Aparece entre paréntesis en el nombre
                del mercado: en PT-ezETH (ETH), por ejemplo, 1 PT da derecho a
                canjear al vencimiento el equivalente a 1 ETH en ezETH. Fíjate
                en que lo que recibes se mide en ese activo, no en dólares.
              </P>
              <DataTable
                caption="PT (principal) y YT (rendimiento) lado a lado, según la documentación de Pendle"
                head={["Aspecto", "PT", "YT"]}
                rows={[
                  [
                    "Qué te da",
                    "Canjear 1 unidad del activo contable al vencer.",
                    "Lo que rinde 1 unidad del activo, puntos incluidos, hasta vencer.",
                  ],
                  [
                    "Cómo se compra",
                    "Con descuento: pagas menos de 1 y recibes 1.",
                    "Por una fracción del valor del activo.",
                  ],
                  [
                    "Qué ganas",
                    "El descuento: una ganancia fija si mantienes hasta el final.",
                    "Lo que rinda el activo, si supera lo que pagaste.",
                  ],
                  [
                    "Qué cedes",
                    "Lo que rinda el activo y sus puntos.",
                    "El principal: no se canjea por el activo.",
                  ],
                  [
                    "Al vencer",
                    "Se canjea 1:1 por el activo contable.",
                    "Vale cero.",
                  ],
                  [
                    "Con el tiempo",
                    "Su precio tiende a 1 unidad del activo.",
                    "Su precio cae hacia cero.",
                  ],
                  [
                    "Riesgo",
                    "Vender antes a peor precio, o que falle el activo base.",
                    "Que el activo rinda menos de lo que ya descuenta el precio.",
                  ],
                ]}
              />
              <P>
                Antes del vencimiento puedes crear o devolver PT y YT juntos, y
                quien tiene YT reclama el rendimiento acumulado. Después del
                vencimiento, el PT se canjea por el activo sin necesidad de YT y
                el YT ya no vale nada.
              </P>
            </>
          ),
        },
        {
          id: "pt",
          title: "El PT: cómo se fija un rendimiento",
          children: (
            <>
              <P>
                Un PT se compra con descuento. Si pagas 0,97 unidades por un PT
                que se canjea por 1 unidad dentro de 180 días, el descuento
                (alrededor del 3 %) es tu ganancia si lo mantienes hasta el
                vencimiento. Expresada en términos anuales, esa ganancia es lo
                que la app llama «Fixed APY». El glosario de la documentación lo
                define como el rendimiento garantizado por mantener el PT,
                aunque los términos de uso precisan que es el rendimiento
                anualizado implícito al precio actual y que no es una
                rentabilidad contractualmente garantizada. El «Fixed APY»
                coincide con el «Implied APY», que la documentación define como el consenso del mercado
                sobre el rendimiento futuro del activo y calcula así:
              </P>
              <Formula>
                APY implícito = (1 + precio del YT / precio del PT) ^ (365 / días
                hasta el vencimiento) − 1
              </Formula>
              <P>
                Un ejemplo con números redondos (mío, no de un mercado real y
                sin gas ni deslizamiento): con 1.000 unidades compras unos
                1.030,9 PT a 0,97. Al vencimiento los canjeas por unas 1.030,9
                unidades, 30,9 de ganancia, un 3,09 % en 180 días, que equivale
                a un 6,37 % anualizado. El mismo descuento rinde cosas muy
                distintas según el plazo que falte:
              </P>
              <DataTable
                caption="APY fijo de un PT comprado a 0,99 según los días que faltan"
                head={["Días hasta el vencimiento", "APY fijo"]}
                rows={[
                  ["30", "13,01 %"],
                  ["90", "4,16 %"],
                  ["180", "2,06 %"],
                  ["365", "1,01 %"],
                ]}
              />
              <Note>
                Cálculo propio con la fórmula de la documentación, con
                interés compuesto y sin comisiones.
              </Note>
              <P>
                Antes del vencimiento, el precio del PT se mueve con el APY
                implícito: si el mercado exige más rendimiento, el precio baja;
                si exige menos, sube. Por eso puedes vender un PT en cualquier
                momento, pero lo harás al precio de ese día. La propia
                documentación avisa de que puedes ganar más o menos que el APY
                de entrada y, en casos extremos, perder.
              </P>
              <H3>Cuándo es «fijo» de verdad</H3>
              <Ul>
                <Li>
                  <B>Si lo mantienes hasta el vencimiento.</B> La hoja de
                  referencia de la documentación habla de capital y rendimiento
                  garantizados solo en ese caso, y los términos de uso añaden
                  que Pendle no garantiza que nadie reciba ningún rendimiento.
                </Li>
                <Li>
                  <B>Si el activo base sigue funcionando.</B> El PT se canjea a
                  través del activo que lo respalda. Si ese activo pierde su
                  paridad (<em>depeg</em>) o su protocolo falla, el PT no te
                  protege: no es un seguro, es un derecho sobre el activo.
                </Li>
                <Li>
                  <B>Si el rendimiento no se vuelve negativo.</B> La
                  documentación define la «marca de agua» (<em>watermark rate</em>)
                  como el mayor tipo de cambio registrado entre el token con
                  rendimiento y su activo contable. Si el tipo de cambio cae por
                  debajo, el PT se canjea por menos de su valor al vencimiento y
                  el YT deja de generar rendimiento.
                </Li>
                <Li>
                  <B>Si lo mides en el activo contable.</B> «Fijo» significa fijo
                  en unidades de ese activo (ETH, USDC…), no en dólares si el
                  activo es volátil.
                </Li>
              </Ul>
              <P>
                Junto al APY fijo, la app muestra el «Underlying APY»: según la
                documentación, la media móvil de 7 días del rendimiento real del
                activo. La hoja de referencia de la documentación considera
                barato el PT cuando el APY implícito está muy por encima del
                subyacente. Pero un APY implícito muy alto también puede
                significar que el mercado descuenta un riesgo: antes de llamarlo
                ganga, averigua por qué.
              </P>
              <Callout title="Fijo no es sin riesgo">
                El PT fija el rendimiento en unidades del activo contable si lo
                mantienes hasta el vencimiento. No fija su valor en dólares, no
                elimina el riesgo del activo base y, si vendes antes, el precio
                de salida lo pone el mercado.
              </Callout>
            </>
          ),
        },
        {
          id: "yt",
          title: "El YT: apostar por el rendimiento",
          children: (
            <>
              <P>
                El YT te da el rendimiento y los puntos de 1 unidad del activo
                hasta el vencimiento, y puedes reclamarlo cuando quieras desde
                el Dashboard de la app. Como solo compras el rendimiento y no el
                principal, necesitas poco capital para exponerte a mucho activo:
                la hoja de referencia de la documentación habla de una
                exposición apalancada al rendimiento, normalmente de 20 veces o
                más, sin pedir prestado y, por tanto, sin riesgo de liquidación
                ni de error de oráculo. El riesgo es otro: el tiempo.
              </P>
              <P>
                Un ejemplo con números redondos (mío, no de un mercado real): un
                YT cuesta 0,03 unidades, el PT está a 0,97 y faltan 180 días.
                Con 1.000 unidades compras unos 33.333 YT, es decir, te expones
                al rendimiento de 33.333 unidades del activo. Si el activo rinde
                de media lo que descuenta el mercado, no ganas ni pierdes; si
                rinde más, ganas mucho más que manteniéndolo; si rinde menos,
                pierdes mucho más.
              </P>
              <DataTable
                caption="Resultado de comprar un YT a 0,03 con 180 días hasta el vencimiento, según el rendimiento real medio anual del activo"
                head={["Si rinde", "Con el YT", "Solo activo"]}
                rows={[
                  ["10 %", "+56,2 %", "+4,93 %"],
                  ["8 %", "+24,9 %", "+3,95 %"],
                  ["6,4 % (empate)", "≈ 0 %", "+3,16 %"],
                  ["4 %", "−37,5 %", "+1,97 %"],
                  ["0 %", "−100 %", "0 %"],
                ]}
              />
              <Note>
                «Solo activo» es lo que ganarías manteniendo el activo esos 180
                días, sin YT. Cálculo propio con números redondos: el
                rendimiento se supone constante y sin reinvertir, se descuenta
                la comisión del 5 % que
                Pendle cobra sobre el rendimiento de los YT y no se cuentan gas
                ni deslizamiento. El empate llega cuando el activo rinde un 3,16
                % en esos 180 días: el 3 % que ya descuenta el precio del YT,
                dividido entre 0,95 por la comisión. Anualizado, es el 6,4 % de
                la fila «empate».
              </Note>
              <H3>Qué conviene entender del YT</H3>
              <Ul>
                <Li>
                  <B>El tiempo juega en contra.</B> Según la documentación, el
                  precio del YT va cayendo hacia cero hasta el vencimiento, y
                  después no vale nada.
                </Li>
                <Li>
                  <B>Se gana acertando el rendimiento, no el precio.</B> El YT
                  da beneficio si el rendimiento que genera supera lo que
                  pagaste por él, o si su precio sube antes de que lo vendas. En
                  la app compararás el APY implícito del mercado con tu
                  expectativa del rendimiento real del activo.
                </Li>
                <Li>
                  <B>El punto de equilibrio queda por encima del APY implícito.</B>{" "}
                  Como Pendle se queda el 5 % del rendimiento, el activo tiene
                  que rendir algo más de lo que ya descuenta el precio del YT
                  para que salgas ganando.
                </Li>
                <Li>
                  <B>Los puntos forman parte del precio.</B> En activos que
                  reparten puntos de terceros, cada YT da derecho a los puntos
                  de 1 unidad del activo hasta el vencimiento. Los
                  multiplicadores los fija el protocolo subyacente y pueden
                  cambiar en cualquier momento (lo dice una página antigua de la
                  documentación), y la documentación indica que las disputas se
                  dirigen a esos equipos, no a Pendle. Como el YT cuesta lo que
                  el mercado espera que rinda, su precio suele incorporar lo que
                  se espera de esos puntos, y ningún programa de puntos garantiza un reparto
                  futuro.
                </Li>
                <Li>
                  <B>Las comisiones también cuentan.</B> Pendle cobra el 5 % del
                  rendimiento acumulado por los YT, puntos incluidos.
                </Li>
              </Ul>
              <P>
                En mi guía{" "}
                <G slug="ptyt-el-rendimiento-tokenizado">
                  PT/YT: el rendimiento tokenizado
                </G>{" "}
                muestro un ejemplo paso a paso, su uso para cobertura y
                especulación, el impacto en los LP y un caso práctico con stHYPE
                en HyperEVM y Valantis.
              </P>
            </>
          ),
        },
        {
          id: "liquidez",
          title: "Aportar liquidez en Pendle",
          children: (
            <>
              <P>
                Cada mercado de Pendle tiene una pool en la que se negocian PT
                y SY (por ejemplo, PT-aUSDC contra SY-aUSDC). Si aportas
                liquidez recibes un token LP y, según la documentación, cobras
                de varias fuentes:
              </P>
              <Ul>
                <Li>
                  <B>El rendimiento del propio activo</B> y el rendimiento fijo
                  de la parte PT de la pool.
                </Li>
                <Li>
                  <B>Las comisiones de los swaps</B> de PT y YT, que elevan el
                  valor de la pool y no hay que reclamar.
                </Li>
                <Li>
                  <B>Incentivos en PENDLE</B>, que se reclaman con el botón
                  «Claim» de la app.
                </Li>
              </Ul>
              <P>
                Ninguna de las tres está garantizada: la documentación advierte
                de que el APY de un LP no lo está. Además, el AMM de Pendle no
                funciona como una pool clásica: concentra la liquidez dentro de
                un rango de rendimiento preconfigurado (medido en APY
                implícito) y estrecha ese rango a medida que se acerca el
                vencimiento, porque cada vez hay menos incertidumbre sobre el
                rendimiento futuro. Su comisión también se calcula sobre el rendimiento que
                se negocia: una operación cerca del vencimiento paga menos que
                la misma operación hecha antes. Fuera del rango, la liquidez es
                demasiado fina para empujar más el APY implícito: según la
                documentación, si supera el límite superior, comprar YT (o
                vender PT) podría dejar de ser posible. En la ficha «Specs» de cada mercado ves su
                rango de rendimiento de la liquidez.
              </P>
              <P>
                Pendle sostiene que su diseño hace de la{" "}
                <GlossaryLink id="impermanent-loss">pérdida impermanente</GlossaryLink>{" "}
                un problema menor, por tres razones: la curva se desplaza para
                tener en cuenta que el PT converge hacia el activo, los dos
                activos de la pool están muy correlacionados y, si mantienes la
                liquidez hasta el vencimiento, la posición equivale a tener el
                activo. Según la documentación no hay pérdida impermanente al
                vencimiento y antes de él es mínima, aunque puede aparecer por
                cambios en la demanda de PT y YT. «Mínima» no es «cero». La
                documentación también recuerda que aportar liquidez te deja con
                exposición al precio de un solo activo y con una visión
                ligeramente bajista del rendimiento de ese activo, por la parte
                PT de la pool. No quedas bloqueado: puedes retirar la liquidez
                en cualquier momento.
              </P>
              <P>
                Cómo se calcula la pérdida impermanente, con un ejemplo, está en
                la guía de{" "}
                <InternalLink href="/guias/que-es-la-perdida-impermanente">
                  qué es la pérdida impermanente
                </InternalLink>
                . Si quieres cubrir el riesgo de precio de una posición de
                liquidez con una posición corta en un perp, en{" "}
                <G slug="como-hedgear-el-impermanent-loss">esta guía</G>{" "}
                explico cómo se monta y cuándo no compensa; y para saber si una
                posición de liquidez concentrada bate a mantener los activos,
                las seis métricas que uso están en{" "}
                <G slug="como-monitorizo-mis-pools-de-hyperevm">esta otra</G>.
              </P>
            </>
          ),
        },
        {
          id: "comisiones",
          title: "Comisiones, PENDLE y sPENDLE",
          children: (
            <>
              <P>
                Pendle cobra de varias maneras, según su página de comisiones.
                El nivel de comisión de swap de cada mercado se ve en «Specs»;
                por ejemplo, el 5 de noviembre de 2026 la ficha de un mercado a
                27 días del vencimiento mostraba una comisión de taker del
                0,47 % y una de maker del 0 %.
              </P>
              <DataTable
                caption="Comisiones de Pendle V2, según su documentación"
                head={["Comisión", "Cuánto", "Destino"]}
                rows={[
                  [
                    "Sobre los YT (con puntos)",
                    "El 5 % de todo lo que acumulan los YT.",
                    "El reparto de abajo.",
                  ],
                  [
                    "Swaps de PT y YT",
                    "Un porcentaje que sube con el tiempo que falta; cada mercado tiene su nivel. Los swaps de YT pasan por la pool de PT, así que se calculan sobre el PT.",
                    "El 20 % a los LP; el resto, el reparto de abajo.",
                  ],
                  [
                    "Canjear un PT vencido",
                    "Sin comisión de protocolo, solo gas de la red (y un swap, si eliges otro activo).",
                    "—",
                  ],
                  [
                    "PT y LP vencidos sin canjear",
                    "Todo lo que siguen generando, puntos incluidos.",
                    "La tesorería de Pendle.",
                  ],
                ]}
              />
              <Formula>
                Comisión de swap = (nivel de comisión / 365) × días hasta el
                vencimiento
              </Formula>
              <P>
                Por eso la comisión baja a medida que se acerca el vencimiento.
                Del resto de las comisiones de swap y de todas las de YT, el 80 %
                se destina a recomprar PENDLE, el 10 % a la tesorería del
                protocolo y el 10 % a operaciones.
              </P>
              <Note>
                Una página antigua de la documentación (la de trading de puntos)
                todavía cita una comisión del 3 % sobre el rendimiento de los
                YT. La página de comisiones, que es la de referencia, indica el
                5 %. Comprueba la cifra vigente antes de operar.
              </Note>
              <H3>De vePENDLE a sPENDLE</H3>
              <P>
                PENDLE es el token del protocolo. Hasta enero de 2026, quien
                quería voto y recompensas bloqueaba PENDLE hasta dos años a
                cambio de vePENDLE. Según The Block, el 20 de enero de 2026
                Pendle puso en marcha el staking de sPENDLE y empezó a desmontar
                el modelo de bloqueos de varios años. Según la documentación, el 29 de enero
                a las 00:00 UTC se pausaron los bloqueos de vePENDLE y se tomó
                una instantánea de cada saldo: quienes tenían vePENDLE
                recibieron sPENDLE virtual, no transferible, con un multiplicador
                de hasta 4 veces que decae hasta 1 al vencimiento del bloqueo y
                después caduca. Estas son las reglas actuales de sPENDLE:
              </P>
              <Ul>
                <Li>
                  <B>Entrar y salir.</B> PENDLE se convierte en sPENDLE 1:1 al
                  instante. Para recuperarlo hay un periodo de retirada de 14
                  días o una salida inmediata con una comisión del 5 %.
                </Li>
                <Li>
                  <B>Recompras.</B> La página de sPENDLE resume que el 80 % de
                  las comisiones de V2 se destina a recomprar PENDLE y que hasta
                  el 100 % de lo recomprado se reparte entre los titulares
                  activos de sPENDLE, en forma de sPENDLE. Los airdrops de
                  activos con puntos se reparten tal cual y no se usan para
                  recompras. Las comisiones se recogen cada dos
                  semanas, la compra se ejecuta a lo largo de la semana
                  siguiente con un TWAP horario y las recompensas se distribuyen
                  cada dos semanas y se reclaman desde la app.
                </Li>
                <Li>
                  <B>Activo o inactivo.</B> Quien no vota cuando hay una
                  propuesta de gobernanza abierta pasa a inactivo y no cobra
                  recompensas (según The Block, durante 14 días). El sPENDLE desplegado en
                  integraciones de DeFi elegibles cuenta como activo.
                </Li>
              </Ul>
              <P>
                Pendle explicó el cambio, según The Block, porque el sistema de
                vePENDLE exigía bloqueos de varios años y una votación semanal
                que llamó compleja, porque solo alrededor del 20 % del
                suministro de PENDLE participaba y porque sus datos internos
                mostraban que más del 60 % de los mercados no era rentable. Como
                en cualquier protocolo con gobernanza, estas reglas pueden
                cambiar: no son derechos garantizados, y esta guía no analiza PENDLE como
                inversión. Si quieres ver otro modelo de bloqueo y votación con
                sus riesgos de inflación, lee{" "}
                <G slug="como-funcionan-los-dex-ve33-y-por">
                  la guía sobre los DEX ve(3,3)
                </G>
                .
              </P>
            </>
          ),
        },
        {
          id: "boros-y-loop",
          title: "Boros y PendleLoop",
          children: (
            <>
              <P>
                Pendle tiene dos productos más que no son PT ni YT y que
                conviene no confundir con ellos.
              </P>
              <H3>Boros</H3>
              <P>
                Boros es una plataforma de Pendle para operar rendimientos con
                margen. Según DefiLlama, permite operar tipos de financiación
                (<GlossaryLink id="funding-rate">funding rates</GlossaryLink>)
                y otros rendimientos de fuera de la cadena. El 5 de noviembre de
                2026, DefiLlama le asignaba unos 8 millones de dólares de TVL
                (el colateral depositado), unos 152 millones de interés abierto
                y unos 887 millones de volumen de perpetuos en 30 días. Los
                términos de uso de Pendle prohíben usar Boros a los usuarios de
                Estados Unidos. Es un producto de derivados con apalancamiento
                que esta guía no desarrolla y que no es para empezar; si no
                sabes qué es el funding de un perpetuo, empieza por la guía de{" "}
                <InternalLink href="/guias/perp-dex-y-farmeo-de-puntos">
                  perp DEX y farmeo de puntos
                </InternalLink>
                .
              </P>
              <H3>PendleLoop</H3>
              <P>
                PendleLoop es una sección de la app (el 5 de noviembre de 2026
                aparecía en el menú principal, junto a Markets y Dashboard) que
                automatiza el{" "}
                <GlossaryLink id="looping">looping</GlossaryLink>. Tiene dos
                modalidades. «Loop to Earn» consiste, según la app, en depositar
                un activo o un PT en un mercado de préstamos, pedir prestado
                contra él, comprar más del activo y repetir para multiplicar su
                rendimiento. «Loop to Long/Short» sirve para apostar al precio
                con apalancamiento (la app anunciaba hasta 6 veces). Ese día, el
                APY de looping más alto de los mercados listados era del 69,83 %:
                es un máximo con apalancamiento, no lo que vas a ganar.
              </P>
              <P>La guía integrada en la app recuerda lo esencial:</P>
              <Ul>
                <Li>
                  <B>Antes de abrir un loop.</B> Mira, en cada fila, el activo
                  que pides prestado, su color de riesgo y el APY máximo, y abre
                  «Looping Info» para ver el oráculo, el modelo del tipo de
                  interés del préstamo y los riesgos de ese mercado.
                </Li>
                <Li>
                  <B>Al abrirlo.</B> El importe que introduces es tu capital, no
                  el tamaño del loop. Al arrastrar el apalancamiento se
                  actualizan el factor de salud y el APY estimado, y conviene
                  poner alertas antes de confirmar.
                </Li>
                <Li>
                  <B>Después.</B> El factor de salud (<em>health factor</em>) es
                  el número que hay que mirar cada día. En ámbar o en rojo, la{" "}
                  <GlossaryLink id="liquidacion">liquidación</GlossaryLink> está
                  cerca: puedes bajar el apalancamiento, añadir garantía o
                  cerrar el loop.
                </Li>
                <Li>
                  <B>Con un PT, al vencimiento.</B> El PT se canjea 1:1 y ahí se
                  realiza el rendimiento fijo, pero el loop no se cierra solo: los
                  costes del préstamo siguen hasta que lo deshaces.
                </Li>
              </Ul>
              <P>
                Los riesgos son los de cualquier apalancamiento: que se
                liquide la posición si el precio del PT que usa el oráculo
                baja o no hay liquidez para venderlo, que el coste del préstamo
                supere lo que rinde el PT y el loop dé un carry negativo, y los
                riesgos del mercado de préstamos que hay debajo. La
                documentación de Pendle sobre usar PT como garantía enumera,
                entre otros riesgos, que el fallo de un protocolo subyacente
                podría hacer que el PT pierda mucho valor en poco tiempo y dejar
                deuda incobrable, y que, tras una caída fuerte del precio del
                PT, puede no haber liquidez suficiente para liquidar las
                posiciones; recomienda empezar con factores de garantía
                conservadores. En mi guía{" "}
                <G slug="pt-looping-en-pendle-de-donde-sale">
                  Entiende cómo funcionan los loops de Pendle
                </G>{" "}
                explico qué es un PT, cómo el looping multiplica el APY y de
                dónde sale de verdad un «72 %», cómo se monta paso a paso y los
                dos riesgos clave: carry negativo y liquidación.
              </P>
            </>
          ),
        },
        {
          id: "riesgos",
          title: "Riesgos de Pendle",
          children: (
            <>
              <P>
                Pendle es un conjunto de piezas con riesgos distintos. Ni las
                auditorías ni las estrategias los eliminan:
              </P>
              <Ul>
                <Li>
                  <B>El activo base y su SY.</B> Cada PT está construido sobre un
                  activo con rendimiento. Según la documentación, el fallo del
                  protocolo subyacente podría causar pérdidas grandes y rápidas,
                  y el riesgo hay que evaluarlo sobre la implementación del SY
                  de cada pool. Los SY nuevos suelen ser contratos proxy
                  actualizables, lo que permite cambios sin migrar el mercado.
                  Los términos de uso añaden que el grupo Pendle no se
                  responsabiliza de las pérdidas por fallos indirectos o en
                  cascada de protocolos, decisiones de terceros ni ataques a
                  puentes entre cadenas.
                </Li>
                <Li>
                  <B>Los contratos de Pendle.</B> Según su página de seguridad
                  son de código abierto y los han auditado Ackee, Dedaub y
                  Dingbats y algunos de los mejores participantes de Code4rena;
                  los informes están en un repositorio de GitHub. Esa página no
                  indica las fechas ni el alcance de cada auditoría ni cuántos
                  informes hay. Una auditoría no elimina el riesgo, y los
                  mercados nuevos usan SY nuevos.
                </Li>
                <Li>
                  <B>Mercados falsos o sin revisar.</B> Cualquiera puede crear un
                  mercado en la cadena, y solo los revisados salen en la app
                  oficial. Entra solo desde la web oficial y comprueba en
                  «Specs» las direcciones del mercado, del SY, del PT y del YT.
                  Los hábitos de protección, en la guía de{" "}
                  <InternalLink href="/guias/seguridad-en-defi#habitos">
                    seguridad en DeFi
                  </InternalLink>
                  .
                </Li>
                <Li>
                  <B>Liquidez de salida.</B> Antes del vencimiento sales
                  vendiendo en el mercado. Con poca liquidez, el precio de
                  salida puede ser mucho peor que el que ves, y si el APY
                  implícito se sale por arriba del rango configurado del AMM,
                  vender PT (o comprar YT) podría dejar de ser posible. La ficha
                  del mercado muestra el TVL, el volumen de 24 horas y la
                  profundidad de liquidez: mírala antes de entrar, no cuando
                  quieras salir.
                </Li>
                <Li>
                  <B>Complejidad y errores.</B> Confundir PT con YT, elegir el
                  vencimiento equivocado, olvidar un vencimiento o dejar PT y LP
                  vencidos sin canjear (su rendimiento y sus puntos pasan a la
                  tesorería de Pendle) cuesta dinero. Y un YT puede acabar
                  valiendo cero.
                </Li>
                <Li>
                  <B>Apalancamiento.</B> Un loop de PendleLoop o una posición
                  en Boros añaden riesgo de liquidación, costes de préstamo o de
                  margen y los riesgos del mercado que haya debajo.
                </Li>
                <Li>
                  <B>Reglas y jurisdicciones.</B> Los términos de uso (revisados
                  el 1 de octubre de 2026) excluyen a personas y jurisdicciones
                  de una lista que incluye, entre otras, Cuba, Irán, Corea del
                  Norte, Siria, Rusia, Bielorrusia, Myanmar, Sudán, Zimbabue,
                  Venezuela y las regiones de Crimea, Donetsk y Lugansk, además
                  de las jurisdicciones de las listas de sanciones de la OFAC,
                  la UE y la ONU y de la lista del GAFI de «jurisdicciones de
                  alto riesgo y otras bajo supervisión». Prohíben
                  Boros a los usuarios de EE. UU. y dicen que Pendle no
                  garantiza ningún rendimiento. Lee el texto vigente antes de
                  operar. Esta guía no cubre la fiscalidad de estas operaciones:
                  consúltala con un asesor.
                </Li>
              </Ul>
              <H3>Dos casos reales</H3>
              <Ul>
                <Li>
                  <B>Penpie (septiembre de 2024).</B> El 3 de septiembre de
                  2024, Penpie, un optimizador de rendimiento de terceros que
                  funciona sobre Pendle, perdió unos 27,3 millones de dólares en
                  un ataque. Según The Block, PeckShield explicó que el atacante
                  introdujo un contrato de mercado malicioso para inflar los
                  saldos de staking en Penpie y reclamar recompensas indebidas,
                  y Pendle vinculó la vulnerabilidad a una función que permitía
                  registrar mercados de Pendle en Penpie sin permisos. Pendle
                  dijo que los fondos en Pendle seguían a salvo y no se vieron
                  afectados; pausó sus contratos y afirmó que esa pausa y la
                  coordinación de varias partes evitaron que se drenaran otros
                  105 millones de Penpie. Lección: el riesgo de usar Pendle incluye el de los
                  protocolos que se construyen encima, y son cosas distintas.
                </Li>
                <Li>
                  <B>xUSD (noviembre de 2025).</B> A principios de noviembre de
                  2025, Stream Finance comunicó que un gestor externo había
                  perdido unos 93 millones de dólares de sus fondos, y su token
                  xUSD perdió más del 90 % de su valor, según un análisis de
                  IPOR Labs publicado el 27 de noviembre de 2025. Ese análisis
                  estudió qué pasó esos días en los mercados PT de stablecoins:
                  encontró cambios bruscos del APY implícito (y, en reUSD, una
                  caída del TVL) en mercados sin una exposición fundamental a
                  xUSD que su autor haya podido identificar, como los de reUSD y
                  sUSDe, y sugiere que parte del capital pudo moverse de unos
                  mercados a otros. Lección: los mercados PT reaccionan a lo que
                  pasa en otros activos, y el APY implícito también es una señal
                  de estrés que conviene mirar antes de entrar y mientras estás
                  dentro.
                </Li>
              </Ul>
            </>
          ),
        },
        {
          id: "empezar",
          title: "Cómo empezar paso a paso",
          children: (
            <Ol>
              <Li>
                <B>Prepara una cartera dedicada y entra solo por el sitio oficial.</B>{" "}
                Usa una wallet aparte de tus ahorros, con algo de saldo para el
                gas, y entra desde los enlaces de la{" "}
                <ExternalLink href="https://docs.pendle.finance/">
                  documentación oficial de Pendle
                </ExternalLink>
                , no desde mensajes ni anuncios. Los hábitos de protección, en
                la guía de{" "}
                <InternalLink href="/guias/seguridad-en-defi#habitos">
                  seguridad en DeFi
                </InternalLink>
                .
              </Li>
              <Li>
                <B>Elige primero el activo, luego el APY.</B> Decide con qué
                activo base te sientes cómodo: qué es, quién lo emite, qué lo
                respalda y cómo se comportó en momentos de estrés. Las tarjetas
                de la portada de la app («Highest Fixed Yield», «Top Looping
                Markets»…) ordenan por APY, no por seguridad: el 5 de noviembre
                de 2026, los tres primeros APY fijos de «Highest Fixed Yield»
                iban del 15 % al 26 %.
              </Li>
              <Li>
                <B>Lee la ficha del mercado.</B> Fíjate en el vencimiento, en el
                APY implícito frente al «Underlying APY», en el TVL, en el
                volumen de 24 horas y en la profundidad de liquidez, y en la
                frase que aparece bajo el APY: dice con qué activo se canjea 1
                PT al vencimiento. En «Specs» están las direcciones de los
                contratos (mercado, SY, PT y YT), el rango de rendimiento de la
                liquidez y las comisiones.
              </Li>
              <Li>
                <B>Elige qué quieres hacer.</B> El panel de operación tiene las
                pestañas PT y YT y un enlace a la liquidez (LP). «Swap» opera al
                precio del mercado y «Limit» deja una orden al precio que tú
                fijas. Elige el token con el que entras, revisa cuánto
                recibirás y ajusta el deslizamiento máximo con el engranaje
                antes de confirmar.
              </Li>
              <Li>
                <B>Empieza con poco.</B> Haz una operación pequeña, comprueba en
                tu wallet qué contrato vas a firmar y cuánto gas cuesta, y
                decide antes de entrar si vas a mantener hasta el vencimiento o
                cuándo vendes.
              </Li>
              <Li>
                <B>Sigue tus posiciones en el Dashboard.</B> Desde ahí
                reclamas el rendimiento de tus YT y los incentivos de tus LP.
              </Li>
              <Li>
                <B>Planifica el vencimiento.</B> Al vencimiento, canjea el PT
                desde el Dashboard eligiendo el activo que quieres recibir: es
                un canje sin comisión de protocolo, solo pagas el gas (si eliges
                recibir otro activo, Pendle hace un swap, que puede costar algo
                más). No dejes
                PT ni LP vencidos sin canjear, porque su rendimiento y sus
                puntos pasan a la tesorería de Pendle. Si usaste un loop,
                ciérralo tú: no se cierra solo.
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
                <B>Mirar solo el APY.</B> Un APY alto sobre el activo equivocado
                es riesgo, no oportunidad.
              </Li>
              <Li>
                <B>Creer que «fijo» significa «seguro».</B> Es fijo en unidades
                del activo contable, hasta el vencimiento y mientras el activo
                base funcione.
              </Li>
              <Li>
                <B>Vender un PT antes de tiempo sin mirar el precio.</B> El APY
                de entrada solo lo cobras si mantienes hasta el final; si
                vendes antes, cobras el precio de ese día.
              </Li>
              <Li>
                <B>Comprar YT sin calcular el punto de equilibrio.</B> Compara
                el rendimiento que esperas con el APY implícito y recuerda que
                la comisión del 5 % sube el punto de equilibrio.
              </Li>
              <Li>
                <B>Olvidar el vencimiento.</B> Un YT vale cero después, y un PT
                o un LP sin canjear regalan su rendimiento a la tesorería.
              </Li>
              <Li>
                <B>Entrar en mercados con poca liquidez.</B> Entrar es fácil;
                salir al precio que esperabas, no siempre.
              </Li>
              <Li>
                <B>Apalancar sin entender el factor de salud.</B> Un loop
                amplifica el rendimiento y también las pérdidas.
              </Li>
              <Li>
                <B>Fiarte de enlaces o capturas sin comprobar la web oficial.</B>{" "}
                Los mercados se pueden crear en la cadena sin permiso y los
                enlaces falsos existen.
              </Li>
            </Ul>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es Pendle y qué son PT y YT?",
          answer:
            "Pendle es un protocolo de DeFi que divide un activo que genera rendimiento en dos tokens: el PT (principal), que se canjea 1:1 por el activo contable al vencimiento y se compra con descuento, y el YT (rendimiento), que da el rendimiento y los puntos del activo hasta esa fecha y vale cero después. Se negocian en un mercado propio, así que puedes fijar un rendimiento con el PT o apostar por que suba con el YT.",
        },
        {
          question: "¿El rendimiento de un PT está garantizado?",
          answer:
            "Solo en parte. La hoja de referencia de la documentación dice que capital y rendimiento están garantizados si mantienes el PT hasta el vencimiento, y se miden en unidades del activo contable, no en dólares. Pero los términos de uso precisan que el «Fixed APY» no es una rentabilidad contractualmente garantizada y que Pendle no garantiza que nadie reciba ningún rendimiento. Si vendes antes, cobras el precio de mercado de ese día, que puede ser mayor o menor, y si el activo base falla o pierde su paridad, el PT sufre. «Fijo» no significa sin riesgo.",
        },
        {
          question: "¿Cómo se calcula el APY fijo de un PT?",
          answer:
            "Con el descuento y el plazo. La fórmula de la documentación es: APY implícito = (1 + precio del YT / precio del PT) ^ (365 / días hasta el vencimiento) − 1. Con un PT a 0,97 y 180 días, por ejemplo, sale un 6,37 % anual (ejemplo con números redondos). El mismo descuento da un APY mucho mayor si faltan pocos días que si falta un año.",
        },
        {
          question: "¿Qué pasa con mi PT y mi YT al vencimiento?",
          answer:
            "El PT se canjea 1:1 por el activo contable desde el Dashboard, sin comisión de protocolo (solo gas), y puedes elegir el activo que quieres recibir; si no es el activo contable, Pendle hace un swap, que puede tener sus costes. El YT vale cero, porque ya no genera rendimiento. Si no canjeas tus PT o LP, su rendimiento y sus puntos pasan a la tesorería de Pendle, y un loop no se cierra solo.",
        },
        {
          question: "¿Cuánto se puede ganar con Pendle?",
          answer:
            "No hay una cifra fiable. El APY que muestra la app es una estimación del mercado que cambia a diario y depende del activo: el 5 de noviembre de 2026, los tres primeros APY fijos de la tarjeta «Highest Fixed Yield» iban del 15 % al 26 %, y un APY alto suele reflejar un activo más arriesgado o con menos liquidez. Con el YT, el resultado depende de si el rendimiento real supera al implícito, y puedes perder todo lo que pagaste.",
        },
        {
          question: "¿Es seguro Pendle? ¿Se puede perder dinero?",
          answer:
            "Sí se puede perder dinero. Los contratos son de código abierto y los han auditado Ackee, Dedaub, Dingbats y participantes de Code4rena, pero una auditoría no elimina el riesgo, y se suman el del activo base, el de las integraciones de terceros, el de la liquidez y el del apalancamiento. En septiembre de 2024, Penpie, un proyecto de terceros construido sobre Pendle, perdió unos 27,3 millones de dólares; Pendle dijo que los fondos depositados en Pendle no se vieron afectados. Empieza con poco capital y con un activo que entiendas.",
        },
        {
          question: "¿Cuánto cobra Pendle?",
          answer:
            "Según su página de comisiones, el 5 % del rendimiento que generan los YT (puntos incluidos) y una comisión por los swaps de PT y YT que escala con el vencimiento y baja al acercarse a él. Canjear el PT tras el vencimiento no tiene comisión de protocolo, solo gas. El 20 % de las comisiones de swap va a los LP; del resto y de las de YT, el 80 % recompra PENDLE, el 10 % va a la tesorería y el 10 % a operaciones.",
        },
        {
          question: "¿Qué es sPENDLE y qué pasó con vePENDLE?",
          answer:
            "sPENDLE es la versión de staking de PENDLE que sustituye a vePENDLE: se obtiene 1:1 al instante, se retira tras 14 días (o al momento con una comisión del 5 %) y recibe el reparto de las recompras de PENDLE si el titular está activo. Según The Block, Pendle lo puso en marcha el 20 de enero de 2026 y empezó a desmontar el sistema de bloqueos de varios años; quienes tenían vePENDLE recibieron sPENDLE virtual, con un multiplicador que decae hasta el vencimiento del bloqueo.",
        },
        {
          question: "¿Qué son Boros y PendleLoop?",
          answer:
            "Boros es una plataforma de Pendle para operar rendimientos con margen, como los tipos de financiación de los perpetuos: es un producto de derivados distinto de PT y YT, y Pendle lo prohíbe a los usuarios de EE. UU. PendleLoop es la sección de la app que automatiza el looping: depositar un activo o un PT en un mercado de préstamos, pedir prestado y volver a comprar para multiplicar el rendimiento, con riesgo de liquidación.",
        },
        {
          question: "¿Puedo usar Pendle desde España o Latinoamérica?",
          answer:
            "Los términos de uso (revisados el 1 de octubre de 2026) enumeran jurisdicciones excluidas, entre ellas Cuba y Venezuela, y remiten a las listas de sanciones y a la lista del GAFI de jurisdicciones de alto riesgo y otras bajo supervisión; además, prohíben Boros en EE. UU. Lee el texto vigente en la documentación y consulta tu situación: esta guía no es asesoramiento legal ni fiscal y no cubre cómo tributan estas operaciones en tu país.",
        },
      ]}
      sources={[
        {
          label: "Pendle: introducción (documentación oficial)",
          href: "https://docs.pendle.finance/pendle-v2/Introduction",
        },
        {
          label: "Pendle: comisiones",
          href: "https://docs.pendle.finance/pendle-v2/ProtocolMechanics/Mechanisms/Fees",
        },
        {
          label: "Pendle: sPENDLE",
          href: "https://docs.pendle.finance/pendle-v2/ProtocolMechanics/Mechanisms/sPENDLE",
        },
        {
          label: "Pendle: PT (principal token)",
          href: "https://docs.pendle.finance/pendle-v2/ProtocolMechanics/YieldTokenization/PT",
        },
        {
          label: "Pendle: SY (Standardized Yield)",
          href: "https://docs.pendle.finance/pendle-v2/ProtocolMechanics/YieldTokenization/SY",
        },
        {
          label: "Pendle: el AMM",
          href: "https://docs.pendle.finance/pendle-v2/ProtocolMechanics/LiquidityEngines/AMM",
        },
        {
          label: "Pendle: glosario (APY implícito, APY subyacente, marca de agua)",
          href: "https://docs.pendle.finance/pendle-v2/ProtocolMechanics/Glossary",
        },
        {
          label: "Pendle: guía de uso de la app",
          href: "https://docs.pendle.finance/pendle-v2/AppGuide/UsingPendle",
        },
        {
          label: "Pendle Academy: hoja de referencia de PT, YT y LP",
          href: "https://docs.pendle.finance/pendle-academy/cheatsheet-for-the-impatient/pt-yt-lp-cheatsheet",
        },
        {
          label: "Pendle Academy: Pendle 101, capítulo 2 (tokenización del rendimiento)",
          href: "https://docs.pendle.finance/pendle-academy/pendle-101/chapter-2-yield-tokenization-basics",
        },
        {
          label: "Pendle Academy: capítulo 3.2 (más rendimiento con liquidez)",
          href: "https://docs.pendle.finance/pendle-academy/optimizing-yields-with-pendle/chapter-3.2-more-yield-via-liquidity-provision",
        },
        {
          label: "Pendle Academy: trading de puntos",
          href: "https://docs.pendle.finance/pendle-academy/ecosystem-and-resources/points-trading",
        },
        {
          label: "Pendle: PT como garantía en un mercado de préstamos",
          href: "https://docs.pendle.finance/pendle-v2-dev/Oracles/PTAsCollateral",
        },
        {
          label: "Pendle: seguridad y auditorías",
          href: "https://docs.pendle.finance/pendle-v2/Security",
        },
        {
          label: "Pendle: informes de auditoría (GitHub)",
          href: "https://github.com/pendle-finance/pendle-core-v2-public/tree/main/audits",
        },
        {
          label: "Pendle: términos de uso (revisados el 1 de octubre de 2026)",
          href: "https://docs.pendle.finance/pendle-v2/TermsOfUse",
        },
        {
          label: "Pendle: app, mercados (consultada el 5 de noviembre de 2026)",
          href: "https://app.pendle.finance/trade/markets",
        },
        {
          label: "Pendle: app, PendleLoop y su guía integrada (consultada el 5 de noviembre de 2026)",
          href: "https://app.pendle.finance/trade/loop",
        },
        {
          label: "DefiLlama: Pendle (TVL, volumen y comisiones)",
          href: "https://defillama.com/protocol/pendle",
        },
        {
          label: "DefiLlama: Boros",
          href: "https://defillama.com/protocol/boros",
        },
        {
          label: "The Block: Pendle retira los bloqueos de vePENDLE y lanza el staking de sPENDLE (20 de enero de 2026)",
          href: "https://www.theblock.co/post/386255/pendle-retires-vependle-multi-year-lockups-as-spendle-staking-goes-live",
        },
        {
          label: "The Block: Pendle dice que evitó 105 millones de pérdidas más en el ataque a Penpie (4 de septiembre de 2024)",
          href: "https://www.theblock.co/news/regulation/2024-09-04-pendle-says-it-saved-105-million-that-could-have-been-further-drained-amid-penpie-hack-314616",
        },
        {
          label: "IPOR Labs: contagio de xUSD y riesgos de segundo orden en los mercados PT (27 de noviembre de 2025)",
          href: "https://ipor-labs.notion.site/xUSD-Contagion-Second-Order-Risks-and-the-PT-Yield-Curve-as-a-Risk-Management-Tool-2a868a3d76da80c2b1b2f6915c429779",
        },
      ]}
      relatedSlugs={[
        "ptyt-el-rendimiento-tokenizado",
        "pt-looping-en-pendle-de-donde-sale",
        "como-funcionan-los-dex-ve33-y-por",
        "como-hedgear-el-impermanent-loss",
        "como-monitorizo-mis-pools-de-hyperevm",
      ]}
    />
  );
}
