"use client";

import styles from "./page.module.css"
import React, {useState} from "react";


export default function Nav(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    return(
        <nav className={styles.nav}>
            <a href="/#hero" className={styles.nav__brand}> Sakura Academy</a>
            <div className={styles.nav__toggle} onClick={toggleMenu}>
            ☰
            </div>
            <ul className={`${styles.nav__menu} ${isOpen ? styles.active : ""}` }>
                <li className={styles.nav__item}>
                    <a href="/#courses" onClick={closeMenu}>Cursos</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/#workshops" onClick={closeMenu}>Workshop</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/#questions" onClick={closeMenu}>Preguntas</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/#contact" onClick={closeMenu}>Contacto</a>
                </li>
            </ul>
            
        </nav>
    )
}