import React from 'react';
import styles from "./Cv.module.css";
import {useTheme} from "../../ThemeContext.jsx";

export const Cv = () => {
    const cvLinkEN = "https://drive.google.com/file/d/1uGBQu9IRsXPKGbL-HmQdJfSOB2Lgtp0_/view?usp=drive_link";
    const cvLinkFR = "https://drive.google.com/file/d/1iydZQhWyUufzitSVUfHZHtaF8TjWGmCp/view?usp=drive_link";
    const {isDark, toggleTheme} = useTheme();
    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <div className={isDark?styles.btnContainerDark:styles.btnContainer}>
                    <a href={cvLinkEN} download="Your_CV_Name.pdf" target={"_blank"} className={isDark?styles.contactBtnDark:styles.contactBtn}>
                        Download CV  (English)
                    </a>
                </div>
                <div className={isDark?styles.btnContainerDark:styles.btnContainer}>
                    <a href={cvLinkFR} download="Your_CV_Name.pdf" target={"_blank"} className={isDark?styles.contactBtnDark:styles.contactBtn}>
                        Download CV  (Français)
                    </a>
                </div>

            </div>
        </section>
    );
};
