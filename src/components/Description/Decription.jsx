import React from "react";

import styles from "./Description.module.css";
import {getImageUrl} from "../../utils.js";
import {useTheme} from "../../ThemeContext.jsx";
import {useLanguage} from "../../LanguageContext.jsx";
import {descriptionTraslations} from "../../data/DescriptionTraslations.jsx";


export const Description = () => {
    const {isDark, toggleTheme} = useTheme();
    const {language} = useLanguage();
    const {title, description} = descriptionTraslations[language];
    return (
        <section className={styles.container}>
            <div className={isDark ? styles.contentDark : styles.content}>
                <h1 className={isDark ? styles.titleDark : styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
            <img
                src={getImageUrl("hero/lok.svg")}
                alt="image of me"
                className={styles.heroImg}
            />
        </section>
    );
};
