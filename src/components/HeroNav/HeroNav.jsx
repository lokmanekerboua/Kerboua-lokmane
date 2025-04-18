import React from "react";

import styles from "./HeroNav.module.css";
import {useTheme} from "../../ThemeContext.jsx";
import {Hero} from "./Hero/Hero.jsx"
import {Navbar} from "./Navbar/Navbar.jsx";
import {Vortex} from "./Vortex.jsx";

export const HeroNav = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <section className={isDark ? styles.containerDark : styles.container}>
            <Vortex
                className={styles.vortex}
                backgroundColor="transparent"
                rangeY={800}
                particleCount={300}
                baseHue={230}
            >
                <Navbar/>
                <Hero/>
            </Vortex>
            {/*<Beams className={styles.beams}/>*/}
        </section>
    );
};