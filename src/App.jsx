import styles from "./App.module.css";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Experience} from "./components/Experience/Experience";
import {HeroNav} from "./components/HeroNav/HeroNav.jsx";
import {Projects} from "./components/Projects/Projects";
import {Cv} from "./components/CV/cv";
import {useTheme} from "./ThemeContext.jsx";
import { Analytics } from '@vercel/analytics/react';
import React from "react";


function App() {
    const {isDark, toggleTheme} = useTheme();
    return (
        <div className={isDark ? styles.AppDark : styles.AppLight}>
            <HeroNav/>
            <About/>
            <Experience/>
            <Projects/>
            <Cv/>
            <Contact/>
            <Analytics/>
        </div>
    );
}

export default App;
