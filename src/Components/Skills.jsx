import Shared from "./Shared";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../loti/Animation - 1720975301974.json"; // Replace with your animation JSON file

const Skills = () => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg", // Choose the renderer: svg/canvas/html
      loop: true,
      autoplay: true,
      animationData: animationData, // the animation data
    });

    // Clean up function to stop animation on unmount
    return () => {
      anim.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  const skill = "Skills";
  
  return (
    <div className="md:mt-[80px] md:flex ">
      <div>
        <Shared title={skill} />
        <motion.div className="  md:pl-[200px] md:pt-[50px] px-2 py-2">
          {/* <img className="md:max-w-[350px]" src={skills} alt="" /> */}
          <div
            ref={container}
            style={{ width: "500px", height: "500px" }} // Adjust size as needed
          />
        </motion.div>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:mx-6 md:ml-[150px] md:mt-[150px] "
      >
        <div className="md:w-[177px] border border-primary px-2 py-2 cursor-pointer rounded-lg">
          <span className="font-secondary font-semibold text-white">
            {" "}
            Languages
          </span>
          <hr />
          <p className=" font-secondary text-[#ABB2BF]"> Javascript</p>
          <p className=" font-secondary text-[#ABB2BF]"> Typescript</p>
        </div>
      </motion.div>

      <div className="md:mx-6 md:mt-[150px]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:w-[177px] border border-primary px-2 py-2 cursor-pointer rounded-lg"
        >
          <span className="font-secondary font-semibold text-primary">
            {" "}
            Database
          </span>
          <hr />
          <p className=" font-secondary text-[#ABB2BF]"> MongoDB</p>
          <p className=" font-secondary text-[#ABB2BF]"> PostgresQL</p>
        </motion.div>

        <div className="md:my-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:w-[177px] border border-primary px-2 py-2 cursor-pointer rounded-lg"
          >
            <span className="font-secondary font-semibold text-primary">
              {" "}
              Others
            </span>
            <hr />
            <p className=" font-secondary text-[#ABB2BF]"> HTML & CSS</p>
            <p className=" font-secondary text-[#ABB2BF]"> TailwindCSS</p>
            <p className=" font-secondary text-[#ABB2BF]">
              {" "}
              Expressjs & Nodejs
            </p>
          </motion.div>
        </div>
      </div>
      <div className="md:mx-6 md:mt-[150px]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:w-[177px] border border-primary px-2 py-2 cursor-pointer rounded-lg"
        >
          <span className="font-secondary font-semibold text-white">
            {" "}
            Tools
          </span>
          <hr />
          <p className=" font-secondary text-[#ABB2BF]"> Git & Github</p>
          <p className=" font-secondary text-[#ABB2BF]"> VS Code</p>
          <p className=" font-secondary text-[#ABB2BF]"> Figma</p>
        </motion.div>
        <div className="md:my-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:w-[177px] border border-primary px-2 py-2 cursor-pointer rounded-lg"
          >
            <span className="font-secondary font-semibold text-white">
              {" "}
              Frameworks
            </span>
            <hr />
            <p className=" font-secondary text-[#ABB2BF]"> Reactjs</p>
            <p className=" font-secondary text-[#ABB2BF]"> Nextjs</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
