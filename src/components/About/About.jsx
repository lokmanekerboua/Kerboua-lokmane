import React from "react";

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";
import {useTheme} from "../../ThemeContext.jsx";
import {useLanguage} from "../../LanguageContext.jsx";
import {aboutMeTranslations} from "../../data/AboutMe.jsx";



export const About = () => {
    const {isDark} = useTheme();
    const {language} = useLanguage();
    const aboutMe = aboutMeTranslations[language] || aboutMeTranslations['en'];
    const about = aboutMeTranslations[language]=== 'en' ? "About" : "À propos";
    return (
        <section className={isDark ? styles.containerDark : styles.container} id="about">
            <h2 className={isDark ? styles.titleDark : styles.title}>{about}</h2>
            <div className={styles.content}>
                <ul className={isDark ? styles.aboutItemsDark : styles.aboutItems}>
                    {
                        aboutMe.map((item, id) => {
                            return (
                                <li className={styles.aboutItem}>
                                    <img className={styles.aboutImage} src={getImageUrl(item.iconSrc)}/>
                                    <div className={styles.aboutItemText}>
                                        <h3>{item.title}</h3>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
};
