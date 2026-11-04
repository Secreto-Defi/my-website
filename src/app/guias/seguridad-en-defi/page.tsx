import type { ReactNode } from "react";
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

const PILLAR = getPillar("/guias/seguridad-en-defi");
const CAMPAIGN = "seguridad-defi";
const TITLE = "Seguridad en DeFi: aprobaciones y estafas | Secreto Defi";
const DESCRIPTION =
  "Cómo revocar aprobaciones de tokens, qué firmas son peligrosas, cómo reconocer drainers y address poisoning y qué hacer si te vacían la wallet.";

export const metadata = pillarMetadata({
  pillar: PILLAR,
  title: TITLE,
  description: DESCRIPTION,
  imageAlt: "Seguridad en DeFi: aprobaciones y estafas | La Agenda de SecretoDefi",
});

const G = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <GuideLink slug={slug} campaign={CAMPAIGN}>
    {children}
  </GuideLink>
);

export default function SeguridadEnDefiPage() {
  return (
    <PillarPage
      pillar={PILLAR}
      campaign={CAMPAIGN}
      heading="Seguridad en DeFi: aprobaciones, firmas y estafas"
      description={DESCRIPTION}
      lead={
        <>
          <P>
            En DeFi no hay nadie a quien llamar para revertir una transacción, y
            una de las formas más habituales de perder fondos no es el hackeo de
            un protocolo, sino una firma que das tú mismo: una aprobación a un
            contrato, un mensaje que parece un inicio de sesión o una dirección
            copiada del sitio equivocado.
          </P>
          <P>
            En esta página te explico cómo funcionan esos permisos, cómo se
            revisan y se revocan paso a paso, cuáles son las estafas más
            comunes (drainers, <em>address poisoning</em>, falsos soportes) y qué
            hacer si crees que te han comprometido. Incluyo mi caso real: en
            enero de 2026 descubrí que mi wallet había acumulado más de 1.000
            aprobaciones de contratos tras cinco años de uso.
          </P>
          <P>
            En La Agenda tienes también una versión corta:{" "}
            <G slug="como-evitar-que-te-vacien-la-wallet">
              cómo evitar que te vacíen la wallet
            </G>
            , con cuatro hábitos básicos para blindarte.
          </P>
        </>
      }
      summary={[
        "Una aprobación da permiso a un contrato para gastar tus tokens, no caduca y no se elimina al desconectar la wallet: hay que revocarla. Revísalas con regularidad.",
        "Las firmas también dan permisos. Permit y Permit2 no cuestan gas y algunas wallets no las avisan como una aprobación; fueron las más efectivas para los atacantes en 2025, según Scam Sniffer.",
        "El address poisoning se basa en que copies una dirección de tu historial: verifica siempre la dirección completa y guarda las habituales en tus contactos.",
        "Separa tus wallets según su función, protege la frase semilla, usa una hardware wallet para lo importante y no firmes lo que no entiendas.",
        "Si te han comprometido: mueve lo que quede a una wallet nueva, revoca los permisos, documenta todo y no pagues a nadie que prometa recuperar tus fondos.",
      ]}
      sections={[
        {
          id: "como-se-pierden",
          title: "Cómo se pierden los fondos en DeFi",
          children: (
            <>
              <P>
                Casi nunca se «hackea» la blockchain. Lo habitual es que el
                atacante consiga una de estas tres cosas:
              </P>
              <Ul>
                <Li>
                  <B>Tu frase semilla o tu clave privada.</B> Con ellas controla
                  toda la wallet. Se filtran por phishing, por malware, por
                  capturas de pantalla que se sincronizan en la nube o al
                  entregárselas a un falso soporte.
                </Li>
                <Li>
                  <B>Un permiso que firmas tú.</B> Una aprobación de tokens, una
                  firma Permit o una delegación EIP-7702 que deja a un contrato
                  mover tus activos sin pedirte nada más. Es lo que explotan los{" "}
                  <GlossaryLink id="drainer">drainers</GlossaryLink>.
                </Li>
                <Li>
                  <B>Un envío a la dirección equivocada.</B> Por ejemplo, una
                  dirección envenenada que copias de tu historial. En cadena no
                  hay marcha atrás.
                </Li>
              </Ul>
              <P>
                Los datos van en esa línea. La firma de seguridad Scam Sniffer
                calcula que el phishing con wallet drainers costó 83,85 millones
                de dólares a unas 106.000 víctimas en 2025. Es un 83 % menos que
                los 494 millones aproximados de 2024, pero sigue siendo mucho
                dinero, y son pérdidas de usuarios engañados, no de protocolos
                hackeados. Las firmas Permit y Permit2 fueron las más
                efectivas para los atacantes: los ataques basados en Permit
                supusieron el 38 % de las pérdidas en los incidentes de más de un
                millón de dólares, y el mayor robo individual del año, de 6,5
                millones, se hizo en septiembre con una firma Permit maliciosa.
              </P>
              <Note>
                Cifras del informe de Scam Sniffer recogidas por Cointelegraph.
                Dependen de cómo se mida cada pérdida y de un único proveedor.
              </Note>
              <Callout title="La idea clave">
                Un protocolo puede estar bien auditado y aun así vaciarte la
                wallet si autorizas lo que no debes. Por eso esta guía se centra
                en lo que firmas y en tus hábitos, no en auditar contratos.
              </Callout>
            </>
          ),
        },
        {
          id: "aprobaciones",
          title: "Aprobaciones de tokens: qué son y por qué conviene limpiarlas",
          children: (
            <>
              <P>
                Para que un exchange descentralizado, un protocolo de préstamos o
                un marketplace de NFT mueva tus tokens, primero tienes que
                autorizarlo. Esa autorización es una{" "}
                <GlossaryLink id="aprobacion-de-tokens">
                  aprobación (<em>allowance</em>)
                </GlossaryLink>{" "}
                y la guarda el propio contrato del token, en un registro de quién
                puede gastar cuánto. Si el gasto no está autorizado, la
                transacción falla. Sin aprobaciones, muchas aplicaciones de DeFi
                no funcionarían: no son malas en sí; el problema es lo que se
                acumula.
              </P>
              <P>
                En los tokens ERC-20 se concede con la función <Code>approve()</Code>,
                indicando quién puede gastar y cuánto. Muchas aplicaciones piden una
                cantidad ilimitada para no tener que volver a pedirte permiso en cada
                operación. Una aprobación ilimitada cubre también los tokens que
                deposites después en esa wallet.
              </P>
              <Ul>
                <Li>
                  <B>No caducan.</B> Un permiso concedido hace años sigue activo y
                  puede usarse mucho después.
                </Li>
                <Li>
                  <B>Desconectar la wallet no lo elimina.</B> Cerrar la sesión de
                  una web o desconectar la wallet no quita el permiso: hay que
                  revocarlo.
                </Li>
                <Li>
                  <B>El riesgo es el contrato al que se lo das.</B> Si le das
                  permiso a un contrato, puede gastar esos tokens en cualquier
                  momento; si lo hackean o resulta ser malicioso, tus tokens
                  aprobados quedan expuestos. Incluso los proyectos consolidados
                  sufren hackeos, y una aprobación antigua puede seguir siendo un
                  riesgo años después.
                </Li>
              </Ul>
              <P>
                Con los NFT hay dos niveles. La aprobación de un NFT concreto se
                anula sola al transferirlo. La de una colección entera (
                <Code>setApprovalForAll</Code>) deja que el contrato mueva
                cualquier NFT de esa colección, y los marketplaces la piden de
                forma habitual. Una estafa frecuente es conseguir que firmes un
                listado de tus NFT por 0 ETH.
              </P>
              <Callout title="Mi caso: más de 1.000 aprobaciones">
                Tras cinco años usando la misma wallet, en enero de 2026 conté más
                de 1.000 aprobaciones de contratos acumuladas. Después de varias
                semanas de limpieza conseguí bajar de 200, y mi objetivo es llegar
                a cero. Perder unos segundos volviendo a aprobar el contrato que
                vaya a usar me parece un precio pequeño comparado con perder el
                capital, y según mis cuentas las comisiones de revocar no llegan a
                20 dólares. Lo conté en{" "}
                <ExternalLink href="https://x.com/SecretoDefi/status/2010734853390565869">
                  este post de X
                </ExternalLink>
                .
              </Callout>
            </>
          ),
        },
        {
          id: "firmas",
          title: "Firmas que también dan permisos: Permit, Permit2 y EIP-7702",
          children: (
            <>
              <P>
                No todos los permisos son una transacción. Algunos se conceden con
                una firma que no cuesta gas, y por eso es más fácil pasarlos por
                alto. Esta tabla resume los que más importan:
              </P>
              <DataTable
                caption="Tipos de permiso que puedes conceder desde tu wallet."
                head={["Permiso", "Qué autoriza", "Cómo lo ves", "Cómo se corta"]}
                rows={[
                  [
                    "Aprobación de token (approve)",
                    "Que un contrato gaste un token tuyo hasta un límite, a menudo ilimitado.",
                    "Es una transacción en cadena: la wallet la muestra y cuesta gas.",
                    "Revocarla (poner el límite a 0) o bajar el límite.",
                  ],
                  [
                    "Permiso de NFT (setApprovalForAll)",
                    "Que un contrato mueva cualquier NFT de una colección.",
                    "Transacción en cadena.",
                    "Revocarlo desde Revoke.cash o desde el explorador.",
                  ],
                  [
                    "Firma Permit (EIP-2612)",
                    "Aprobar el gasto de un token con una firma fuera de la cadena.",
                    "No cuesta gas y wallets como MetaMask no muestran las advertencias de una aprobación en cadena.",
                    "Una vez activada se revoca como cualquier aprobación; antes de eso suele ser muy difícil anularla.",
                  ],
                  [
                    "Permit2",
                    "Una aprobación ilimitada al contrato Permit2 y, sobre ella, subaprobaciones con fecha de caducidad.",
                    "Dos capas: más cómodo, pero cuesta entender qué autorizas.",
                    "Revocar la aprobación a Permit2 si no la usas y acortar las subaprobaciones largas.",
                  ],
                  [
                    "Delegación EIP-7702",
                    "Que tu cuenta ejecute el código de un contrato.",
                    "Se activa desde la propia wallet.",
                    "Se revoca desde la propia wallet.",
                  ],
                ]}
              />
              <H3>Permit (EIP-2612)</H3>
              <P>
                Es una extensión del estándar ERC-20, que solo soportan algunos
                tokens, para aprobar el gasto con una firma fuera de la cadena.
                La firma contiene la dirección autorizada y la cantidad, igual que
                una aprobación normal, y después se envía al token para
                activarla. Como no es una transacción, un sitio puede pedirte algo
                que parece un simple inicio de sesión cuando en realidad estás
                concediendo un permiso. Si firmaste algo sospechoso quizá puedas
                invalidarlo antes de que el atacante lo active, pero suele ser
                muy difícil porque actúan rápido.
              </P>
              <H3>Permit2</H3>
              <P>
                Es un contrato creado por el equipo de Uniswap para que cualquier
                token funcione con aprobaciones sin gas, incluso los que no
                soportan Permit. Tú concedes una vez una aprobación ilimitada al
                contrato Permit2 y, a partir de ahí, este reparte subaprobaciones
                a las aplicaciones, cada una con su fecha de caducidad. Tiene
                ventajas (menos transacciones y caducidad automática), pero añade
                una capa más y permite aprobar varios tokens a la vez, y los
                sitios de phishing aprovechan esa complejidad.
              </P>
              <H3>EIP-7702</H3>
              <P>
                Con la actualización Pectra de Ethereum, una cuenta normal puede
                asignar un contrato «delegado» que actúe en su nombre. Sirve sobre
                todo para agrupar operaciones en una sola transacción, como
                aprobar y hacer un swap, o revocar muchas aprobaciones a la vez. A
                cambio, abre una vía nueva a los estafadores: un sitio fraudulento
                puede intentar que firmes una delegación a un contrato malicioso
                que mueva varios activos de golpe. Scam Sniffer registró tras
                Pectra firmas maliciosas basadas en EIP-7702, con dos casos en
                agosto de 2025 que sumaron 2,54 millones de dólares. Más en el{" "}
                <GlossaryLink id="eip-7702">glosario</GlossaryLink>.
              </P>
              <H3>El problema de fondo: firmar a ciegas</H3>
              <P>
                Muchas firmas llegan a la wallet en un formato que una máquina
                entiende y una persona no. En mayo de 2026 un grupo de trabajo de
                Ethereum, con desarrolladores de wallets, empresas de seguridad y
                la iniciativa Trillion Dollar Security de la Ethereum Foundation,
                presentó <GlossaryLink id="firma-a-ciegas">Clear Signing</GlossaryLink> y
                el estándar ERC-7730, para que las wallets describan en lenguaje
                claro lo que hará cada transacción. Depende de que cada wallet lo
                integre, así que entender lo que firmas sigue siendo tu
                responsabilidad.
              </P>
              <Ul>
                <Li>
                  Comprueba el token, el contrato al que das permiso y la
                  cantidad. Si es ilimitada y no la necesitas, baja el límite.
                </Li>
                <Li>
                  Desconfía de las firmas que no encajan con lo que quieres hacer:
                  un inicio de sesión que pide una aprobación, una «verificación»
                  de la wallet o un reclamo que te pide mover varios tokens.
                </Li>
                <Li>
                  Si la wallet no te enseña con claridad qué estás firmando, no
                  firmes.
                </Li>
              </Ul>
            </>
          ),
        },
        {
          id: "estafas",
          title: "Las estafas más comunes y cómo reconocerlas",
          children: (
            <>
              <H3>Phishing y drainers</H3>
              <P>
                Un <GlossaryLink id="drainer">drainer</GlossaryLink> es un kit de{" "}
                <GlossaryLink id="phishing">phishing</GlossaryLink> que monta una
                web falsa (un reclamo de airdrop, un mint, una «actualización» de
                un protocolo) para que conectes la wallet y firmes una aprobación,
                una firma Permit o una delegación. En cuanto firmas, un script
                mueve tus activos. No necesita tu frase semilla. Los vectores que
                recoge ethereum.org:
              </P>
              <Ul>
                <Li>
                  Correos, mensajes y anuncios con enlaces a sitios falsos. La
                  vista previa de un enlace en un anuncio puede mostrar un
                  dominio legítimo que no es el real.
                </Li>
                <Li>
                  Falsos soportes que te escriben por privado, sobre todo después
                  de ver una pregunta pública tuya en Discord.
                </Li>
                <Li>
                  Sorteos que prometen devolverte el doble de lo que envíes, y
                  cuentas de redes sociales hackeadas que los difunden.
                </Li>
                <Li>
                  Tokens o NFT que aparecen en tu wallet sin que los pidas y que
                  te llevan a una web donde te piden firmar.
                </Li>
                <Li>
                  Falsos brokers y esquemas de «minería» que prometen
                  rendimientos altos y acaban vaciando los fondos.
                </Li>
              </Ul>
              <Callout title="Una regla que evita muchos disgustos">
                Entra siempre a una web desde tus favoritos o desde el enlace de
                la cuenta oficial del proyecto, nunca desde un anuncio o un
                mensaje. Y ninguna web ni soporte legítimos te pedirán nunca tu
                frase semilla.
              </Callout>
              <H3>Address poisoning</H3>
              <P>
                Según MetaMask, el atacante vigila transferencias (normalmente de
                stablecoins), genera con un programa una dirección que se parece a
                la de destino y te envía desde ella una transacción de valor
                insignificante, normalmente de cero tokens, para que aparezca en
                tu historial. Si la próxima vez copias la dirección del historial
                en lugar de la original, los fondos van al atacante. Funciona
                porque las direcciones son largas y las reconocemos por el
                principio y el final. Más en el{" "}
                <GlossaryLink id="address-poisoning">glosario</GlossaryLink>.
              </P>
              <P>
                No es un riesgo teórico. Un estudio presentado en la conferencia
                ACM CCS 2024 (Guan y Li, San Diego State University) analizó este
                ataque en Ethereum entre 2022 y principios de 2024: más de 14
                millones de transferencias de envenenamiento hacia unos 1,44
                millones de direcciones, 1.858 víctimas confirmadas y pérdidas
                confirmadas de entre unos 82 y 90 millones de dólares, la mayor
                parte en stablecoins. Solo una fracción pequeña de los intentos
                funciona, alrededor del 0,1 % según el estudio, pero cuesta tan
                poco que compensa: el retorno para los atacantes superó el 220 %
                de lo que gastaron en comisiones.
              </P>
              <Ul>
                <Li>
                  Verifica la dirección completa antes de enviar, incluidos los
                  caracteres del medio, sobre todo en importes grandes.
                </Li>
                <Li>
                  No copies direcciones del historial de transacciones, ni
                  siquiera las tuyas (por ejemplo, al mover fondos desde un
                  exchange centralizado).
                </Li>
                <Li>
                  Guarda las direcciones que uses a menudo en los contactos de la
                  wallet o ponles un nombre ENS o una etiqueta privada en el
                  explorador.
                </Li>
                <Li>
                  Con una hardware wallet, confirma la dirección de destino en la
                  pantalla del propio dispositivo.
                </Li>
                <Li>
                  Si el importe es grande, haz primero un envío de prueba pequeño.
                </Li>
              </Ul>
              <H3>Falsos recuperadores</H3>
              <P>
                Después de una pérdida, la estafa continúa: aparecen «expertos en
                recuperación de cripto» que te escriben por redes y piden un pago
                por adelantado. Nadie puede revertir una transacción en una
                blockchain, así que quien se ofrece a recuperar tus fondos a
                cambio de una tarifa es casi seguro otro estafador.
              </P>
              <H3>Software falso y extensiones</H3>
              <P>
                Instala wallets y extensiones solo desde fuentes oficiales y borra
                las que no uses: una extensión puede actualizarse con código
                malicioso. Después de hacer clic en cualquier enlace, comprueba el
                dominio. Las normas básicas al farmear airdrops las tienes también
                en la guía de{" "}
                <InternalLink href="/guias/que-es-un-airdrop#seguridad">
                  qué es un airdrop
                </InternalLink>
                .
              </P>
            </>
          ),
        },
        {
          id: "habitos",
          title: "Hábitos que reducen el riesgo",
          children: (
            <Ol>
              <Li>
                <B>Separa tus wallets por función.</B> Una para guardar a largo
                plazo, que no se conecte a ninguna aplicación; otra para operar y
                farmear con el capital que puedas permitirte perder; y, si pruebas
                protocolos nuevos o reclamos, una tercera desechable. Si una se
                compromete, las demás no.
              </Li>
              <Li>
                <B>Usa una</B>{" "}
                <GlossaryLink id="hardware-wallet">hardware wallet</GlossaryLink>{" "}
                <B>para lo importante.</B> La clave nunca sale del dispositivo,
                así que te protege aunque el ordenador esté comprometido, y te
                deja confirmar en su pantalla lo que firmas. Eso sí: no evita que
                firmes tú una aprobación maliciosa.
              </Li>
              <Li>
                <B>Protege la</B>{" "}
                <GlossaryLink id="frase-semilla">frase semilla</GlossaryLink>
                <B>.</B> Nunca la compartas, no la escribas en ninguna web y no le
                hagas capturas de pantalla (pueden sincronizarse con la nube).
                Guárdala sin conexión.
              </Li>
              <Li>
                <B>Acota los permisos.</B> Aprueba solo la cantidad que vas a
                usar cuando la wallet lo permita y revisa las aprobaciones con
                regularidad (más abajo, paso a paso).
              </Li>
              <Li>
                <B>Prefiere wallets que te enseñen qué firmas.</B> Elige una que
                muestre con claridad qué tokens salen de tu cuenta y a qué
                contrato das permiso. Yo uso{" "}
                <ExternalLink href="https://rabby.io/">Rabby</ExternalLink>, que
                además permite revocar aprobaciones en lote.
              </Li>
              <Li>
                <B>Cuida el navegador.</B> Usa un perfil solo para cripto con
                pocas extensiones y elimina las que no utilices. Verifica el
                dominio antes de conectar la wallet. En{" "}
                <G slug="10-herramientas-necesaria-para-tu">
                  10 herramientas necesarias para tu día a día
                </G>{" "}
                incluyo cómo compruebo contratos y enlaces.
              </Li>
              <Li>
                <B>Protege tus cuentas.</B> Contraseñas largas y únicas en un
                gestor de contraseñas, y verificación en dos pasos con app de
                autenticación o llave de seguridad. Evita el SMS: la clonación de
                la SIM (<em>SIM swapping</em>) lo hace vulnerable.
              </Li>
              <Li>
                <B>Prueba con poco.</B> La primera vez que uses una aplicación o
                envíes a una dirección nueva, hazlo con una cantidad pequeña.
              </Li>
            </Ol>
          ),
        },
        {
          id: "revocar",
          title: "Cómo revisar y revocar tus aprobaciones paso a paso",
          children: (
            <>
              <P>
                Revisar tus aprobaciones no cuesta nada, porque solo lees datos
                públicos de la cadena. Revocar sí cuesta una comisión de red por
                cada permiso, que varía según la red y el momento. Con{" "}
                <ExternalLink href="https://revoke.cash/">Revoke.cash</ExternalLink>:
              </P>
              <Ol>
                <Li>
                  <B>Entra escribiendo tú la dirección web</B> o desde tus
                  favoritos, nunca desde un anuncio o un mensaje. Introduce tu
                  dirección o tu nombre ENS, o conecta la wallet.
                </Li>
                <Li>
                  <B>Elige la red.</B> Las aprobaciones son por red, así que
                  repite el proceso en cada una que uses (Ethereum, Arbitrum,
                  Base…).
                </Li>
                <Li>
                  <B>Ordena y filtra.</B> Si sospechas de un permiso malicioso,
                  ordénalos de más reciente a más antiguo. Fíjate en el token, el
                  contrato y si la cantidad es ilimitada.
                </Li>
                <Li>
                  <B>Pulsa «Revoke»</B> y confirma la transacción en tu wallet. Si
                  todavía necesitas el permiso, pulsa el icono del lápiz para
                  bajar la cantidad en lugar de eliminarlo.
                </Li>
                <Li>
                  <B>Recarga y comprueba</B> que el permiso ya no aparece.
                </Li>
              </Ol>
              <P>
                También puedes hacerlo desde el explorador de cada red (Etherscan
                en Ethereum, Arbiscan en Arbitrum…): en el menú «More», abre
                «Token Approvals», introduce tu dirección, elige el tipo de token
                (ERC-20, ERC-721 o ERC-1155) y activa «Show all approvals».
              </P>
              <Ul>
                <Li>
                  <B>Si tienes muchas, hazlo en lote.</B> Rabby tiene una función
                  de revocación en lote (<em>Batch Revoke</em>) que me ahorró horas
                  de hacerlo a mano. Con ella limpié cientos de aprobaciones por
                  menos de 20 dólares en comisiones, según mis cuentas.
                </Li>
                <Li>
                  <B>Revocar no debería hacerte perder fondos.</B> Según
                  ethereum.org, no afecta a tu staking, tus pools ni tus
                  préstamos. Lo único es que tendrás que volver a aprobar la
                  próxima vez que uses ese contrato.
                </Li>
                <Li>
                  <B>Permit2.</B> Si no lo usas, revoca la aprobación al propio
                  contrato Permit2 y acorta o elimina las subaprobaciones con
                  fecha lejana.
                </Li>
                <Li>
                  <B>Delegaciones EIP-7702.</B> Revoke.cash las muestra en la
                  pestaña «delegations», pero solo para inspeccionarlas: se
                  revocan desde la propia wallet.
                </Li>
                <Li>
                  <B>Firmas Permit.</B> La pestaña «Signatures» de Revoke.cash
                  muestra firmas potenciales, porque no puede saber cuáles
                  firmaste de verdad. Cancelar de más no es peligroso, pero gasta
                  gas.
                </Li>
              </Ul>
              <P>
                Un ritmo razonable es revisarlas una vez al mes y siempre después
                de probar un protocolo nuevo o de firmar algo dudoso. Y si ya te
                han vaciado, revoca igualmente: el permiso podría usarse de nuevo.
              </P>
            </>
          ),
        },
        {
          id: "si-te-han-vaciado",
          title: "Qué hacer si crees que te han comprometido",
          children: (
            <>
              <P>
                Actúa rápido y con orden. Lo que sigue combina las
                recomendaciones de ethereum.org y de Revoke.cash:
              </P>
              <Ol>
                <Li>
                  <B>Para.</B> Deja de interactuar con la web sospechosa y no
                  firmes nada más.
                </Li>
                <Li>
                  <B>Mueve lo que te quede a una wallet nueva.</B> Créala con una
                  frase semilla nueva, en un dispositivo limpio, y llévate los
                  fondos más valiosos primero.
                </Li>
                <Li>
                  <B>Revoca los permisos</B> de la wallet afectada, aunque ya esté
                  vacía, y revisa si hay delegaciones EIP-7702 activas.
                </Li>
                <Li>
                  <B>Si se filtró la frase semilla o la clave privada</B>, da esa
                  wallet por perdida y no vuelvas a depositar en ella: cualquier
                  cosa que llegue puede ser movida por quien las tenga.
                </Li>
                <Li>
                  <B>Protege tus cuentas.</B> Cambia las contraseñas de los
                  exchanges vinculados y activa la verificación en dos pasos en
                  todas tus cuentas cripto.
                </Li>
                <Li>
                  <B>Documenta todo:</B> hashes de transacción, direcciones,
                  capturas de pantalla y cualquier conversación con el estafador.
                </Li>
                <Li>
                  <B>Reporta.</B> Las direcciones, a servicios como Chainabuse o
                  al formulario de Etherscan; las webs y cuentas falsas, a la
                  plataforma donde las has visto y a Google Safe Browsing; y el
                  caso, a la policía de tu país (en España, Policía Nacional o
                  Guardia Civil) o a organismos como IC3, en EE. UU., Action
                  Fraud, en Reino Unido, o Europol.
                </Li>
                <Li>
                  <B>Si los fondos llegaron a un exchange centralizado</B>,
                  contacta de inmediato con su soporte: pueden congelar cuentas
                  marcadas por fraude.
                </Li>
                <Li>
                  <B>No pagues a nadie que prometa recuperar tus fondos.</B>
                </Li>
              </Ol>
              <P>
                La realidad es incómoda: en cadena no se deshace nada y recuperar
                los fondos es muy poco probable. Por eso la prevención pesa más
                que cualquier remedio. ethereum.org mantiene una{" "}
                <ExternalLink href="https://ethereum.org/community/support/scams/">
                  página de ayuda y denuncia de estafas
                </ExternalLink>{" "}
                con las herramientas para seguir el rastro de los fondos.
              </P>
            </>
          ),
        },
        {
          id: "checklist",
          title: "Checklist rápido",
          children: (
            <>
              <P>
                Si prefieres tenerlo todo en una sola tabla, esto es lo que
                conviene comprobar y cuándo:
              </P>
              <DataTable
                caption="Qué comprobar y cuándo."
                head={["Cuándo", "Qué comprobar"]}
                rows={[
                  [
                    "Antes de firmar",
                    "Token, contrato y cantidad. ¿Lo necesito para lo que quiero hacer? ¿Entiendo lo que dice la wallet? ¿He llegado desde un enlace oficial?",
                  ],
                  [
                    "Antes de enviar",
                    "Dirección completa, no copiada del historial. Contacto guardado o envío de prueba si el importe es grande.",
                  ],
                  [
                    "Cada mes",
                    "Aprobaciones en cada red, delegaciones EIP-7702 y firmas Permit. Revoca lo que ya no uses.",
                  ],
                  [
                    "Tras probar un protocolo nuevo",
                    "Revoca los permisos que concediste y que no necesitas mantener.",
                  ],
                  [
                    "Si algo huele raro",
                    "No firmes más, mueve los fondos a una wallet nueva, revoca, documenta y no pagues a recuperadores.",
                  ],
                ]}
              />
            </>
          ),
        },
      ]}
      faq={[
        {
          question: "¿Qué es una aprobación de tokens?",
          answer: (
            <>
              Es el permiso que das a un contrato inteligente para que gaste, en
              tu nombre, una cantidad de uno de tus tokens. Se guarda en el
              contrato del token, no caduca por sí sola y se puede revocar en
              cualquier momento. Más en el{" "}
              <GlossaryLink id="aprobacion-de-tokens">glosario</GlossaryLink>.
            </>
          ),
        },
        {
          question: "¿Revocar una aprobación cuesta dinero?",
          answer:
            "Sí: es una transacción en cadena y se paga una comisión de red, que varía según la red y el momento. Revisar tus aprobaciones, en cambio, es gratis. En mi limpieza de cientos de aprobaciones, con la revocación en lote de Rabby, las comisiones no llegaron a 20 dólares según mis cuentas.",
        },
        {
          question: "¿Desconectar la wallet de una web elimina sus permisos?",
          answer:
            "No. Desconectar la wallet no quita las aprobaciones que ya concediste: hay que revocarlas con una herramienta como Revoke.cash, con el explorador de la red o con tu wallet.",
        },
        {
          question: "¿Una hardware wallet me protege de las estafas?",
          answer:
            "Protege tu clave privada, que no sale del dispositivo aunque el ordenador esté comprometido, y te deja confirmar en su pantalla lo que firmas. Pero no evita que firmes tú una aprobación maliciosa, así que sigue siendo clave leer lo que autorizas.",
        },
        {
          question: "¿Qué es el address poisoning y cómo me protejo?",
          answer:
            "Es una estafa en la que te envían una transacción de valor insignificante desde una dirección que se parece a otra con la que has operado, para que acabes copiándola del historial. Verifica siempre la dirección completa, no copies del historial y guarda las direcciones habituales en tus contactos.",
        },
        {
          question: "¿Se pueden recuperar los fondos robados?",
          answer:
            "Casi nunca. Las transacciones en cadena no se pueden revertir. Documenta el caso, reporta las direcciones y, si los fondos llegaron a un exchange centralizado, avisa a su soporte cuanto antes. No pagues a quien prometa recuperarlos: suele ser otra estafa.",
        },
        {
          question: "¿Cada cuánto debería revisar mis aprobaciones?",
          answer:
            "Un ritmo razonable es una vez al mes y siempre después de probar un protocolo nuevo o de firmar algo dudoso. Si usas varias redes, repite la revisión en cada una.",
        },
      ]}
      sources={[
        {
          label: "ethereum.org: seguridad y prevención de estafas",
          href: "https://ethereum.org/security/",
        },
        {
          label: "ethereum.org: ayuda y denuncia de estafas",
          href: "https://ethereum.org/community/support/scams/",
        },
        {
          label: "ethereum.org: cómo revocar el acceso a tus tokens",
          href: "https://ethereum.org/guides/how-to-revoke-token-access/",
        },
        {
          label: "Revoke.cash: qué son las aprobaciones de tokens",
          href: "https://revoke.cash/learn/approvals/what-are-token-approvals",
        },
        {
          label: "Revoke.cash: cómo revocar aprobaciones de tokens",
          href: "https://revoke.cash/learn/approvals/how-to-revoke-token-approvals",
        },
        {
          label: "Revoke.cash: qué es Permit2",
          href: "https://revoke.cash/learn/approvals/what-is-permit2",
        },
        {
          label: "Revoke.cash: qué son las firmas Permit (EIP-2612)",
          href: "https://revoke.cash/learn/approvals/what-are-eip2612-permit-signatures",
        },
        {
          label: "Revoke.cash: qué es EIP-7702",
          href: "https://revoke.cash/learn/wallets/what-is-eip7702",
        },
        {
          label: "MetaMask: estafas de address poisoning",
          href: "https://support.metamask.io/stay-safe/protect-yourself/wallet-and-hardware/address-poisoning-scams",
        },
        {
          label: "Guan y Li: Characterizing Ethereum Address Poisoning Attack (ACM CCS 2024)",
          href: "https://par.nsf.gov/servlets/purl/10580433",
        },
        {
          label: "Cointelegraph: las pérdidas por phishing cayeron un 83 % en 2025 (informe de Scam Sniffer)",
          href: "https://cointelegraph.com/news/crypto-phishing-losses-fell-83-percent-2025-wallet-drainers",
        },
        {
          label: "Ethereum Foundation: Clear Signing (12 de mayo de 2026)",
          href: "https://blog.ethereum.org/2026/05/12/clear-signing-announcement",
        },
      ]}
      relatedSlugs={[
        "como-evitar-que-te-vacien-la-wallet",
        "10-herramientas-necesaria-para-tu",
        "se-un-detective-onchain",
        "cuentas-de-fondeo-en-cripto-como",
      ]}
    />
  );
}
