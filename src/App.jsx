import './App.css';
import Hero from './components/Hero';
import data, { DataContext } from '../src/data/getData';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import SkillsSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import Navbar from './components/Navbar';
function App() {
  return (
    <DataContext.Provider value={data}>
      <div className="min-h-screen flex flex-col space-y-10 py-10 lg:py-24 px-6 w-full mx-auto lg:w-1/2 lg:px-4">
        <Hero />
      
        <div className="flex flex-col space-y-10 lg:px-6">
          <section>
            <h2 className="text-lg lg:text-xl font-bold">Work Experience</h2>
            <div className="flex flex-col gap-4 mt-4">
              {data.workExperience.map((exp) => (
                <WorkExperience exp={exp} key={exp.company} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mt-6 text-lg lg:text-xl font-bold">Education</h2>
            <div className="flex flex-col gap-4 mt-4">
              {data.education.map((education) => (
                <Education education={education} key={education.school} />
              ))}
            </div>
          </section>

          <SkillsSection skills={data.skills} />

          <section>
            <h2 className="mt-6 text-lg text-center lg:text-xl font-bold">My Projects</h2>
            <p className="text-center font-light text-lg">
              I've worked on a variety of projects, from simple websites to complex applications. Here are a few of my favorites.
            </p>
            <ProjectSection projects={data.projects} />
          </section>
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-lg lg:text-xl font-bold">Get in touch</h2>
            <p className="text-lg font-light">
              I'm always open to new opportunities and collaborations. Feel free to reach out to me on any of the socials.
            </p>
          </div>
        </div>
      </div>
      <Navbar socials={data.socials} />
    </DataContext.Provider>
  );
}

export default App;
