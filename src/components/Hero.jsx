import { useContext } from 'react';
import { DataContext } from '../data/getData';
const Hero = () => {
    const data = useContext(DataContext);
    return (
        <div className="flex flex-col lg:px-6">
            <div className="flex justify-between items-center ">
                <div className="flex flex-col">
                    <h1 className="m-0 font-bold text-4xl md:text-5xl lg:text-6xl dark:text-white " >Hi, I'm {data.name}!</h1>
                    <p className="text-base lg:text-xl max-w-[250px] lg:max-w-[450px] dark:text-gray-400 font-light mt-1">{data.bio}</p>
                </div>
                <img src={data.profileLogo} alt="profileLogo" className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-transparent dark:border-white border-solid" />
            </div>
            <div className="flex justify-between items-center mt-8">
                <div className="flex flex-col">
                    <h2 className="text-lg lg:text-xl font-bold dark:text-white">About Me</h2>
                    <p className="prose break-words leading-5 max-w-full text-base lg:text-base w-full  font-light dark:text-gray-400">
                        {data.aboutMe}
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Hero;