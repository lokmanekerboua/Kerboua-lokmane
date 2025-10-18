import React from "react";

import styles from "./Contact.module.css";
import {HiOutlineMail} from "react-icons/hi";
import {TbBrandLinkedin} from "react-icons/tb";
import {FaFacebookSquare, FaGithub, FaStackOverflow} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {useTheme} from "../../ThemeContext.jsx";
import {MdLightMode, MdNightlight, MdDarkMode} from "react-icons/md";
import {useLanguage} from "../../LanguageContext.jsx";

export const Contact = () => {
    const {isDark, toggleTheme} = useTheme();
    const {language} = useLanguage();
    const contactText = language === "en" ? "Contact" : "Contact";
    const reachOutText = language === "en" ? "Feel free to reach out!" : "N'hésitez pas à me contacter !";
    const themeText = language === "en" ? "Theme" : "Thème";
    return (
        <footer id="contact" className={isDark ? styles.containerDark : styles.container}>
            <div className={styles.text}>
                <h2>{contactText}</h2>
                <p>{reachOutText}</p>
                <button className={isDark ? styles.themeButtonDark : styles.themeButton} onClick={toggleTheme}>
                    <div className={styles.themeTextStyle}>
                        <p>{themeText}</p>
                    </div>
                    <div className={styles.iconContainer}>
                        {isDark ? <MdDarkMode className={styles.icon}/> : <MdLightMode className={styles.icon}/>}
                    </div>
                </button>
            </div>
            <ul className={styles.links}>

                <li className={isDark ? styles.linkDark : styles.link}>
                    <HiOutlineMail size={40}/>
                    <a href="mailto:lokmankerboua@gmail.com" target={"_blank"}>lokmankerboua@gmail.com</a>
                </li>
                <li className={isDark ? styles.linkDark : styles.link}>
                    <TbBrandLinkedin size={40}/>
                    <a href="https://www.linkedin.com/in/lokmanekerboua/" target={"_blank"}>lokmane kerboua</a>
                </li>
                <li className={isDark ? styles.linkDark : styles.link}>
                    <FaGithub size={40}/>
                    <a href="https://github.com/lokmanekerboua" target={"_blank"}>lokmanekerboua</a>
                </li>
            </ul>
            <ul className={styles.links}>

                <li className={isDark ? styles.linkDark : styles.link}>
                    <FaXTwitter size={40}/>
                    <a href="https://x.com/lokmane_kerboua" target={"_blank"}>lokmane kerboua</a>
                </li>
                <li className={isDark ? styles.linkDark : styles.link}>
                    <FaStackOverflow size={40}/>
                    <a href="https://stackoverflow.com/users/18175563/lokmane-kerboua" target={"_blank"}>lokmane
                        kerboua</a>
                </li>
                <li className={isDark ? styles.linkDark : styles.link}>
                    <FaFacebookSquare size={40}/>
                    <a href="https://www.facebook.com/lokmvne/" target={"_blank"}>lokmane kerboua</a>
                </li>
            </ul>

            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </footer>
    );
};
