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
            className="text-xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://t.me/secretodefi"
            target="_blank"
            className="text-xl"
          >
            <FaTelegram />
          </a>
          <a
            href="https://secretodefi.substack.com/subscribe"
            target="_blank"
            className="text-xl"
          >
            <BsSubstack />
          </a>
          <a
            href="https://www.youtube.com/@secretodefi"
            target="_blank"
            className="text-xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/secretodefi/"
            target="_blank"
            className="text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
      <nav className="grid grid-flow-col">
        <Link href="/legal" className="link link-hover">Aviso legal y Política de privacidad</Link>
      </nav>
      <aside>
        <p>
          Secreto Defi © ${new Date().getFullYear()} - Todos los derechos
          reservados
        </p>
      </aside>
      <nav className="grid grid-flow-col">
        <a href="https://t.me/chukinice" target="_blank" >Design by: <img src="/logo-sin.png" alt="web developer" className="w-32" /></a>
      </nav>
    </footer>
  );
};

export default Footer;
