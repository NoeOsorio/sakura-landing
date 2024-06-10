import styles from "./page.module.css";
import IconButton from "../components/iconButton";
import { InstagramOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer__company"]}>
        @ 2024 Sakura Kode Academy. Todos los derechos reservados.
      </p>
      <div className={styles["footer__icons"]}>
        <IconButton
          link={"https://www.instagram.com/sakurakode.academy"}
          icon={<InstagramOutlined />}
        />
        <IconButton
          link={
            "https://www.facebook.com/people/Sakura-Academy/61559428662044/"
          }
          icon={<FacebookOutlined />}
        />
        <IconButton
          link={"https://linkedin.com/company/sakurakodeacademy"}
          icon={<LinkedinOutlined />}
        />
      </div>
    </footer>
  );
}
