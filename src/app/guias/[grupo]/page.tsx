import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";
import NavBar from "../../components/nav";
import { SUBSTACK_SUBSCRIBE_URL, withUtm } from "../../lib/links";
import GuideCard, { postUrl } from "../guide-card";
import { DISCLAIMER, GUIDE_GROUPS } from "../guides";

const SITE_URL = "https://www.secretodefi.com";

// Solo existen los temas definidos en guides.ts; cualquier otro da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE_GROUPS.map((group) => ({ grupo: group.id }));
}

const findGroup = (id: string) => GUIDE_GROUPS.find((group) => group.id === id);

export function generateMetadata({
  params,
}: {
  params: { grupo: string };
}): Metadata {
  const group = findGroup(params.grupo);
  if (!group) return {};
  const url = `${SITE_URL}/guias/${group.id}`;
  return {
    title: group.seoTitle,
    description: group.seoDescription,
    alternates: { canonical: `/guias/${group.id}` },
    openGraph: {
      type: "website",
      url,
      siteName: "Secreto Defi",
      locale: "es_ES",
      title: group.seoTitle,
      description: group.seoDescription,
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
      title: group.seoTitle,
      description: group.seoDescription,
      images: ["/og-guias.png"],
    },
  };
}

export default function TemaPage({ params }: { params: { grupo: string } }) {
  const group = findGroup(params.grupo);
  if (!group) notFound();

  const url = `${SITE_URL}/guias/${group.id}`;
  const campaign = `guias-${group.id}`;
  const otherGroups = GUIDE_GROUPS.filter((other) => other.id !== group.id);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: group.heading,
      description: group.seoDescription,
      url,
      inLanguage: "es",
      isPartOf: { "@type": "WebSite", name: "Secreto Defi", url: SITE_URL },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: group.guides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: postUrl(guide.slug),
        })),
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
        { "@type": "ListItem", position: 3, name: group.title, item: url },
      ],
    },
  ];

  return (
    <div className="font-figtree w-full bg-base-300 min-h-screen">
      <NavBar />

      <main className="mt-40 mb-20 px-6 small:px-20 xlarge:px-40 flex flex-col gap-14 small:gap-20">
        <header className="flex flex-col gap-6 max-w-4xl">
          <nav aria-label="Migas de pan" className="text-sm opacity-70">
            <Link href="/guias" className="link link-hover">
              Guías
            </Link>{" "}
            / <span>{group.title}</span>
          </nav>
          <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
            La Agenda de SecretoDefi
          </p>
          <h1 className="text-4xl small:text-6xl font-extrabold">
            {group.heading}
          </h1>
          <div className="flex flex-col gap-4">
            {group.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg font-light">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="text-sm opacity-70">{DISCLAIMER}</p>
        </header>

        <section aria-labelledby="guias-del-tema" className="flex flex-col gap-6">
          <h2 id="guias-del-tema" className="text-3xl small:text-4xl font-bold">
            {group.guides.length} guías sobre {group.title.toLowerCase()}
          </h2>
          <p className="text-lg font-light">
            Las marcadas como «Suscriptores» forman parte de la edición de pago;
            el resto se puede leer gratis.
          </p>
          <ul className="grid grid-cols-1 small:grid-cols-2 gap-6">
            {group.guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} campaign={campaign} />
            ))}
          </ul>
        </section>

        <section aria-labelledby="otros-temas" className="flex flex-col gap-6">
          <h2 id="otros-temas" className="text-3xl small:text-4xl font-bold">
            Otros temas
          </h2>
          <ul className="grid grid-cols-1 small:grid-cols-3 gap-6">
            {otherGroups.map((other) => (
              <li
                key={other.id}
                className="card relative bg-base-100 shadow-xl rounded-none hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out"
              >
                <div className="card-body">
                  <h3 className="card-title">
                    <Link
                      href={`/guias/${other.id}`}
                      className="after:absolute after:inset-0"
                    >
                      {other.title}
                    </Link>
                  </h3>
                  <p>{other.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/guias" className="link link-primary font-semibold w-fit">
            Ver todas las guías →
          </Link>
        </section>

        <section className="flex flex-col items-center gap-6 text-center bg-base-100 p-10 small:p-16">
          <h2 className="text-3xl small:text-4xl font-bold">
            Recibe las próximas guías en tu correo
          </h2>
          <p className="text-lg font-light max-w-2xl">
            En La Agenda comparto lo que estoy farmeando, lo que aprendo y los
            riesgos que vigilo.
          </p>
          <a
            href={withUtm(SUBSTACK_SUBSCRIBE_URL, campaign, "suscribete")}
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
