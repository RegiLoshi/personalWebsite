# Personal Website

Welcome to the repository for my personal website! This website showcases my portfolio, skills, projects, education, and work experience. It is built using React and Tailwind CSS, with a focus on responsive design and dark mode support.

## Features

- **Hero Section**: Introduces me with a personalized greeting and a brief bio.
- **Navbar**: Fixed navigation bar with social links and a dark mode toggle.
- **Skills Section**: Displays my key skills with icons and hover effects.
- **Projects Section**: Showcases my projects with images, descriptions, and links to live websites or source code.
- **Work Experience**: Highlights my professional journey with details about my roles and responsibilities.
- **Education**: Details my academic background and achievements.
- **Dark Mode Support**: Fully functional light/dark theme toggle.

## Tech Stack

- **React**: Frontend framework for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern styling.
- **FontAwesome**: Icons used across the website for skills, navigation, and project links.

## Components

### Hero Section
- Displays a welcoming message with:
  - Name and bio fetched from the `DataContext`.
  - Profile image with responsive styling and dark mode border support.

### Navbar
- Social links dynamically rendered from a `socials` prop.
- Dark mode toggle that updates the theme globally.

### Skills Section
- Grid layout showcasing skills with icons, names, and hover animations.

### Projects Section
- Each project card contains an image/video, description, skills used, and links to the project website or GitHub repository.
- Pagination support to show more or fewer projects.

### Work Experience
- Timeline of professional experiences with company logos, job titles, and descriptions.

### Education
- Academic achievements, institutions, and corresponding details.
