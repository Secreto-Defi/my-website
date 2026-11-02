import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/footer";
import NavBar from "../../components/nav";
import { SUBSTACK_SUBSCRIBE_URL, withUtm } from "../../lib/links";
import {
  AIRDROP_GUIDE_PUBLISHED,
  AIRDROP_GUIDE_UPDATED,
} from "../../lib/updated";
import GuideCard from "../guide-card";
import { DISCLAIMER, GUIDE_GROUPS } from "../guides";

const SITE_URL = "https://www.secretodefi.com";
const PAGE_URL = `${SITE_URL}/guias/que-es-un-airdrop`;
const CAMPAIGN = "que-es-un-airdrop";
const TITLE = "Qué es un airdrop y cómo farmearlo en español | Secreto Defi";
const DESCRIPTION =
  "Qué es un airdrop, qué tipos hay, cómo farmearlo paso a paso y cómo evitar estafas. Guía en español con enlaces a mis guías para profundizar.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guias/que-es-un-airdrop" },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "Secreto Defi",
    locale: "es_ES",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: AIRDROP_GUIDE_PUBLISHED,
    images: [
      {
        url: "/og-guias.png",
        width: 1200,
        height: 630,
        alt: "Qué es un airdrop y cómo farmearlo | La Agenda de SecretoDefi",
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

// Guías de /guias que sirven para profundizar (deben existir en guides.ts).
const RELATED_SLUGS = [
  "tier-list-de-perp-dexs-donde-farmeo",
  "como-farmear-arc-testnet-paso-a-paso",
  "robinhood-te-paga-lit-por-operar",
  "como-genere-14-millones-de-dolares",
  "10-herramientas-necesaria-para-tu",
  "se-un-detective-onchain",
];

const GUIDES_BY_SLUG = new Map(
  GUIDE_GROUPS.flatMap((group) => group.guides).map((guide) => [
    guide.slug,
    guide,
  ])
);

const relatedGuides = RELATED_SLUGS.map((slug) => {
  const guide = GUIDES_BY_SLUG.get(slug);
  if (!guide) throw new Error(`Guía "${slug}" no existe en guides.ts`);
  return guide;
});

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Qué es un airdrop y cómo farmearlo",
    description: DESCRIPTION,
    url: PAGE_URL,
    mainEntityOfPage: PAGE_URL,
    inLanguage: "es",
    datePublished: AIRDROP_GUIDE_PUBLISHED,
    dateModified: AIRDROP_GUIDE_UPDATED,
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Qué es un airdrop",
        item: PAGE_URL,
      },
    ],
  },
];

const h2 = "text-3xl small:text-4xl font-bold";
const p = "text-lg font-light";

