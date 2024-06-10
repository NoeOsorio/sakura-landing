import CourseCard from "../components/courseCard";
import styles from "./page.module.css";

const courses = [
  {
    level: "Básico",
    title: "Introducción a la programación",
    description: "Inicia 24 de junio",
  },
  {
    level: "Básico",
    title: "Introducción al desarrollo web",
    description: "Inicia 30 de junio",
  },
  {
    level: "Intermedio",
    title: "Frontend con React",
    description: "Inicia 30 de julio",
  },
];

export default function Courses() {
  return (
    <div className={styles.courses}>
      <h2 className={styles["courses__title"]}>Cursos</h2>
      <p className="subtitle">Conoce los cursos que tenemos para ti.</p>
      <div className={styles["courses__cards"]}>
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            level={course.level}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}
