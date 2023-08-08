"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -75 : 75,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-full w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter transition duration-300 ease-in-out overflow-hidden">
          <Image
            priority
            src="https://i.imgur.com/xNYFkgI.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/70 h-16 w-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-2xl font-bold text-black opacity-100">
            100%
          </p>
        </div>
      </div>
    </div>
  );
}
