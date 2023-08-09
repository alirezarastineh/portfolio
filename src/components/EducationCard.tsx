"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  position: string;
  company: string;
  imageUrl: string;
  summaryPoints: string[];
  underSummaryPoints?: string[][];
  startDate: string;
  endDate: string;
  xlImageSize?: string;
  xxlImageSize?: string;
  customWidth?: string;
  xlImageSizeH?: string;
  xxlImageSizeH?: string;
};

export default function EducationCard({
  position,
  company,
  imageUrl,
  summaryPoints,
  startDate,
  endDate,
  underSummaryPoints,
  xlImageSize,
  xxlImageSize,
  xlImageSizeH,
  xxlImageSizeH,
  customWidth,
}: Props) {
  return (
    <div className="relative mt-0 xl:mt-0 2xl:mt-16 flex items-center justify-center">
      <article className="flex flex-col rounded-lg items-center space-y-7 xl:space-y-0 2xl:space-y-7 flex-shrink-0 h-[500px] sm:h-[650px] md:h-[700px] xl:h-[550px] 2xl:h-[700px] w-[500px] md:w-[600px] lg:w-[700px] xl:w-[900px] 2xl:w-[1100px] snap-center p-4 sm:p-10 xl:p-4 2xl:p-10 bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-200 scroll-smooth ease-in-out">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div
            className={`relative ${customWidth || "w-32"} 
            h-32 ${xlImageSize || "xl:w-[200px]"} ${
              xlImageSizeH || "xl:h-[150px]"
            } ${xxlImageSize || "2xl:w-[200px]"} 
            ${
              xxlImageSizeH || "2xl:h-[200px]"
            } object-cover object-center cursor-pointer overflow-hidden`}
          >
            <Image
              priority
              src={imageUrl}
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
          <h4 className="text-base text-center sm:text-left sm:text-4xl xl:text-3xl 2xl:text-4xl font-light">
            {position}
          </h4>
          <p className="font-bold text-center sm:text-left text-sm sm:text-2xl xl:text-xl 2xl:text-2xl mt-1">
            {company}
          </p>
          {/* <div className="flex space-x-2 my-2">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                className="absolute inset-0"
                priority
                src={imageUrl}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                className="absolute inset-0"
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
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                className="absolute inset-0"
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
          </div> */}

          <p className="uppercase py-1 sm:py-5 text-gray-300 text-center sm:text-left">
            {startDate} - {endDate}
          </p>
          <ul className="list-disc space-y-2 sm:space-y-4 xl:space-y-2 2xl:space-y-4 ml-5 text-sm sm:text-lg">
            {summaryPoints.map((point, index) => (
              <li key={point}>
                {point}
                {underSummaryPoints?.[index] && (
                  <ul className="list-disc space-y-2 sm:space-y-3 xl:space-y-1 2xl:space-y-2 ml-5 text-sm sm:text-lg">
                    {underSummaryPoints[index].map((subPoint) => (
                      <li key={subPoint}>{subPoint}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
