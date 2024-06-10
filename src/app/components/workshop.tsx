import styles from "./workshop.module.css";
import Image from "next/image";
import ScreenShot from "../assets/images/demo.png";

export default function Workshop() {
  return (
    <div className={styles["workshop"]}>
      <div className={styles["workshop__column"]}>
        <Image src={ScreenShot} alt="Demo" width={200} />
      </div>
      <div className={styles["workshop__column"]}>
        <h3>Taller de Git y Github</h3>
        <span>
          <strong>Fecha de inicio:</strong> 23 de Junio 2023
        </span>
        <span>
          <strong>Duración:</strong> 2 días
        </span>
        <span>
          <strong>Horario:</strong> 10:00 a 13:00
        </span>
        
      </div>
      <div className={styles["workshop__column"]}>
      <button>Reserva tu lugar</button>
      </div>
    </div>
  );
}
