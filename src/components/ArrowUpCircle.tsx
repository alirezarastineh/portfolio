"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function ArrowUpCircle({}: Props) {
  return (
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <ArrowUpCircleIcon className="text-[#F7AB0A]/70 h-10 w-10 grayscale hover:grayscale-0 animate-pulse overflow-hidden" />
    </motion.div>
  );
}
