"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
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
      className="flex flex-col relative h-screen text-left md:text-left md:flex-row max-w-7xl px-7 sm:px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Bildung
      </h3>
      <Swiper
        spaceBetween={350}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
          eventsTarget: ".mySwiper",
        }}
        navigation={true}
        keyboard={{ enabled: true }}
        modules={[Pagination, Mousewheel, Keyboard, Navigation]}
        className="mt-8 mySwiper w-full flex items-center justify-center overflow-x-scroll p-30 no-mousewheel"
      >
        <SwiperSlide>
          <EducationCard
            position="Full-Stack-Entwicklung Weiterbildung"
            company="Code Academy Berlin"
            imageUrl="https://i.imgur.com/QIe70hH.png"
            summaryPoints={[
              "Vollzeit",
              "5-Monate-Programm mit 840 Stunden",
              "Anwendung von Agile/SCRUM",
              "Betonung der Gruppenarbeit",
              "Einschluss von Code Reviews, Spikes",
              "Frontend: Typescript, React, Next, ...",
              "Backend: Node, Express, MongoDB, ...",
            ]}
            startDate="03.2023"
            endDate="08.2023"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EducationCard
            position="B. Sc. Medieninformatik"
            company="
           HTW Berlin"
            imageUrl="https://i.imgur.com/J37sKSY.png"
            summaryPoints={["Bachelor-Auflagen für Master-Zulassung"]}
            underSummaryPoints={[
              [
                "Teilzeit",
                "Computersysteme",
                "Webprogrammierung",
                "English 1 & 2 für Medienformatiker",
                "Mathe 1 & 2 für Medienformatiker",
                "Medienwirtschaft",
                "...",
              ],
            ]}
            startDate="04.2021"
            endDate="03.2023"
            xlImageSize="xl:w-[250px]"
            xxlImageSize="2xl:w-[320px]"
            customWidth="w-[215px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EducationCard
            position="Software Development with Java"
            company="
            ReDI School"
            imageUrl="https://i.imgur.com/GGo4X4r.png"
            summaryPoints={["Teilzeit", "Abendkurs", "Hybrid", "Intro to Java"]}
            startDate="02.2020"
            endDate="06.2020"
            xlImageSize="xl:w-[150px]"
            xxlImageSize="2xl:w-[190px]"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <EducationCard
            position="M. Sc. Software Engineering"
            company="
            I.A.U. Science And Research Branch"
            imageUrl="https://i.imgur.com/3bR3Yq9.png"
            summaryPoints={[
              "Fernstudium",
              "Special Topics in Software",
              "Database",
              "Algorithms",
              "Operating Systems",
              "...",
            ]}
            startDate="09.2018"
            endDate="07.2020"
            customWidth="w-[100px]"
            xlImageSize="xl:w-[120px]"
            xxlImageSize="2xl:w-[150px]"
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <EducationCard
            position="Studienkolleg"
            company="
           Technische Universität Berlin"
            imageUrl="https://i.imgur.com/0VBSaCF.png"
            summaryPoints={[
              "Vollzeit",
              "Grundlage der Informatik",
              "Elementarmathematik ",
              "Analysis Mathematik",
              "Physik",
              "...",
            ]}
            startDate="02.2016"
            endDate="07.2017"
            xlImageSize="xl:w-[255px]"
            xxlImageSize="2xl:w-[320px]"
            customWidth="w-[200px]"
            customHeight="h-[120px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EducationCard
            position="B. Sc. Software Engineering"
            company="
            I.A.U. Science And Research Branch"
            imageUrl="https://i.imgur.com/3bR3Yq9.png"
            summaryPoints={[
              "Fernstudium",
              "Data Storage",
              "Database Design",
              "Compiler Design",
              "Artificial Intelligence",
              "...",
            ]}
            startDate="09.2013"
            endDate="07.2018"
            customWidth="w-[100px]"
            xlImageSize="xl:w-[120px]"
            xxlImageSize="2xl:w-[150px]"
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
