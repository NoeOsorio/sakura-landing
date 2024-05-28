import styles from "./card.module.css";
import Image from "next/image";
import icon from "../assets/images/Icons.svg";

export default function Card() {
  return (
    <div className={styles["card__container"]}>
      <Image
        className={styles["card__image"]}
        src={icon}
        alt="Feature 1"
        width={50}
        height={50}
      />
      <h4 className={styles["card__title"]}>Integration ecosystem</h4>
      <p className={styles["card__description"]}>
        Connect your favorite tools and automate your workflow.
      </p>
    </div>
  );
}
