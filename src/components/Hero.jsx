import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <section className="bg-gray-100 dark:text-gray-800 mt-10 rounded-3xl">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm max-w-md lg:max-w-xl lg:text-left gap-5">
                <h1 className="text-5xl font-bold  lg:text-6xl">Books to freshen up your bookshelf
                </h1>
                
                <div className="flex flex-col  sm:items-center sm:justify-center sm:flex-row sm:space-y-0  lg:justify-start">
                <Link to='/listedBooks' className="px-8 py-3 text-lg font-semibold rounded bg-[#23BE0A] dark:text-gray-50">View The List</Link>
                  
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="https://i.ibb.co/wQs0Gdm/The-Dating-Plan-Sara-Desai.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
    );
};

export default Hero;