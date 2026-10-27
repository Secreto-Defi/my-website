import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const cardsData = [
  {
    title: "Salida de fiat",
    subtitle: "No mezcles caminos entre la entrada y salida.",
    date: "2023-03-05",
    dateLabel: "5 mar 2023",
    twitterLink: "https://x.com/SecretoDefi/status/1632457063367319552",
  },
  {
    title: "Seguridad",
    subtitle: "Herramientas de seguridad para evitar perder tu liquidez.",
    date: "2023-10-18",
    dateLabel: "18 oct 2023",
    twitterLink: "https://x.com/SecretoDefi/status/1714705695868670278",
  },
  {
    title: "Tokens olvidados",
    subtitle:
      "Una herramienta gratuita para ver qué tokens y rewards sin reclamar te quedan en tus wallets, con modo lectura.",
    date: "2026-08-15",
    dateLabel: "15 ago 2026",
    twitterLink: "https://x.com/SecretoDefi/status/2088652662052929816",
  },
  {
    title: "Perp Radar",
    subtitle:
      "Comprueba con tu dirección cuánto capital dejaste, y dónde, en los perp DEX que farmeaste.",
    date: "2026-10-08",
    dateLabel: "8 oct 2026",
    twitterLink: "https://x.com/SecretoDefi/status/2108197827868262892",
  },
];

const Carousel = () => {
  return (
    <div className="flex flex-col py-14 small:py-24 gap-10 small:gap-24 items-center w-full">
      <div className="flex flex-col gap-4 text-center">
        <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
          X.com
        </p>
        <h2 className="text-4xl small:text-5xl font-bold">
          Algunos de mis posts
        </h2>
      </div>
      <div className="grid grid-cols-1 small:grid-cols-2 large:grid-cols-4 gap-6 w-full">
        {cardsData.map((card) => (
          <div
            key={card.twitterLink}
            className="card bg-base-100 shadow-xl rounded-none h-full"
          >
            <div className="flex items-center gap-2 px-8 pt-8 text-sm text-base-content/70">
              <FaXTwitter aria-hidden="true" />
              <span>@SecretoDefi</span>
              <span aria-hidden="true">·</span>
              <time dateTime={card.date}>{card.dateLabel}</time>
            </div>
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p>{card.subtitle}</p>
              <div className="card-actions justify-end mt-auto pt-4">
                <a
                  href={card.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-none font-bold"
                >
                  Ver en X
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
