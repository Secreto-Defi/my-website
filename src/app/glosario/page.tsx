import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import NavBar from "../components/nav";
import { postUrl } from "../guias/guide-card";
import { DISCLAIMER, GUIDE_GROUPS } from "../guias/guides";
import { SUBSTACK_SUBSCRIBE_URL, withUtm } from "../lib/links";
import { TERMS } from "./terms";

const SITE_URL = "https://www.secretodefi.com";
const PAGE_URL = `${SITE_URL}/glosario`;
const TITLE = "Glosario DeFi en español: términos explicados | Secreto Defi";
const DESCRIPTION =
  "Qué es un airdrop, el impermanent loss, la liquidez concentrada o un perp DEX. Glosario de DeFi en español con guías para profundizar en cada término.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/glosario" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Secreto Defi",
    locale: "es_ES",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-guias.png",
        width: 1200,
        height: 630,
        alt: "Glosario de DeFi en español | La Agenda de SecretoDefi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SecretoDefi",
    creator: "@SecretoDefi",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-guias.png"],
  },
};

const GUIDES_BY_SLUG = new Map(
  GUIDE_GROUPS.flatMap((group) => group.guides).map((guide) => [
    guide.slug,
    guide,
  ])
);

const findGuide = (slug: string) => {
  const guide = GUIDES_BY_SLUG.get(slug);
  if (!guide) throw new Error(`Glosario: la guía "${slug}" no existe en guides.ts`);
  return guide;
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glosario de DeFi en español",
    description: DESCRIPTION,
    url: PAGE_URL,
    inLanguage: "es",
    hasDefinedTerm: TERMS.map((term) => ({
      "@type": "DefinedTerm",
      name: term.name,
      description: term.definition,
      url: `${PAGE_URL}#${term.id}`,
      inDefinedTermSet: PAGE_URL,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Glosario", item: PAGE_URL },
    ],
  },
];

export default function GlosarioPage() {
  return (
    <div className="font-figtree w-full bg-base-300 min-h-screen">
      <NavBar />

      <main className="mt-40 mb-20 px-6 small:px-20 xlarge:px-40 flex flex-col gap-14 small:gap-20">
        <header className="flex flex-col gap-6 max-w-4xl">
          <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
            La Agenda de SecretoDefi
          </p>
          <h1 className="text-4xl small:text-6xl font-extrabold">
            Glosario de DeFi en español
          </h1>
          <p className="text-lg font-light">
            Los términos que más aparecen cuando hablo de airdrops, liquidez y
            yield farming, explicados en pocas líneas. Cada uno enlaza a las
            guías de{" "}
            <Link href="/guias" className="link link-primary">
              La Agenda de SecretoDefi
            </Link>{" "}
            donde lo explico con ejemplos y paso a paso.
          </p>
          <p className="text-sm opacity-70">{DISCLAIMER}</p>
        </header>

        <nav aria-label="Índice del glosario" className="max-w-4xl">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {TERMS.map((term) => (
              <li key={term.id}>
                <a href={`#${term.id}`} className="link link-hover font-semibold">
                  {term.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section
          aria-label="Términos"
          className="grid grid-cols-1 small:grid-cols-2 gap-6"
        >
          {TERMS.map((term) => (
            <article
              key={term.id}
              id={term.id}
              className="card bg-base-100 shadow-xl rounded-none scroll-mt-28"
            >
              <div className="card-body">
                <h2 className="card-title text-2xl">{term.name}</h2>
                <p className="font-light">{term.definition}</p>
                <div className="mt-2">
                  <p className="text-sm font-semibold uppercase tracking-wider opacity-70">
                    Para profundizar
                  </p>
                  <ul className="flex flex-col gap-1 mt-1">
                    {term.guides.map((slug) => {
                      const guide = findGuide(slug);
                      return (
                        <li key={slug}>
                          <a
                            href={withUtm(postUrl(slug), "glosario", term.id)}
                            target="_blank"
                            rel="noopener"
                            className="link link-primary"
                          >
                            {guide.title}
                          </a>
                          {guide.subscribersOnly && (
                            <span className="badge badge-outline badge-sm ml-2 font-semibold">
                              Suscriptores
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="flex flex-col items-center gap-6 text-center bg-base-100 p-10 small:p-16">
          <h2 className="text-3xl small:text-4xl font-bold">
            ¿Echas en falta algún término?
          </h2>
          <p className="text-lg font-light max-w-2xl">
            Cuéntamelo desde La Agenda y lo añado. Allí también recibes las
            próximas guías en tu correo.
          </p>
          <a
            href={withUtm(SUBSTACK_SUBSCRIBE_URL, "glosario", "suscribete")}
            target="_blank"
            rel="noopener"
            className="btn btn-primary rounded-none font-bold tracking-wider uppercase"
          >
            Suscríbete
          </a>
        </section>
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
