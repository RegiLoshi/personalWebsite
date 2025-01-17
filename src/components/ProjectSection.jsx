import ProjectCard from './ProjectCard';
import { useState } from 'react';

const ProjectSection = ({ projects }) => {
    const [videoToShow, setVideoToShow] = useState(2);
    const [exitingCards, setExitingCards] = useState([]); 

    const handleShowLess = () => {
        const exiting = projects.slice(videoToShow - 2, videoToShow).map(project => project.title);
        setExitingCards(exiting);
        setTimeout(() => {
            setExitingCards([]);
            setVideoToShow(videoToShow - 2);
        }, 300); 
    };

    return (
        <div className='flex flex-col gap-4 items-center justify-center'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 transition-all duration-300">
                {projects.slice(0, videoToShow).map((project) => (
                    <div
                        key={project.title}
                        className={`${
                            exitingCards.includes(project.title) ? 'animate-fadeOut' : 'animate-fadeIn'
                        }`}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            <div className='flex gap-2'>
                {videoToShow < projects.length && (
                    <button
                        onClick={() => setVideoToShow(videoToShow + 2)}
                        className="dark:bg-white dark:text-[#08090A] bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors duration-200"
                    >
                        Show More
                    </button>
                )}
                {videoToShow > 2 && (
                    <button
                        onClick={handleShowLess}
                        className="dark:bg-white dark:text-[#08090A] bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors duration-200"
                    >
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectSection;
