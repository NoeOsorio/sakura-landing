import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar/page"
import Hero from "./hero/page";
import Sponsors from "./sponsors/page";
import Features from "./features/page";
import Demo from "./demo/page";
import Questions from "./questions/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Courses from "./courses/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero />
      {/* <Sponsors /> */}
      <Features />
      <Courses />
      <Demo />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}
