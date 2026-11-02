// Estructura común de las páginas guía con contenido propio (qué es un airdrop,
// pérdida impermanente, yield farming, perp DEX...). Cada página aporta su texto
// y este componente pone la cabecera, el índice, las preguntas frecuentes, las
// guías relacionadas, los datos estructurados y el aviso legal.
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "../components/footer";
import NavBar from "../components/nav";
import SubscribeBlock from "../components/subscribe";
import GuideCard from "./guide-card";
import { DISCLAIMER, findGuide } from "./guides";
import PillarCard from "./pillar-card";
import { ExternalLink, H2_CLASS, H3 } from "./pillar-ui";
import { PILLARS, type Pillar } from "./pilares";

const SITE_URL = "https://www.secretodefi.com";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const pillarMetadata = ({
  pillar,
  title,
  description,
  imageAlt,
}: {
  pillar: Pillar;
  title: string; // <title>, idealmente 60 caracteres o menos
  description: string; // meta descripción, idealmente 155 caracteres o menos
  imageAlt: string;
}): Metadata => ({
  title,
  description,
  alternates: { canonical: pillar.href },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${pillar.href}`,
    siteName: "Secreto Defi",
    locale: "es_ES",
    title,
    description,
    publishedTime: pillar.published,
    modifiedTime: pillar.updated,
    images: [{ url: "/og-guias.png", width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SecretoDefi",
    creator: "@SecretoDefi",
    title,
    description,
    images: ["/og-guias.png"],
  },
});

export type PillarSection = { id: string; title: string; children: ReactNode };
export type PillarFaq = { question: string; answer: ReactNode };
export type PillarSource = { label: string; href: string };

type Props = {
  pillar: Pillar;
  campaign: string; // campaña UTM de los enlaces hacia Substack
  heading: string; // H1
  description: string; // la misma meta descripción (va también a los datos estructurados)
  lead: ReactNode; // párrafos de introducción
  summary: string[]; // puntos clave, bajo la introducción
  sections: PillarSection[];
  faq: PillarFaq[];
  sources?: PillarSource[];
  relatedSlugs: string[]; // guías de guides.ts para profundizar
};

export default function PillarPage({
  pillar,
  campaign,
  heading,
  description,
  lead,
  summary,
  sections,
  faq,
  sources,
  relatedSlugs,
}: Props) {
  const url = `${SITE_URL}${pillar.href}`;
  const relatedGuides = relatedSlugs.map(findGuide);
  const otherPillars = PILLARS.filter((other) => other.href !== pillar.href);

  const contents = [
    ...sections.map(({ id, title }) => ({ id, title })),
    { id: "preguntas", title: "Preguntas frecuentes" },
    ...(sources?.length ? [{ id: "fuentes", title: "Fuentes" }] : []),
    { id: "profundizar", title: "Guías para profundizar" },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: heading,
      description,
      url,
      mainEntityOfPage: url,
      inLanguage: "es",
      datePublished: pillar.published,
      dateModified: pillar.updated,
      image: `${SITE_URL}/og-guias.png`,
      author: { "@type": "Organization", name: "Secreto Defi", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "Secreto Defi",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-secreto.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guías",
          item: `${SITE_URL}/guias`,
        },
        { "@type": "ListItem", position: 3, name: pillar.name, item: url },
      ],
    },
  ];

  return (
    <div className="font-figtree w-full bg-base-300 min-h-screen">
      <NavBar />

      <main className="mt-40 mb-20 px-6 small:px-20 xlarge:px-40 flex flex-col gap-14 small:gap-20">
        <article className="flex flex-col gap-12 max-w-4xl">
          <header className="flex flex-col gap-6">
            <nav aria-label="Migas de pan" className="text-sm opacity-70">
              <Link href="/guias" className="link link-hover">
                Guías
              </Link>{" "}
              / <span>{pillar.name}</span>
            </nav>
            <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
              La Agenda de SecretoDefi
            </p>
            <h1 className="text-4xl small:text-6xl font-extrabold">{heading}</h1>
            {lead}
            <p className="text-sm opacity-70">
              Actualizado el{" "}
              <time dateTime={pillar.updated}>
                {dateFormatter.format(new Date(pillar.updated))}
              </time>
            </p>
            <p className="text-sm opacity-70">{DISCLAIMER}</p>
          </header>

          <section
            aria-labelledby="resumen"
            className="bg-base-100 border-l-4 border-primary p-6 small:p-8 flex flex-col gap-3"
          >
            <h2 id="resumen" className="text-2xl font-bold">
              En resumen
            </h2>
            <ul className="flex flex-col gap-2 list-disc pl-6">
              {summary.map((point) => (
                <li key={point} className="text-lg font-light">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <nav aria-label="Contenido de la guía" className="flex flex-col gap-2">
            <p className="font-bold text-lg">En esta guía</p>
            <ol className="list-decimal pl-6 flex flex-col gap-1 small:block small:columns-2 small:gap-x-10">
              {contents.map(({ id, title }) => (
                <li key={id} className="break-inside-avoid">
                  <a href={`#${id}`} className="link link-hover">
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {sections.map(({ id, title, children }) => (
            <section
              key={id}
              aria-labelledby={id}
              className="flex flex-col gap-4"
            >
              <h2 id={id} className={H2_CLASS}>
                {title}
              </h2>
              {children}
            </section>
          ))}

          <section aria-labelledby="preguntas" className="flex flex-col gap-6">
            <h2 id="preguntas" className={H2_CLASS}>
              Preguntas frecuentes
            </h2>
            {faq.map(({ question, answer }) => (
              <div key={question} className="flex flex-col gap-2">
                <H3>{question}</H3>
                <p className="text-lg font-light">{answer}</p>
              </div>
            ))}
          </section>

          {sources?.length ? (
            <section aria-labelledby="fuentes" className="flex flex-col gap-4">
              <h2 id="fuentes" className={H2_CLASS}>
                Fuentes
              </h2>
              <ul className="flex flex-col gap-2 list-disc pl-6">
                {sources.map((source) => (
                  <li key={source.href} className="text-lg font-light">
                    <ExternalLink href={source.href}>{source.label}</ExternalLink>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>

        <section aria-labelledby="profundizar" className="flex flex-col gap-6">
          <h2 id="profundizar" className={H2_CLASS}>
            Guías para profundizar
          </h2>
          <p className="text-lg font-light">
            Estas guías de La Agenda de SecretoDefi llevan lo anterior a la
            práctica. Las marcadas como «Suscriptores» forman parte de la edición
            de pago.
          </p>
          <ul className="grid grid-cols-1 small:grid-cols-2 gap-6">
            {relatedGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} campaign={campaign} />
            ))}
          </ul>
          <Link href="/guias" className="link link-primary font-semibold w-fit">
            Ver todas las guías →
          </Link>
        </section>

        <section
          aria-labelledby="sigue-aprendiendo"
          className="flex flex-col gap-6"
        >
          <h2 id="sigue-aprendiendo" className={H2_CLASS}>
            Sigue aprendiendo
          </h2>
          <ul className="grid grid-cols-1 small:grid-cols-3 gap-6">
            {otherPillars.map((other) => (
              <PillarCard key={other.href} pillar={other} />
            ))}
          </ul>
          <p className="text-lg font-light">
            ¿Te suena raro algún término? Consulta el{" "}
            <Link href="/glosario" className="link link-primary">
              glosario de DeFi
            </Link>
            .
          </p>
        </section>

        <SubscribeBlock id="suscripcion" campaign={campaign} path={pillar.href} />
      </main>

      <Footer />

      {structuredData.map((data) => (
        <script
          key={data["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </div>
  );
}
