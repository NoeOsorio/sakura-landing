import styles from "./page.module.css";
import Image from "next/image";
import ScreenShot from "../assets/images/demo.png";
import Workshop from "../components/workshop";

export default function Demo() {
  return (
    <div className={styles.demo}>
      <h2 className={styles["demo__title"]}>
        ¡No Te Pierdas Nuestras Próximas Clases!
      </h2>
      <p className={styles["demo__subtitle"]}>
        Reserva Tu Lugar en Nuestros Cursos y Talleres Más Populares
      </p>
      <div className={styles.workshops}>
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
      </div>
    </div>
  );
}
