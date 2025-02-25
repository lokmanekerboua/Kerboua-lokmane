import React from "react";

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";
import {useTheme} from "../../ThemeContext.jsx";


export const About = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <section className={isDark ? styles.containerDark : styles.container} id="about">
            <h2 className={isDark ? styles.titleDark : styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={isDark ? styles.aboutItemsDark : styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutImage} src={getImageUrl("about/android.png")}/>
                        <div className={styles.aboutItemText}>
                            <h3>Android Developer</h3>
                            <p>
                                I am an android developer with experience in building high-quality android apps using
                                KOTLIN.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutImage} src={getImageUrl("about/node.png")}/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend</h3>
                            <p>
                                I have experience developing fast and optimised APIs using nodejs.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutImage} src={getImageUrl("about/compose.png")}/>
                        <div className={styles.aboutItemText}>
                            <h3>UI</h3>
                            <p>
                                I use jetpack compose to create beautiful and high-quality UIs for android apps.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
