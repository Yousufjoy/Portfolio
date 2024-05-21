import Shared from "./Shared";


const Contact = () => {
    const contact = "Contact"
    return (
        <div>
            <Shared title={contact} />

            <div className=" flex justify-between">
                <p className=" md:w-[400px] font-secondary font-medium text-xl">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </p>
                <div className="flex justify-center items-center h-56 bg-gray-200 rounded-lg shadow-md">
                    <div className="text-center px-4">
                        <p className="text-xl font-bold">Message me here</p>
                        <p className="text-lg">Joy</p>
                        <p className="text-base text-gray-500">yousufj93006@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;