#Personal Website

Welcome to the repository for my personal website! This website showcases my portfolio, skills, projects, education, and work experience. It is built using React and Tailwind CSS, with a focus on responsive design and dark mode support.

#Features

--Hero Section: Introduces me with a personalized greeting and a brief bio.

--Navbar: Fixed navigation bar with social links and a dark mode toggle.

--Skills Section: Displays my key skills with icons and hover effects.

--Projects Section: Showcases my projects with images, descriptions, and links to live websites or source code.

--Work Experience: Highlights my professional journey with details about my roles and responsibilities.

--Education: Details my academic background and achievements.

--Dark Mode Support: Fully functional light/dark theme toggle.

#Tech Stack

--React: Frontend framework for building UI components.

--Tailwind CSS: Utility-first CSS framework for responsive and modern styling.

--FontAwesome: Icons used across the website for skills, navigation, and project links.

#Components

--Hero Section

--Displays a welcoming message with:

--Name and bio fetched from the DataContext.

--Profile image with responsive styling and dark mode border support.

--Navbar

--Social links dynamically rendered from a socials prop.

--Dark mode toggle that updates the theme globally.

#Skills Section

--Grid layout showcasing skills with icons, names, and hover animations.

#Projects Section

--Each project card contains an image/video, description, skills used, and links to the project website or GitHub repository.

--Pagination support to show more or fewer projects.

#Work Experience

--Timeline of professional experiences with company logos, job titles, and descriptions.

#Education

--Academic achievements, institutions, and corresponding details.

#Installation

--Clone the repository:

git clone https://github.com/your-username/your-repo.git

--Navigate to the project directory:

cd your-repo

--Install dependencies:

npm install

--Start the development server:

npm start

--Open your browser and navigate to http://localhost:3000.

#Folder Structure

--src/components: Contains all React components for the website.

--Hero.jsx: Hero section.

--Navbar.jsx: Navigation bar.

--SkillsSection.jsx: Skills showcase.

--ProjectSection.jsx and ProjectCard.jsx: Projects display.

--WorkExperience.jsx: Professional timeline.

--Education.jsx: Academic background.

--src/data: Data context and mock data for dynamic rendering.

--public: Static assets like images and icons.

#Customization

--Update src/data/getData.js with your personal information, skills, and projects.

--Replace images in the public folder with your own assets.

--Modify Tailwind classes for further customization of styles.

#License

This project is licensed under the MIT License. Feel free to use and adapt it for your personal or professional use.

#Acknowledgments

React

Tailwind CSS

FontAwesome