"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Alireza Rastineh",
      "Former-Professional-Sprinter.tsx",
      "current= { junior: Front End Developer}",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <div className="relative h-32 w-32 sm:h-44 sm:w-44 mx-auto overflow-hidden rounded-[50%] object-cover">
        <Image
          priority
          src="https://i.imgur.com/bA7yhT9.jpg"
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
          Front End Developer
        </h2>
        <div className="h-32">
          {" "}
          <h1 className="text-4xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
        <div className="flex space-x-1 justify-center">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#education">
            <button className="heroButton">Education</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
