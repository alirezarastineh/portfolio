"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative min-h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Skills
      </h3>
      <h4 className="sm:hidden absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm sm:text-base xl:top-28 2xl:top-56 text-center">
        Klicken Sie auf eine Fähigkeit, um die aktuelle Kenntnisstufe zu sehen
      </h4>
      <h4 className="hidden sm:block absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm sm:text-base xl:top-28 2xl:top-56 text-center">
        Hovern Sie über eine Fähigkeit, um die aktuelle Kenntnisstufe zu sehen
      </h4>
      <div className="xl:mt-48 grid grid-cols-4 2xl:grid-cols-5 gap-5 top-20 sm:top-14 relative">
        <Skill percentage={40} imageUrl="https://i.imgur.com/b0f0L7E.png" />
        <Skill percentage={30} imageUrl="https://i.imgur.com/lmNHoXw.png" />
        <Skill percentage={20} imageUrl="https://i.imgur.com/UZMww1q.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/IvdoND0.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/Jx7gRFU.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/Eonjo5f.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/AelwhLw.png" />
        <Skill percentage={25} imageUrl="https://i.imgur.com/taH2fNN.png" />
        <Skill percentage={20} imageUrl="https://i.imgur.com/6bxEQ9s.png" />
        <Skill percentage={20} imageUrl="https://i.imgur.com/F4QkDAV.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/E2gonVz.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/LqZKvdX.png" />
        <Skill percentage={5} imageUrl="https://i.imgur.com/7Cq9Dsl.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/EMcIArs.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/UjFAGog.png" />
        <Skill percentage={5} imageUrl="https://i.imgur.com/pNla9uu.png" />
        <Skill percentage={20} imageUrl="https://i.imgur.com/9hO5BKj.png" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/X1wfpyX.png" />
        <Skill percentage={30} imageUrl="https://i.imgur.com/A15r8O4.png" />
        <Skill percentage={5} imageUrl="https://i.imgur.com/zWXFYGT.png" />
      </div>
    </motion.div>
  );
}
