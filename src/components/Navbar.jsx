import { useState } from "react";

const Navbar = ({ socials }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.remove("bg-[#08090A]");
            root.classList.remove("dark");
        } else {
            root.classList.add("bg-[#08090A]");
            root.classList.add("dark");
        }
    };

    return (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#08090A] shadow-md p-3 sm:p-4 flex justify-between items-center space-x-3 sm:space-x-4 rounded-full w-max max-w-[90%] sm:max-w-none">
            {socials.map((social, index) => (
                <div key={social.name} className="flex items-center justify-center">
                    <a
                        href={social.link}
                        target={social.name === "Home" ? "_self" : "_blank"}
                        rel={social.name === "Home" ? "" : "noreferrer"}
                        className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg sm:text-xl flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"
                        aria-label={social.name}
                    >
                        {social.icon}
                    </a>
                    {index < socials.length - 1 && (
                        <div className="h-5 sm:h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1 sm:mx-2"></div>
                    )}
                </div>
            ))}
            <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg sm:text-xl flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"
                aria-label="Toggle Light/Dark Mode"
            >
                {isDarkMode ? (
                    <i className="fas fa-sun"></i> 
                ) : (
                    <i className="fas fa-moon"></i> 
                )}
            </button>
        </nav>
    );
};

export default Navbar;
