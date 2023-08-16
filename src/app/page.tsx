"use client";

import React, { useRef, useState, useEffect } from "react";
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import ArrowUpCircle from "@/components/ArrowUpCircle";
import "../app/globals.css";
import { AnimatePresence } from "framer-motion";
import Projects from "@/components/Projects";

export default function Home() {
  const heroRef: React.RefObject<HTMLElement> = useRef(null);
  const aboutRef: React.RefObject<HTMLElement> = useRef(null);
  const educationRef: React.RefObject<HTMLElement> = useRef(null);
  const skillsRef: React.RefObject<HTMLElement> = useRef(null);
  const projectsRef: React.RefObject<HTMLElement> = useRef(null);
  const contactRef: React.RefObject<HTMLElement> = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;

        if (heroBottom <= 0) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      }
    };

    const scrollingContainer = document.querySelector(".overflow-y-scroll");

    if (scrollingContainer) {
      scrollingContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollingContainer) {
        scrollingContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const easeInOutQuad = (
    t: number,
    b: number,
    c: number,
    d: number
  ): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScrollTo = (
    element: HTMLElement,
    target: number,
    duration: number
  ) => {
    const start = element.scrollTop;
    const change = target - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.style.scrollSnapType = "y mandatory";
      }
    };

    animateScroll();
  };

  const handleScrollClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;

    if (event.clientX <= container.offsetLeft + container.clientWidth) {
      return;
    }
    container.style.scrollSnapType = "none";

    const containerScrollHeight = container.scrollHeight;
    const containerClientHeight = container.clientHeight;
    const scrollThumbHeight =
      (containerClientHeight / containerScrollHeight) * containerClientHeight;
    const ratio = event.clientY / containerClientHeight;

    const desiredScrollPosition =
      ratio * containerScrollHeight - scrollThumbHeight / 2;

    smoothScrollTo(container, desiredScrollPosition, 500);
  };

  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar-thin scrollbar-track-transparent transition-all custom-scrollbar"
      onMouseDown={handleScrollClick}
    >
      <Header />

      <section ref={heroRef} id="hero" className="snap-start">
        <Hero />
      </section>

      <section ref={aboutRef} id="about" className="snap-center">
        <About />
      </section>

      <section ref={educationRef} id="education" className="snap-center">
        <Education />
      </section>

      <section ref={skillsRef} id="skills" className="snap-start">
        <Skills />
      </section>

      <section ref={projectsRef} id="projects" className="snap-start">
        <Projects />
      </section>

      <section ref={contactRef} id="contact" className="snap-start">
        <ContactMe />
      </section>

      <AnimatePresence>
        {showArrow && (
          <div className="fixed bottom-5 w-full flex justify-center items-center z-10">
            <div
              onClick={() => scrollToSection(heroRef)}
              className="cursor-pointer"
            >
              <ArrowUpCircle />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
