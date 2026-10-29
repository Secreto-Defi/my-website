import { SUBSTACK_URL, withUtm } from "../lib/links";
import type { Guide } from "./guides";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

// URL limpia del post (la que va en los datos estructurados).
export const postUrl = (slug: string) => `${SUBSTACK_URL}/p/${slug}`;

// Tarjeta de una guía; el enlace lleva UTM con la página de origen en la campaña.
export default function GuideCard({
  guide,
  campaign,
}: {
  guide: Guide;
  campaign: string;
}) {
  return (
    <li className="card relative bg-base-100 shadow-xl rounded-none hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out">
      <div className="card-body">
        <div className="flex items-center justify-between gap-2 text-sm">
          <time className="opacity-70" dateTime={guide.date}>
            {dateFormatter.format(new Date(guide.date))}
          </time>
          {guide.subscribersOnly && (
            <span className="badge badge-outline font-semibold">
              Suscriptores
            </span>
          )}
        </div>
        <h3 className="card-title">
          <a
            href={withUtm(postUrl(guide.slug), campaign, guide.slug)}
            target="_blank"
            rel="noopener"
            className="after:absolute after:inset-0"
          >
            {guide.title}
          </a>
        </h3>
        <p>{guide.description}</p>
        <span
          aria-hidden="true"
          className="mt-auto pt-4 font-bold uppercase tracking-wider"
        >
          Leer guía →
        </span>
      </div>
    </li>
  );
}
