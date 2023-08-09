"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "../app/globals.css";
import Image from "next/image";
import { projects } from "./Project";

type Props = {};

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-left md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0 overflow-hidden"
    >
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Projekte
      </h3>
      <h4 className="absolute text-center justify-center top-24 md:top-28 lg:top-20 xl:top-28 uppercase tracking-[5px] text-xs sm:text-base text-gray-500 z-10">
        Wischen Sie, um alle Projekte zu sehen
      </h4>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
        }}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="mySwiper relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20 no-mousewheel"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={project.id}>
            <motion.div className="mt-8 flex items-center justify-center h-screen">
              <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 sm:space-y-7 items-center justify-center p-20 md:p-44 h-screen scroll-smooth">
                <motion.div
                  initial={{
                    y: -250,
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-56 h-28 md:w-96 md:h-48 2xl:w-[500px] 2xl:h-[250px] cursor-pointer">
                    <Image
                      priority
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
                <div className="space-y-2 sm:space-y-5 px-0 md:px-10 max-w-6xl cursor-pointer">
                  <h4 className="text-xl sm:text-4xl font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Projekt {i + 1} von {projects.length}:
                    </span>{" "}
                    {project.title}
                  </h4>
                  <div className="flex space-x-2 my-2 items-center justify-center">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-10 w-10 overflow-hidden"
                      >
                        <Image
                          className="absolute inset-0"
                          priority
                          src={image}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="sm:text-lg text-center md:text-left">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] sm:h-[500px] lg:h-[300px] xl:h-[350px] -skew-y-12" />
    </motion.div>
  );
}
