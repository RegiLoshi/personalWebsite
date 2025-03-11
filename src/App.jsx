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
      <div className="min-h-screen flex flex-col space-y-16 py-10 lg:py-24 px-6 w-full mx-auto lg:w-1/2 lg:px-4 bg-white dark:bg-[#08090A] text-gray-900 dark:text-white">
        <Hero />
      
        <div className="flex flex-col space-y-24 lg:px-6">
          <section className="w-full">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Work Experience</h2>
            <div className="flex flex-col space-y-6">
              {data.workExperience.map((exp) => (
                <WorkExperience exp={exp} key={exp.company} />
              ))}
            </div>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Education</h2>
            <div className="flex flex-col space-y-6">
              {data.education.map((education) => (
                <Education education={education} key={education.school} />
              ))}
            </div>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Skills</h2>
            <SkillsSection skills={data.skills} />
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-bold mb-6 dark:text-white text-center">My Projects</h2>
            <p className="text-center font-light text-base mb-8 dark:text-gray-400">
              I&apos;ve worked on a variety of projects, from simple websites to complex applications. Here are a few of my favorites.
            </p>
            <ProjectSection projects={data.projects} />
          </section>

          <div className="w-full text-center">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Get in touch</h2>
            <p className="text-base font-light mb-6 dark:text-gray-400">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me on any of the socials.
            </p>
          </div>
        </div>
      </div>
      <Navbar socials={data.socials} />
    </DataContext.Provider>
  );
}

export default App;
