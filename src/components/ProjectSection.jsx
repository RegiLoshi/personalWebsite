import ProjectCard from './ProjectCard';
import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <div className='flex flex-col gap-8 items-center justify-center'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full transition-all duration-300">
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
            <div className='flex gap-4 mt-2'>
                {videoToShow < projects.length && (
                    <button
                        onClick={() => setVideoToShow(videoToShow + 2)}
                        className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200 dark:bg-white dark:text-[#08090A] dark:hover:bg-gray-200 flex items-center gap-2"
                    >
                        <span>Show More</span>
                        <span>↓</span>
                    </button>
                )}
                {videoToShow > 2 && (
                    <button
                        onClick={handleShowLess}
                        className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200 dark:bg-white dark:text-[#08090A] dark:hover:bg-gray-200 flex items-center gap-2"
                    >
                        <span>Show Less</span>
                        <span>↑</span>
                    </button>
                )}
            </div>
        </div>
    );
};

ProjectSection.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            skills: PropTypes.arrayOf(PropTypes.string).isRequired,
            buttons: PropTypes.object.isRequired,
            image: PropTypes.string,
            video: PropTypes.string
        })
    ).isRequired
};

export default ProjectSection;
