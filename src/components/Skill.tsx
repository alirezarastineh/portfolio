"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type SkillProps = Readonly<{
  directionLeft?: boolean;
  percentage: number;
  imageUrl: string;
  alt: string;
}>;

const Skill = React.memo(function Skill({
  directionLeft,
  percentage,
  imageUrl,
  alt,
}: SkillProps) {
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
        <div className="rounded-full border border-gray-500/50 relative w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 filter transition duration-300 ease-in-out overflow-hidden">
          <Image
            priority
            src={imageUrl}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
            }}
            onTouchStart={(e) => e.preventDefault()}
          />
        </div>
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/80 h-16 w-16 md:w-20 md:h-20 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-2xl font-bold text-black opacity-100">
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
});

export default Skill;
