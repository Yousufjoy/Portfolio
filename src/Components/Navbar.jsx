import logo from "../assets/logo.jpg";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 20 }}
      className="p-3 flex bg-white justify-between items-center md:px-[120px]"
    >
      <a href="#" id="brand" className="flex gap-2 items-center">
        <img className="object-cover max-w-[80px] max-h-[80px]" src={logo} />
      </a>
      <div id="nav-menu " className="hidden md:flex gap-12">
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#"
          className="font-medium hover:text-primary"
          onClick={() => scrollToSection(refs.heroRef)}
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#"
          className="font-medium hover:text-primary"
          onClick={() => scrollToSection(refs.projectsRef)}
        >
          Projects
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#"
          className="font-medium hover:text-primary"
          onClick={() => scrollToSection(refs.skillsRef)}
        >
          Skills
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="#"
          className="font-medium hover:text-primary"
          onClick={() => scrollToSection(refs.contactRef)}
        >
          Contact
        </motion.a>
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/yousuf.joy.5/"
          className="hidden md:block"
        >
          <FaFacebookF className="w-[20px] h-[20px] hover:text-primary" />
        </a>
        <a href="https://github.com/Yousufjoy" className="hidden md:block">
          <FaGithub className="w-[20px] h-[20px] hover:text-primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/md-yousuf-52862524a/"
          className="hidden md:block"
        >
          <FaLinkedinIn className="w-[20px] h-[20px] hover:text-primary" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
