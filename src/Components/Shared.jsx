import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const Shared = ({ title }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -100, // Start off-screen to the left
            }}
            whileInView={{
                opacity: 1,
                x: 0, // End at the final position
            }}
            transition={{ duration: 0.5 }} // Customize the duration of the animation
            className="flex md:ml-[100px] md:justify-start justify-center mt-[25px] md:mt-[0px] "
        >
            <div>
                <span className="text-2xl text-primary">#</span>
                <span className="text-[40px] font-body text-white">{title}</span>
            </div>
            <div className="md:w-[500px] md:h-[3px] bg-primary md:mt-[32px] md:mx-[20px]"></div>
        </motion.div>
    );
};

export default Shared;
