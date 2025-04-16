import React from "react";

import styles from "./Contact.module.css";
import {HiOutlineMail} from "react-icons/hi";
import {TbBrandLinkedin} from "react-icons/tb";
import {FaFacebookSquare, FaGithub, FaStackOverflow} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {useTheme} from "../../ThemeContext.jsx";
import {MdLightMode, MdNightlight} from "react-icons/md";


export const Contact = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <footer id="contact" className={isDark ? styles.containerDark : styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
                <button className={isDark ? styles.themeButtonDark : styles.themeButton} onClick={toggleTheme}>
                    <p>Theme</p>
                    {isDark ? <MdNightlight className={styles.icon}/> : <MdLightMode className={styles.icon}/>}
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
