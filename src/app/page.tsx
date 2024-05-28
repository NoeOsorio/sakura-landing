import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
