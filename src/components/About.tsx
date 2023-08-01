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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-16 sm:top-16 md:top-56 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        About
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
        <div className="top-[20px] sm:top-[80px] md:top-[90px] lg:top-[20px] xl:top-0 relative -mb-24 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full sm:w-56 sm:h-56 md:rounded-lg md:w-[350px] md:h-[450px] xl:w-[350px] xl:h-[450px] 2xl:w-[400px] 2xl:h-[500px] overflow-hidden">
          <Image
            priority
            src="https://i.imgur.com/rbmFybY.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </motion.div>
      <div className="relative space-y-1 px-0 md:px-10 top-[50px] sm:top-[50px] md:top-[90px] lg:top-[20px] xl:top-0">
        <h4 className="md:text-2xl xl:text-3xl 2xl:text-4xl text-xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm lg:text-base xl:text-xl 2xl:text-2xl">
          A Junior Front End Developer with B. Sc. & M. Sc. Degree in Computer
          Engineering - Software from Islamic Azad University Sciences and
          Researches Branch of Tehran and study experience in Digital Media &
          Computing at University of Applied Sciences Berlin. Further skilled at
          a Full Stack Development bootcamp at Code Academy Berlin. Focused
          primarily on front end, I also possess a solid understanding of
          backend development, enabling efficient, comprehensive solutions. I
          adhere to protocols and ensure timely project completion. Proficient
          in TypeScript, React, Tailwind CSS, Node.js, Express JS, MongoDB,
          among others. Formerly a successful sprinter, aiming to become a
          Senior Developer and eventually lead a blockchain company.
        </p>
      </div>
    </motion.div>
  );
}
