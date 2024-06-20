import styles from "./workshop.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

export default function Workshop({
  name,
  date,
  duration,
  schedule,
  imageSrc,
  link,
}: {
  name: string;
  date: string;
  duration: string;
  schedule: string;
  imageSrc: string | StaticImageData;
  link: string;
}) {
  return (
    <div className={styles["workshop"]}>
      <div className={styles["workshop__column"]}>
        <Image src={imageSrc} alt="Demo" width={200} />
      </div>
      <div className={styles["workshop__column"]}>
        <h3>{name}</h3>
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
        <Link className={styles["workshop__link"]} href={link}>
          Reserva tu lugar
        </Link>
      </div>
    </div>
  );
}
