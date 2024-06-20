import styles from "./workshop.module.css";
import Image from "next/image";
import ScreenShot from "../assets/images/demo.png";
import Link from "next/link";



export default function Workshop({
  title,
  date,
  duration,
  schedule,
  link,
}: {
  title: string;
  date: string;
  duration: string;
  schedule: string;
  link: string;
}) {
  return (
    <div className={styles["workshop"]}>
      <div className={styles["workshop__column"]}>
        <Image src={ScreenShot} alt="Demo" width={200} />
      </div>
      <div className={styles["workshop__column"]}>
        <h3>{title}</h3>
        <span>
          <strong>Fecha de inicio:</strong> {date}
        </span>
        <span>
          <strong>Duración:</strong> {duration}
        </span>
        <span>
          <strong>Horario:</strong> {schedule}
        </span>
      </div>
      <div className={styles["workshop__column"]}>
        <Link className={styles["workshop__link"]} href={link}>Reserva tu lugar</Link>
      </div>
    </div>
  );
}
