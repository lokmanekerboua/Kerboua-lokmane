import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        // Get initial theme from localStorage
        const savedTheme = localStorage.getItem("isDark");
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        // Save theme to localStorage whenever it changes
        localStorage.setItem("isDark", JSON.stringify(isDark));
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
