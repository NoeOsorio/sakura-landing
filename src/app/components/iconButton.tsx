import styles from "./iconButton.module.css";

export default function IconButton({ link, icon }: { link: string, icon: JSX.Element }) {
  return (
    <a href={link} className={styles["icon__button"]}>
      {icon}
    </a>
  );
}
