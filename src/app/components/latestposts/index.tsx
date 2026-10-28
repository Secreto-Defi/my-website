import Link from "next/link";
import React from "react";
import { SUBSTACK_ARCHIVE_URL } from "../../lib/links";
import { getLatestPosts } from "../../lib/substack";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Europe/Madrid",
});

const LatestPosts = async () => {
  const posts = await getLatestPosts(3);

  // Si el feed no responde, la sección se oculta en vez de mostrarse vacía.
  if (posts.length === 0) return null;

  return (
    <section className="flex flex-col py-14 small:py-24 gap-10 small:gap-16 items-center w-full">
      <div className="flex flex-col gap-4 text-center">
        <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
          Substack
        </p>
        <h2 className="text-4xl small:text-5xl font-bold">
          Lo último de La Agenda de SecretoDefi
        </h2>
      </div>
      <div className="grid grid-cols-1 small:grid-cols-3 gap-6 w-full">
        {posts.map((post) => (
          <article
            key={post.url}
            className="card relative bg-base-100 shadow-xl rounded-none h-full hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out"
          >
            <div className="card-body">
              <time className="text-sm opacity-70" dateTime={post.publishedAt}>
                {dateFormatter.format(new Date(post.publishedAt))}
              </time>
              <h3 className="card-title">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener"
                  className="after:absolute after:inset-0"
                >
                  {post.title}
                </a>
              </h3>
              {post.description && (
                <p className="line-clamp-3">{post.description}</p>
              )}
              <span
                aria-hidden="true"
                className="mt-auto pt-4 font-bold uppercase tracking-wider"
              >
                Leer en Substack →
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-col small:flex-row gap-4 items-center">
        <Link href="/guias" className="btn btn-primary rounded-none font-bold">
          Ver las guías
        </Link>
        <a
          href={SUBSTACK_ARCHIVE_URL}
          target="_blank"
          rel="noopener"
          className="btn btn-outline rounded-none font-bold"
        >
          Archivo completo
        </a>
      </div>
    </section>
  );
};

export default LatestPosts;
