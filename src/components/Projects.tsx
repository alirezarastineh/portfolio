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
import { SocialIcon } from "react-social-icons";

const getTechAltText = (imageUrl: string): string => {
  const techMap: { [key: string]: string } = {
    b0f0L7E: "JavaScript",
    lmNHoXw: "TypeScript",
    UZMww1q: "React",
    IvdoND0: "Next.js",
    Jx7gRFU: "Node.js",
    Eonjo5f: "Express.js",
    AelwhLw: "MongoDB",
    taH2fNN: "HTML5",
    "6bxEQ9s": "CSS3",
    F4QkDAV: "Tailwind CSS",
    E2gonVz: "Git",
    LqZKvdX: "GitHub",
    "7Cq9Dsl": "Python",
    EMcIArs: "Java",
    UjFAGog: "C++",
    pNla9uu: "PHP",
    "9hO5BKj": "MySQL",
    X1wfpyX: "PostgreSQL",
    A15r8O4: "VS Code",
    zWXFYGT: "Docker",
    ga59OwL: "Bootstrap",
    bPdbrAc: "Stripe",
    xV091Ew: "Prisma",
    KaDx0On: "Clerk",
    gWfwVnb: "Zod",
    iKVvFVh: "Uploadthing",
    YQFfKJn: "Convex",
    n29hpWR: "Mux",
    RhImJ3v: "Cloudinary",
    LY9fjsQ: "Radix UI",
    "9fLytGz": "GraphQL",
  };

  const match = /\/([a-zA-Z0-9]+)\./.exec(imageUrl);
  const imageId = match?.[1];
  return imageId ? techMap[imageId] || "Technology" : "Technology";
};

const Projects = React.memo(function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-left md:text-left md:flex-row max-w-full px-1 sm:px-28 justify-evenly mx-auto items-center z-0 overflow-hidden"
    >
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[16px] lg:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl z-10 text-center w-full px-4">
        Projekte
      </h3>
      <h4 className="absolute text-center justify-center top-36 lg:top-20 xl:top-28 2xl:top-48 uppercase tracking-[5px] text-xs sm:text-base text-gray-500 z-10">
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
              <div className="w-screen shrink-0 snap-center flex flex-col space-y-2 sm:space-y-3 items-center justify-center p-20 md:p-44 h-screen scroll-smooth">
                <motion.div
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <div className="relative w-56 h-28 md:w-96 md:h-48 2xl:w-[500px] 2xl:h-[250px] transition-all duration-300 hover:brightness-[.65]">
                      <Image
                        priority
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </a>
                </motion.div>
                <div className="space-y-2 sm:space-y-5 px-0 md:px-10 max-w-6xl">
                  <div className="space-y-0">
                    <h4 className="text-xl sm:text-4xl font-semibold text-center">
                      <span className="underline decoration-[#F7AB0A]/50">
                        Projekt {i + 1} von {projects.length}:
                      </span>{" "}
                      {project.title}
                    </h4>
                    <p className="uppercase py-1 sm:py-3 text-gray-300 text-center">
                      {project.startDate}
                      {project.endDate ? ` - ${project.endDate}` : ""}
                    </p>
                    <div className="flex space-x-2 items-center justify-center">
                      {project.images.map((image, index) => (
                        <div
                          key={`${project.id}-image-${index}`}
                          className="relative h-10 w-10 overflow-hidden"
                        >
                          <Image
                            className="absolute inset-0"
                            priority
                            src={image}
                            alt={getTechAltText(image)}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                      <SocialIcon
                        className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
                        url={project.githubUrl}
                        fgColor="#F7AB0A"
                        bgColor="transparent"
                        style={{ opacity: 0.7, width: "65px", height: "65px" }}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.githubUrl, "_blank");
                        }}
                        aria-label={`View ${project.title} on GitHub`}
                      />
                    </div>
                  </div>
                  <div className="h-14">
                    <p className="sm:text-lg text-center md:text-left">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] sm:h-[500px] lg:h-[300px] xl:h-[350px] -skew-y-12" />
    </motion.div>
  );
});

export default Projects;
