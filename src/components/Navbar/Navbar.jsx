import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {IoCloseSharp} from "react-icons/io5";
import {HiOutlineMenu} from "react-icons/hi";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.titleDark} href="/">
                K.LOKMANE
            </a>
            <div className={styles.menu}>
                <button
                    className={styles.menuBtn}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {
                        menuOpen ? (
                            <IoCloseSharp size={30} color="#fff"/>
                        ) : (
                            <HiOutlineMenu size={30} color="#fff"/>
                        )
                    }
                </button>
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
