"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};
export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-3 sm:px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Über
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      >
        <div className="top-[22px] sm:top-[80px] md:top-[90px] lg:top-[20px] xl:top-0 relative -mb-24 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full sm:w-56 sm:h-56 md:rounded-lg md:w-[350px] md:h-[450px] xl:w-[350px] xl:h-[450px] 2xl:w-[400px] 2xl:h-[500px] overflow-hidden">
          <div className="hidden sm:block">
            <Image
              priority
              src="https://i.imgur.com/3Or96X2.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="block sm:hidden">
            <Image
              priority
              src="https://i.imgur.com/C8UHksa.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </motion.div>
      <div className="relative space-y-1 sm:space-y-5 px-0 md:px-10 top-[50px] sm:top-[50px] md:top-[90px] lg:top-[20px] xl:top-0">
        <h4 className="md:text-2xl xl:text-3xl 2xl:text-4xl text-xl font-semibold">
          Hier ist ein{" "}
          <span className="underline decoration-[#F7AB0A]/50">kleiner</span>{" "}
          Hintergrund
        </h4>
        <p className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
          Ein Junior Frontend-Entwickler mit einem B. Sc. & M. Sc. Abschluss in
          Computer Engineering - Software von der Islamic Azad University
          Sciences and Researches Branch in Teheran und Studienerfahrung in
          Medieninformatik an der Hochschule für Technik und Wirtschaft Berlin.
          Des Weiteren habe ich erfolgreich an einem Full-Stack Entwicklung
          Weiterbildung an der Code Academy Berlin teilgenommen. Mein
          Schwerpunkt liegt hauptsächlich auf Frontend-Entwicklung, aber ich
          verfüge auch über solide Kenntnisse in Backend-Entwicklung, um
          effiziente und umfassende Lösungen zu ermöglichen. Ich halte mich an
          Protokolle und sorge für pünktliche Projektfertigstellung. Ich
          beherrsche TypeScript, React, Tailwind CSS, Node.js, Express JS,
          MongoDB und andere Technologien.Früher war ich erfolgreicher Sprinter
          und strebe danach, ein Senior Developer zu werden und letztendlich ein
          Blockchain-Unternehmen zu leiten.
        </p>
      </div>
    </motion.div>
  );
}
