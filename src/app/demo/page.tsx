import styles from "./page.module.css";
import Image from "next/image";
import ScreenShot from "../assets/images/demo.png";
import Workshop from "../components/workshop";

export default function Demo() {
  return (
    <section id="workshops" className={styles.demo}>
      <h2 className={styles["demo__title"]}>
        ¡No Te Pierdas Nuestras Próximas Clases!
      </h2>
      <p className={styles["demo__subtitle"]}>
        Reserva Tu Lugar en Nuestros Cursos y Talleres Más Populares
      </p>
      <div className={styles.workshops}>
        <Workshop
        name="Taller de Git y GitHub"
        startDate="5 de julio de 2024"
        duration="3 dias"
        schedule="10:00 a 13:00 hrs"
        imageSrc={ScreenShot}
         />

<Workshop
        name="Taller basico de programacion"
        startDate="12 de julio de 2024"
        duration="3 dias"
        schedule="10:00 a 13:00 hrs"
        imageSrc={ScreenShot}
         />
       
      
      </div>
    </section>
  );
}
