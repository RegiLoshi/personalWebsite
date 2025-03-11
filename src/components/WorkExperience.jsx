import PropTypes from 'prop-types';

const WorkExperience = ({ exp }) => {
    return (
        <div className="flex flex-col rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-16 h-16 rounded-lg object-cover" 
                    />
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col mb-1">
                        <h3 className="text-lg font-bold dark:text-white">{exp.title}</h3>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{exp.company}</p>
                    </div>
                    <div className="mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                            {exp.date}
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed dark:text-gray-400">{exp.description}</p>
                </div>
            </div>
        </div>
    )
}

WorkExperience.propTypes = {
    exp: PropTypes.shape({
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
    }).isRequired
};

export default WorkExperience