import Image from "next/image";
import styles from "./page.module.css";
import sponsor1 from "../assets/images/acme 1.png";

export default function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <h4 className={styles["sponsors__title"]}>
        Trusted by the world’s most innovative teams
      </h4>
      <div className={styles["sponsors__logos"]}>
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
        <Image
          className={styles["sponsors__logo"]}
          src={sponsor1}
          alt="Airbnb"
          width={146}
          height={32}
        />
      </div>
    </div>
  );
}
