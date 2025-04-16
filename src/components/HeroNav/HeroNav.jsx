import React from "react";

import styles from "./HeroNav.module.css";
import {useTheme} from "../../ThemeContext.jsx";
import {Hero} from "./Hero/Hero.jsx"
import {Navbar} from "./Navbar/Navbar.jsx";
import {Beams} from "./Beams.jsx";

export const HeroNav = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <section className={isDark ? styles.containerDark : styles.container}>
            <Navbar/>
            <Hero/>
            <Beams className={styles.beams}/>
        </section>
    );
};