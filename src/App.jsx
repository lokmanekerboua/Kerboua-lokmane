import styles from "./App.module.css";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Skills} from "./components/Skills/Skills.jsx";
import {Description} from "./components/Description/Decription.jsx";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Projects} from "./components/Projects/Projects";
import {Cv} from "./components/CV/cv";
import {useTheme} from "./ThemeContext.jsx";
import {Analytics} from '@vercel/analytics/react';
import React from "react";
import ClickSpark from './components/ClickSpark.jsx';


function App() {
    const {isDark, toggleTheme} = useTheme();
    return (

        <ClickSpark
            sparkColor={isDark?"#ffffff":"#000000"}
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            <div className={isDark ? styles.AppDark : styles.AppLight}>
                <Navbar/>
                <Description/>
                <About/>
                <Skills/>
                <Projects/>
                <Cv/>
                <Contact/>
                <Analytics/>
            </div>
        </ClickSpark>
    );
}

export default App;
