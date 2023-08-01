"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "../app/globals.css";
import EducationCard from "./EducationCard";

type Props = {};

export default function Education({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-left md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Education
      </h3>
      <Swiper
        spaceBetween={350}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
        }}
        modules={[Pagination, Mousewheel]}
        className="mt-8 mySwiper w-full flex items-center justify-center overflow-x-scroll p-30 no-mousewheel"
      >
        <SwiperSlide>
          <EducationCard />
        </SwiperSlide>
        <SwiperSlide>
          <EducationCard />
        </SwiperSlide>
        <SwiperSlide>
          <EducationCard />
        </SwiperSlide>
        <SwiperSlide>
          <EducationCard />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
