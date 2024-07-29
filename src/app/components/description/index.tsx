import React from "react";
import ArrowRight from "../common/arrowright";

const Description = () => {
  return (
    <div className="flex flex-col py-14 small:py-24 gap-10 small:gap-24 items-center justify-between w-full">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
          Secreto Defi
        </h2>
        <h1 className="text-4xl small:text-5xl font-bold">Un poco de mi</h1>
      </div>

      <div className="w-full grid grid-cols-1 small:grid-cols-2 gap-2">
        <div className="bg-base-100 p-4 small:p-10 flex flex-col gap-4 group">
          <div className="flex items-center gap-3">
            <div className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary">
              <ArrowRight width={16} />
            </div>
            <h2 className="text-2xl small:text-3xl font-semibold">
              Los inicios
            </h2>
          </div>
          <p className="text-justify leading-relaxed font-light text-sm small:text-base">
            En pleno bull run en el DefiSummer del 2021, tras estar viviendo lo
            que es un mercado lleno de oportunidades, decido lanzarme a crear
            contenido de forma pública en YouTube tras ver que las finanzas
            descentralizadas se me daban muy bien y que, por desgracia, en la
            comunidad hispano-hablante había muy poca información.
          </p>
        </div>

        <div className="bg-base-100 p-4 small:p-10 flex flex-col gap-4 group">
          <div className="flex items-center gap-3">
            <div className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary">
              <ArrowRight width={16} />
            </div>
            <h2 className="text-2xl small:text-3xl font-semibold">
              De Marc a Secreto Defi
            </h2>
          </div>
          <p className="text-justify leading-relaxed font-light text-sm small:text-base">
            Soy una persona enfocada al 100% en las
            oportunidades dentro del ecosistema DeFi dónde vamos rotando entre
            las diferentes narrativas para sacarle el máximo rendimiento, por
            ejemplo, con el farming/liquidez concentrada, con estrategias de
            máxima eficiencia de capital, con el farmeo de testnets y mainnets
            para calificar en el reparto de futuros airdrops y mucho más.
          </p>
        </div>
        <div className="bg-base-100 p-4 small:p-10 flex flex-col gap-4 group">
          <div className="flex items-center gap-3">
            <div className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary">
              <ArrowRight width={16} />
            </div>
            <h2 className="text-2xl small:text-3xl font-semibold">
              Mi marca personal
            </h2>
          </div>
          <p className="text-justify leading-relaxed font-light text-sm small:text-base">
            Nace para ayudar a otras personas en este nicho tan complicado y
            bonito a la vez, conmigo podrás ahorrarte un montón de horas de
            investigación gracias a la experiencia que he vivido yo mismo. Paso
            a paso, herramientas necesarias para tu día a día, tips de seguridad
            para no caer en estafas u otras ayudas que te facilitarán el moverte
            por todo el ecosistema.
          </p>
        </div>
        <div className="bg-primary text-base-100 p-4 small:p-10 flex flex-col gap-4 group">
          <div className="flex items-center gap-3">
            <div className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:text-base-100">
              <ArrowRight width={16} />
            </div>
            <h2 className="text-2xl small:text-3xl font-semibold">Oportunidad</h2>
          </div>
          <p className="text-justify leading-relaxed font-semibold text-sm small:text-base">
            Si te ha parecido interesante y crees que es una buena oportunidad
            para ti, aquí debajo te muestro todo lo que puedo ofrecerte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
