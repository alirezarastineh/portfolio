"use client";

import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import "../app/globals.css";
import { PERSONAL_INFO, FILE_PATHS } from "../constants";

const Header = React.memo(function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  function downloadFiles(): void {
    const link1 = document.createElement("a");
    link1.href = FILE_PATHS.CV_GERMAN;
    link1.download = "Lebenslauf - Alireza Rastineh.pdf";
    document.body.appendChild(link1);
    link1.click();
    document.body.removeChild(link1);

    const link2 = document.createElement("a");
    link2.href = FILE_PATHS.CV_ENGLISH;
    link2.download = "CV - Alireza Rastineh.pdf";
    document.body.appendChild(link2);
    link2.click();
    document.body.removeChild(link2);
  }

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
            url={PERSONAL_INFO.GITHUB_URL}
            fgColor="#F7AB0A"
            bgColor="transparent"
            style={{ opacity: 0.7 }}
            onClick={(e) => {
              e.preventDefault();
              window.open(PERSONAL_INFO.GITHUB_URL, "_blank");
            }}
            aria-label="Visit Alireza's GitHub profile"
          />
          <SocialIcon
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
            url={PERSONAL_INFO.LINKEDIN_URL}
            fgColor="#F7AB0A"
            bgColor="transparent"
            style={{ opacity: 0.7 }}
            onClick={(e) => {
              e.preventDefault();
              window.open(PERSONAL_INFO.LINKEDIN_URL, "_blank");
            }}
            aria-label="Visit Alireza's LinkedIn profile"
          />

          <button
            onClick={downloadFiles}
            className="uppercase hidden md:inline-flex ml-3 mt-1 text-[#F7AB0A]/70 grayscale hover:grayscale-0 transition-all font-bold ease-in-out duration-300 text-center justify-center bg-transparent border-none cursor-pointer"
            aria-label="Download CV in German"
          >
            Lebenslauf
          </button>
          <button
            onClick={downloadFiles}
            className="uppercase md:hidden inline-flex ml-3 mt-1 text-2xl text-[#F7AB0A]/70 grayscale hover:grayscale-0 transition-all font-bold ease-in-out duration-300 text-center justify-center bg-transparent border-none cursor-pointer"
            aria-label="Download CV"
          >
            CV
          </button>
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
            aria-label="Go to contact section"
          />
          <p className="uppercase hidden md:inline-flex text-[#F7AB0A]/70 grayscale hover:grayscale-0 transition-all font-bold ease-in-out duration-300">
            Kontakt
          </p>
        </motion.div>
      )}
    </header>
  );
});

export default Header;
