import styles from "./page.module.css";
import Workshop from "../components/workshop";
import TallerGitHub from "../assets/images/plantillas para taller de git y github.png";
import TallerProgramacionBasica from "../assets/images/plantilla para taller programacion basica.png";

const workshops = [
  {
    name: "Programación Básica",
    duration: "5 horas",
    date: "12 de Julio 2024",
    schedule: "10:00am - 3:00pm",
    link: "/workshops/programacion-basica",
    imageSrc: TallerProgramacionBasica,
  },
  {
    name: "Git y Github",
    duration: "5 horas",
    date: "26 de Julio 2024",
    schedule: "10:00am - 3:00pm",
    link: "/workshops/git-y-github",
    imageSrc: TallerGitHub,
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className={styles.demo}>
      <h2 className={styles["demo__title"]}>
        ¡No Te Pierdas Nuestras Próximas Clases!
      </h2>
      <p className={styles["demo__subtitle"]}>
        Reserva Tu Lugar en Nuestros Cursos y Talleres Más Populares
      </p>
      <div className={styles.workshops}>
        {workshops.map((workshop) => (
          <Workshop key={workshop.name} {...workshop} />
        ))}
      </div>
    </section>
  );
}
