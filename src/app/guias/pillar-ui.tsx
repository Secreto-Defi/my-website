// Piezas de texto para las páginas guía (ver pillar-page.tsx). Mantienen la
// misma tipografía que la página "Qué es un airdrop" para que todas se vean igual.
import Link from "next/link";
import type { ReactNode } from "react";
import { withUtm } from "../lib/links";
import { postUrl } from "./guide-card";
import { findGuide } from "./guides";

export const H2_CLASS = "text-3xl small:text-4xl font-bold scroll-mt-28";

export const P = ({ children }: { children: ReactNode }) => (
  <p className="text-lg font-light">{children}</p>
);

export const Ul = ({ children }: { children: ReactNode }) => (
  <ul className="flex flex-col gap-3 list-disc pl-6">{children}</ul>
);

export const Ol = ({ children }: { children: ReactNode }) => (
  <ol className="flex flex-col gap-4 list-decimal pl-6">{children}</ol>
);

export const Li = ({ children }: { children: ReactNode }) => (
  <li className="text-lg font-light">{children}</li>
);

export const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold">{children}</strong>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-xl font-bold">{children}</h3>
);

// Nota pequeña bajo una tabla o un dato.
export const Note = ({ children }: { children: ReactNode }) => (
  <p className="text-sm opacity-70">{children}</p>
);

// Fórmula o regla de cálculo destacada.
export const Formula = ({ children }: { children: ReactNode }) => (
  <p className="bg-base-100 p-4 text-lg font-semibold">{children}</p>
);

// Recuadro para una idea que no conviene pasar por alto.
export const Callout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <aside className="bg-base-100 border-l-4 border-primary p-6 flex flex-col gap-2">
    <p className="font-bold text-lg">{title}</p>
    <p className="font-light">{children}</p>
  </aside>
);

export const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link href={href} className="link link-primary">
    {children}
  </Link>
);

// Enlace a un término del glosario (/glosario#<id>).
export const GlossaryLink = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => <InternalLink href={`/glosario#${id}`}>{children}</InternalLink>;

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a href={href} target="_blank" rel="noopener" className="link link-primary">
    {children}
  </a>
);

// Enlace en el texto a una guía de la Agenda (con UTM). Avisa si es de pago para
// que nadie llegue al muro de suscripción sin esperarlo.
export const GuideLink = ({
  slug,
  campaign,
  children,
}: {
  slug: string;
  campaign: string;
  children: ReactNode;
}) => {
  const guide = findGuide(slug);
  return (
    <>
      <a
        href={withUtm(postUrl(slug), campaign, `texto-${slug}`)}
        target="_blank"
        rel="noopener"
        className="link link-primary"
      >
        {children}
      </a>
      {guide.subscribersOnly && (
        <span className="text-sm opacity-70"> (de pago)</span>
      )}
    </>
  );
};

// Tabla con la primera columna como cabecera de fila. Se desplaza en horizontal
// dentro de su caja si no cabe, sin ensanchar la página.
export const DataTable = ({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) => (
  <div className="overflow-x-auto">
    <table className="table bg-base-100 text-base">
      <caption className="caption-top text-left text-sm opacity-70 pb-2">
        {caption}
      </caption>
      <thead>
        <tr>
          {head.map((cell, index) => (
            <th key={index} scope="col">
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) =>
              cellIndex === 0 ? (
                <th key={cellIndex} scope="row" className="font-semibold">
                  {cell}
                </th>
              ) : (
                <td key={cellIndex}>{cell}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
