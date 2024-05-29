import Desplegable from "../components/desplegable";
import styles from "./page.module.css";

export default function Questions() {
  return <div className={styles.questions}>
    <h2 className={styles["questions__title"]}>
    Frequently asked questions
    </h2>
    <Desplegable />
    <Desplegable />
    <Desplegable />
    <Desplegable />
  </div>;
}
