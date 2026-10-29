import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import NavBar from "../components/nav";
import {
  SUBSTACK_ARCHIVE_URL,
  SUBSTACK_SUBSCRIBE_URL,
  withUtm,
} from "../lib/links";
import GuideCard, { postUrl } from "./guide-card";
import { DISCLAIMER, GUIDE_GROUPS } from "./guides";

const SITE_URL = "https://www.secretodefi.com";
const PAGE_URL = `${SITE_URL}/guias`;
const TITLE = "Guías de DeFi y airdrops en español | Secreto Defi";
const DESCRIPTION =
  "Guías en español para entender protocolos DeFi, farmear airdrops y gestionar el riesgo: liquidez concentrada, Uniswap v4, Pendle, perp DEX y más.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guias" },
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
        alt: "Guías de DeFi, airdrops y yield farming en español | La Agenda de SecretoDefi",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guías de DeFi, airdrops y yield farming en español",
  description: DESCRIPTION,
  url: PAGE_URL,
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", name: "Secreto Defi", url: SITE_URL },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: GUIDE_GROUPS.flatMap((group) => group.guides).map(
      (guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: postUrl(guide.slug),
      })
    ),
  },
};

export default function GuiasPage() {
  return (
    <div className="font-figtree w-full bg-base-300 min-h-screen">
      <NavBar />

      <main className="mt-40 mb-20 px-6 small:px-20 xlarge:px-40 flex flex-col gap-14 small:gap-20">
        <header className="flex flex-col gap-6 max-w-4xl">
          <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
            La Agenda de SecretoDefi
          </p>
          <h1 className="text-4xl small:text-6xl font-extrabold">
            Guías de DeFi, airdrops y yield farming en español
          </h1>
          <p className="text-lg font-light">
            Una selección de lo mejor de La Agenda de SecretoDefi, mi newsletter
            en Substack: guías para entender cómo funcionan los protocolos,
            cazar airdrops con cabeza y no perder de vista el riesgo. Las
            marcadas como «Suscriptores» forman parte de la edición de pago; el
            resto se puede leer gratis.
          </p>
          <p className="text-sm opacity-70">{DISCLAIMER}</p>
        </header>

        {GUIDE_GROUPS.map((group) => (
          <section
            key={group.id}
            aria-labelledby={group.id}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <h2 id={group.id} className="text-3xl small:text-4xl font-bold">
                {group.title}
              </h2>
              <p className="text-lg font-light">{group.description}</p>
              <Link
                href={`/guias/${group.id}`}
                className="link link-primary font-semibold w-fit"
              >
                Ver todo sobre {group.title.toLowerCase()} →
              </Link>
            </div>
            <ul className="grid grid-cols-1 small:grid-cols-2 gap-6">
              {group.guides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} campaign="guias" />
              ))}
            </ul>
          </section>
        ))}

        <section className="flex flex-col items-center gap-6 text-center bg-base-100 p-10 small:p-16">
          <h2 className="text-3xl small:text-4xl font-bold">
            Recibe las próximas guías en tu correo
          </h2>
          <p className="text-lg font-light max-w-2xl">
            En La Agenda comparto lo que estoy farmeando, lo que aprendo y los
            riesgos que vigilo.
          </p>
          <div className="flex flex-col small:flex-row gap-4 items-center">
            <a
              href={withUtm(SUBSTACK_SUBSCRIBE_URL, "guias", "suscribete")}
              target="_blank"
              rel="noopener"
              className="btn btn-primary rounded-none font-bold tracking-wider uppercase"
            >
              Suscríbete
            </a>
            <a
              href={withUtm(SUBSTACK_ARCHIVE_URL, "guias", "archivo")}
              target="_blank"
              rel="noopener"
              className="btn btn-outline rounded-none font-bold"
            >
              Ver todo el archivo
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
