import styles from "./App.module.css";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Experience} from "./components/Experience/Experience";
import {Hero} from "./components/Hero/Hero";
import {Navbar} from "./components/Navbar/Navbar";
import {Projects} from "./components/Projects/Projects";
import {Cv} from "./components/CV/cv";
import {useTheme} from "./ThemeContext.jsx";
import { Analytics } from '@vercel/analytics/react';


function App() {
    const {isDark, toggleTheme} = useTheme();
    return (
        <div className={isDark ? styles.AppDark : styles.AppLight}>
            <Navbar/>
            <Hero/>
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
