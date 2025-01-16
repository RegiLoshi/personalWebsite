import { createContext } from 'react';
import profileLogo from '../assets/profileLogo.jpeg';
import TiranaITLogo from '../assets/TiranaITLogo.jpeg';
const data = {
    name: "Regi",
    bio: "Software Engineering student. I love learning and building projects. Active on Github.",
    aboutMe: "I'm currently pursuing a bachelor in Software Engineering, with a strong focus on self-learning web development using React and Spring Boot.",
    profileLogo: profileLogo,
    workExperience: [
        {
            title: "Back-End Intern",
            company: "Tirana IT",
            date: "October 2024 - December 2024",
            description: "Learned about Git, Jira, SQL, and Java Spring Boot. Worked on a project that involved using the knowledge gained to build a RESTful API.",
            logo: TiranaITLogo
        },
    ],
    education: [
        {
            title: "BsC. Software Engineering",
            school: "Epoka University",
            date: "October 2022 - Present",
            description: "Currently in the 3rd year of my bachelor's degree. I have taken courses in Data Structures, AI, Databases, Web Development.",
            logo: TiranaITLogo
        },
    ],
    skills: ["Java", "Spring Boot", "React", "JavaScript", "HTML", "CSS", "SQL", "Git", "Jira", "C"],
};

export const DataContext = createContext(data); 
export default data;
