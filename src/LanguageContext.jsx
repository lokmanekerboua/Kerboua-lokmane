import React, {createContext, useContext, useEffect, useState} from "react";

// Language Context
const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(() => {
        // Get initial language from memory (simulating localStorage)
        const savedLanguage = localStorage.getItem("language");

        if (savedLanguage) return savedLanguage;

        // Detect browser language
        const browserLang = navigator.language.split('-')[0];
        const currentLang = savedLanguage ? JSON.parse(savedLanguage) : browserLang;
        return currentLang === 'fr' ? 'fr' : 'en';
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'fr' : 'en');
    };

    return (
        <LanguageContext.Provider value={{language, changeLanguage, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);