import React from "react";
import Image from "next/image";

const Carousel = () => {
  const cardsData = [
    {
      imgSrc: "/post-1.png",
      title: "Salida de fiat",
      subtitle: "No mezcles caminos entre la entrada y salida.",
      twitterLink: "https://x.com/SecretoDefi/status/1632457063367319552",
    },
    {
      imgSrc: "/post-2.png",
      title: "Seguridad",
      subtitle: "Herramientas de seguridad para evitar perder tu liquidez.",
      twitterLink: "https://x.com/SecretoDefi/status/1714705695868670278",
    },
    {
      imgSrc: "/post-3.png",
      title: "Reclamos",
      subtitle: "Reclamar tokens, fondos o retirar liquidez de un protocolo desde el Smart Contract.",
      twitterLink: "https://x.com/SecretoDefi/status/1764707335484604839",
    },
    {
      imgSrc: "/post-4.png",
      title: "Proyectos",
      subtitle: "Paga con tus cryptos. Este bullrun lo vas a necesitar.",
      twitterLink: "https://x.com/SecretoDefi/status/1814676798472405491",
    },
  ];

  return (
    <div className="flex flex-col py-14 small:py-24 gap-10 small:gap-24 items-center w-full">
      <div className="flex flex-col gap-4 text-center">
        <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
          X.com
        </p>
        <h2 className="text-4xl small:text-5xl font-bold">Algunos de mis post</h2>
      </div>
      <div className="grid grid-cols-1 small:grid-cols-2 large:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl rounded-none"
          >
            <div className="relative w-full h-56 bg-white">
              <Image
                src={card.imgSrc}
                alt={card.title}
                layout="fill"
                objectFit="contain"
                className="object-top"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p>{card.subtitle}</p>
              <div className="card-actions justify-end">
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
