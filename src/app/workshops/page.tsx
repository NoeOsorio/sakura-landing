import styles from "./page.module.css";
import Workshop from "../components/workshop";

export default function Workshops() {
  return (
    <div className={styles.demo}>
      <h2 className={styles["demo__title"]}>
        ¡No Te Pierdas Nuestras Próximas Clases!
      </h2>
      <p className={styles["demo__subtitle"]}>
        Reserva Tu Lugar en Nuestros Cursos y Talleres Más Populares
      </p>
      <div className={styles.workshops}>
        <Workshop
          title="Git y Github"
          duration="5 horas"
          date="7 de Julio 2024"
          schedule="10:00am - 3:00pm"
          link="/workshops/git-y-github"
        />
        <Workshop
          title="Programación Básica"
          duration="5 horas"
          date="12 de Julio 2024"
          schedule="10:00am - 3:00pm"
          link="/workshops/programacion-basica"
        />
      </div>
    </div>
  );
}
