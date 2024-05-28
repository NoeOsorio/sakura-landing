import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Card from "../components/card";

const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      <h2 className={styles["features__title"]}>Everything you need</h2>
      <p className={styles["features__subtitle"]}>
        Enjoy customizable lists, team work tools, and smart tracking all in one
        place. Set tasks, get reminders, and see your progress simply and
        quickly.
      </p>
      <div className={styles["features__cards"]}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Features;
