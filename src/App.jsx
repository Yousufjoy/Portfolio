import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";
import CopyRight from "./Components/CopyRight";

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#191428]">
      <Navbar scrollToSection={scrollToSection} refs={{ heroRef, projectsRef, skillsRef, aboutRef, contactRef }} />
      <div ref={heroRef} className="md:max-w-[1600px] mx-auto">
        <Hero />
      </div>
      <div ref={projectsRef} className="md:max-w-[1600px] mx-auto">
        <Projects />
      </div>
      <div ref={skillsRef} className="md:max-w-[1600px] mx-auto">
        <Skills />
      </div>
      <div ref={aboutRef} className="md:max-w-[1600px] mx-auto">
        <About />
      </div>
      <div ref={contactRef} className="md:max-w-[1600px] mx-auto">
        <Contact />
      </div>
      <CopyRight />
    </div>
  );
}

export default App;
