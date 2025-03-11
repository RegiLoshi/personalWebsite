import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CV from "../assets/Regi_Loshi_CV.pdf";

const Navbar = ({ socials }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Initialize theme based on system preference
    useEffect(() => {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            // Use saved preference if available
            setIsDarkMode(savedTheme === 'dark');
            applyTheme(savedTheme === 'dark');
        } else {
            // Otherwise check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
            applyTheme(prefersDark);
        }
        
        // Add transition class to body after initial load
        setTimeout(() => {
            document.body.classList.add('transition-colors', 'duration-300');
        }, 100);
    }, []);

    // Apply theme to document
    const applyTheme = (dark) => {
        const root = window.document.documentElement;
        const body = document.body;
        
        if (dark) {
            root.classList.add("dark");
            root.classList.add("bg-[#08090A]");
            body.style.backgroundColor = "#08090A";
            document.getElementById('theme-color')?.setAttribute('content', '#08090A');
        } else {
            root.classList.remove("dark");
            root.classList.remove("bg-[#08090A]");
            body.style.backgroundColor = "#ffffff";
            document.getElementById('theme-color')?.setAttribute('content', '#ffffff');
        }
        
        // Save preference to localStorage
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    };

    // Handle theme toggle with animation
    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        applyTheme(newDarkMode);
    };

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = prevScrollPos < currentScrollPos;
            
            if (isScrollingDown && currentScrollPos > 100) {
                setIsExpanded(false);
            } else {
                setIsExpanded(true);
            }
            
            setPrevScrollPos(currentScrollPos);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    // Determine if we should show text labels based on screen size
    const showLabels = windowWidth >= 768;
    
    // Determine which icons to show based on screen size
    const displaySocials = windowWidth < 640 
        ? socials.filter(s => s.name === "Home" || s.name === "GitHub" || s.name === "LinkedIn" || s.name === "Email") 
        : socials;

    return (
        <nav className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#08090A] shadow-lg p-3 md:p-4 flex items-center rounded-full transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-60 hover:opacity-100'} z-50`}>
            <div className="flex items-center space-x-1 sm:space-x-3">
                {displaySocials.map((social, index) => (
                    <div key={social.name} className="flex items-center">
                        <a
                            href={social.link}
                            target={social.name === "Home" ? "_self" : "_blank"}
                            rel={social.name === "Home" ? "" : "noreferrer"}
                            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label={social.name}
                            title={social.name}
                        >
                            <span className="text-xl">{social.icon}</span>
                            {showLabels && (
                                <span className="ml-1 text-sm font-medium hidden md:inline">{social.name}</span>
                            )}
                        </a>
                        {index < displaySocials.length - 1 && (
                            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                        )}
                    </div>
                ))}
                
                <div className="flex items-center">
                    <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                    <a
                        href={CV}
                        download="Regi_Loshi_CV.pdf"
                        className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Download CV"
                        title="Download CV"
                    >
                        <span className="text-xl"><i className="fas fa-file-download"></i></span>
                        {showLabels && (
                            <span className="ml-1 text-sm font-medium hidden md:inline">CV</span>
                        )}
                    </a>
                    <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                </div>
                
                <button
                    onClick={toggleTheme}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle Light/Dark Mode"
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    <span className="text-xl">
                        {isDarkMode ? (
                            <i className="fas fa-sun"></i> 
                        ) : (
                            <i className="fas fa-moon"></i> 
                        )}
                    </span>
                    {showLabels && (
                        <span className="ml-1 text-sm font-medium hidden md:inline">
                            {isDarkMode ? "Light" : "Dark"}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Navbar;
