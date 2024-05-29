"use client";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styles from "./desplegable.module.css";
import { useState } from "react";

export default function Desplegable() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.desplegable}>
      <div className={styles["desplegable__title-container"]}>
        <span className={styles["desplegable__title"]}>
          How does the pricing work for teams
        </span>
        {open ? (
          <MinusOutlined
            className={styles["desplegable__button"]}
            onClick={handleClick}
          />
        ) : (
          <PlusOutlined
            className={styles["desplegable__button"]}
            onClick={handleClick}
          />
        )}
      </div>
      <p
        className={styles["desplegable__answer"]}
        style={{ display: open ? "block" : "none" }}
      >
        Yes, our pricing is based on the number of users in your team. We offer
        a great product.
      </p>
      <div className={styles["desplegable__divider"]}></div>
    </div>
  );
}
