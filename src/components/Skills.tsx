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
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm xl:top-28 2xl:top-56 text-center">
        Hovern Sie über eine Fähigkeit, um die aktuelle Kenntnisstufe zu sehen
      </h3>
      <div className="xl:mt-48 grid grid-cols-4 gap-5 top-20 sm:top-14 relative">
        <Skill percentage={80} imageUrl="https://i.imgur.com/b0f0L7E.png" />
        <Skill percentage={75} imageUrl="https://i.imgur.com/lmNHoXw.png" />
        <Skill percentage={60} imageUrl="https://i.imgur.com/UZMww1q.png" />
        <Skill percentage={55} imageUrl="https://i.imgur.com/IvdoND0.png" />
        <Skill percentage={50} imageUrl="https://i.imgur.com/AelwhLw.png" />
        <Skill percentage={70} imageUrl="https://i.imgur.com/taH2fNN.png" />
        <Skill percentage={65} imageUrl="https://i.imgur.com/6bxEQ9s.png" />
        <Skill percentage={50} imageUrl="https://i.imgur.com/aGQxmlp.png" />
        <Skill percentage={55} imageUrl="https://i.imgur.com/F4QkDAV.png" />
        <Skill percentage={50} imageUrl="https://i.imgur.com/E2gonVz.png" />
        <Skill percentage={70} imageUrl="https://i.imgur.com/LqZKvdX.png" />
        <Skill percentage={50} imageUrl="https://i.imgur.com/7Cq9Dsl.png" />
        <Skill percentage={60} imageUrl="https://i.imgur.com/EMcIArs.png" />
        <Skill percentage={70} imageUrl="https://i.imgur.com/UjFAGog.png" />
        <Skill percentage={50} imageUrl="https://i.imgur.com/pNla9uu.png" />
        <Skill percentage={75} imageUrl="https://i.imgur.com/9hO5BKj.png" />
        <Skill percentage={70} imageUrl="https://i.imgur.com/X1wfpyX.png" />
        <Skill percentage={70} imageUrl="https://i.imgur.com/A15r8O4.png" />
        <Skill percentage={60} imageUrl="https://i.imgur.com/NEVNmud.png" />
        <Skill percentage={85} imageUrl="https://i.imgur.com/GvEWWNh.png" />
      </div>
    </motion.div>
  );
}
