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

const PILLAR = getPillar("/guias/perp-dex-y-farmeo-de-puntos");
const CAMPAIGN = "perp-dex";
const TITLE = "Perp DEX y farmeo de puntos: guía para empezar | Secreto Defi";
const DESCRIPTION =
  "Qué es un perp DEX, cómo funcionan los programas de puntos, cuánto cuesta farmearlos y qué riesgos tienen. Guía en español con un caso real.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt: "Perp DEX y farmeo de puntos | La Agenda de SecretoDefi",
});

const G = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <GuideLink slug={slug} campaign={CAMPAIGN}>
    {children}
  </GuideLink>
);

export default function PerpDexPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Perp DEX y farmeo de puntos: guía para empezar"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            Un perp DEX es un exchange descentralizado de futuros perpetuos:
            operas con apalancamiento y sin que una empresa custodie tus fondos.
            Muchos de los nuevos todavía no tienen token y reparten puntos a quien
            los usa, con la expectativa (nunca la garantía) de un airdrop. Farmear
            puntos es operar en ellos para acumularlos.
          </P>
          <P>
            En esta página te explico cómo funcionan los perpetuos y los
            programas de puntos, cómo suelen puntuar, qué estrategias se usan y
            qué costes y riesgos tienen. Incluyo mis números reales de un caso en
            el que 1,65 millones de dólares de volumen dieron apenas 195 puntos,
            porque es la mejor forma de entender que más volumen no significa más
            puntos.
          </P>
        </>
      }
      summary={[
        "Un perpetuo es un contrato sin vencimiento que sigue el precio de un activo; el funding (pagos periódicos entre largos y cortos) lo mantiene cerca del precio real.",
        "Los puntos son una contabilidad interna del proyecto: no son un token ni una promesa. El proyecto decide si, cuándo y cómo se convierten.",
        "Algunos programas, como Ignite de RiseX, premian la actividad genuina (comisiones y slippage asumidos, interés abierto, tiempo en posición) más que el volumen bruto.",
        "Cada punto cuesta comisiones, slippage, funding y capital inmovilizado. Calcula el coste por punto y no arriesgues lo que no puedas perder.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es un perpetuo y qué es un perp DEX",
          children: (
            <>
              <P>
                Un perpetuo (<em>perp</em>) es un contrato de futuros sin fecha de
                vencimiento que replica el precio de un activo. Depositas
                colateral (el margen) y abres una posición larga, si crees que el
                precio sube, o corta, si crees que baja, normalmente con{" "}
                <GlossaryLink id="apalancamiento">apalancamiento</GlossaryLink>.
                Un <GlossaryLink id="perp-dex">perp DEX</GlossaryLink> es un
                exchange descentralizado que ofrece estos mercados: operas desde
                tu cartera, sin abrir una cuenta en una empresa que custodie tus
                fondos.
              </P>
              <P>Tres mecanismos que conviene entender antes de operar:</P>
              <Ul>
                <Li>
                  <B>Funding.</B> Para que el precio del perpetuo no se separe del
                  precio del activo, largos y cortos se pagan entre sí de forma
                  periódica. Si el contrato cotiza por encima del precio de
                  referencia, la tasa es positiva y pagan los largos a los
                  cortos; si cotiza por debajo, al revés. En Hyperliquid se paga
                  cada hora (la tasa se calcula a 8 horas y cada pago es una
                  octava parte) y tiene un tope del 4 % por hora; otras
                  plataformas usan intervalos distintos. Más en el{" "}
                  <GlossaryLink id="funding-rate">glosario</GlossaryLink>.
                </Li>
                <Li>
                  <B>Margen y liquidación.</B> Si las pérdidas consumen el
                  margen, la plataforma cierra tu posición. Cuanto mayor es el
                  apalancamiento, más cerca está el precio de{" "}
                  <GlossaryLink id="liquidacion">liquidación</GlossaryLink>.
                </Li>
                <Li>
                  <B>Libro de órdenes o fondo de liquidez.</B> Algunas
                  plataformas casan órdenes en un libro, como Hyperliquid; otras
                  usan un fondo de liquidez como contraparte. Cambian la
                  profundidad, el slippage y quién asume el riesgo.
                </Li>
              </Ul>
              <P>
                Frente a un exchange centralizado ganas autocustodia y
                transparencia; a cambio asumes riesgo de contrato y de oráculo y,
                en las plataformas nuevas, de poca liquidez. Los perpetuos
                también sirven para cubrir otras posiciones: un corto puede
                neutralizar la exposición al precio de una posición de liquidez,
                como explico en la guía sobre{" "}
                <InternalLink href="/guias/que-es-la-perdida-impermanente#reducir">
                  la pérdida impermanente
                </InternalLink>
                .
              </P>
            </>
          ),
        },
        {
          id: "puntos",
          title: "Cómo funcionan los programas de puntos",
          children: (
            <>
              <P>
                Muchos perp DEX nuevos no tienen token. Para atraer usuarios y
                liquidez, llevan una contabilidad de puntos: sumas puntos por
                operar, aportar liquidez, invitar a otros o completar misiones,
                normalmente por temporadas (<em>seasons</em>) o por épocas
                semanales. Los puntos son una cifra en la web del proyecto, no un
                token en tu cartera.
              </P>
              <P>
                Lo que no son: ni un token, ni una promesa de pago, ni tienen un
                valor fijado. Lo que valga cada punto se sabrá el día que el
                proyecto decida convertirlos, si lo hace, y dependerá de cuántos
                tokens reparta, de cuánta gente participe y del precio que tenga
                el token.
              </P>
              <P>
                Hay precedentes. Hyperliquid fue acumulando puntos durante meses
                y, el 29 de noviembre de 2024, repartió el 31 % de la oferta total
                de HYPE entre usuarios de la comunidad. Lighter hizo varias
                temporadas de puntos y, al lanzar su token LIT el 30 de diciembre
                de 2025, repartió el 25 % de la oferta entre quienes habían
                participado en las dos primeras temporadas de 2025, y en julio de
                2026 seguía con una tercera temporada de puntos. Pero cada
                programa pone sus reglas: que esos casos salieran así no
                significa que el siguiente vaya a hacerlo. Es el mismo modelo que
                describo en la guía de{" "}
                <InternalLink href="/guias/que-es-un-airdrop#tipos">
                  qué es un airdrop
                </InternalLink>
                .
              </P>
              <P>
                Cómo se puntúa lo decide cada proyecto, y casi ninguno publica la
                fórmula exacta para que no se pueda explotar. Lo habitual es
                combinar volumen, comisiones pagadas, interés abierto (el tamaño
                de las posiciones que mantienes abiertas), tiempo en posición,
                liquidez aportada, referidos y misiones. RiseX, por ejemplo, dice
                que su programa Ignite puntúa cinco cosas: la actividad de orden
                superior, los costes totales asumidos (comisiones, slippage y{" "}
                <em>negative markouts</em>), el volumen, el interés abierto junto
                con el tiempo de posición y la contribución general a la salud
                del ecosistema.
              </P>
              <Callout title="Lee las reglas oficiales">
                Los proyectos filtran las cuentas múltiples (
                <GlossaryLink id="sybil">sybil</GlossaryLink>) y el wash trading,
                que consiste en operar contra ti mismo para inflar el volumen.
                Antes de empezar, lee qué puntúa y qué está prohibido en el
                programa: incumplirlo puede costarte todos tus puntos.
              </Callout>
            </>
          ),
        },
        {
          id: "caso-risex",
          title: "Un caso real: más volumen no dio más puntos",
          children: (
            <>
              <P>
                Con un bot de market making generé 1,65 millones de dólares de
                volumen bruto en RiseX. El programa contabilizó como volumen
                ponderado 675.431 $, menos de la mitad, y en el primer reparto de
                la Season 1 de Ignite me dio 195 puntos. Mi coste por punto de la
                semana anterior había sido de unos 2,3 $.
              </P>
              <P>
                Mi lectura, porque RiseX no publica la metodología exacta, es que
                mi bot generaba justo el volumen que el programa descuenta:
                capturaba el spread con órdenes de maker, sin asumir slippage,
                sin mantener posiciones abiertas y sin construir interés abierto.
                Es lo contrario de lo que, según RiseX, premia su programa.
              </P>
              <P>
                Si lo que puntúa es tamaño real, aguantar la posición y asumir
                algo de slippage, la estrategia no es generar volumen barato, sino
                tomar tamaño y sostenerlo sin quedar expuesto a la dirección del
                mercado. Eso es una estrategia delta neutral: una pata en RiseX,
                que acumula tamaño, interés abierto y algo de slippage, y una pata
                contraria en otro exchange para que el delta neto sea cero.
              </P>
              <P>
                La configuración que monté para el primer test, a tamaño mínimo:
                un corto de 50 $ nocionales en ETH con apalancamiento 3x en RiseX
                y un largo equivalente en TxFlow, ambos durante 24 horas. La
                ventaja que busco no es el funding, que a ese tamaño son
                céntimos, sino los puntos; el funding solo hace de «seguro» para
                que la posición sea neutral.
              </P>
              <Ul>
                <Li>
                  El volumen bruto vale poco si el programa no lo puntúa: mira el
                  volumen ponderado que te acreditan, no el número grande.
                </Li>
                <Li>
                  Mantener una posición durante horas puede valer más que cientos
                  de microoperaciones.
                </Li>
                <Li>
                  Un bot rentable no es lo mismo que un farmeo eficiente en
                  puntos: la semana siguiente mi bot pasó a un coste por punto
                  casi nulo y aun así seguía dando pocos puntos.
                </Li>
              </Ul>
              <P>
                Tienes los números completos y la configuración en{" "}
                <G slug="genere-16m-de-volumen-en-risex-para">
                  Generé $1,6M de volumen en RiseX para solo 195 puntos
                </G>
                .
              </P>
              <Note>
                Datos a 10 de agosto de 2026, fecha del post. Es un caso personal
                con capital que puedo permitirme perder, no una recomendación.
                Ignite reparte 200.000 puntos a la semana y terminará, como muy
                tarde, en el segundo trimestre de 2027, pero el token y su
                valoración no están confirmados. En el post cuento la
                configuración del primer test delta neutral, no sus resultados.
              </Note>
            </>
          ),
        },
        {
          id: "estrategias",
          title: "Estrategias habituales y lo que cuestan",
          children: (
            <>
              <DataTable
                caption="Resumen genérico: cada programa tiene sus propias reglas de puntuación"
                head={[
                  "Estrategia",
                  "Qué haces",
                  "Qué suele puntuar",
                  "Costes y riesgos",
                ]}
                rows={[
                  [
                    "Trading manual en pequeño",
                    "Operas tú, con poco apalancamiento y tamaños pequeños.",
                    "Volumen y comisiones pagadas.",
                    "Pérdidas de trading y comisiones; riesgo de dirección del precio.",
                  ],
                  [
                    "Market making con bots",
                    "Colocas órdenes límite a ambos lados y capturas el spread.",
                    "Volumen, aunque algunos programas lo ponderan o lo penalizan.",
                    "Riesgo de ejecución y de inventario; el volumen «barato» puede puntuar poco.",
                  ],
                  [
                    "Delta neutral entre dos plataformas",
                    "Abres una posición larga en una y una corta en otra, con el mismo tamaño.",
                    "Interés abierto, tiempo en posición y volumen.",
                    "Diferencia de funding, ejecución asimétrica, doble comisión y liquidación de una de las dos patas.",
                  ],
                  [
                    "Aportar liquidez o usar vaults",
                    "Depositas en un fondo de la plataforma que actúa de contraparte o de market maker.",
                    "Liquidez aportada y tiempo.",
                    "Pérdidas del fondo, bloqueos de retirada y riesgo de contrato.",
                  ],
                  [
                    "Misiones y referidos",
                    "Completas tareas o invitas a otras personas.",
                    "Puntos por tarea o por referido.",
                    "Poca ventaja sostenible y riesgo de phishing en enlaces de «misiones».",
                  ],
                ]}
              />
              <P>
                Ninguna estrategia es gratis, y cuál te conviene depende de tu
                capital, tu tiempo y cuánto riesgo asumes. Si lo que buscas es
                rendimiento y no puntos, tienes la guía de{" "}
                <InternalLink href="/guias/yield-farming-y-liquidez-concentrada">
                  yield farming y liquidez concentrada
                </InternalLink>
                .
              </P>
              <P>
                Mi experiencia con el market making con bots, con su
                configuración y resultados reales, está en{" "}
                <G slug="como-genere-14-millones-de-dolares">
                  la guía del bot de TreadFi en RiseX
                </G>
                , y cómo elegir el par y vigilar el coste con agentes de IA, en{" "}
                <G slug="los-agents-de-treadfi-como-elegir">
                  la guía de los Agents de TreadFi
                </G>
                .
              </P>
            </>
          ),
        },
        {
          id: "coste",
          title: "Cuánto cuesta un punto",
          children: (
            <>
              <P>
                Para decidir si compensa, calcula el coste por punto: todo lo que
                te ha costado conseguirlos dividido entre los puntos obtenidos.
              </P>
              <Formula>
                Coste por punto = (comisiones + slippage + funding neto +
                resultado de las operaciones + coste del capital inmovilizado) ÷
                puntos
              </Formula>
              <P>
                Mídelo cada semana con los mismos conceptos para poder comparar
                estrategias. En mi caso con RiseX, el bot tuvo un coste de unos
                2,3 $ por punto una semana y casi nulo la siguiente, pero seguía
                dando pocos puntos: lo barato no era lo eficiente.
              </P>
              <P>
                Y recuerda que el valor del punto es desconocido: cualquier coste
                por punto asume un valor que aún no existe. Lo que haces es apostar
                a que cada punto valdrá más de lo que te ha costado, o a no
                perder más de lo que estás dispuesto a asumir.
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
                <B>Puntos no es lo mismo que token.</B> El proyecto puede cambiar
                las reglas, recortar la recompensa, repartir menos de lo esperado
                o no repartir.
              </Li>
              <Li>
                <B>Liquidación y apalancamiento.</B> Con apalancamiento, un
                movimiento brusco del precio puede liquidar tu posición. En una
                estrategia delta neutral, cada pata se puede liquidar por
                separado si el precio se mueve mucho y no reequilibras.
              </Li>
              <Li>
                <B>Funding que se da la vuelta.</B> Lo que cobrabas hoy puede ser
                un pago mañana. En plataformas con pagos cada hora, como
                Hyperliquid o RiseX, una posición de 24 horas pasa por 24 ciclos
                de funding.
              </Li>
              <Li>
                <B>Ejecución y liquidez fina.</B> Si una pata de la cobertura
                entra a peor precio que la otra, se cuela una pérdida pequeña. Y
                en plataformas nuevas, con poca liquidez, el slippage puede dejar
                de ser un coste de farmeo y convertirse en una pérdida real. Por
                eso conviene empezar con tamaños mínimos.
              </Li>
              <Li>
                <B>Riesgo de contrato, de oráculo y de plataforma.</B> Un fallo
                técnico, un precio erróneo o un ataque pueden costarte fondos. En
                las plataformas nuevas hay menos historial.
              </Li>
              <Li>
                <B>Reglas y filtros.</B> El wash trading y las cuentas múltiples
                pueden descalificarte. Algunos programas funcionan por invitación
                o limitan los países desde los que se puede participar.
              </Li>
              <Li>
                <B>Incentivos con fecha de caducidad.</B> Las campañas dejan de
                pagar cuando se agota su bolsa de incentivos: posicionarte tarde
                puede no compensar. Lo cuento en{" "}
                <G slug="robinhood-te-paga-lit-por-operar">
                  esta guía sobre los incentivos de $LIT en Robinhood
                </G>
                .
              </Li>
              <Li>
                <B>Phishing.</B> Los falsos «reclamos», las aplicaciones falsas y
                las aprobaciones que no entiendes son la forma más habitual de
                perder fondos. Repasa las{" "}
                <InternalLink href="/guias/que-es-un-airdrop#seguridad">
                  normas básicas de seguridad
                </InternalLink>
                .
              </Li>
              <Li>
                <B>Impuestos.</B> Operar genera ganancias y pérdidas que pueden
                tributar según tu país. Guarda un registro y consulta a un asesor
                fiscal.
              </Li>
            </Ul>
          ),
        },
        {
          id: "evaluar",
          title: "Cómo evaluar un perp DEX antes de farmear",
          children: (
            <>
              <P>
                Estos son los cinco criterios con los que puntúo cada plataforma
                en mi{" "}
                <G slug="tier-list-de-perp-dexs-donde-farmeo">
                  tier list de perp DEX
                </G>
                :
              </P>
              <Ol>
                <Li>
                  <B>Liquidez y profundidad:</B> cuánto puedes mover sin comerte
                  el slippage.
                </Li>
                <Li>
                  <B>Comisiones y experiencia de uso:</B> comisiones competitivas
                  y una interfaz que no estorbe.
                </Li>
                <Li>
                  <B>Potencial de airdrop:</B> si todavía no hay token, el valor
                  potencial es mayor, y también la incertidumbre.
                </Li>
                <Li>
                  <B>Seguridad y autocustodia:</B> tú firmas y tú custodias;
                  historial del equipo y auditorías.
                </Li>
                <Li>
                  <B>Madurez del proyecto:</B> mainnet en vivo, testnet o fase de
                  whitelist.
                </Li>
              </Ol>
              <P>
                Al evaluar un programa de puntos conviene mirar además si publica
                sus reglas: qué puntúa, qué está prohibido y cuándo termina. Mi
                planteamiento general, que desarrollo en la tier list, es operar
                donde ya hay liquidez, farmear con cabeza donde todavía no hay
                token y vigilar lo temprano sin obsesionarse.
              </P>
            </>
          ),
        },
        {
          id: "empezar",
          title: "Cómo empezar paso a paso",
          children: (
            <Ol>
              <Li>
                <B>Elige la plataforma.</B> Puntúa la liquidez, las comisiones, el
                potencial de airdrop, la seguridad y la madurez con los criterios
                de arriba.
              </Li>
              <Li>
                <B>Lee las reglas oficiales del programa.</B> Qué puntúa, qué
                está prohibido, qué restricciones hay y cuándo termina.
              </Li>
              <Li>
                <B>Usa una cartera dedicada</B> y capital que puedas permitirte
                perder. Entra siempre desde los enlaces de la cuenta oficial.
              </Li>
              <Li>
                <B>Haz una prueba pequeña.</B> Deposita poco y cierra una
                posición de prueba para comprobar cómo se acreditan las
                comisiones y los puntos.
              </Li>
              <Li>
                <B>Opera con poco apalancamiento</B> durante las primeras semanas
                y observa cómo cuenta el programa: volumen bruto o ponderado,
                interés abierto, tiempo en posición.
              </Li>
              <Li>
                <B>Calcula el coste por punto cada semana</B> y apúntalo.
              </Li>
              <Li>
                <B>Pon un tope.</B> Decide cuánto estás dispuesto a gastar y
                cuánto tiempo vas a dedicar antes de ajustar la estrategia o
                abandonar.
              </Li>
              <Li>
                <B>Cuando llegue el token, reclama solo desde canales
                oficiales.</B> Los falsos reclamos son la estafa más habitual.
              </Li>
            </Ol>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es un perp DEX?",
          answer:
            "Un exchange descentralizado de futuros perpetuos: contratos sin vencimiento que replican el precio de un activo, con apalancamiento y una tasa de financiación (funding) que los mantiene cerca del precio real. Operas desde tu cartera, sin que una empresa custodie tus fondos.",
        },
        {
          question:
            "¿Qué diferencia hay entre farmear puntos y un airdrop retroactivo?",
          answer: (
            <>
              En un airdrop retroactivo el proyecto no avisa: lanza el token y
              premia a quien usó el producto antes. En un programa de puntos el
              proyecto anuncia que contabiliza tu actividad y deja entender que
              habrá recompensa, pero sin comprometerse. En ambos casos no hay
              garantía; los tipos de airdrop los tienes en la guía de{" "}
              <InternalLink href="/guias/que-es-un-airdrop#tipos">
                qué es un airdrop
              </InternalLink>
              .
            </>
          ),
        },
        {
          question: "¿Acumular puntos garantiza un token?",
          answer:
            "No. Los puntos son una contabilidad del proyecto, no un token ni una promesa. El proyecto decide si los convierte, cuándo y a qué ritmo.",
        },
        {
          question: "¿Cuánto dinero hace falta para empezar?",
          answer:
            "Depende de la plataforma y de la estrategia. Para comprobar cómo puntúa un programa basta con tamaños pequeños: la configuración de mi primer test delta neutral fue de 50 $ nocionales por pata. Empieza por lo que puedas permitirte perder.",
        },
        {
          question: "¿Se puede perder dinero farmeando puntos?",
          answer:
            "Sí: por comisiones, slippage, funding en contra, liquidaciones, fallos de la plataforma o estafas, y porque el valor de los puntos es desconocido. Participar no garantiza ninguna recompensa.",
        },
        {
          question: "¿Qué es el wash trading y por qué es un problema?",
          answer:
            "Es operar contra ti mismo, por ejemplo entre cuentas propias, para inflar el volumen. Los programas lo filtran y pueden descalificarte, así que conviene leer las reglas antes de diseñar cualquier estrategia.",
        },
      ]}
      sources={[
        {
          label: "Hyperliquid: documentación sobre el funding",
          href: "https://hyperliquid.gitbook.io/hyperliquid-docs/trading/funding",
        },
        {
          label: "The Block: el reparto de HYPE de Hyperliquid (29 de noviembre de 2024)",
          href: "https://www.theblock.co/post/328769/hyperliquid-airdrops-over-1-2-billion-worth-of-tokens-to-users-as-hype-crosses-4-billion-fdv",
        },
        {
          label: "The Block: Lighter lanza el token LIT (30 de diciembre de 2025)",
          href: "https://www.theblock.co/post/383940/lighter-native-token-lit",
        },
      ]}
      relatedSlugs={[
        "tier-list-de-perp-dexs-donde-farmeo",
        "genere-16m-de-volumen-en-risex-para",
        "como-genere-14-millones-de-dolares",
        "los-agents-de-treadfi-como-elegir",
        "robinhood-te-paga-lit-por-operar",
        "primeros-pasos-en-robinhood-chain",
        "hip-3-de-hyperliquid-creacion-de",
        "txflow-la-l1-que-no-quiere-que-construyas",
      ]}
    />
  );
}
