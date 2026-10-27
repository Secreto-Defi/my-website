import React from "react";
import ArrowRight from "../common/arrowright";

const Promotion = () => {
  return (
    <div className="flex flex-col py-14 small:py-24 gap-10 small:gap-24 items-center w-full">
      <div className="flex flex-col small:flex-row w-full small:justify-between justify-center items-center small:items-end gap-10 bg-base-100 p-6 small:p-10 border border-zinc-800">
        <div className="flex flex-col gap-14 small:items-start small:justify-between w-full max-w-xl">
          <div className="flex flex-col gap-4 text-center small:text-start">
            <p className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
              Promociones
            </p>
            <h2 className="text-4xl small:text-5xl font-bold">Impulsa tu proyecto</h2>
          </div>
          <p className="text-base small:text-lg text-center small:text-start">
            Si necesitas promocionar tu proyecto, no dudes en ponerte en contacto conmigo y discutiremos las mejores opciones.
          </p>
        </div>
        <div className="flex items-end justify-end group">
          <a href="https://t.me/secretodefi" target="_blank">
            <button className="flex items-center gap-3 text-lg small:text-xl font-semibold btn btn-primary rounded-none">
              Contacta conmigo{" "}
              <div className="rotate-45 group-hover:transform group-hover:translate-x-1 transition duration-300 ease-in-out">
                <ArrowRight width={14} />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
