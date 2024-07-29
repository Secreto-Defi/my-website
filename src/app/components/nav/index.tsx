"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsSubstack } from "react-icons/bs";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import Spiral from "../common/spiral";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div
          className={`navbar bg-base-300 w-full small:px-20 xlarge:px-40 py-5 fixed top-0 z-50 transition-shadow ${
            isScrolled ? "shadow-sm shadow-base-100" : ""
          }`}
        >
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <a
            href="/"
            className="flex-1 font-bold text-xl small:text-2xl uppercase items-end gap-2 "
          >
            <p>
              <span className="text-2xl small:text-3xl font-extrabold">S</span>
              ecreto
            </p>
            <p>
              <span className="text-2xl small:text-3xl font-extrabold">D</span>
              efi
            </p>
          </a>
          <div className="hidden flex-none lg:block">
            <div className="menu menu-horizontal flex items-center gap-5 text-3xl">
              {/* Navbar menu content here */}
              <a href="https://x.com/SecretoDefi" target="_blank">
                <div className="flex items-center justify-center p-3 bg-transparent hover:bg-primary cursor-pointer text-white hover:text-base-100">
                  <FaXTwitter />
                </div>
              </a>
              <a href="https://t.me/secretodefi" target="_blank">
                <div className="flex items-center justify-center p-3 bg-transparent hover:bg-primary cursor-pointer text-white hover:text-base-100">
                  <FaTelegram />
                </div>
              </a>
              <a
                href="https://secretodefi.substack.com/subscribe"
                target="_blank"
              >
                <div className="flex items-center justify-center p-3 bg-transparent hover:bg-primary cursor-pointer text-white hover:text-base-100">
                  <BsSubstack />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@secretodefi"
                target="_blank"
              >
                <div className="flex items-center justify-center p-3 bg-transparent hover:bg-primary cursor-pointer text-white hover:text-base-100">
                  <FaYoutube />
                </div>
              </a>
              <a
                href="https://www.instagram.com/secretodefi/"
                target="_blank"
              >
                <div className="flex items-center justify-center p-3 bg-transparent hover:bg-primary cursor-pointer text-white hover:text-base-100">
                <FaInstagram />
                </div>
              </a>
              <div>
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 rounded-sm"
                  >
                    Theme
                    <svg
                      width="12px"
                      height="12px"
                      className="inline-block h-2 w-2 fill-current opacity-60"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2048 2048"
                    >
                      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
                  >
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Forest"
                        value="default"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Sunset"
                        value="sunset"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Dracula"
                        value="dracula"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Dim"
                        value="dim"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative items-center justify-center flex small:hidden pr-4">
            <Image
              src="/logo.svg"
              alt="logo secreto defi"
              width={30}
              height={30}
              objectFit="cover"
              quality={100}
            />
            <div className="absolute">
              <Spiral />
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 min-h-full w-80 py-10 gap-2">
          {/* Sidebar content here */}
          <a
            href="/"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-center"
          >
            Inicio
          </a>
          <a
            href="https://t.me/secretodefi"
            target="_blank"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-center"
          >
            Telegram
          </a>
          <a
            href="https://x.com/SecretoDefi"
            target="_blank"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-center"
          >
            X.com
          </a>
          <a
            href="https://secretodefi.substack.com/subscribe"
            target="_blank"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-center"
          >
            Substack
          </a>
          <a
            href="https://www.instagram.com/secretodefi/"
            target="_blank"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-center"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/secretodefi/"
            target="_blank"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-center"
          >
            Youtube
          </a>
          <a
            href="mailto:info@secretodefi.com"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-center"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
