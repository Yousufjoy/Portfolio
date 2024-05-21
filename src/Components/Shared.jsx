

const Shared = ({title}) => {
    return (
        <div className="flex  md:ml-[100px] md:justify-start justify-center mt-[25px] md:mt-[0px] ">
            <div > <span className=" text-2xl text-primary"> #</span><span className=" text-[40px] font-body">{title}</span></div>
            <div className=" md:w-[500px] md:h-[3px] bg-primary md:mt-[32px] md:mx-[20px]"></div>
           
        </div>
    );
};

export default Shared;