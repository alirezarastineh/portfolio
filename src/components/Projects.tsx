"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "../app/globals.css";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
        Wischen Sie, um alle Projekte zu sehen.
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
          <SwiperSlide key={project}>
            <motion.div className="mt-8 flex items-center justify-center h-screen">
              <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 sm:space-y-7 items-center justify-center p-20 md:p-44 h-screen scroll-smooth">
                <motion.img
                  src="https://i.imgur.com/q33H9N3.png"
                  alt=""
                  initial={{
                    y: -250,
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="w-80 h-32 cursor-pointer md:w-96 md:h-48"
                />
                <div className="space-y-0 sm:space-y-10 px-0 md:px-10 max-w-6xl cursor-pointer">
                  <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Projekt {i + 1} von {projects.length}:
                    </span>{" "}
                    Cryptocurrency Club
                  </h4>
                  <p className="text-lg text-center md:text-left">
                    Eine Webseite zur Überprüfung der Top 10 Kryptowährungs mit
                    ihren Echtzeit-Statistiken. Sie beinhaltet eine
                    Authentifizierung mit der Option, dass Benutzer Coins für
                    ihre Wish List auswählen können.
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
