import styles from "./workshop.module.css";
import Image from "next/image";
import ScreenShot from "../assets/images/demo.png";

export default function Workshop({name, startDate, duration, schedule, imageSrc}:{name :string, startDate :string, duration :string, schedule :string, imageSrc :string}) {
  return (
    <div className={styles["workshop"]}>
      <div className={styles["workshop__column"]}>
        <Image src={imageSrc} alt="Demo" width={200} />
      </div>
      <div className={styles["workshop__column"]}>
        <h3>{name}</h3>
        <span>
          <strong>Fecha de inicio:</strong> {startDate}
        </span>
        <span>
          <strong>Duración:</strong> {duration}
        </span>
        <span>
          <strong>Horario:</strong> {schedule}
        </span>
        
      </div>
      <div className={styles["workshop__column"]}>
      <button>Reserva tu lugar</button>
      </div>
    </div>
  );
}
