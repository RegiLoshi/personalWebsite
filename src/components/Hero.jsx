import profileLogo from '../assets/profileLogo.jpeg';
const Hero = () => {
    return (
        <div className="flex flex-col lg:px-4">
            <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-2">
                    <h1 className="m-0 font-bold text-4xl md:text-5xl lg:text-6xl " >Hi, I'm Regi!</h1>
                    <p className="text-base lg:text-lg max-w-[250px] lg:max-w-[450px] font-light">Software Engineering student. I love learning and building projects. Active on Github.</p>
                </div>
                <img src={profileLogo} alt="profileLogo" className="w-24 h-24 lg:w-32 lg:h-32 rounded-full" />
            </div>
            <div className="flex justify-between items-center mt-8">
                <div className="flex flex-col">
                    <h2 className="text-lg lg:text-xl font-bold">About Me</h2>
                    <p className="prose break-words leading-5 max-w-full text-base lg:text-base w-full  font-light">
                    I'm currently pursuing a bachelor in Software Engineering, with a strong focus on self-learning web development using React and Spring Boot.
                    </p>
                </div>
            </div>
        </div>
    );
}
//

export default Hero;