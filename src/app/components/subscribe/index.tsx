// Bloque «Recibe las próximas guías en tu correo» con formulario de suscripción.
//
// Es un formulario HTML estándar que envía el correo directamente a Substack (el
// mismo envío «sin JavaScript» del formulario oficial /embed de la publicación):
// esta web no recibe ni guarda el correo, no carga scripts ni cookies de terceros
// y funciona aunque JavaScript esté desactivado. Se abre en otra pestaña para que
// quien está leyendo no pierda la página.
//
// Si Substack cambiara ese envío y las altas dejaran de llegar, basta con volver
// al botón de siempre: un enlace a SUBSTACK_SUBSCRIBE_URL con withUtm().
import Link from "next/link";
import type { ReactNode } from "react";
import {
  SITE_URL,
  SUBSTACK_FORM_ACTION,
  SUBSTACK_SUBSCRIBE_URL,
  withUtm,
} from "../../lib/links";

type Props = {
  id: string; // prefijo para los ids (puede haber más de un bloque en una página)
  campaign: string; // campaña UTM: desde qué página se ha suscrito la persona
  path: string; // ruta de la página donde se muestra, p. ej. «/guias/que-es-un-airdrop»
  title?: string;
  description?: ReactNode;
  children?: ReactNode; // acciones extra bajo el formulario
};

const DEFAULT_TITLE = "Recibe las próximas guías en tu correo";
const DEFAULT_DESCRIPTION =
  "En La Agenda comparto lo que estoy farmeando, lo que aprendo y los riesgos que vigilo.";

const SubscribeBlock = ({
  id,
  campaign,
  path,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  children,
}: Props) => {
  // Los mismos datos que registraría Substack si la persona hubiera llegado desde
  // el enlace «Suscríbete» de esta página: así las altas aparecen en sus
  // estadísticas de origen con la campaña y el contenido «formulario».
  const landing = withUtm(SUBSTACK_SUBSCRIBE_URL, campaign, "formulario");
  const page = `${SITE_URL}${path}`;
  const hidden: Record<string, string> = {
    first_url: landing,
    first_referrer: page,
    current_url: landing,
    current_referrer: page,
    first_session_url: landing,
    first_session_referrer: page,
    referral_code: "",
    source: "embed",
    referring_pub_id: "",
    additional_referring_pub_ids: "",
  };

  return (
    <section
      aria-labelledby={`${id}-titulo`}
      className="flex flex-col items-center gap-6 text-center bg-base-100 p-10 small:p-16"
    >
      <h2 id={`${id}-titulo`} className="text-3xl small:text-4xl font-bold">
        {title}
      </h2>
      <p className="text-lg font-light max-w-2xl">{description}</p>

      <form
        action={SUBSTACK_FORM_ACTION}
        method="post"
        target="_blank"
        aria-describedby={`${id}-info`}
        className="flex flex-col gap-4 w-full max-w-xl text-left"
      >
        {Object.entries(hidden).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}

        <div className="flex flex-col small:flex-row gap-3">
          <label htmlFor={`${id}-email`} className="sr-only">
            Tu correo electrónico
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
            inputMode="email"
            placeholder="Tu correo electrónico"
            className="input input-bordered w-full text-base rounded-none"
          />
          <button
            type="submit"
            className="btn btn-primary rounded-none font-bold tracking-wider uppercase"
          >
            Suscribirme
          </button>
        </div>

        <label
          htmlFor={`${id}-consentimiento`}
          className="flex items-start gap-3 text-sm font-light cursor-pointer"
        >
          <input
            id={`${id}-consentimiento`}
            type="checkbox"
            required
            className="checkbox checkbox-primary checkbox-sm mt-0.5 rounded-none"
          />
          <span>
            Quiero recibir La Agenda de SecretoDefi por correo electrónico y he
            leído la{" "}
            <Link
              href="/legal#privacidad"
              target="_blank"
              className="link link-primary"
            >
              política de privacidad
            </Link>
            .
          </span>
        </label>

        <p id={`${id}-info`} className="text-sm font-light">
          Responsable: Marc (Secreto Defi). Finalidad: gestionar tu suscripción
          y enviarte La Agenda de SecretoDefi. Legitimación: tu consentimiento.
          Destinatario: Substack, que gestiona la lista de suscriptores y los
          envíos por cuenta del responsable y puede tratar datos en EE. UU. Esta
          web no guarda tu correo. Derechos: acceso, rectificación, supresión y
          otros, escribiendo a{" "}
          <a
            href="mailto:info@secretodefi.com"
            className="link link-primary"
          >
            info@secretodefi.com
          </a>
          . Puedes darte de baja cuando quieras desde el enlace de cada correo.
        </p>

        <p className="text-sm font-light">
          Se abrirá Substack en otra pestaña para completar la suscripción.
          ¿Prefieres hacerlo directamente allí?{" "}
          <a
            href={withUtm(SUBSTACK_SUBSCRIBE_URL, campaign, "suscribete")}
            target="_blank"
            rel="noopener"
            className="link link-primary"
          >
            Ir a Substack
          </a>
          .
        </p>
      </form>

      {children}
    </section>
  );
};

export default SubscribeBlock;
