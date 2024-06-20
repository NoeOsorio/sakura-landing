import styles from "./page.module.css"

export default function nav(){
    return(
        <nav className={styles.nav}>
            <p>Sakura Academy</p>
            <div className={styles["nav__sections"]}>
                <a href="/#courses"  className={styles["nav__item"]}>Cursos</a>
                <a href="/#workshops" className={styles["nav__item"]}>Workshops</a>
                <a href="/#questions" className={styles["nav__item"]}>Preguntas</a>
                <a href="/#contact" className={styles["nav__item"]}>Contacto</a>
            </div>
            
        </nav>
    )
}