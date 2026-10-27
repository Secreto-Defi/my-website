import React from "react";
import { ContactForm } from "../common/form";
import Image from "next/image";
import ArrowRight from "../common/arrowright";

const Advisory = () => {
  return (
    <div className="flex flex-col py-14 small:py-24 gap-10 small:gap-24 items-center w-full">
      <div className="flex flex-col gap-4 text-center">
        <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
          Asesorías
        </p>
        <h2 className="text-4xl small:text-5xl font-bold">Todo lo que necesitas</h2>
      </div>

      <div className="flex w-full items-start gap-20">
        <div className="flex flex-col small:flex-row w-full items-center small:items-start gap-10">
          <div className="flex flex-col place-items-center gap-8 small:w-[500px]">
            <div className="flex items-center justify-center h-28 bg-base-100 w-full">
              <h3 className="text-xl font-semibold text-center rounded-2x tracking-wider">
                ¿Qué temas <br />
                <span className="font-bold uppercase">podemos tratar</span>?
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-primary flex gap-5 items-center p-4">
                  <Image src="/ojos.png" alt="ojos" width={50} height={50} />
                  <p className="font-semibold">
                    Diferenciar conceptos entre YIELD FARMING, AGGREGATOR, GAS REFUEL, etc.
                  </p>
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary flex gap-5 items-center p-4">
                  <p className="font-semibold">
                    Qué es lending, borrowing, vesting, leverage y mucho más
                  </p>
                  <Image
                    src="/bombilla.png"
                    alt="bombilla"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary flex gap-5 items-center p-4">
                  <Image
                    src="/tokenomics.png"
                    alt="tokenomics"
                    width={50}
                    height={50}
                  />
                  <p className="font-semibold">
                    Cómo interpretar unos tokenomics (parte fundamental del
                    proyecto)
                  </p>
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-secondary flex gap-5 items-center p-4">
                  <p className="font-semibold">
                    Facilitarte herramientas para gestionar tu portfolio
                  </p>
                  <Image
                    src="/herramientas.png"
                    alt="herramientas"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary flex gap-5 items-center p-4">
                  <Image src="/dudas.png" alt="dudas" width={50} height={50} />
                  <p className="font-semibold">
                    Aun así, si durante la sesión te surgen dudas, yo estaré
                    compartiendo mi pantalla para resolverlo al momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rotate-90 small:rotate-45 small:mt-12"><ArrowRight width={18} /></div>
          <div className="flex flex-col place-items-center gap-8 small:w-[500px]">
            <div className="flex items-center justify-center h-28 bg-base-100 w-full">
              <h3 className="text-xl font-semibold text-center tracking-wider">
                ¿Cómo pedir <br />
                <span className="font-bold uppercase">
                  asesoría personalizada
                </span>
                ?
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-secondary flex gap-5 items-center p-4">
                  <Image
                    src="/libros.png"
                    alt="libros"
                    width={50}
                    height={50}
                  />
                  <p className="font-semibold">
                    ¡Analiza, recoge y apunta todas tus dudas!
                  </p>
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-secondary flex gap-5 items-center p-4">
                  <p className="font-semibold">
                    Rellena el formulario con los datos y envíalo
                  </p>
                  <Image src="/form.png" alt="form" width={50} height={50} />
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary flex gap-5 items-center p-4">
                  <Image
                    src="/portatil.png"
                    alt="portatil"
                    width={50}
                    height={50}
                  />
                  <p className="font-semibold">
                    Prepararé una sesión personalizada, de acuerdo a tu listado
                    sobre dudas y necesidades
                  </p>
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary flex gap-5 items-center p-4">
                  <p className="font-semibold">
                    Me pondré en contacto contigo y cuadraremos la reunión según
                    disponibilidad
                  </p>
                  <Image src="/reloj.png" alt="reloj" width={50} height={50} />
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-secondary flex gap-5 items-center p-4">
                  <Image src="/check.png" alt="check" width={50} height={50} />
                  <p className="font-semibold">
                    Dispondremos de una hora para resolver todas las dudas
                    planteadas al inicio, con material personalizado y preguntas
                    abiertas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rotate-90 small:rotate-45 small:mt-12"><ArrowRight width={18} /></div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Advisory;
