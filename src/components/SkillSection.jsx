import PropTypes from 'prop-types';

const SkillsSection = ({ skills }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#08090A] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-110">
                        <i className={skill.icon} style={{ color: skill.color || '#6c63ff' }}></i>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
            ))}
        </div>
    );
};

SkillsSection.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            color: PropTypes.string
        })
    ).isRequired
};

export default SkillsSection;