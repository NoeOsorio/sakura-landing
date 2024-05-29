import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero/page";
import Sponsors from "./sponsors/page";
import Features from "./features/page";
import Demo from "./demo/page"
import Questions from "./questions/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Sponsors />
      <Features />
      <Demo />
      <Questions />
    </div>
  );
}
