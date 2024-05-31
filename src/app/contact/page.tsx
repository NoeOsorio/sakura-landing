import styles from "./page.module.css";
import Image from "next/image";
import pastel from "../assets/images/pastel.png"
import engrane from "../assets/images/engrane.png"

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles["contact__title"]}>Get instant Access</h2>
      <p className={styles["contact__subtitle"]}>
        Celebrate the joy of accomplishment with an app designed to track your
        progress and motivate your efforts.
      </p>
      <div className={styles["contact__form"]}>
        <input placeholder="name@example.com" type="email" className={styles["contact__form__email-input"]} />
        <button className={styles["contact__form__submit-button"]}>
          Request Access
        </button>
      </div>
      <Image className={styles["contact__pastel"]} src={pastel} alt="Pastel" width={263} height={263} />
      <Image className={styles["contact__engrane"]} src={engrane} alt="Engrane" width={263} height={263} />
    </div>
  );
}
