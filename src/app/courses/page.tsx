import CourseCard from "../components/courseCard";
import styles from "./page.module.css";

const courses = [
  {
    level: "Básico",
    title: "Introducción a la programación",
    description: "Proximamente",
  },
  {
    level: "Básico",
    title: "Introducción al desarrollo web",
    description: "Proximamente",
  },
  {
    level: "Intermedio",
    title: "Frontend con React",
    description: "Proximamente",
  },
];

export default function Courses() {
  return (
    <section id="courses" className={styles.courses}>
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
    </section>
  );
}
