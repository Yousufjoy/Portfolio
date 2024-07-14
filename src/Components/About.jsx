import Shared from "./Shared";



const About = () => {
    const about = "About-me"
    return (
        <div className="md:mt-[30px] ">
            <div className="flex justify-center">
                <Shared title={about} />
            </div>


            <div className=" md:flex  md:ml-[-150px] md:mt-[40px] md:justify-center text-center md:text-start text-white">
                <p className=" md:w-[500px] font-secondary text-xl ">
                   
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I’m a front-end developer and also have experience with backend, My educational background includes a Bachelor's degree in Computer Science and Engineering. based in Dhaka, Bangladesh. I specialize in creating responsive websites from scratch, transforming them into modern, user-friendly web experiences. <br/><br/><br/>

                    I have been passionately converting my creativity and knowledge into functional, visually appealing websites. My commitment to staying updated with the latest technologies and frameworks drives my continuous learning and growth in the field.

                    I look forward to bringing my skills and enthusiasm to innovative web development endeavors.
                </p>

             
    
            </div>
        </div>
    );
};

export default About;