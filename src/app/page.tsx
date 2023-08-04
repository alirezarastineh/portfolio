import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import ArrowUpCircle from "@/components/ArrowUpCircle";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar-thin scrollbar-track-transparent transition-all custom-scrollbar">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="education" className="snap-center">
        <Education />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <div className="fixed bottom-5 w-full cursor-pointer flex justify-center items-center">
          <ArrowUpCircle />
        </div>
      </Link>
    </div>
  );
}
