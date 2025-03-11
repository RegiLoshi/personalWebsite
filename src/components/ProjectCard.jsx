import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white dark:bg-[#08090A] shadow-lg rounded-lg overflow-hidden flex flex-col h-full border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover object-center"
                    />
                ) : (
                    <video
                        src={project.video}
                        className="w-full h-56 object-cover object-center"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                )}
                <div className="absolute top-2 right-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                        {project.status}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h2 className="dark:text-white font-bold text-xl mb-2">{project.title}</h2>
                <p className="dark:text-gray-400 text-gray-600 text-sm flex-grow mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1 text-gray-700 dark:text-gray-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center gap-4">
                    {project.buttons.website && (
                        <a
                            href={project.buttons.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200 dark:bg-white dark:text-[#08090A] dark:hover:bg-gray-200"
                        >
                            <span>🌐</span>
                            <span>Website</span>
                        </a>
                    )}
                    {project.buttons.github && (
                        <a
                            href={project.buttons.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200 dark:bg-white dark:text-[#08090A] dark:hover:bg-gray-200"
                        >
                            <FaGithub size={16} />
                            <span>Source</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        buttons: PropTypes.shape({
            github: PropTypes.string,
            website: PropTypes.string
        }).isRequired,
        image: PropTypes.string,
        video: PropTypes.string
    }).isRequired
};

export default ProjectCard;
