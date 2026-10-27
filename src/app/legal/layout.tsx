import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal y Política de privacidad | Secreto Defi",
  description:
    "Aviso legal y política de privacidad de secretodefi.com.",
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
