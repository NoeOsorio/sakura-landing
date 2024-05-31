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
        @ 2024 Your Company, Inc. All rights reserved
      </p>
      <div className={styles["footer__icons"]}>
         <IconButton link={"https://twitter.com"} icon={<TwitterOutlined />} />
         <IconButton link={"https://instagram.com"} icon={<InstagramOutlined />} />
         <IconButton link={"https://facebook.com"} icon={<FacebookOutlined />} />
          <IconButton link={"https://linkedin.com"} icon={<LinkedinOutlined />} />
          <IconButton link={"https://youtube.com"} icon={<YoutubeOutlined />} />
      </div>
      
    </footer>
  );
}
