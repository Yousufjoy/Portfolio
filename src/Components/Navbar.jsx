
import logo from "../assets/logo.jpg";

import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion"

const Navbar = () => {

  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 20 }}

      className="p-3 flex bg-white justify-between items-center  md:px-[120px]">
      <a href="#" id="brand" className="flex gap-2 items-center">
        <img className="object-cover max-w-[80px] max-h-[80px]" src={logo} />
        {/* <span className="flex font-bold font-display">Portfolio</span> */}
      </a>
      <div id="nav-menu " className="hidden md:flex gap-12 ">
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",

          }}

          href="#"
          className="font-medium hover:text-primary">
          Home
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",

          }}
          href="#" className="font-medium hover:text-primary">
          Project
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",

          }}

          href="#" className="font-medium hover:text-primary">
          Skill
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",

          }}

          href="#" className="font-medium hover:text-primary">
          Service
        </motion.a>
      </div>
      <div className="flex gap-4">
        <button className="hidden md:block ">
          <FaFacebookF className="w-[20px] h-[20px] hover:text-primary" />
        </button>
        <button className="hidden md:block">
          <FaGithub className="w-[20px] h-[20px] hover:text-primary" />
        </button>
        <button className="hidden md:block">
          <FaLinkedinIn className="w-[20px] h-[20px] hover:text-primary" />
        </button>
      </div>



    </motion.nav>
  );
};

export default Navbar;
