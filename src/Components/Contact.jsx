import Shared from "./Shared";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";


const Contact = () => {
    const contact = "Contact"
    return (
        <div className="md:mt-[40px]">
            <Shared title={contact} />

            <div className=" md:flex justify-between md:pr-[300px]">
                <p className=" md:w-[400px] font-secondary font-medium text-xl md:ml-[280px] md:mt-[40px] text-center md:text-start text-white">
                    Feel free to reach out to me with any inquiries, collaboration opportunities, or just to say hello! I'm always open to connecting with fellow developers and enthusiasts. Let's build something amazing together!
                </p>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" md:w-[301px] border border-primary md:px-[15px] md:py-[20px] mt-[30px] cursor-pointer rounded-lg">
                    <p className=" text-primary font-secondary "> Message me here!</p>
                    <div className="flex gap-2 md:mt-[20px]">
                        <div><MdEmail className=" text-gray-400 text-2xl" /></div>
                        <p className=" font-secondary text-white">Yousufj93006@gmail.com</p>
                    </div>
                    <div className="flex gap-2 md:mt-[5px]">
                        <div><FaDiscord className=" text-gray-400 text-2xl" /></div>
                        <p className=" font-secondary text-white">Joy006</p>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default Contact;