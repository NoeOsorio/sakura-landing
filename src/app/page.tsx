import styles from "./page.module.css";
import Navbar from "./navbar/page"
import Hero from "./hero/page";
import Features from "./features/page";
import Workshops from "./workshops/page";
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
      <Workshops />
      <Questions />
      <Contact />
      
    </div>
  );
}
