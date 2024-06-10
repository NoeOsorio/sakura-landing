import styles from "./card.module.css";
import Image from "next/image";
import icon from "../assets/images/Icons.svg";

export default function Card({title, description}: {title: string, description: string}) {
  return (
    <div className={styles["card__container"]}>
      <Image
        className={styles["card__image"]}
        src={icon}
        alt="Feature 1"
        width={50}
        height={50}
      />
      <h4 className={styles["card__title"]}>{title}</h4>
      <p className={styles["card__description"]}>
        {description}
      </p>
    </div>
  );
}
