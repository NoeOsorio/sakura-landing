import styles from "./page.module.css";
import Image from "next/image"
import ScreenShot from "../assets/images/demo.png"

export default function Demo() {
  return (
    <div className={styles.demo}>
      <h2 className={styles["demo__title"]}>Intuitive interface</h2>
      <p className={styles["demo__subtitle"]}>
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes, one task
        at a time.
      </p>
      <Image className={styles["demo__image"]} alt="Demo ScreenShot" src={ScreenShot}/>
    </div>
  );
}
