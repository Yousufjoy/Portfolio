import { useState } from "react";
import logo from "../assets/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);

  return (
    <nav className="p-3 flex bg-white justify-between items-center  md:px-[120px]">
      <a href="#" id="brand" className="flex gap-2 items-center">
        <img className="object-cover max-w-[80px] max-h-[80px]" src={logo} />
        {/* <span className="flex font-bold font-display">Portfolio</span> */}
      </a>
      <div id="nav-menu " className="hidden md:flex gap-12 ">
        <a href="#" className="font-medium hover:text-primary">
          Home
        </a>
        <a href="#" className="font-medium hover:text-primary">
          About
        </a>
        <a href="#" className="font-medium hover:text-primary">
          Skill
        </a>
        <a href="#" className="font-medium hover:text-primary">
          Service
        </a>
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
      <button className="p-2 md:hidden" onClick={handleClick}>
        {isMenuOpen ? (
          <IoClose className="text-gray-600" />
        ) : (
          <GiHamburgerMenu className="text-gray-600" />
        )}
      </button>
      {/* When we press the hamburger Menu this code will appear!! Inset basically
      makes a layer above the main conent above */}
      {isMenuOpen && (
        <div className="fixed bg-white inset-0 p-3">
          <div id="nav-bar" className="flex justify-between">
            <a href="#" className="flex gap-2 items-center">
              <img
                className="object-cover max-w-[80px] max-h-[80px]"
                src={logo}
              />
              <span className="flex font-bold font-display">Portfolio</span>
            </a>
            <button className="p-2 " onClick={handleClick}>
              <IoClose className="text-gray-600 " />
            </button>
          </div>
          <div
            id=""
            className="bg-primary text-white border-x-4 border-indigo-500 ... flex flex-col gap-3 text-center py-[40px] md:hidden"
          >
            <a href="#" className="font-medium hover:text-black">
              Home
            </a>
            <a href="#" className="font-medium hover:text-black">
              About
            </a>
            <a href="#" className="font-medium hover:text-black">
              Skill
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Service
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
