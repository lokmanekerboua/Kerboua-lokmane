import React from "react";

import styles from "./Hero.module.css";
import {getImageUrl} from "../../../utils.js";
import {useTheme} from "../../../ThemeContext.jsx"


export const Hero = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <section className={styles.container}>
            <div className={isDark ? styles.contentDark : styles.content}>
                <h1 className={isDark ? styles.titleDark : styles.title}>Hi, I'm LOKMANE</h1>
                <p className={styles.description}>
                    I'm a Network Engineer and an Android Developer with 3 years of experience using Kotlin and
                    Jetpack Compose. Reach out if you'd like to learn more!
                </p>
            </div>
            <img
                src={getImageUrl("hero/lok.svg")}
                alt="image of me"
                className={styles.heroImg}
            />
        </section>
    );
};
