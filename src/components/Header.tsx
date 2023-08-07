"use client";

import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import "../app/globals.css";

type Props = {};

export default function Header({}: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {isMounted && (
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
            url="https://github.com/alirezarastineh"
            fgColor="#F7AB0A"
            bgColor="transparent"
            style={{ opacity: 0.7 }}
          />
          <SocialIcon
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
            url="https://linkedin.com/in/alirezarastineh"
            fgColor="#F7AB0A"
            bgColor="transparent"
            style={{ opacity: 0.7 }}
          />
          <a
            href="/public/Lebenslauf 2023.pdf"
            download
            className="uppercase hidden md:inline-flex text-[#F7AB0A]/70 grayscale hover:grayscale-0 transition-all font-bold ease-in-out duration-300 text-center justify-center"
          >
            Lebenslauf
          </a>
          <a
            href="/public/Lebenslauf 2023.pdf"
            download
            className="uppercase md:hidden inline-flex text-2xl text-[#F7AB0A]/70 grayscale hover:grayscale-0 transition-all font-bold ease-in-out duration-300 text-center justify-center"
          >
            CV
          </a>
        </motion.div>
      )}

      {isMounted && (
        <motion.div
          onClick={handleNavigation}
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
            network="email"
            fgColor="#F7AB0A"
            bgColor="transparent"
            style={{ opacity: 0.7 }}
          />
          <p className="uppercase hidden md:inline-flex text-sm text-[#F7AB0A]/70 grayscale hover:grayscale-0 transition-all font-bold ease-in-out duration-300">
            Kontakt
          </p>
        </motion.div>
      )}
    </header>
  );
}
