import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSubstack } from "react-icons/bs";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content rounded p-10">
      <nav className="flex flex-col gap-4">
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://x.com/SecretoDefi"
            target="_blank"
            aria-label="X (Twitter)"
            className="text-xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://t.me/secretodefi"
            target="_blank"
            aria-label="Telegram"
            className="text-xl"
          >
            <FaTelegram />
          </a>
          <a
            href="https://substack.secretodefi.com/subscribe"
            target="_blank"
            aria-label="Substack"
            className="text-xl"
          >
            <BsSubstack />
          </a>
          <a
            href="https://www.youtube.com/@secretodefi"
            target="_blank"
            aria-label="YouTube"
            className="text-xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/secretodefi/"
            target="_blank"
            aria-label="Instagram"
            className="text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
      <nav className="grid grid-flow-col gap-6">
        <Link href="/guias" className="link link-hover">Guías de DeFi y airdrops</Link>
        <Link href="/legal" className="link link-hover">Aviso legal y Política de privacidad</Link>
      </nav>
      <aside>
        <p>
          Secreto Defi ©{" "}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span> - Todos
          los derechos reservados
        </p>
      </aside>
      <nav className="grid grid-flow-col">
        <a href="https://t.me/chukinice" target="_blank" rel="noopener noreferrer">Design by: <img src="/logo-sin.png" alt="web developer" width={300} height={150} loading="lazy" className="w-32" /></a>
      </nav>
    </footer>
  );
};

export default Footer;
