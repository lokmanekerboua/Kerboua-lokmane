import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import {ProjectCard} from "./ProjectCard";
import {useTheme} from "../../ThemeContext.jsx";

export const Projects = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <section className={isDark ? styles.containerDark : styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project}/>;
                })}
            </div>
        </section>
    );
};