export default function QueEsUnAirdropPage() {
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
              / <span>Qué es un airdrop</span>
            </nav>
            <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
              La Agenda de SecretoDefi
            </p>
            <h1 className="text-4xl small:text-6xl font-extrabold">
              Qué es un airdrop y cómo farmearlo
            </h1>
            <p className={p}>
              Un airdrop es un reparto gratuito de tokens que un proyecto hace a
              sus primeros usuarios. Si lo has visto en redes y no tienes claro
              cómo funciona, cómo se participa o dónde están las trampas, aquí
              tienes la versión corta y ordenada.
            </p>
            <p className={p}>
              En La Agenda de SecretoDefi llevo tiempo documentando cómo
              participo en estos repartos. Esta página reúne lo esencial y te
              lleva a las guías donde lo explico con más detalle.
            </p>
            <p className="text-sm opacity-70">{DISCLAIMER}</p>
          </header>

          <section aria-labelledby="que-es" className="flex flex-col gap-4">
            <h2 id="que-es" className={h2}>
              Qué es un airdrop
            </h2>
            <p className={p}>
              Un proyecto cripto crea un token y, en vez de venderlo todo, regala
              una parte a las personas que han usado su producto antes del
              lanzamiento. Los motivos son tres: premiar a los primeros
              usuarios, repartir la propiedad del proyecto entre mucha gente y
              atraer actividad y liquidez mientras el producto arranca.
            </p>
            <p className={p}>
              El ejemplo clásico es el de Uniswap en 2020, que repartió 400 UNI
              a cada dirección que había usado el protocolo antes de una fecha de
              corte. Desde entonces, muchos proyectos han copiado la idea y la
              han convertido en una estrategia en sí misma: farmear airdrops.
            </p>
            <p className={p}>
              Farmear un airdrop es usar un protocolo de forma sostenida para
              entrar en ese reparto. Ojo con la palabra «optar»: que el reparto
              llegue, cuánto valga y a quién toque depende del proyecto, y nada
              de eso está garantizado. Tienes más detalle en el{" "}
              <Link href="/glosario#airdrop" className="link link-primary">
                glosario
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="tipos" className="flex flex-col gap-4">
            <h2 id="tipos" className={h2}>
              Tipos de airdrop
            </h2>
            <ul className="flex flex-col gap-4 list-disc pl-6">
              <li className={p}>
                <strong className="font-bold">Retroactivo.</strong> El proyecto
                no avisa: lanza el token y premia a quienes lo usaron antes. Es el
                caso de Uniswap. Lo único que puedes hacer es usar productos que
                te gusten y que tengan pinta de acabar teniendo token.
              </li>
              <li className={p}>
                <strong className="font-bold">Programa de puntos.</strong> El
                proyecto anuncia que da puntos por usar el producto (operar,
                aportar liquidez, invitar) y deja entender que se convertirán en
                tokens. Es el modelo que más se ha extendido entre los{" "}
                <Link href="/glosario#perp-dex" className="link link-primary">
                  perp DEX
                </Link>
                . Los puntos no son un compromiso: el proyecto decide cómo se
                canjean y si se canjean.
              </li>
              <li className={p}>
                <strong className="font-bold">Testnet incentivada.</strong> Haces
                tareas en una red de pruebas con tokens sin valor real, con la
                expectativa de una recompensa futura. No exige capital, sino
                tiempo. Más en{" "}
                <Link
                  href="/glosario#testnet-incentivada"
                  className="link link-primary"
                >
                  testnet incentivada
                </Link>
                .
              </li>
              <li className={p}>
                <strong className="font-bold">Campañas y misiones.</strong>{" "}
                Plataformas de misiones, como Galxe, donde completas acciones
                concretas a cambio de puntos o de un posible reparto.
              </li>
              <li className={p}>
                <strong className="font-bold">Por tener o bloquear un token.</strong>{" "}
                El proyecto toma una «foto» (snapshot) de quien tiene o ha
                bloqueado cierto activo en un momento dado y reparte según eso.
              </li>
            </ul>
          </section>

          <section aria-labelledby="como-farmear" className="flex flex-col gap-4">
            <h2 id="como-farmear" className={h2}>
              Cómo farmear un airdrop, paso a paso
            </h2>
            <ol className="flex flex-col gap-4 list-decimal pl-6">
              <li className={p}>
                <strong className="font-bold">Elige bien el proyecto.</strong>{" "}
                Mira quién lo financia, si tiene producto real y si el token está
                confirmado o es solo una expectativa. No todo lo que suena a
                airdrop merece tu tiempo.
              </li>
              <li className={p}>
                <strong className="font-bold">Usa una cartera dedicada.</strong>{" "}
                Mantén una wallet aparte para farmear, separada de tus ahorros.
                Si algo sale mal, el daño queda acotado.
              </li>
              <li className={p}>
                <strong className="font-bold">Haz uso real y constante.</strong>{" "}
                Cambia tokens, aporta liquidez, opera o completa las tareas de la
                testnet de forma regular. Los proyectos filtran a quien solo hace
                una acción suelta o parece un bot, así que la constancia y la
                variedad pesan más que el volumen de un solo día.
              </li>
              <li className={p}>
                <strong className="font-bold">Apunta lo que haces.</strong> Con
                varios proyectos a la vez es fácil perderse y olvidar un reclamo.
                Un tracker de carteras y de airdrops te ahorra el Excel y evita
                dejar tokens sin reclamar.
              </li>
              <li className={p}>
                <strong className="font-bold">Cuida el coste y el tiempo.</strong>{" "}
                Cada transacción paga comisiones y el capital inmovilizado tiene
                un coste de oportunidad. Si dedicas demasiado tiempo a algo que
                no está confirmado, quizá no compense.
              </li>
              <li className={p}>
                <strong className="font-bold">Reclama solo desde la web oficial.</strong>{" "}
                Cuando llegue el reparto, entra desde los enlaces del propio
                proyecto (su cuenta oficial y su documentación), nunca desde un
                mensaje o un anuncio.
              </li>
            </ol>
          </section>

          <section aria-labelledby="seguridad" className="flex flex-col gap-4">
            <h2 id="seguridad" className={h2}>
              Estafas y riesgos: lo que más conviene vigilar
            </h2>
            <p className={p}>
              Farmear airdrops atrae a estafadores precisamente porque implica
              firmar transacciones con la cartera. Estas son las normas básicas:
            </p>
            <ul className="flex flex-col gap-3 list-disc pl-6">
              <li className={p}>
                Nunca compartas tu frase semilla ni tu clave privada, con nadie y
                por ningún motivo. Ningún proyecto legítimo te la pide.
              </li>
              <li className={p}>
                Desconfía de mensajes privados, anuncios y enlaces que te ofrecen
                «reclamar» un reparto. Verifica la dirección web en la cuenta
                oficial del proyecto antes de conectar la cartera.
              </li>
              <li className={p}>
                Lee lo que firmas. Si una transacción pide permisos que no
                entiendes, no la firmes; y revisa de vez en cuando los permisos
                que has dado a cada aplicación.
              </li>
              <li className={p}>
                Prueba primero con cantidades pequeñas y con la cartera dedicada.
              </li>
              <li className={p}>
                Un airdrop puede valer menos de lo que esperabas, llegar tarde o
                no llegar. Planifica tu tiempo y tu capital con eso en mente.
              </li>
            </ul>
          </section>

          <section aria-labelledby="impuestos" className="flex flex-col gap-4">
            <h2 id="impuestos" className={h2}>
              Impuestos
            </h2>
            <p className={p}>
              El tratamiento fiscal de los airdrops depende de tu país y de cada
              caso. Guarda un registro de fechas, importes y carteras, y consulta
              con un asesor fiscal cómo declararlos antes de venderlos.
            </p>
          </section>

          <section aria-labelledby="preguntas" className="flex flex-col gap-6">
            <h2 id="preguntas" className={h2}>
              Preguntas frecuentes
            </h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">¿Hace falta mucho dinero?</h3>
              <p className={p}>
                Depende del tipo. Las testnets no piden capital, solo tiempo. En
                los programas de puntos de mainnet hay que mover fondos reales, y
                cuánto necesites depende del proyecto. Empieza por lo que puedas
                permitirte perder.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">¿Puedo perder dinero?</h3>
              <p className={p}>
                Sí. Puedes perder en comisiones, por fallos del protocolo, por
                movimientos del mercado o por una estafa. Participar no garantiza
                ningún reparto.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">
                ¿Cómo sé si un airdrop es de verdad?
              </h3>
              <p className={p}>
                Comprueba que lo anuncia la cuenta oficial del proyecto y que la
                web que usas es la que ellos enlazan. Si el mensaje te llega por
                privado o te mete prisa, desconfía.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">
                ¿Cuántas carteras debo usar?
              </h3>
              <p className={p}>
                Con una cartera dedicada para farmear es suficiente para
                empezar. Los proyectos penalizan los patrones que parecen
                granjas de cuentas, así que no se trata de multiplicar carteras
                sino de usar bien las que tienes.
              </p>
            </div>
          </section>
        </article>

        <section aria-labelledby="profundizar" className="flex flex-col gap-6">
          <h2 id="profundizar" className={h2}>
            Guías para profundizar
          </h2>
          <p className={p}>
            Estas guías de La Agenda de SecretoDefi llevan lo anterior a la
            práctica. Las marcadas como «Suscriptores» forman parte de la edición
            de pago.
          </p>
          <ul className="grid grid-cols-1 small:grid-cols-2 gap-6">
            {relatedGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} campaign={CAMPAIGN} />
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
            href={withUtm(SUBSTACK_SUBSCRIBE_URL, CAMPAIGN, "suscribete")}
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
