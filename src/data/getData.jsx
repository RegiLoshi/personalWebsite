import { createContext } from 'react';
import profileLogo from '../assets/profileLogo.jpeg';
import TiranaITLogo from '../assets/TiranaITLogo.jpeg';
import EpokaLogo from '../assets/EpokaUniversityLogo.png';
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
            title: "B.Sc Software Engineering",
            school: "Epoka University",
            date: "October 2022 - Present",
            description: "Currently in the 3rd year of my bachelor's degree. I have taken courses in Data Structures, AI, Databases, Web Development.",
            logo: EpokaLogo
        },
    ],
    skills: [
        { name: "React", icon: "fab fa-react", color: "#61DBFB" },
        { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
        { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
        { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
        { name: "Python", icon: "fab fa-python", color: "#306998" },
        { name: "Git", icon: "fab fa-git", color: "#F05032" },
        { name: "Spring Boot", icon: "fas fa-leaf", color: "#6DB33F" },
        { name: "PHP", icon: "fab fa-php", color: "#8993BE" },
        { name: "MongoDB", icon: "fas fa-database", color: "#4DB33D" },
        { name: "MySQL", icon: "fas fa-database", color: "#00758F" },
      ],
};

export const DataContext = createContext(data); 
export default data;
