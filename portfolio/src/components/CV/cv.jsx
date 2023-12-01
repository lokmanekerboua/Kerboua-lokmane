import React from 'react';
import styles from "./Cv.module.css";

export const Cv = () => {
    const cvLink = "https://drive.google.com/file/d/1q9cQttwfghXVIGwMXKZeOtZUNWPsitaW/view?usp=drive_link";
    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <div>
                    <a href={cvLink} download="Your_CV_Name.pdf" target={"_blank"} className={styles.contactBtn}>
                        Download CV
                    </a>
                </div>

            </div>
        </section>
    );
};
