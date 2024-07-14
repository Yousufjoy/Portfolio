import Navbar from "./Components/Navbar";

import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";
import CopyRight from "./Components/CopyRight";

function App() {
  return (
    <>
      <div className=" bg-[#191428]">
        <Navbar></Navbar>
        <div className="md:max-w-[1600px] mx-auto ">
          <Hero />
        </div>
        <div className="md:max-w-[1600px] mx-auto ">
          <Projects />
        </div>
        <div className="md:max-w-[1600px] mx-auto ">
          <Skills />
        </div>

        <div className="md:max-w-[1600px] mx-auto ">
          <About />
        </div>
        <div className="md:max-w-[1600px] mx-auto ">
          <Contact />
        </div>
        <CopyRight />
      </div>
    </>
  );
}

export default App;
