import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import logoSakura from "../assets/images/logo-sakura.png";
import Image from "next/image";
import IconButton from "../components/iconButton";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

interface SocialLink {
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Workshop de Programación Básica",
    url: "/workshops/programacion-basica",
  },
  { name: "Workshop de Git y Github", url: "/workshops/git-y-github" },
  // Agrega más enlaces sociales aquí
];

const Page: React.FC = () => {
  return (
    <div className={styles.social}>
      <Link href="/">
        <Image src={logoSakura} alt="Sakura Academy" width={200} />
      </Link>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles["social__icons"]}>
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
    </div>
  );
};

export default Page;
