import { createContext } from 'react';
import profileLogo from '../assets/profileLogo.jpeg';
import TiranaITLogo from '../assets/TiranaITLogo.jpeg';
import EpokaLogo from '../assets/EpokaUniversityLogo.png';
import cCompilerLogo from '../assets/cCompilerLogo.png';
import Movie4UDemo from '../assets/Movie4UDemo.mov';
import schoolMateDemo from  '../assets/schoolMateDemo.mov';
import battleShipDemo from '../assets/battleShipDemo.mov';
import ticTacToeDemo from '../assets/ticTacToeDemo.mov';
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
    projects: [
        {
            title: "C Compiler",
            status: "In Progress",
            description: "A C compiler still in progress. Built with Rust, can handle local variables and also arithmetic expressions",
            skills: ["Rust", "Assembly"],
            buttons: [{
                github:"https://github.com/RegiLoshi/C_Compiler_In_Rust"
                }],
            image: cCompilerLogo
        },
        {
            title: "Movies4U",
            status: "Finished",
            description: "Movies4U is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a platform for users to browse, like, and manage their favorite movies or shows.",
            skills: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Redux", "JWT"],
            buttons: [{
                github:"https://github.com/RegiLoshi/Movies4U-Netflix-Copy",
                website: "movies4-u-frontend.vercel.app/"
                }],
            video: Movie4UDemo
        },
        {
            title: "SchoolMate",
            status: "Finished",
            description: "SchoolMate is a web application that provides a platform for students and teachers with live chat to manage their courses, assignments, and grades.",
            skills: ["Java", "MySQL"],
            buttons: [{
                github:"https://github.com/RegiLoshi/SchoolMate",
            }],
            video: schoolMateDemo
        },
        {
            title: "BattleShip",
            status: "Finished",
            description: "BattleShip is a web game created using vanilla html, css and javascript. You play againt an intelligent computer that uses a simple algorithm to guess your ships.",
            skills: ["HTML", "CSS", "JavaScript, Jest"],
            buttons: [{
                github:"https://github.com/RegiLoshi/BattleShipGame/tree/main",
                website: "https://regiloshi.github.io/BattleShipGame/"
            }],
            video: battleShipDemo,
        },
        {
            title: "TicTacToe",
            status: "Finished",
            description: "TicTacToe is a web game created using vanilla html, css and javascript. You can play against a friend or against the computer.",
            skills: ["HTML", "CSS", "JavaScript, Jest"],
            buttons: [{
                github:"https://github.com/RegiLoshi/TicTacToe",
                website: "regiloshi.github.io/TicTacToe/"    
            }],
            video: ticTacToeDemo
        },
    ]
};

export const DataContext = createContext(data); 
export default data;
