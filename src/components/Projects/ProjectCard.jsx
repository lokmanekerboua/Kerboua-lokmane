import React from "react";

import styles from "./ProjectCard.module.css";
import {getImageUrl} from "../../utils";
import {useTheme} from "../../ThemeContext.jsx";


export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source},}) => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <div className={isDark ? styles.containerDark : styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <div className={styles.infoContainer}>
                <h3 className={isDark ? styles.titleDark : styles.title}>{title}</h3>
                <p className={isDark ? styles.descriptionDark : styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <li key={id} className={isDark ? styles.skillDark : styles.skill}>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={isDark ? styles.linksDark : styles.links}>
                <a href={source} className={isDark ? styles.linkDark : styles.link} target={"_blank"}>
                    source
                </a>
            </div>
        </div>
    );
};
