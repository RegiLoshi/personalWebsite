const SkillsSection = ({ skills }) => {
    return (
      <div className="flex flex-col">
        <h2 className="text-lg lg:text-xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-2">
                <i className={`${skill.icon}`} style={{ color: skill.color || '#6c63ff' }}></i>
              </div>
              <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkillsSection;