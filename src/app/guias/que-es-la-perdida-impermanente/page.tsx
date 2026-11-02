import type { ReactNode } from "react";
import { getPillar } from "../pilares";
import PillarPage, { pillarMetadata } from "../pillar-page";
import {
  B,
  Callout,
  DataTable,
  Formula,
  GlossaryLink,
  GuideLink,
  InternalLink,
  Li,
  Note,
  Ol,
  P,
  Ul,
} from "../pillar-ui";
import IlChart from "./il-chart";

const PILLAR = getPillar("/guias/que-es-la-perdida-impermanente");
const CAMPAIGN = "perdida-impermanente";
const TITLE = "Pérdida impermanente: qué es y cómo calcularla | Secreto Defi";
const DESCRIPTION =
  "Qué es la pérdida impermanente (impermanent loss), cómo se calcula con un ejemplo, cuándo la compensan las comisiones y cómo reducirla. Guía en español.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt: "Qué es la pérdida impermanente | La Agenda de SecretoDefi",
});

const G = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <GuideLink slug={slug} campaign={CAMPAIGN}>
    {children}
  </GuideLink>
);

export default function PerdidaImpermanentePage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Qué es la pérdida impermanente (impermanent loss)"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            La pérdida impermanente (<em>impermanent loss</em> en inglés) es la
            diferencia entre lo que vale tu posición en una pool de liquidez y lo
            que valdrían esos mismos tokens si los hubieras guardado en tu
            cartera. Aparece cuando cambia el precio de los dos tokens de la pool
            el uno respecto al otro, y es el riesgo que más se subestima cuando
            empiezas a aportar liquidez en DeFi.
          </P>
          <P>
            Aquí te explico por qué ocurre, cómo se calcula con un ejemplo con
            números, de qué depende, cuándo las comisiones la compensan y cómo
            reducirla. Al final tienes las guías de La Agenda de SecretoDefi
            donde lo llevo a la práctica, incluida la de cómo cubrirla con un
            corto en perpetuos.
          </P>
        </>
      }
      summary={[
        "Ocurre cuando el precio de los dos tokens de una pool cambia el uno respecto al otro, tanto si uno sube como si baja.",
        "En un AMM clásico, si un token se duplica frente al otro pierdes alrededor de un 5,7 % respecto a haberlos mantenido; si se multiplica por cuatro, un 20 %.",
        "Se llama «impermanente» porque se reduce si el precio vuelve al de entrada, pero se hace real si retiras la liquidez con el precio cambiado.",
        "Las comisiones pueden compensarla o no. En liquidez concentrada, tanto las comisiones como la pérdida se amplifican.",
      ]}
      sections={[
        {
          id: "por-que-ocurre",
          title: "Por qué ocurre",
          children: (
            <>
              <P>
                Cuando aportas liquidez a una pool de un{" "}
                <GlossaryLink id="amm">AMM</GlossaryLink> (market maker
                automático) como Uniswap, depositas dos tokens, por ejemplo ETH y
                USDC, por el mismo valor. La pool no tiene libro de órdenes:
                calcula el precio con una fórmula sobre sus reservas. En el
                modelo clásico, llamado de producto constante, esa fórmula es x ·
                y = k: el producto de las cantidades de los dos tokens se mantiene
                constante.
              </P>
              <P>
                Imagina que ETH sube en el mercado. Dentro de la pool sigue
                «barato», así que los arbitrajistas le compran ETH y le dejan
                USDC hasta que el precio de la pool vuelve a coincidir con el del
                resto de exchanges. Después de la subida, tu parte de la pool
                contiene menos ETH y más USDC que cuando entraste. Si ETH hubiera
                bajado, habría pasado lo contrario: acabarías con más ETH, justo
                el que ha perdido valor.
              </P>
              <P>
                En otras palabras, el AMM va vendiendo el token que sube y
                comprando el que baja. Por eso tu posición queda por debajo de la
                alternativa de no haber depositado nada y mantener los dos tokens
                en la cartera (en inglés, <em>hold</em>; de ahí «holdear»).
              </P>
              <Callout title="Ojo con lo que se compara">
                La pérdida impermanente no mide si ganas o pierdes dinero, sino
                cuánto menos vale tu posición que la alternativa de mantener los
                tokens. Tu posición puede valer más en dólares que cuando entraste
                y aun así valer menos que si hubieras holdeado.
              </Callout>
            </>
          ),
        },
        {
          id: "ejemplo",
          title: "Un ejemplo con números",
          children: (
            <>
              <P>
                Depositas 1 ETH y 2.000 USDC en una pool de producto constante
                cuando 1 ETH vale 2.000 USDC. Tu depósito vale 4.000 USDC.
                Después, el precio de ETH se duplica y pasa a 4.000 USDC.
              </P>
              <P>
                Por arbitraje, la pool se reequilibra manteniendo k = 1 × 2.000 =
                2.000. Con ETH a 4.000 USDC, sus reservas pasan a ser √(2.000 ÷
                4.000) ≈ 0,7071 ETH y √(2.000 × 4.000) ≈ 2.828,4 USDC.
              </P>
              <DataTable
                caption="Mantener los tokens frente a dejarlos en la pool, con ETH a 4.000 USDC"
                head={["", "Mantener (hold)", "En la pool"]}
                rows={[
                  ["ETH", "1", "0,7071"],
                  ["USDC", "2.000", "2.828,4"],
                  ["Valor total", "6.000 USDC", "5.656,9 USDC"],
                ]}
              />
              <P>
                La pool vale 343,1 USDC menos que mantener los tokens, un 5,72 %
                menos. Esa diferencia es la pérdida impermanente, antes de contar
                las comisiones. Fíjate en que tu posición sí ha ganado valor (de
                4.000 a 5.656,9 USDC): has ganado menos de lo que habrías ganado
                sin depositar.
              </P>
              <P>
                La fórmula general, para una pool de producto constante 50/50 sin
                comisiones, usa el cambio del precio relativo entre los dos
                tokens, r (r = 2 si uno se duplica respecto al otro; r = 0,5 si
                se reduce a la mitad):
              </P>
              <Formula>Pérdida impermanente = 2 · √r ÷ (1 + r) − 1</Formula>
              <P>
                El resultado sale negativo porque es una pérdida. Con r = 2 da
                −5,72 %, y con r = 0,5 da exactamente lo mismo: lo que cuenta es
                la distancia entre los dos precios, no la dirección.
              </P>
            </>
          ),
        },
        {
          id: "cuanto-pierdes",
          title: "Cuánto pierdes según cuánto se mueve el precio",
          children: (
            <>
              <DataTable
                caption="Pérdida impermanente frente a mantener los tokens, en una pool de producto constante y sin comisiones"
                head={["Cambio del precio relativo", "Pérdida impermanente"]}
                rows={[
                  ["+25 % (×1,25) o −20 % (×0,8)", "−0,6 %"],
                  ["+50 % (×1,5) o −33 % (×0,67)", "−2,0 %"],
                  ["+100 % (×2) o −50 % (×0,5)", "−5,7 %"],
                  ["+200 % (×3) o −67 % (×0,33)", "−13,4 %"],
                  ["+300 % (×4) o −75 % (×0,25)", "−20,0 %"],
                  ["+400 % (×5) o −80 % (×0,2)", "−25,5 %"],
                  ["+900 % (×10) o −90 % (×0,1)", "−42,5 %"],
                ]}
              />
              <IlChart />
              <P>
                La pérdida crece despacio con los movimientos pequeños y mucho más
                deprisa con los grandes. En un par muy volátil, un cambio de
                precio de varias veces es perfectamente posible, y entonces la
                pérdida impermanente deja de ser un detalle.
              </P>
            </>
          ),
        },
        {
          id: "por-que-impermanente",
          title: "Por qué se llama «impermanente»",
          children: (
            <>
              <P>
                Porque depende del precio actual de los tokens. Si el precio de
                uno respecto al otro vuelve al que tenían cuando entraste, la
                diferencia desaparece: la pool recupera las mismas cantidades de
                cada token y no has perdido nada frente a mantenerlos. Pero si
                retiras la liquidez con el precio cambiado, la pérdida se
                materializa y deja de ser «impermanente».
              </P>
              <P>
                Tampoco hay ninguna garantía de que el precio regrese. Mientras
                esperas, tu capital sigue expuesto a ese riesgo, y en un token que
                nunca recupera su precio relativo la pérdida es, en la práctica,
                permanente.
              </P>
            </>
          ),
        },
        {
          id: "de-que-depende",
          title: "De qué depende",
          children: (
            <Ul>
              <Li>
                <B>Cuánto se mueve el precio relativo.</B> No importa si sube o
                baja: cuenta la distancia entre los dos tokens.
              </Li>
              <Li>
                <B>El tipo de par.</B> En pares que suelen moverse juntos, como
                dos stablecoins o un token y su versión de staking líquido, el
                precio relativo cambia poco y la pérdida es pequeña. En un par
                volátil, como un token nuevo contra USDC, puede ser enorme. Ojo:
                en los pares «estables» el riesgo no desaparece, cambia de forma.
                Si una de las stablecoins pierde su paridad (<em>depeg</em>), la
                pool se llena de la que se ha depreciado.
              </Li>
              <Li>
                <B>La concentración de la liquidez.</B> En liquidez concentrada
                eliges un rango de precios; cuanto más estrecho, mayor es la
                pérdida por cada movimiento del precio (más abajo tienes un
                ejemplo).
              </Li>
              <Li>
                <B>El volumen y el tiempo.</B> Las comisiones que cobras dependen
                del volumen que pasa por la pool mientras tu liquidez está activa.
              </Li>
              <Li>
                <B>Los incentivos.</B> Muchas pools pagan además tokens de
                recompensa. Compensan la pérdida solo mientras ese token mantiene
                su precio.
              </Li>
            </Ul>
          ),
        },
        {
          id: "comisiones",
          title: "¿Las comisiones compensan la pérdida?",
          children: (
            <>
              <P>
                A veces sí y a veces no. Una forma sencilla de ver si aportar
                liquidez te ha salido mejor que mantener los tokens es esta
                cuenta:
              </P>
              <Formula>
                Resultado frente a mantener = comisiones + incentivos − pérdida
                impermanente − costes
              </Formula>
              <P>
                Los costes incluyen el gas, las comisiones de apertura o cierre y
                el slippage cada vez que entras, sales o reequilibras. Si el
                resultado es positivo, aportar liquidez te ha salido mejor que
                mantener; si es negativo, no.
              </P>
              <P>
                No hay una regla general. Un estudio de 2021 de Loesch, Hindman,
                Richardson y Welch sobre 17 pools de Uniswap v3 (en torno al 43 %
                de su TVL) estimó 199,3 millones de dólares en comisiones frente
                a 260,1 millones en pérdida impermanente: en conjunto, esos
                proveedores de liquidez quedaron 60,8 millones por debajo de
                haber mantenido sus activos. Son datos de un momento y de unas
                pools concretas, pero ilustran que cobrar comisiones no equivale a
                salir ganando.
              </P>
            </>
          ),
        },
        {
          id: "liquidez-concentrada",
          title: "Pérdida impermanente en liquidez concentrada",
          children: (
            <>
              <P>
                En un AMM clásico tu capital cubre todos los precios posibles. En
                la <GlossaryLink id="liquidez-concentrada">liquidez concentrada</GlossaryLink>{" "}
                (Uniswap v3 y sus sucesores, el DLMM de Meteora, los CLMM de otros
                DEX) lo colocas en un rango de precios. Mientras el precio esté
                dentro, el mismo capital respalda más liquidez y cobra más
                comisiones. A cambio, la pérdida por cada movimiento del precio
                también es mayor, y si el precio sale del rango tu posición se
                queda entera en uno de los dos tokens y deja de cobrar
                comisiones.
              </P>
              <P>
                Un ejemplo: con un rango del ±10 % alrededor del precio de
                entrada, si el precio sube un 10 % y llega al borde superior, la
                pérdida frente a mantener es de alrededor del 2,3 %. En una pool
                de rango completo, ese mismo movimiento supone un 0,1 %. En la guía
                de{" "}
                <InternalLink href="/guias/yield-farming-y-liquidez-concentrada#liquidez-concentrada">
                  yield farming y liquidez concentrada
                </InternalLink>{" "}
                tienes más rangos comparados y, para ver en qué se diferencian los
                modelos y cómo se gestionan posiciones reales,{" "}
                <G slug="masterclass-amms-vs-clmms-vs-dlmms">
                  la masterclass sobre AMMs, CLMMs y DLMMs
                </G>
                .
              </P>
              <Note>
                Cálculo propio con la fórmula de liquidez de Uniswap v3, para una
                posición abierta en el centro del rango y antes de comisiones.
              </Note>
            </>
          ),
        },
        {
          id: "reducir",
          title: "Cómo reducirla o gestionarla",
          children: (
            <Ol>
              <Li>
                <B>Elige el par con criterio.</B> Los pares correlacionados
                (stablecoin con stablecoin, ETH con su versión de staking
                líquido) reducen la pérdida, aunque añaden el riesgo de que uno
                pierda la paridad.
              </Li>
              <Li>
                <B>Ajusta el rango a lo que vas a vigilar.</B> Si usas liquidez
                concentrada, un rango más ancho cobra menos comisiones por dólar,
                pero sufre menos pérdida y se sale menos veces del rango.
              </Li>
              <Li>
                <B>Mira el rendimiento real, no el APR de 24 horas.</B> Un APR
                calculado con el día anterior puede estar inflado. En{" "}
                <G slug="actualizaciones-importantes-en-meteora">esta guía</G>{" "}
                enseño un caso en el que un 654 % de APR a 24 horas se quedaba en
                un 7 % en las últimas 4 horas.
              </Li>
              <Li>
                <B>Compara siempre contra mantener.</B> Anota con qué valor
                entraste y compara cada cierto tiempo el valor de la posición más
                las comisiones cobradas con lo que valdrían los tokens guardados.
                En <G slug="como-monitorizo-mis-pools-de-hyperevm">esta guía</G>{" "}
                explico las seis métricas que uso.
              </Li>
              <Li>
                <B>Cúbrela con un corto en perpetuos.</B> Abrir una posición corta
                en el perpetuo del token volátil reduce buena parte de tu
                exposición al precio (estrategia delta-neutral). No es gratis:
                pagas o cobras <GlossaryLink id="funding-rate">funding</GlossaryLink>,
                tienes que reajustar la cobertura cuando el precio se mueve y una
                posición corta apalancada puede{" "}
                <GlossaryLink id="liquidacion">liquidarse</GlossaryLink>. En{" "}
                <G slug="como-hedgear-el-impermanent-loss">
                  mi guía sobre cómo hedgear el impermanent loss
                </G>{" "}
                explico cómo se monta y cuándo no compensa.
              </Li>
              <Li>
                <B>Simula antes de entrar.</B> Las calculadoras y el backtesting
                de la estrategia te dejan ver escenarios sin arriesgar capital. Los
                recomiendo en{" "}
                <G slug="10-herramientas-necesaria-para-tu">mi lista de herramientas</G>.
              </Li>
              <Li>
                <B>Revisa los contratos.</B> En Uniswap v4, un{" "}
                <GlossaryLink id="hook-uniswap-v4">hook</GlossaryLink> puede
                cambiar las comisiones de una pool. Entiende qué hace antes de
                depositar:{" "}
                <G slug="uniswap-v4-y-los-hooks-el-super-poder">
                  te lo explico aquí
                </G>
                .
              </Li>
            </Ol>
          ),
        },
        {
          id: "mitos",
          title: "Cuatro ideas que conviene corregir",
          children: (
            <Ul>
              <Li>
                <B>«Si no retiro, no pierdo.»</B> La diferencia con mantener
                existe mientras el precio esté cambiado, aunque no retires. Lo que
                cambia al retirar es que deja de poder revertirse.
              </Li>
              <Li>
                <B>«En un par de stablecoins no hay riesgo.»</B> La pérdida
                impermanente es mínima mientras las dos mantengan la paridad,
                pero si una pierde el anclaje la pool acumula la más débil.
              </Li>
              <Li>
                <B>«Un APY alto lo compensa todo.»</B> El{" "}
                <GlossaryLink id="apr-y-apy">APY</GlossaryLink> se calcula con
                datos recientes y, si viene de tokens de incentivo, depende de que
                ese token mantenga su precio. Lo explico en la guía sobre{" "}
                <G slug="como-funcionan-los-dex-ve33-y-por">los DEX ve(3,3)</G>.
              </Li>
              <Li>
                <B>«Solo pasa en Uniswap.»</B> Aparece en cualquier pool que
                reequilibre dos activos cuyo precio varía entre sí, incluidas las
                de Meteora y las de cualquier otro AMM.
              </Li>
            </Ul>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es la pérdida impermanente en palabras sencillas?",
          answer:
            "Es lo que dejas de ganar, o lo que pierdes, por haber puesto dos tokens en una pool en lugar de guardarlos en tu cartera, cuando el precio de uno cambia respecto al del otro.",
        },
        {
          question: "¿Cómo se calcula la pérdida impermanente?",
          answer:
            "En una pool de producto constante 50/50 se calcula con la fórmula 2 · √r ÷ (1 + r) − 1, donde r es el cambio del precio relativo entre los dos tokens. En la tabla de arriba tienes los valores más habituales. En liquidez concentrada el cálculo depende del rango, así que conviene usar una calculadora que admita rangos.",
        },
        {
          question: "¿Se puede evitar la pérdida impermanente?",
          answer:
            "Del todo, no, mientras aportes liquidez a un par cuyo precio relativo cambia. Se puede reducir (con pares correlacionados o rangos más amplios) y cubrir en parte (por ejemplo, con un corto en perpetuos), siempre con sus costes y sus riesgos.",
        },
        {
          question: "¿Hay pérdida impermanente al prestar o hacer staking?",
          answer:
            "No en el sentido de una pool de dos tokens: si depositas un solo activo en un mercado de préstamos o lo bloqueas en staking, no hay un reequilibrio entre dos precios. Tienes otros riesgos, como los fallos del contrato o la pérdida de paridad de un token de staking líquido.",
        },
        {
          question: "¿Las comisiones siempre compensan la pérdida?",
          answer:
            "No. Depende del volumen, de la comisión de la pool, del rango y de cuánto se mueva el precio. Compara siempre el valor de tu posición más las comisiones cobradas con lo que valdrían los tokens guardados.",
        },
      ]}
      sources={[
        {
          label:
            "Loesch, Hindman, Richardson y Welch: «Impermanent Loss in Uniswap v3» (arXiv, 2021)",
          href: "https://arxiv.org/abs/2111.09192",
        },
      ]}
      relatedSlugs={[
        "como-hedgear-el-impermanent-loss",
        "como-monitorizo-mis-pools-de-hyperevm",
        "masterclass-amms-vs-clmms-vs-dlmms",
        "actualizaciones-importantes-en-meteora",
        "uniswap-v4-y-los-hooks-el-super-poder",
        "10-herramientas-necesaria-para-tu",
      ]}
    />
  );
}
