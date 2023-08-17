"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import "../app/globals.css";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hallo, mein Name ist Alireza Rastineh",
      "Ehemaliger-Profi-Sprinter.tsx",
      "derzeitiger = { junior: Frontend Entwickler }",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const smoothScroll =
    (href: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <div className="relative h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-[50%]">
        <Image
          priority
          src="https://i.imgur.com/25djQ92.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="z-20">
        <h2 className="flex justify-center text-sm sm:text-base uppercase text-white pb-2 tracking-[10px] sm:tracking-[15px]">
          Frontend Entwickler
        </h2>
        <div className="h-32">
          {" "}
          <h1 className="text-4xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
        <div className="flex space-x-1 justify-center">
          <Link href="#about" passHref>
            <button onClick={smoothScroll("#about")} className="heroButton">
              Über
            </button>
          </Link>
          <Link href="#education" passHref>
            <button onClick={smoothScroll("#education")} className="heroButton">
              Bildung
            </button>
          </Link>
          <Link href="#skills" passHref>
            <button onClick={smoothScroll("#skills")} className="heroButton">
              Skills
            </button>
          </Link>
          <Link href="#projects" passHref>
            <button onClick={smoothScroll("#projects")} className="heroButton">
              Projekte
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
