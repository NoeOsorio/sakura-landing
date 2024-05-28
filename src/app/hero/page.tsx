import styles from "./page.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles["hero__title"]}>One Task at a Time</h1>
      <span className={styles["hero__subtitle"]}>
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </span>
      <button className={styles["hero__cta"]}>Get Started</button>
        <div className={styles["hero__light"]}></div>
    </div>
  );
}
