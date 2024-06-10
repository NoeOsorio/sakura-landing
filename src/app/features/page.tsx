import React from "react";
import styles from "./page.module.css";
import Card from "../components/card";

const reasons = [
  {
    title: "Clases en Vivo y Grabadas",
    description: "Aprende con la compañía de expertos en sesiones en vivo y revisa las grabaciones para estudiar a tu propio ritmo."
  },
  {
    title: "Proyectos y Metodologías Reales",
    description: "Trabaja en proyectos basados en experiencias reales de la industria, asegurando una formación relevante y práctica."
  },
  {
    title: "Didáctica Enfocada en el Uso Práctico",
    description: "Refuerza tus conocimientos profesionales con una enseñanza práctica que aplica directamente a situaciones laborales."
  }
];


const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      <h2 className={styles["features__title"]}>
        ¿Por qué elegir Sakura Academy?
      </h2>
      <p className={"subtitle"}>
        Descubre cómo nuestra metodología te llevará al éxito tecnológico.
      </p>
      <div className={styles["features__cards"]}>
        {reasons.map((reason) => (
          <Card key={reason.title} title={reason.title} description={reason.description} />
        ))}
      </div>
    </div>
  );
};

export default Features;
