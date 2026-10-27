import React from "react";
import Ask from "../ask";
import ArrowRight from "../common/arrowright";

const FAQ = [
  {
    number: 1,
    question: "Información Exclusiva",
    response:
      "Mantente al tanto de las últimas noticias, análisis y narrativas del sector. Mi contenido exclusivo te dará información de primera mano para que tomes tus propias decisiones.",
  },
  {
    number: 2,
    question: "Guías y Tutoriales",
    response:
      "Aprende cómo aprovechar al máximo las oportunidades que ofrece el ecosistema con mis guías y tutoriales paso a paso. Desde cómo empezar hasta estrategias avanzadas, te ayudaré a resolver todas tus dudas y a manejarte con seguridad por el sector.",
  },
  {
    number: 3,
    question: "Consejos de Seguridad",
    response:
      "La seguridad es una de mis prioridades. Recibe consejos prácticos para proteger tus activos y evitar estafas en el ecosistema. ¡Invierte con confianza sabiendo que estás haciendo las cosas bien!",
  },
  {
    number: 4,
    question: "Airdrops",
    response:
      "No te pierdas las mejores oportunidades para farmear airdrops antes que nadie en mi comunidad. Consigue capitalizarte con un bajo coste e incluso, de forma GRATUITA.",
  },
  {
    number: 5,
    question: "Precio",
    response:
      "Tienes dos opciones: una gratuita enfocada a oportunidades sin capital y otra más avanzada, de pago. Esta última más enfocada en obtener rentabilidad con yield farming. (22 €/mes o 250 €/año)",
  },
];

const About = () => {
  return (
    <div className="flex flex-col py-14 small:py-24 items-start w-full">
      <div className="flex flex-col small:flex-row w-full justify-between gap-10 small:min-h-[500px]">
        <div className="flex flex-col items-start small:justify-between gap-10 small:gap-0 w-full">
          <div className="flex flex-col gap-4 text-center small:text-start">
            <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
              Suscripción
            </p>
            <h2 className="text-4xl small:text-5xl font-bold">Preguntas frecuentes</h2>
          </div>
          <div className="flex flex-col bg-base-100 p-4 small:p-10 w-full justify-between small:h-64">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold">
                ¿Por qué deberías suscribirte?
              </h3>
              <p className="flex flex-col gap-2 text-sm small:text-base">
                <span>La suscripción a La Agenda de SecretoDefi, en Substack, consta de dos opciones: una gratuita y otra de pago.</span>
                <span>Estos son los motivos principales por los que
                deberías leer mi contenido y que seguro van a responder a muchas
                de tus preguntas.</span>
              </p>
            </div>
            <div className="flex w-full justify-end">
              <ArrowRight width={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full justify-between">
          {FAQ.map((item, index) => (
            <Ask
              key={index}
              number={item.number}
              question={item.question}
              response={item.response}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
