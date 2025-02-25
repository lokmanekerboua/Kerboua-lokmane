import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import {getImageUrl} from "../../utils";
import {useTheme} from "../../ThemeContext.jsx";

export const Experience = () => {
    const {isDark, toggleDark} = useTheme();
    return (
        <section className={isDark ? styles.containerDark : styles.container} id="experience">
            <h2 className={isDark ? styles.titleDark : styles.title}>Skills</h2>
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
                {/*<ul className={styles.history}>*/}
                {/*  {history.map((historyItem, id) => {*/}
                {/*    return (*/}
                {/*      <li key={id} className={styles.historyItem}>*/}
                {/*        <img*/}
                {/*          src={getImageUrl(historyItem.imageSrc)}*/}
                {/*          alt={`${historyItem.organisation} Logo`}*/}
                {/*        />*/}
                {/*        <div className={styles.historyItemDetails}>*/}
                {/*          <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>*/}
                {/*          <ul>*/}
                {/*            {historyItem.experiences.map((experience, id) => {*/}
                {/*              return <li key={id}>{experience}</li>;*/}
                {/*            })}*/}
                {/*          </ul>*/}
                {/*        </div>*/}
                {/*      </li>*/}
                {/*    );*/}
                {/*  })}*/}
                {/*</ul>*/}
            </div>
        </section>
    );
};
