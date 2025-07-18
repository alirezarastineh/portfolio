"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = React.memo(function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative min-h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[16px] lg:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl z-10 text-center w-full px-4">
        Skills
      </h3>
      <h4 className="sm:hidden absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm sm:text-base xl:top-28 2xl:top-56 text-center">
        Klicken Sie auf eine Fähigkeit, um die aktuelle Kenntnisstufe zu sehen
      </h4>
      <h4 className="hidden sm:block absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm sm:text-base xl:top-28 2xl:top-56 text-center">
        Hovern Sie über eine Fähigkeit, um die aktuelle Kenntnisstufe zu sehen
      </h4>
      <div className="xl:mt-48 grid grid-cols-4 2xl:grid-cols-5 gap-5 top-20 sm:top-14 relative">
        <Skill percentage={40} imageUrl="https://i.imgur.com/b0f0L7E.png" alt="JavaScript" />
        <Skill percentage={30} imageUrl="https://i.imgur.com/lmNHoXw.png" alt="TypeScript" />
        <Skill percentage={20} imageUrl="https://i.imgur.com/UZMww1q.png" alt="React" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/IvdoND0.png" alt="Next.js" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/Jx7gRFU.png" alt="Node.js" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/Eonjo5f.png" alt="Express.js" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/AelwhLw.png" alt="MongoDB" />
        <Skill percentage={25} imageUrl="https://i.imgur.com/taH2fNN.png" alt="HTML5" />
        <Skill percentage={20} imageUrl="https://i.imgur.com/6bxEQ9s.png" alt="CSS3" />
        <Skill percentage={20} imageUrl="https://i.imgur.com/F4QkDAV.png" alt="Tailwind CSS" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/E2gonVz.png" alt="Git" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/LqZKvdX.png" alt="GitHub" />
        <Skill percentage={5} imageUrl="https://i.imgur.com/7Cq9Dsl.png" alt="Python" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/EMcIArs.png" alt="Java" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/UjFAGog.png" alt="C++" />
        <Skill percentage={5} imageUrl="https://i.imgur.com/pNla9uu.png" alt="PHP" />
        <Skill percentage={20} imageUrl="https://i.imgur.com/9hO5BKj.png" alt="MySQL" />
        <Skill percentage={15} imageUrl="https://i.imgur.com/X1wfpyX.png" alt="PostgreSQL" />
        <Skill percentage={30} imageUrl="https://i.imgur.com/A15r8O4.png" alt="VS Code" />
        <Skill percentage={5} imageUrl="https://i.imgur.com/zWXFYGT.png" alt="Docker" />
      </div>
    </motion.div>
  );
});

export default Skills;
