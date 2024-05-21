import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

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
    </>
  );
}

export default App;
