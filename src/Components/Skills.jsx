import skills from "../assets/skills.jpg"
import Shared from "./Shared";


const Skills = () => {
    const skill = "Skills"
    return (
        <div className="md:mt-[80px] md:flex ">
            <div>
                <Shared title={skill} />
                <div className="  md:pl-[200px] md:pt-[50px] px-2 py-2">
                    <img className="md:max-w-[350px]" src={skills} alt="" />
                </div>

            </div>
            <div className="md:mx-6 md:ml-[150px] md:mt-[150px] ">
                <div className="md:w-[177px] border border-primary px-2 py-2">
                    <span className="font-secondary font-semibold"> Languages</span>
                    <hr />
                    <p className=" font-secondary text-[#ABB2BF]"> Javascript</p>
                    <p className=" font-secondary text-[#ABB2BF]"> Typescript</p>
                </div>
            </div>

            <div className="md:mx-6 md:mt-[150px]">
                <div className="md:w-[177px] border border-primary px-2 py-2">
                    <span className="font-secondary font-semibold"> Database</span>
                    <hr />
                    <p className=" font-secondary text-[#ABB2BF]"> MongoDB</p>
                    <p className=" font-secondary text-[#ABB2BF]"> PostgresQL</p>
                </div>

                <div className="md:my-6">
                    <div className="md:w-[177px] border border-primary px-2 py-2">
                        <span className="font-secondary font-semibold"> Others</span>
                        <hr />
                        <p className=" font-secondary text-[#ABB2BF]"> HTML & CSS</p>
                        <p className=" font-secondary text-[#ABB2BF]"> TailwindCSS</p>
                    </div>
                </div>
            </div>
            <div className="md:mx-6 md:mt-[150px]">
                 <div className="md:w-[177px] border border-primary px-2 py-2">
                    <span className="font-secondary font-semibold"> Tools</span>
                    <hr />
                    <p className=" font-secondary text-[#ABB2BF]"> Git & Github</p>
                    <p className=" font-secondary text-[#ABB2BF]"> VS Code</p>
                    <p className=" font-secondary text-[#ABB2BF]"> Figma</p>
                </div>
                <div className="md:my-6">
                    <div className="md:w-[177px] border border-primary px-2 py-2">
                        <span className="font-secondary font-semibold"> Frameworks</span>
                        <hr />
                        <p className=" font-secondary text-[#ABB2BF]"> Reactjs</p>
                        <p className=" font-secondary text-[#ABB2BF]"> Nextjs</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;