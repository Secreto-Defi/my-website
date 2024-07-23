import React from "react";
import { BsSubstack } from "react-icons/bs";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import ArrowRight from "../common/arrowright";

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  platform: string;
  IconComponent: React.ComponentType;
  isNew?: boolean;
}

const LinkCard: React.FC<LinkCardProps> = ({
  href,
  title,
  description,
  platform,
  IconComponent,
  isNew,
}) => (
  <div className="indicator w-full">
    {isNew && (
      <span className="right-10 top-6 small:right-0 small:top-0 indicator-item badge badge-primary px-5 py-4 text-base font-semibold">
        new
      </span>
    )}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col p-10 bg-base-100 w-full h-[350px] small:h-[400px] justify-between border border-zinc-800 cursor-pointer hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-lg small:text-xl font-bold uppercase">{title}</h2>
        <p className="text-base small:text-lg">{description}</p>
      </div>
      <div className="flex w-full justify-between items-end">
        <div className="flex flex-col-reverse gap-10 items-start justify-between text-5xl font-bold">
          <h2>{platform}</h2>
          <div className="text-6xl">
            <IconComponent />
          </div>
        </div>
        <ArrowRight width={18} />
      </div>
    </a>
  </div>
);

const Links = () => {
  return (
    <div className="flex flex-col py-14 small:py-24 gap-10 small:gap-24 items-center w-full">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
          Social
        </h2>
        <h1 className="text-4xl small:text-5xl font-bold">Encuéntrame aquí</h1>
      </div>
      <div className="w-full flex flex-col small:flex-row">
        <LinkCard
          href="https://x.com/SecretoDefi"
          title="Encuéntrame en la red"
          description="34k+ seguidores"
          platform="X.com"
          IconComponent={FaXTwitter}
        />
        <LinkCard
          href="https://t.me/secretodefi"
          title="Únete a la comunidad"
          description="5k+ miembros"
          platform="Telegram"
          IconComponent={FaTelegram}
        />
        <LinkCard
          href="https://secretodefi.substack.com/subscribe"
          title="Consigue la membresía"
          description="Entérate primero"
          platform="Substack"
          IconComponent={BsSubstack}
          isNew
        />
      </div>
    </div>
  );
};

export default Links;
