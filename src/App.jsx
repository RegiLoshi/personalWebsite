import './App.css'
import Hero from './components/Hero'
import data, { DataContext } from '../src/data/getData';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import SkillsSection from './components/SkillSection';

function App() {
  return (
    <DataContext.Provider value={data}>
      <div className="min-h-screen flex flex-col space-y-10 py-10 lg:py-24 px-6 w-full mx-auto lg:w-1/2 lg:px-4">
        <Hero />
        <div className="flex flex-col lg:px-6">
          <h2 className="text-lg lg:text-xl font-bold">Work Experience</h2>
          <div className="flex flex-col gap-4 mt-4">
            {data.workExperience.map((exp) => (
              <WorkExperience exp={exp} key={exp.company} />
            ))}
          </div>
          <h2 className="mt-6 text-lg lg:text-xl font-bold">Education</h2>
          <div className="flex flex-col gap-4 mt-4">
            {data.education.map((education) => (
              <Education education={education} key={education.school} />
            ))}
          </div>
        </div>
        <SkillsSection skills={data.skills} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
