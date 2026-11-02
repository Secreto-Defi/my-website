import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// Figtree se descarga al compilar y se sirve desde nuestro propio dominio: así
// no hay una petición bloqueante a Google Fonts antes de pintar la página y
// Next ajusta la tipografía de reserva para que el texto no "salte" al cargar.
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const SITE_URL = "https://www.secretodefi.com";
const TITLE = "Secreto Defi | Airdrops, DeFi y yield farming en español";
const DESCRIPTION =
  "Guías, estrategias y seguridad para moverte por el ecosistema DeFi: caza de airdrops, yield farming y asesorías personalizadas. Contenido diario en español.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Secreto Defi",
    locale: "es_ES",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Secreto Defi: airdrops, DeFi y yield farming en español",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SecretoDefi",
    creator: "@SecretoDefi",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-home.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-secreto.png",
  },
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Secreto Defi",
  alternateName: ["SecretoDefi", "Secreto DeFi"],
  url: SITE_URL,
  inLanguage: "es",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Secreto Defi",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-secreto.png`,
  description: DESCRIPTION,
  sameAs: [
    "https://x.com/SecretoDefi",
    "https://t.me/secretodefi",
    "https://www.youtube.com/@secretodefi",
    "https://www.instagram.com/secretodefi/",
    "https://substack.secretodefi.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="forest" lang="es" className={figtree.variable}>
      <body className={figtree.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
