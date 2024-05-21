import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home />
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
    </>
  );
}

export default App;
