import React from "react";
import Ask from "../ask";
import ArrowRight from "../common/arrowright";

const FAQ = [
  {
    number: 1,
    question: "Información Exclusiva",
    response:
      "Mantente al tanto de las últimas noticias, análisis y narrativas del sector. Mi contenido exclusivo te proporcionará información privilegiada para tomar decisiones.",
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
      "Tienes dos opciones: una gratuíta enfocada a oportunidades sin capital y otra más avanzada, de pago. Ésta última más enfocada en obtener rentabilidad con yield farming. (15€/mes)",
  },
];

const About = () => {
  return (
    <div className="flex flex-col gap-24 py-24 items-start w-full">
      <div className="flex w-full justify-between gap-10 min-h-[500px]">
        <div className="flex flex-col items-start justify-between w-full">
          <div className="flex flex-col gap-4 text-start">
            <h2 className="uppercase text-primary font-semibold text-2xl tracking-widest">
              Suscripción
            </h2>
            <h1 className="text-5xl font-bold">Preguntas frecuentes</h1>
          </div>
          <div className="flex flex-col bg-base-100 p-10 w-full justify-between h-64">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">
                ¿Por qué deberías suscribirte?
              </h2>
              <p className="flex flex-col gap-2">
                <span>La suscripción en Substack consta de dos opciones: una gratuita y otra de pago.</span>
                <span>Éstos son los motivos principales por lo que
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
