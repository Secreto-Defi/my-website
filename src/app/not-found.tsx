import type { Metadata } from "next";
import Link from "next/link";
import Footer from "./components/footer";
import NavBar from "./components/nav";
import { SUBSTACK_ARCHIVE_URL } from "./lib/links";

export const metadata: Metadata = {
  title: "Página no encontrada | Secreto Defi",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="font-figtree w-full bg-base-300 min-h-screen">
      <NavBar />

      <main className="mt-40 mb-20 px-6 small:px-20 xlarge:px-40 flex flex-col gap-8 items-start">
        <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
          Error 404
        </p>
        <h1 className="text-4xl small:text-6xl font-extrabold">
          No encuentro esa página
        </h1>
        <p className="text-lg font-light max-w-2xl">
          Puede que el enlace haya cambiado o que la dirección tenga un error.
          Mientras tanto, aquí tienes por dónde seguir.
        </p>
        <div className="flex flex-col small:flex-row gap-4">
          <Link
            href="/guias"
            className="btn btn-primary rounded-none font-bold tracking-wider uppercase"
          >
            Ver las guías
          </Link>
          <Link href="/" className="btn btn-outline rounded-none font-bold">
            Ir a la portada
          </Link>
          <a
            href={SUBSTACK_ARCHIVE_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-outline rounded-none font-bold"
          >
            Archivo de La Agenda
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
