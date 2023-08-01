"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function EducationCard({}: Props) {
  return (
    // SCROLL CONTAINER
    <div className="mt-16 flex items-center justify-center">
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-200 scroll-smooth">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center cursor-pointer overflow-hidden">
            <Image
              priority
              src="https://i.imgur.com/bA7yhT9.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <div className="px-0 md:px-10 cursor-pointer">
          <h4 className="text-4xl font-light">CEO of CAB</h4>
          <p className="font-bold text-2xl mt-1">CAB</p>
          <div className="flex space-x-2 my-2">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                className="absolute inset-0"
                priority
                src="https://i.imgur.com/bA7yhT9.jpg"
                alt=""
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                className="absolute inset-0"
                priority
                src="https://i.imgur.com/bA7yhT9.jpg"
                alt=""
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                className="absolute inset-0"
                priority
                src="https://i.imgur.com/bA7yhT9.jpg"
                alt=""
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
          </div>

          <p className="uppercase py-5 text-gray-300">Started... - Ended...</p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
