import styles from "./page.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles["hero__title"]}>
        Sakura Academy
      </h1>
      <span className={styles["hero__subtitle"]}>
      Transforma tu Futuro en Tecnología con la Mejor Escuela de Programación en Puebla - ¡Comienza Hoy!
      </span>
      <button className={styles["hero__cta"]}>Inscríbete Ahora</button>
      <div className={styles["hero__light"]}></div>
    </div>
  );
}
