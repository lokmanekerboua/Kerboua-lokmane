import React from "react";

import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";
import {useTheme} from "../../ThemeContext.jsx"


export const Hero = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <section className={styles.container}>
            <div className={isDark ? styles.contentDark : styles.content}>
                <h1 className={isDark ? styles.titleDark : styles.title}>Hi, I'm LOKMANE</h1>
                <p className={styles.description}>
                    I'm an Android developer with 3 years of experience using Kotlin and
                    Jetpack compose. Reach out if you'd like to learn more!
                </p>
                <a href="mailto:lokmankerboua@gmail.com" className={isDark ? styles.contactBtnDark : styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/lok.svg")}
                alt="image of me"
                className={styles.heroImg}
            />
            {/*<div className={styles.topBlur}/>*/}
            {/*<div className={styles.bottomBlur}/>*/}
        </section>
    );
};
