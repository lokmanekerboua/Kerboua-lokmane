import React from "react";

import styles from "./Projects.module.css";

import {projectTranslations} from "../../data/projects.jsx";
import {ProjectCard} from "./ProjectCard";
import {useTheme} from "../../ThemeContext.jsx";
import {useLanguage} from "../../LanguageContext.jsx";

export const Projects = () => {
    const {isDark, toggleTheme} = useTheme();
    const {language} = useLanguage();
    const projectTitle = language === "en" ? "Projects": "Projets";
    const projects = projectTranslations[language];
    return (
        <section className={isDark ? styles.containerDark : styles.container} id="projects">
            <h2 className={styles.title}>{projectTitle}</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project}/>;
                })}
            </div>
        </section>
    );
};
