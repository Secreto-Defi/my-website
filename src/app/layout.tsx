import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
        url: "/logo-secreto.png",
        width: 500,
        height: 500,
        alt: "Logo de Secreto Defi",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@SecretoDefi",
    creator: "@SecretoDefi",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo-secreto.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-secreto.png",
  },
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
    <html data-theme="forest" lang="es">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
