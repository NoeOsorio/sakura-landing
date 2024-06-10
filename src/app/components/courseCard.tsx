import styles from "./courseCard.module.css";

export default function CourseCard({
  level,
  title,
  description,
}: {
  level: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles["card-body"]}>
        <span>Curso {level}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
