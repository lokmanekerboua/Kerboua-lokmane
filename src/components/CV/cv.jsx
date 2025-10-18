import React from 'react';
import styles from "./Cv.module.css";
import {useTheme} from "../../ThemeContext.jsx";
import {useLanguage} from "../../LanguageContext.jsx";

export const Cv = () => {
    const cvLinkEN = "https://drive.google.com/file/d/1uGBQu9IRsXPKGbL-HmQdJfSOB2Lgtp0_/view?usp=drive_link";
    const cvLinkFR = "https://drive.google.com/file/d/1XD1PSEyXn7phjk-tmjRIMSZXgPpJTjqq/view?usp=drive_link";
    const {isDark} = useTheme();
    const {language} = useLanguage();
    const downloadText = language === 'fr' ? 'Télécharger le CV' : 'Download CV';
    const frCV = language==='fr'? 'Français' : 'French';
    const enCV = language==='fr'? 'Anglais' : 'English';
    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <div className={isDark ? styles.btnContainerDark : styles.btnContainer}>
                        <a href={cvLinkEN} download="Your_CV_Name.pdf" target={"_blank"}
                           className={isDark ? styles.contactBtnDark : styles.contactBtn}>
                            {downloadText} ({enCV})
                        </a>
                </div>
                <div className={isDark ? styles.btnContainerDark : styles.btnContainer}>
                        <a href={cvLinkFR} download="Your_CV_Name.pdf" target={"_blank"}
                           className={isDark ? styles.contactBtnDark : styles.contactBtn}>
                            {downloadText} ({frCV})
                        </a>
                </div>
            </div>
        </section>
    );
};
