import Desplegable from "../components/desplegable";
import styles from "./page.module.css";

const qAndA = [
  {
    question: "¿Qué tipo de cursos ofrece Sakura Academy?",
    answer:
      "En Sakura Academy ofrecemos una variedad de cursos de programación y desarrollo tecnológico para todos los niveles, desde principiantes hasta avanzados. Nuestros cursos incluyen desarrollo web, front-end, back-end, desarrollo móvil y seguridad en aplicaciones. También ofrecemos talleres especiales sobre temas como Git y GitHub, metodologías ágiles y desarrollo de aplicaciones web progresivas (PWA).",
  },
  {
    question:
      "¿Necesito tener experiencia previa en programación para inscribirme?",
    answer:
      "No, no es necesario tener experiencia previa en programación para inscribirte en nuestros cursos básicos. Nuestros cursos están diseñados para adaptarse a todos los niveles de habilidad. Si eres principiante, te recomendamos empezar con nuestro curso de Introducción al Desarrollo Web, que te proporcionará los fundamentos necesarios para avanzar en tu carrera en tecnología.",
  },
  {
    question: "¿Cómo son las clases en Sakura Academy?",
    answer:
      "Nuestras clases combinan teoría y práctica, con un enfoque en proyectos reales y trabajo colaborativo. Las sesiones incluyen lecciones en vivo, ejercicios prácticos y discusiones interactivas. Además, proporcionamos material didáctico y acceso a una plataforma de gestión de aprendizaje donde puedes seguir tu progreso y acceder a recursos adicionales.",
  },
  {
    question: "¿Qué tipo de soporte y tutorías están disponibles?",
    answer:
      "En Sakura Academy, entendemos que cada estudiante puede necesitar ayuda adicional en su aprendizaje. Ofrecemos soporte a través de tutorías personalizadas, foros de discusión y sesiones de preguntas y respuestas. Nuestro equipo de instructores está disponible para ayudarte con cualquier duda o desafío que puedas enfrentar durante tu curso.",
  },
  {
    question: "¿Qué sucede si no puedo asistir a una clase en vivo?",
    answer:
      "Entendemos que pueden surgir imprevistos. Todas nuestras clases en vivo son grabadas y se ponen a disposición de los estudiantes en nuestra plataforma de gestión de aprendizaje. Podrás ver las grabaciones en cualquier momento que te sea conveniente y ponerte al día con el contenido que te hayas perdido. Además, puedes hacer preguntas en los foros o durante las tutorías para aclarar cualquier duda.",
  },
  {
    question: "¿Cómo se evalúa el progreso de los estudiantes?",
    answer:
      "Evaluamos el progreso de nuestros estudiantes a través de una combinación de proyectos prácticos, evaluaciones semanales y participación en clase. Los proyectos prácticos permiten aplicar lo aprendido en situaciones reales, mientras que las evaluaciones semanales aseguran una comprensión continua del material. La participación en clase, tanto en discusiones como en actividades colaborativas, también es un componente importante de nuestra evaluación.",
  },
  {
    question: "¿Ofrecen algún tipo de certificación al completar un curso?",
    answer:
      "Sí, al completar satisfactoriamente cualquiera de nuestros cursos, recibirás un certificado de finalización que reconoce tu esfuerzo y habilidades adquiridas. Este certificado puede ser añadido a tu portafolio y perfil profesional en plataformas como LinkedIn, ayudándote a destacarte en el mercado laboral.",
  },
  {
    question:
      "¿Qué tipo de proyectos puedo esperar trabajar durante los cursos?",
    answer:
      "Nuestros cursos están diseñados para ser altamente prácticos, con proyectos que reflejan situaciones y desafíos del mundo real. Por ejemplo, en nuestros cursos de desarrollo web, podrías trabajar en proyectos como la creación de un sitio web de portafolio personal, una tienda en línea de productos ficticios, o un blog con funcionalidad de comentarios. Estos proyectos te ayudarán a construir un portafolio sólido que demuestre tus habilidades a futuros empleadores.",
  },
  {
    question: "¿Cómo puedo inscribirme en un curso?",
    answer:
      "Inscribirse en un curso en Sakura Academy es fácil. Simplemente visita nuestra página web, elige el curso que te interesa y sigue las instrucciones para registrarte. También puedes contactarnos directamente si necesitas ayuda con el proceso de inscripción. Estamos aquí para asegurarnos de que tengas una experiencia de registro sin problemas y puedas comenzar tu aprendizaje sin demora.",
  },
];
export default function Questions() {
  return (
    <div className={styles.questions}>
      <h2 className={styles["questions__title"]}>Preguntas Frecuentes</h2>
      {qAndA.map((qa) => (
        <Desplegable
          key={qa.question}
          question={qa.question}
          answer={qa.answer}
        />
      ))}
    </div>
  );
}
