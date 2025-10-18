import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import {getImageUrl} from "../../utils";
import {useTheme} from "../../ThemeContext.jsx";
import {useLanguage} from "../../LanguageContext.jsx";

export const Skills = () => {
    const {isDark, toggleDark} = useTheme();
    const {language} = useLanguage();

    const skillsTitle = language === 'en' ? 'Skills' : 'Compétences';
    return (
        <section className={isDark ? styles.containerDark : styles.container} id="experience">
            <h2 className={isDark ? styles.titleDark : styles.title}>{skillsTitle}</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={isDark ? styles.skillImageContainerDark : styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
