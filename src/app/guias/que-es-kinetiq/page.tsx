import { getPillar } from "../pilares";
import PillarPage, { pillarMetadata } from "../pillar-page";
import {
  B,
  Callout,
  DataTable,
  ExternalLink,
  Formula,
  GlossaryLink,
  H3,
  InternalLink,
  Li,
  Note,
  Ol,
  P,
  Ul,
} from "../pillar-ui";

const PILLAR = getPillar("/guias/que-es-kinetiq");
const CAMPAIGN = "kinetiq";
const TITLE = "Qué es Kinetiq: kHYPE y staking líquido de HYPE | Secreto Defi";
const DESCRIPTION =
  "Qué es Kinetiq, cómo funciona kHYPE y el staking líquido de HYPE en Hyperliquid, cuánto cuesta, cómo salir, qué son KNTQ y Elysium y qué riesgos tiene.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt:
    "Qué es Kinetiq: kHYPE y staking líquido de HYPE | La Agenda de SecretoDefi",
});

const DOCS = "https://kinetiq.xyz/docs";
const BLOG = "https://kinetiq.xyz/blog";
const HL_DOCS = "https://hyperliquid.gitbook.io/hyperliquid-docs";

export default function KinetiqPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Qué es Kinetiq y cómo funciona kHYPE, el staking líquido de HYPE"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            Kinetiq es un protocolo de{" "}
            <GlossaryLink id="staking-liquido">staking líquido</GlossaryLink>{" "}
            construido sobre{" "}
            <InternalLink href="/guias/que-es-hyperliquid">
              Hyperliquid
            </InternalLink>
            . Depositas HYPE, el protocolo lo delega en validadores de la red y
            tú recibes kHYPE, un token que representa ese HYPE en staking y que
            puedes seguir usando en DeFi mientras acumula recompensas.
          </P>
          <P>
            En esta página te explico cómo funciona kHYPE, de dónde sale su
            rendimiento, cuánto se queda el protocolo, cómo se sale y cuánto
            tarda, qué otros productos hay alrededor (Earn, Markets, Launch y la
            capa 2 Elysium), para qué sirve el token KNTQ y qué riesgos asumes.
            Está escrita con la documentación oficial y fuentes citadas, y las
            cifras que cambian a menudo llevan su fecha de consulta.
          </P>
        </>
      }
      summary={[
        "Kinetiq es un protocolo de staking líquido de Hyperliquid: depositas HYPE y recibes kHYPE, un token que puedes usar en DeFi mientras tu HYPE sigue en staking. El protocolo reparte ese HYPE entre validadores con un sistema propio llamado StakeHub.",
        "kHYPE no aumenta en cantidad: lo que sube es su tipo de cambio frente a HYPE. El 11 de noviembre de 2026 la web de Kinetiq mostraba 1 HYPE = 0,973 kHYPE y un APY del 1,93 %, una cifra que varía.",
        "Según la documentación, el protocolo se queda con el 10 % de las recompensas de staking. De esa comisión, el 70 % se destina a comprar KNTQ en el mercado y el 30 % va a la tesorería.",
        "Para salir tienes dos caminos: retirar desde el contrato, que tarda entre 8 y 9 días y no se puede cancelar, o vender kHYPE en un mercado al instante, asumiendo el precio y el slippage de ese momento.",
        "kHYPE añade riesgos que el staking nativo no tiene: el de los contratos de Kinetiq, el de que kHYPE cotice por debajo de su valor en HYPE y el de cada protocolo donde lo uses. Y sigues expuesto al precio de HYPE.",
      ]}
      sections={[
        {
          id: "que-es",
          title: "Qué es Kinetiq y qué problema resuelve",
          children: (
            <>
              <P>
                En Hyperliquid, el{" "}
                <GlossaryLink id="staking">staking</GlossaryLink> de HYPE se
                hace dentro de HyperCore. Según la documentación de Hyperliquid,
                cada delegación a un validador queda bloqueada 1 día y sacar el
                HYPE de la cuenta de staking a la cuenta spot tiene una cola de 7
                días. Mientras está en staking, ese HYPE no se puede usar como
                garantía ni aportar a una pool.
              </P>
              <P>
                El staking líquido resuelve esa inmovilización. Kinetiq recibe tu
                HYPE en HyperEVM, lo delega en validadores y te entrega kHYPE, un
                token ERC-20 que representa tu parte del HYPE en staking. Puedes
                guardarlo, venderlo, usarlo como garantía en un protocolo de
                préstamos o aportarlo a una pool, y mientras tanto sigue
                acumulando las recompensas de staking.
              </P>
              <DataTable
                caption="Staking nativo de HYPE frente a staking líquido con Kinetiq (documentación de Hyperliquid y de Kinetiq, consultadas el 11 de noviembre de 2026)."
                head={["", "Staking nativo", "kHYPE (Kinetiq)"]}
                rows={[
                  [
                    "Qué tienes",
                    "HYPE delegado en tu cuenta de staking de HyperCore.",
                    "kHYPE, un token ERC-20 en HyperEVM.",
                  ],
                  [
                    "Quién elige validador",
                    "Tú.",
                    "El protocolo, con StakeHub. No puedes elegir.",
                  ],
                  [
                    "Uso en DeFi",
                    "Ninguno mientras está en staking.",
                    "Garantía, pools de liquidez o venta.",
                  ],
                  [
                    "Comisión del protocolo",
                    "Ninguna, aparte de la comisión del validador.",
                    "10 % de las recompensas de staking.",
                  ],
                  [
                    "Salida",
                    "1 día de bloqueo de la delegación y 7 días de cola.",
                    "Retiro en 8 o 9 días, o venta inmediata en un mercado.",
                  ],
                  [
                    "Riesgos añadidos",
                    "Los del validador y la red.",
                    "Además, los contratos de Kinetiq y el precio de kHYPE en el mercado.",
                  ],
                ]}
              />
              <P>
                Kinetiq se lanzó en mainnet el 15 de julio de 2025. Según The
                Defiant, en su primer día reunió 460 millones de dólares en
                depósitos. Desde entonces ha añadido otros productos, que verás
                más abajo, pero kHYPE sigue siendo el principal.
              </P>
            </>
          ),
        },
        {
          id: "khype",
          title: "Cómo funciona kHYPE: tipo de cambio, recompensas y comisión",
          children: (
            <>
              <H3>Un token que sube de valor, no de cantidad</H3>
              <P>
                kHYPE no reparte recompensas en forma de más tokens. Según la
                documentación, las recompensas de los validadores se suman al
                HYPE que respalda a todo el kHYPE, así que cada kHYPE equivale
                con el tiempo a un poco más de HYPE. No tienes que reclamar nada:
                el número de kHYPE de tu wallet no cambia, cambia su tipo de
                cambio, que según las preguntas frecuentes de Kinetiq se actualiza
                a diario.
              </P>
              <Formula>
                HYPE que te corresponde = kHYPE que tienes × tipo de cambio
                kHYPE/HYPE
              </Formula>
              <P>
                Un ejemplo con el dato de la web de Kinetiq del 11 de noviembre
                de 2026: 1 HYPE daba 0,973 kHYPE, lo que equivale a que 1 kHYPE
                valía unos 1,028 HYPE. Si ese día depositabas 100 HYPE recibías
                unos 97,3 kHYPE. No has perdido nada: esos 97,3 kHYPE representan
                100 HYPE, y representarán algo más a medida que lleguen
                recompensas.
              </P>
              <H3>De dónde sale el rendimiento</H3>
              <P>
                Sale de las recompensas de staking de Hyperliquid, no de Kinetiq.
                Según la documentación de Hyperliquid, la tasa es inversamente
                proporcional a la raíz cuadrada del total de HYPE en staking: con
                400 millones de HYPE en staking sería de aproximadamente un
                2,37 % anual, y baja cuando hay más HYPE en staking. El 11 de
                noviembre de 2026 la web de Kinetiq mostraba para kHYPE un APY
                del 1,93 %. Es una cifra variable y no una promesa.
              </P>
              <P>
                Ese rendimiento se cobra en HYPE. Si el precio de HYPE cae un
                30 %, tu posición en dólares cae más o menos lo mismo aunque el
                tipo de cambio de kHYPE haya subido.
              </P>
              <H3>La comisión del protocolo</H3>
              <P>
                Según la{" "}
                <ExternalLink href={`${DOCS}/khype`}>
                  documentación de kHYPE
                </ExternalLink>
                , Kinetiq cobra una comisión del 10 % sobre las recompensas de
                staking, no sobre tu depósito. De esa comisión, el 70 % se usa
                para comprar KNTQ en el mercado y el 30 % va a la tesorería del
                protocolo. El APY que ves en la web depende también de la
                comisión que cobre cada validador.
              </P>
              <H3>StakeHub: quién elige a los validadores</H3>
              <P>
                No eliges validador. Lo hace StakeHub, el sistema de puntuación y
                delegación de Kinetiq. Según su documentación, puntúa a los
                validadores en cinco categorías (fiabilidad, seguridad, economía,
                gobernanza y antigüedad), delega solo en los que superan un
                umbral, reequilibra de forma continua y evita concentrar
                demasiado stake en uno solo. La documentación no publica el peso
                de cada categoría ni el umbral; los datos de cada validador se
                pueden consultar en la web de Kinetiq.
              </P>
              <P>
                El mínimo para hacer staking desde la web es de 5 HYPE, según las
                preguntas frecuentes. Para cantidades menores, la propia
                documentación sugiere comprar kHYPE en un DEX.
              </P>
            </>
          ),
        },
        {
          id: "salir",
          title: "Cómo salir de kHYPE: retiro de 8 o 9 días o venta inmediata",
          children: (
            <>
              <P>Hay dos formas de volver de kHYPE a HYPE:</P>
              <DataTable
                caption="Las dos salidas de kHYPE (documentación de Kinetiq, consultada el 11 de noviembre de 2026)."
                head={["", "Retiro desde el contrato", "Venta en un mercado"]}
                rows={[
                  [
                    "Cuánto tarda",
                    "Entre 8 y 9 días: 1 día de bloqueo de la delegación más 7 días de cola.",
                    "Inmediato.",
                  ],
                  [
                    "Qué recibes",
                    "HYPE al tipo de cambio del protocolo.",
                    "Lo que pague el mercado en ese momento.",
                  ],
                  [
                    "Coste",
                    "El gas. Revisa en la pantalla de retiro si se aplica alguna comisión antes de confirmar.",
                    "Slippage y, si kHYPE cotiza con descuento, ese descuento.",
                  ],
                  [
                    "A tener en cuenta",
                    "No se puede cancelar y el kHYPE deja de generar recompensas desde que lo solicitas.",
                    "La liquidez varía y en momentos de tensión puede ser escasa.",
                  ],
                ]}
              />
              <P>
                El plazo del retiro no lo decide Kinetiq: es el mismo que tiene
                el staking nativo de Hyperliquid. Al solicitarlo recibes un
                identificador de retiro y, pasado el plazo, el kHYPE se quema y
                el HYPE vuelve a tu wallet.
              </P>
              <H3>Por qué kHYPE puede cotizar con descuento</H3>
              <P>
                El tipo de cambio del protocolo y el precio de kHYPE en un DEX
                son dos cosas distintas. El primero lo fija el HYPE que respalda
                al token. El segundo lo fijan compradores y vendedores. En
                condiciones normales están muy cerca, porque quien compra kHYPE
                barato puede retirarlo y cobrar el HYPE completo en 8 o 9 días.
                Pero si muchos quieren salir a la vez y nadie quiere esperar ese
                plazo, kHYPE puede cotizar por debajo de su valor en HYPE. La
                documentación lo reconoce como riesgo de liquidez: el precio
                puede desviarse en momentos de volatilidad.
              </P>
              <Callout title="Lo que esto significa para ti">
                Si tienes kHYPE sin apalancar, un descuento temporal solo te
                afecta si vendes en ese momento: puedes esperar o retirar desde
                el contrato. Si lo usas como garantía de un préstamo, ese mismo
                descuento puede acercarte a la liquidación.
              </Callout>
            </>
          ),
        },
        {
          id: "productos",
          title: "Earn, Markets, Launch e iHYPE: el resto de productos",
          children: (
            <>
              <P>
                Alrededor de kHYPE, Kinetiq ha ido lanzando otros productos. Cada
                uno tiene su propio token y sus propios riesgos, y no hace falta
                usarlos para tener kHYPE.
              </P>
              <DataTable
                wide
                caption="Productos de Kinetiq (documentación y blog de Kinetiq, consultados el 11 de noviembre de 2026)."
                head={["Producto", "Qué es", "Token que recibes", "A tener en cuenta"]}
                rows={[
                  [
                    "kHYPE",
                    "Staking líquido de HYPE.",
                    "kHYPE",
                    "Comisión del 10 % sobre las recompensas. Retiro en 8 o 9 días.",
                  ],
                  [
                    "Earn",
                    "Vault que mueve kHYPE por estrategias DeFi, gestionada por Veda.",
                    "vkHYPE",
                    "Comisión del 20 % sobre el beneficio. Añade el riesgo de cada protocolo donde invierte.",
                  ],
                  [
                    "Markets",
                    "Mercados de perpetuos HIP-3 desplegados por Kinetiq (Markets.xyz).",
                    "kmHYPE",
                    "El HYPE aportado respalda el stake del deployer, que puede ser penalizado.",
                  ],
                  [
                    "Launch",
                    "Servicio para que terceros reúnan el stake de HIP-3 y lancen su propio exchange.",
                    "Un token por exchange (exLST)",
                    "Cada pool está aislada: rendimiento y riesgo dependen de ese exchange.",
                  ],
                  [
                    "iHYPE",
                    "Staking líquido para instituciones que pasan un proceso KYB/KYC.",
                    "Token propio de cada institución",
                    "No está pensado para usuarios particulares.",
                  ],
                ]}
              />
              <H3>Earn y vkHYPE</H3>
              <P>
                Earn es una vault construida con Veda en la que depositas kHYPE o
                HYPE y recibes vkHYPE. La vault reparte ese capital entre
                protocolos de HyperEVM para buscar un rendimiento adicional al
                del staking. Según la documentación, cobra una comisión del 20 %
                sobre el beneficio y ninguna de gestión, entrada o salida. El 11
                de noviembre de 2026 la web mostraba un APY del 2,2 % y casi el
                73 % del capital asignado a un solo protocolo de préstamos,
                Hyperlend. La propia web indica que Earn no está disponible para
                personas de Estados Unidos y otros países restringidos.
              </P>
              <P>
                La diferencia con kHYPE es de riesgo: en Earn dependes además de
                los contratos de la vault y de cada protocolo donde invierta, y
                los retiros pueden retrasarse según esos protocolos.
              </P>
              <H3>Markets y kmHYPE</H3>
              <P>
                <GlossaryLink id="hip-3">HIP-3</GlossaryLink> permite a un
                tercero desplegar sus propios mercados de perpetuos en Hyperliquid
                si mantiene un stake de 500.000 HYPE. Kinetiq lo usa para su
                propio exchange, Markets, y kmHYPE es el token que representa el
                HYPE aportado a ese stake. Según la documentación, su tipo de
                cambio frente a HYPE sube a medida que el exchange genera
                ingresos como deployer.
              </P>
              <P>
                El retiro funciona distinto al de kHYPE. Según la documentación,
                solo se puede retirar directamente cuando el HYPE que respalda a
                kmHYPE supera los 500.000 HYPE: en ese caso el plazo es de unos
                8,5 días y hay una comisión del 0,10 %. Si no hay excedente, la
                solicitud entra en una cola y se paga cuando llega HYPE nuevo. La
                alternativa es vender kmHYPE en un mercado, con el slippage que
                toque.
              </P>
              <H3>Launch</H3>
              <P>
                Launch, activo desde el 10 de junio de 2026 según el blog de
                Kinetiq, permite que varios aportantes reúnan entre todos el
                stake de un deployer de HIP-3. Cada exchange tiene su propia pool
                y su propio token, y la documentación insiste en que están
                aisladas: una penalización al stake de un exchange solo afecta a
                quienes aportaron a esa pool. Kinetiq se queda con el 10 % de la
                parte de comisiones que corresponde al deployer.
              </P>
              <P>
                Tanto en Markets como en Launch, tu HYPE respalda el stake de un
                deployer. Como explico en la guía de{" "}
                <InternalLink href="/guias/que-es-hyperliquid#hips">
                  Hyperliquid
                </InternalLink>
                , ese stake puede penalizarse si el deployer actúa mal, por
                ejemplo con un oráculo defectuoso. Es un riesgo que kHYPE no
                tiene.
              </P>
            </>
          ),
        },
        {
          id: "elysium",
          title: "Elysium: la capa 2 de Kinetiq sobre Hyperliquid",
          children: (
            <>
              <P>
                El 9 de noviembre de 2026 Kinetiq abrió al público Elysium, una
                capa 2 pensada para Hyperliquid. Según el anuncio oficial, está
                construida con Arbitrum Orbit, la opera Conduit, liquida en
                HyperEVM y usa HYPE como token de gas, que se mueve 1:1 entre
                HyperEVM y Elysium. Apunta a bloques de 100 milisegundos y está
                orientada a trading spot, lanzamiento de tokens y aplicaciones
                DeFi.
              </P>
              <P>
                Para quien tiene kHYPE o KNTQ, lo relevante es el reparto de los
                ingresos del secuenciador. Según la documentación de KNTQ, el
                50 % se usa para comprar KNTQ en el mercado, y el anuncio de
                lanzamiento añade que un 25 % se destina a los desarrolladores
                cuyas aplicaciones generan demanda.
              </P>
              <P>Es una red muy reciente, y eso tiene consecuencias:</P>
              <Ul>
                <Li>
                  <B>Descentralización limitada al inicio.</B> Según AirdropAlert
                  (9 de noviembre de 2026), en el lanzamiento hay un único
                  secuenciador y la validación es con permiso; las pruebas de
                  fraude abiertas quedan para una fase posterior.
                </Li>
                <Li>
                  <B>Retiros con espera.</B> Como en otros rollups de este tipo,
                  volver de Elysium a HyperEVM pasa por un periodo de
                  impugnación.
                </Li>
                <Li>
                  <B>La integración con HyperCore llega después.</B> El anuncio
                  describe como mejora futura que los contratos de Elysium puedan
                  leer el estado de HyperCore y enviarle órdenes.
                </Li>
                <Li>
                  <B>No tiene token propio.</B> Las comisiones se pagan en HYPE.
                  Cualquier «token de Elysium» o enlace para reclamarlo es, hoy,
                  una señal de estafa. El mismo artículo recoge que ya circulaban
                  puentes falsos antes del lanzamiento.
                </Li>
              </Ul>
              <P>
                Mover fondos a Elysium supone usar un{" "}
                <GlossaryLink id="bridge">puente</GlossaryLink>. Entra solo desde
                la web oficial de Kinetiq y prueba primero con una cantidad
                pequeña.
              </P>
            </>
          ),
        },
        {
          id: "kntq",
          title: "El token KNTQ: reparto, recompras y desbloqueos",
          children: (
            <>
              <P>
                KNTQ es el token de gobernanza de Kinetiq. Según su
                documentación, se generó el 27 de noviembre de 2025 en
                Hyperliquid y tiene una oferta máxima de 1.000 millones. No
                necesitas KNTQ para usar kHYPE.
              </P>
              <DataTable
                caption="Reparto inicial de KNTQ anunciado por la Kinetiq Foundation (Blocmates, 23 de octubre de 2025)."
                head={["Destino", "Parte de la oferta"]}
                rows={[
                  ["Crecimiento del protocolo y recompensas", "30 %"],
                  ["Airdrop a titulares de kPoints", "24 %"],
                  ["Contribuyentes principales", "23,5 %"],
                  ["Fundación", "10 %"],
                  ["Inversores", "7,5 %"],
                  ["Liquidez", "4 %"],
                  ["Airdrop a titulares de Hypurr", "1 %"],
                ]}
              />
              <H3>Recompras</H3>
              <P>
                La documentación de KNTQ describe varias fuentes de ingresos que
                se usan para comprar el token en el mercado: el 70 % de la
                comisión de kHYPE, la parte de Kinetiq en las comisiones de
                Launch, los ingresos disponibles de Markets y el 50 % de los
                ingresos del secuenciador de Elysium. Desde la propuesta KIP-5,
                publicada en septiembre de 2026, el KNTQ comprado ya no se
                reparte entre quienes lo tienen en staking: se envía al
                Assistance Fund de Hyperliquid, lo que el propio blog de Kinetiq
                describe como una quema. Ese mismo texto indica que hasta
                entonces se habían comprado 5.391.458 KNTQ a un precio medio de
                0,15 dólares, alrededor del 0,53 % de la oferta total.
              </P>
              <H3>Staking de KNTQ</H3>
              <P>
                Al hacer staking de KNTQ recibes sKNTQ, que se usa para la
                gobernanza y da acceso a niveles con ventajas en Markets. Retirar
                tiene un plazo de 7 días. Tras KIP-5, sKNTQ ya no recibe el
                rendimiento que venía de las recompras, que según el blog rondaba
                el 13 % anual: no lo tomes como rendimiento futuro.
              </P>
              <H3>Desbloqueos y kPoints</H3>
              <P>
                Las asignaciones de contribuyentes principales e inversores, el
                31 % de la oferta entre las dos, tienen un calendario de tres
                años: un año de bloqueo total y dos de liberación lineal mensual.
                Con el token generado el 27 de noviembre de 2025, esa liberación
                empieza a finales de noviembre de 2026, a razón de unos 12,9
                millones de KNTQ al mes. Es presión vendedora potencial que
                conviene conocer antes de comprar el token.
              </P>
              <P>
                El programa de puntos, los kPoints, ha terminado. Según el blog
                de Kinetiq, duró 46 semanas y repartió 36,8 millones de kPoints.
                En lugar de un segundo airdrop gratuito, el 1 de octubre de 2026
                se abrió una ventana de 10 días para que sus titulares compraran
                hasta 50 millones de KNTQ a un precio fijo de 0,26 dólares. Hoy
                no hay ningún programa de puntos activo ni airdrop pendiente de
                Kinetiq: cualquier mensaje que te ofrezca reclamar uno debe
                hacerte sospechar.
              </P>
              <Note>
                Nada de esto es una recomendación de compra. Las recompras
                dependen de unos ingresos que cambian con el mercado y no
                garantizan el precio del token.
              </Note>
            </>
          ),
        },
        {
          id: "cifras",
          title: "Kinetiq en cifras",
          children: (
            <>
              <P>
                Las cifras de esta sección son una foto del 11 de noviembre de
                2026 y cambian a diario. Compruébalas en la web de Kinetiq y en
                DefiLlama antes de decidir nada.
              </P>
              <DataTable
                caption="Datos de Kinetiq a 11 de noviembre de 2026 (web de Kinetiq y DefiLlama)."
                head={["Dato", "Valor", "Fuente"]}
                rows={[
                  ["TVL total de Kinetiq", "≈ 839 M$", "DefiLlama"],
                  ["TVL de kHYPE", "≈ 717 M$", "Web de Kinetiq"],
                  ["APY de kHYPE", "1,93 %", "Web de Kinetiq"],
                  ["Tipo de cambio", "1 HYPE = 0,973 kHYPE", "Web de Kinetiq"],
                  ["Titulares de kHYPE", "≈ 30.000", "Web de Kinetiq"],
                  ["TVL de Earn (vkHYPE)", "≈ 33 M$", "Web de Kinetiq"],
                  [
                    "Máximo histórico de TVL",
                    "≈ 2.653 M$ (4 de octubre de 2025)",
                    "DefiLlama",
                  ],
                ]}
              />
              <P>
                El TVL actual está cerca de un 68 % por debajo de su máximo de
                octubre de 2025. Como el TVL se mide en dólares, esa caída mezcla
                dos cosas: el HYPE que ha salido del protocolo y la variación del
                precio de HYPE. Un TVL más bajo no hace que kHYPE esté peor
                respaldado, porque cada kHYPE sigue correspondiendo a su parte
                del HYPE en staking, pero sí suele significar menos liquidez en
                los mercados donde se negocia.
              </P>
            </>
          ),
        },
        {
          id: "riesgos",
          title: "Riesgos de Kinetiq y de kHYPE",
          children: (
            <>
              <Ul>
                <Li>
                  <B>Contratos inteligentes.</B> Tu HYPE pasa por los contratos
                  de Kinetiq. La documentación enumera auditorías de Spearbit,
                  Zenith, Pashov Audit Group y Code4rena entre marzo de 2025 y
                  enero de 2026, monitorización de Hypernative y un programa de
                  recompensas por fallos en Cantina. Una auditoría reduce el
                  riesgo, no lo elimina, y la propia documentación dice que
                  nunca es cero.
                </Li>
                <Li>
                  <B>Control administrativo.</B> El protocolo tiene funciones de
                  pausa de emergencia, contratos actualizables y accesos
                  administrativos mediante multifirma. Sirven para reaccionar a
                  un fallo, pero significan que confías en quienes controlan
                  esas firmas.
                </Li>
                <Li>
                  <B>Sin seguro.</B> Las preguntas frecuentes indican que hoy no
                  hay un seguro externo que cubra los riesgos de Kinetiq ni de
                  kHYPE.
                </Li>
                <Li>
                  <B>Precio de kHYPE en el mercado.</B> Puede cotizar por debajo
                  de su valor en HYPE cuando hay muchas ventas y poca liquidez.
                  Si necesitas salir rápido, pagas ese descuento.
                </Li>
                <Li>
                  <B>Liquidación si lo usas como garantía.</B> Usar kHYPE para
                  pedir prestado o hacer{" "}
                  <GlossaryLink id="looping">looping</GlossaryLink> multiplica el
                  riesgo: una caída de HYPE o un descuento de kHYPE puede{" "}
                  <GlossaryLink id="liquidacion">liquidarte</GlossaryLink>.
                </Li>
                <Li>
                  <B>Validadores y slashing.</B> Un validador encarcelado deja
                  de generar recompensas mientras lo esté. La documentación de
                  Hyperliquid indica que hoy no hay slashing automático, pero las
                  preguntas frecuentes de Kinetiq reconocen que es posible que se
                  aplique en el futuro. StakeHub diversifica, lo que reduce el
                  impacto de un validador concreto.
                </Li>
                <Li>
                  <B>Plazo de salida.</B> El retiro tarda 8 o 9 días, no se puede
                  cancelar y durante ese tiempo sigues expuesto al precio de
                  HYPE sin cobrar recompensas.
                </Li>
                <Li>
                  <B>Riesgo de los productos añadidos.</B> vkHYPE depende de los
                  protocolos donde invierte la vault. kmHYPE y los tokens de
                  Launch respaldan stakes de HIP-3 que pueden penalizarse.
                  Elysium es una capa 2 recién lanzada, con un único
                  secuenciador.
                </Li>
                <Li>
                  <B>Precio de HYPE.</B> Todo el rendimiento es en HYPE. Un 2 %
                  anual no compensa una caída fuerte del token.
                </Li>
                <Li>
                  <B>Webs falsas y firmas.</B> Los lanzamientos atraen páginas
                  falsas, puentes falsos y supuestos airdrops. Entra escribiendo
                  tú la dirección o desde tus favoritos, lee lo que firmas y
                  revisa tus permisos: lo explico en la guía de{" "}
                  <InternalLink href="/guias/seguridad-en-defi#estafas">
                    seguridad en DeFi
                  </InternalLink>
                  .
                </Li>
                <Li>
                  <B>Regulación y fiscalidad.</B> Algunos productos excluyen
                  ciertos países, y cambiar HYPE por kHYPE puede tener
                  consecuencias fiscales según dónde residas. Consulta a un
                  asesor; esto no es asesoramiento legal ni fiscal.
                </Li>
              </Ul>
              <Callout title="Una regla práctica">
                Si solo quieres las recompensas de staking y no vas a usar el
                token en DeFi, el staking nativo te evita el riesgo de contrato
                y la comisión del 10 %. kHYPE tiene sentido cuando vas a darle
                un uso que compense ese riesgo añadido.
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
                <B>Prepara tu wallet.</B> Usa una wallet dedicada y repasa los
                hábitos de la guía de{" "}
                <InternalLink href="/guias/seguridad-en-defi#habitos">
                  seguridad en DeFi
                </InternalLink>
                .
              </Li>
              <Li>
                <B>Ten HYPE en HyperEVM.</B> El staking de Kinetiq se hace en
                HyperEVM. Si tu HYPE está en HyperCore, pásalo a HyperEVM desde
                la app de Hyperliquid, y deja un poco para pagar el gas.
              </Li>
              <Li>
                <B>Entra desde la web oficial.</B> Escribe tú mismo kinetiq.xyz o
                usa tus favoritos, nunca un anuncio ni un enlace recibido por
                mensaje.
              </Li>
              <Li>
                <B>Compara las dos entradas.</B> La web permite hacer staking
                (mínimo de 5 HYPE) o comprar kHYPE en un mercado. Si kHYPE cotiza
                con descuento, comprarlo puede darte más kHYPE por el mismo HYPE.
              </Li>
              <Li>
                <B>Comprueba el tipo de cambio antes de firmar.</B> Recibirás
                menos kHYPE que el HYPE que depositas, y es normal. Lee la
                transacción en tu wallet y verifica que el contrato es el
                oficial.
              </Li>
              <Li>
                <B>Decide qué haces con el kHYPE.</B> Guardarlo es lo más
                sencillo. Cada uso adicional (préstamos, pools, vaults) añade un
                protocolo más del que dependes.
              </Li>
              <Li>
                <B>Planifica la salida.</B> Cuenta con 8 o 9 días si retiras
                desde el contrato y no dejes en kHYPE dinero que puedas
                necesitar antes.
              </Li>
              <Li>
                <B>Revisa tus permisos</B> de vez en cuando y revoca los que ya
                no uses.
              </Li>
            </Ol>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es Kinetiq?",
          answer:
            "Un protocolo de staking líquido construido sobre Hyperliquid. Depositas HYPE, el protocolo lo delega en validadores y recibes kHYPE, un token que representa ese HYPE en staking y que puedes usar en DeFi. Tiene además otros productos: Earn, Markets, Launch, iHYPE y la capa 2 Elysium.",
        },
        {
          question: "¿Qué es kHYPE?",
          answer:
            "El token de staking líquido de Kinetiq. Es un token ERC-20 de HyperEVM cuyo tipo de cambio frente a HYPE sube a medida que llegan las recompensas de staking. No aumenta la cantidad de kHYPE que tienes: aumenta el HYPE que representa cada uno.",
        },
        {
          question: "¿Cuánto rinde kHYPE?",
          answer:
            "El 11 de noviembre de 2026 la web de Kinetiq mostraba un APY del 1,93 %. Es variable: depende de las recompensas de staking de Hyperliquid, que bajan cuando hay más HYPE en staking, de la comisión de los validadores y de la comisión del 10 % de Kinetiq. Y se cobra en HYPE, así que no protege de una caída del precio.",
        },
        {
          question: "¿Cuánto tarda retirar kHYPE?",
          answer:
            "Según la documentación, entre 8 y 9 días: 1 día de bloqueo de la delegación más 7 días de cola, el mismo plazo que el staking nativo de Hyperliquid. No se puede cancelar una vez solicitado. La alternativa es vender kHYPE en un mercado al instante, al precio que haya.",
        },
        {
          question: "¿Qué comisiones cobra Kinetiq?",
          answer:
            "Según su documentación, el 10 % de las recompensas de staking de kHYPE, no del depósito. De esa comisión, el 70 % se usa para comprar KNTQ y el 30 % va a la tesorería. La vault Earn cobra aparte un 20 % sobre el beneficio.",
        },
        {
          question: "¿Es seguro Kinetiq?",
          answer:
            "Tiene varias auditorías publicadas, monitorización y un programa de recompensas por fallos, pero ningún protocolo está libre de riesgo y las preguntas frecuentes indican que no hay un seguro externo. Asumes el riesgo de sus contratos, el de que kHYPE cotice con descuento y el de cada protocolo donde lo uses.",
        },
        {
          question: "¿Qué es KNTQ?",
          answer:
            "El token de gobernanza de Kinetiq, generado el 27 de noviembre de 2025 con una oferta máxima de 1.000 millones. Parte de los ingresos del protocolo se usa para comprarlo en el mercado y, desde la propuesta KIP-5, lo comprado se envía al Assistance Fund de Hyperliquid. No hace falta tenerlo para usar kHYPE.",
        },
        {
          question: "¿Qué es Elysium?",
          answer:
            "Una capa 2 para Hyperliquid desarrollada por Kinetiq y abierta al público el 9 de noviembre de 2026. Está construida con Arbitrum Orbit, liquida en HyperEVM y usa HYPE como gas. No tiene token propio.",
        },
        {
          question: "¿Hay un airdrop de Kinetiq?",
          answer:
            "El airdrop de KNTQ se repartió con la generación del token en noviembre de 2025 y el programa de kPoints ya ha terminado, según la documentación. Hoy no hay ninguno anunciado. Trata cualquier web o mensaje que te ofrezca reclamar un airdrop de Kinetiq o de Elysium como un posible intento de phishing.",
        },
      ]}
      sources={[
        { label: "Kinetiq Docs: introducción", href: DOCS },
        {
          label: "Kinetiq Docs: introducción al staking líquido",
          href: `${DOCS}/liquid-staking-primer`,
        },
        { label: "Kinetiq Docs: kHYPE", href: `${DOCS}/khype` },
        { label: "Kinetiq Docs: StakeHub", href: `${DOCS}/stakehub` },
        { label: "Kinetiq Docs: preguntas frecuentes", href: `${DOCS}/faq` },
        { label: "Kinetiq Docs: Earn", href: `${DOCS}/earn` },
        { label: "Kinetiq Docs: kmHYPE", href: `${DOCS}/kmhype` },
        { label: "Kinetiq Docs: Launch", href: `${DOCS}/launch` },
        { label: "Kinetiq Docs: iHYPE", href: `${DOCS}/ihype` },
        { label: "Kinetiq Docs: KNTQ", href: `${DOCS}/kntq` },
        { label: "Kinetiq Docs: kPoints", href: `${DOCS}/kpoints` },
        {
          label: "Kinetiq Docs: contratos y auditorías",
          href: `${DOCS}/contracts-and-audits`,
        },
        {
          label: "Kinetiq: staking de HYPE (datos en vivo de kHYPE y Earn)",
          href: "https://kinetiq.xyz/stake-hype",
        },
        {
          label: "Blog de Kinetiq: Elysium abre su mainnet pública (9 de noviembre de 2026)",
          href: `${BLOG}/elysium-public-mainnet-is-live`,
        },
        {
          label: "Blog de Kinetiq: KIP-5, las recompras van al Assistance Fund (16 de septiembre de 2026)",
          href: `${BLOG}/kip-5-kntq-buybacks-assistance-fund`,
        },
        {
          label: "Blog de Kinetiq: Launch ya está activo (10 de junio de 2026)",
          href: `${BLOG}/kip-3-launch-live`,
        },
        {
          label: "Blog de Kinetiq: se abre la compra de KNTQ para titulares de kPoints (1 de octubre de 2026)",
          href: `${BLOG}/kntq-kpoints-claim`,
        },
        {
          label: "Hyperliquid Docs: staking",
          href: `${HL_DOCS}/hypercore/staking`,
        },
        {
          label: "DefiLlama: Kinetiq",
          href: "https://defillama.com/protocol/kinetiq",
        },
        {
          label: "The Defiant: Kinetiq reúne 460 millones de dólares en su primer día (16 de julio de 2025)",
          href: "https://thedefiant.io/kinetiq-liquid-staking-rakes-in-usd460-million-on-opening-day",
        },
        {
          label: "Blocmates: la Kinetiq Foundation anuncia el token KNTQ (23 de octubre de 2025)",
          href: "https://blocmates.com/news-posts/kinetiq-foundation-announces-kntq-token-launch-allocating-24-to-kpoints-holders",
        },
        {
          label: "AirdropAlert: qué se lanzó el día del estreno de Elysium (9 de noviembre de 2026)",
          href: "https://airdropalert.com/blogs/elysium-launch-day/",
        },
      ]}
      relatedSlugs={[
        "hip-3-de-hyperliquid-creacion-de",
        "ptyt-el-rendimiento-tokenizado",
        "pt-looping-en-pendle-de-donde-sale",
        "como-monitorizo-mis-pools-de-hyperevm",
        "como-funcionan-los-dex-ve33-y-por",
      ]}
    />
  );
}
