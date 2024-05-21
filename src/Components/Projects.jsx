import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import Shared from "./Shared";

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data)) // Correctly set the fetched data
            .catch(error => console.error('Error fetching data:', error)); // Optional: handle errors
    }, []);


    const Projects = "Projects";

    return (

        <div className="md:mt-[80px] ">
            <Shared title={Projects}></Shared>
            <div className=" md:grid md:grid-cols-3 md:mt-[60px] mt-[60px]">

                {
                    data.map((cardData, index) => {
                        return <ProjectCard key={index} cardData={cardData}></ProjectCard>
                    })
                }
            </div>
        </div>
    );
};

export default Projects;