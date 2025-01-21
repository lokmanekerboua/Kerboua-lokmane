import React from 'react';
import styles from "./Cv.module.css";

export const Cv = () => {
    const cvLinkEN = "https://drive.google.com/file/d/1uGBQu9IRsXPKGbL-HmQdJfSOB2Lgtp0_/view?usp=drive_link";
    const cvLinkFR = "https://drive.google.com/file/d/1iydZQhWyUufzitSVUfHZHtaF8TjWGmCp/view?usp=drive_link";
    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <div className={styles.btnContainer}>
                    <a href={cvLinkEN} download="Your_CV_Name.pdf" target={"_blank"} className={styles.contactBtn}>
                        Download CV EN
                    </a>
                </div>
                <div className={styles.btnContainer}>
                    <a href={cvLinkFR} download="Your_CV_Name.pdf" target={"_blank"} className={styles.contactBtn}>
                        Download CV FR
                    </a>
                </div>

            </div>
        </section>
    );
};
