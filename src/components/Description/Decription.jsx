import React from "react";

import styles from "./Description.module.css";
import {getImageUrl} from "../../utils.js";
import {useTheme} from "../../ThemeContext.jsx";
import {useLanguage} from "../../LanguageContext.jsx";
import {descriptionTraslations} from "../../data/DescriptionTraslations.jsx";
import SplashCursor from '../SplashCursor'
import LetterGlitch from '../LetterGlitch';
import SplitText from "../SplitText";




export const Description = () => {
    const {isDark, toggleTheme} = useTheme();
    const {language} = useLanguage();
    const {title, description} = descriptionTraslations[language];
    return (
        <section className={styles.container}>
            <SplashCursor />
            {/*<LetterGlitch*/}
            {/*    glitchSpeed={50}*/}
            {/*    centerVignette={true}*/}
            {/*    outerVignette={false}*/}
            {/*    smooth={true}*/}
            {/*/>*/}
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
