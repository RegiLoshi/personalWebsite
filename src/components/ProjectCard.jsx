import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white  dark:bg-[#08090A] shadow-lg rounded-lg overflow-hidden flex flex-col h-full ">
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

            <div className="p-4 flex flex-col flex-1">
                <h2 className=" dark:text-white font-semibold text-lg">{project.title}</h2>
                <p className="dark:text-gray-400 text-gray-500 text-sm flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-200 rounded-full px-2 py-1 text-gray-700 "
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center mt-4 gap-4">
                    {project.buttons.website && (
                        <a
                            href={project.buttons.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 dark:bg-white dark:text-[#08090A]"
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
                            className="text-sm bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 dark:bg-white dark:text-[#08090A]"
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

export default ProjectCard;
