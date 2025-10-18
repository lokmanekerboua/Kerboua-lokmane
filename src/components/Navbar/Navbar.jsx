import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {IoCloseSharp} from "react-icons/io5";
import {HiOutlineMenu} from "react-icons/hi";
import {useTheme} from "../../ThemeContext.jsx";
import {useLanguage} from "../../LanguageContext.jsx";
import {navBarTranslations} from "../../data/NavBarTranslations.jsx";


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const {isDark, toggleTheme} = useTheme();
    const { language, changeLanguage, toggleLanguage} = useLanguage();
    const t = navBarTranslations[language];

    const iconColor = isDark ? "#fff" : "#000"

    return (
        <nav className={styles.navbar}>
            <a className={isDark ? styles.titleDark : styles.titleLight} href="/">
               {t.title}
            </a>
            <div className={styles.menu}>
                <button
                    className={styles.menuBtn}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {
                        menuOpen ? (
                            <IoCloseSharp size={30} color={iconColor}/>
                        ) : (
                            <HiOutlineMenu size={30} color={iconColor}/>
                        )
                    }
                </button>
                <ul
                    className={isDark ? `${styles.menuItemsDark} ${menuOpen && styles.menuOpen}` : `${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li onClick={(e) => e.stopPropagation()}>
                        <select
                            value={language}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className={isDark ? styles.languageSelectDark : styles.languageSelect}
                        >
                            <option value="en">{t.english}</option>
                            <option value="fr">{t.french}</option>
                        </select>
                    </li>
                    <li>
                        <a href="#about">{t.about}</a>
                    </li>
                    <li>
                        <a href="#experience">{t.skills}</a>
                    </li>
                    <li>
                        <a href="#projects">{t.projects}</a>
                    </li>
                    <li>
                        <a href="#contact">{t.contact}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
