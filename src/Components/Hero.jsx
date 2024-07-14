
import HeroIamge from "../assets/test.png"
import { motion } from "framer-motion"

function Hero() {
    return (
        <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.5 }}
            className='md:flex md:justify-between md:mt-[20px]'>

            <div className='md:ml-[100px] md:pt-[150px] text-center md:text-start mt-[20px] md:mt-[0px]'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                    whileHover={{ scale: 1.1 }}
                    className='text-5xl font-body leading-[60px] text-white'>
                    Hi, I’m Yousuf! A MERN <br /> Stack Web <span className=' text-primary'>Developer</span> <br /> <span className=' text-primary'>& Designer</span>
                </motion.h1>
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", delay: 2, duration: 2 }}

                    className=' font-podkova text-[#ABB2BF] text-2xl md:mt-[10px]'>
                    Designing dynamic websites where technology <br />merges with creativity
                </motion.h3>
            </div>

            <div className='md:mr-[250px] relative md:ml-[0px] ml-[35px] mt-[30px] md:mt-[0px]'>
                <motion.img initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                    

                    className='md:z-10 md:relative md:pt-[50px]' src={HeroIamge} alt="" />
                <div className=' md:h-[210px] md:w-[220px] bg-primary md:rounded-full md:absolute md:bottom-[-60px] md:left-[-120px] md:z-0'></div>
            </div>
        </motion.div>
    )
}

export default Hero
