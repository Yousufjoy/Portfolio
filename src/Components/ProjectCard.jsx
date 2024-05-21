
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ cardData }) => {

    const { image,
        text,
        title,
        subtitle,
        buttons } = cardData;

    return (

        <div className="max-w-sm mx-auto bg-white border-2 border-pink-100 rounded-lg overflow-hidden shadow-lg md:my-[0px] my-[50px]">
            <img
                src={image}
                alt="Car Image"
                className="w-full"
            />
            <div className="p-4 text-center">
                <div className="flex flex-wrap justify-center text-sm space-x-2 mb-4">
                    <span className="text-pink-500">Html</span>
                    <span>Css</span>
                    <span>Js</span>
                    <span className="text-pink-500">Reactjs</span>
                    <span>React-router</span>
                    <span className="text-pink-500">Nodejs</span>
                    <span>ExpressJs</span>
                    <span className="text-pink-500">MongoDB</span>
                  
                </div>
                <hr/>
                <h2 className="text-xl font-bold mb-2">AutoMotive</h2>
                <p className="text-gray-600 mb-4">A dynamic place for car services</p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-white text-pink-500 border-2 border-pink-500 py-2 px-4 rounded hover:bg-pink-500 hover:text-white transition">
                        Live
                    </button>
                    <button className="bg-white text-pink-500 border-2 border-pink-500 py-2 px-4 rounded hover:bg-pink-500 hover:text-white transition">
                        Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;