import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ cardData }) => {
  const { image, text, title, subtitle, buttons, description } = cardData;

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-sm mx-auto bg-white border-2 border-pink-100 rounded-lg overflow-hidden shadow-lg md:my-[0px] my-[50px] cursor-pointer"
    >
      <img src={image} alt="Car Image" className="w-full" />
      <div className="p-4 text-center">
        <div className="flex flex-wrap justify-center text-sm space-x-2 mb-4">
          <span className="text-pink-500">{text}</span>
        </div>
        <hr />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-center space-x-4">
          <a
            className="bg-white text-pink-500 border-2 border-pink-500 py-2 px-4 rounded hover:bg-pink-500 hover:text-white transition"
            href={buttons.live} // Set the live URL as the href attribute
            target="_blank" // Optional: Open in a new tab (remove for same window)
          >
            Live
          </a>
          <a
            className="bg-white text-pink-500 border-2 border-pink-500 py-2 px-4 rounded hover:bg-pink-500 hover:text-white transition"
            href={buttons.code} // Set the code URL as the href attribute
            target="_blank" // Optional: Open in a new tab (remove for same window)
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
