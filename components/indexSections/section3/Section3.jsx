import React from "react";
import s from "./Section3.module.css";

const Section3 = () => {
  return (
    <section className={s.container}>
        <h2>¿Sabías que?</h2>
      <p>
        ¡ Un segundo perdido puede costarle a Amazon 1,600 millones de dólares !
      </p>
      <img src="https://media.giphy.com/media/Nm8ZPAGOwZUQM/source.gif" alt=""/>
      <p>Cada segundo de carga es realmente importante en tu sitio web</p>
    </section>
  );
};

export default Section3;
