import s from "../styles/Index.module.scss";

export default function Home() {
  return (
    <div className={s.container}>
      <section className={s.software}>
        <h1>Desarrollo de software a la medida en Medellín</h1>
        <p>
          El desarrollo de productos increíbles requiere el mejor esfuerzo desde
          su planeación
        </p>
        <img src="/assets/logo-devinmed.png" alt="" />
        <button className="primary-btn">Agenda una reunion</button>
      </section>
      <section className={s.tecnology}>
        <h2>Usamos las mejores tecnologías</h2>
        <p>
          La selección de las tecnologías es muy importante en la planeación del
          proyecto, cada proyecto tiene caracteristicas especificas que son muy
          importantes considerar antes de elegir las tecnologías que e van a
          emplear en él
        </p>
        <img src="/assets/nextjs-logo.png" alt="Logo next js" />
        <button className="primary-btn">Conoce más</button>
      </section>
      <section className={s.services}>
        <h2>Nuestros servicios</h2>
        <p>
          Desarrollamos software con un alto enfoque a la experiencia de
          usuario, optimizado y alineado a los requerimientos especificos del
          proyecto
        </p>
        <p>Nuestra experiencia:</p>
        <ul>
          <li>Sitios Web</li>
          <li>E-commerce</li>
          <li>Aplicaciones web</li>
          <li>Aplicaciones móviles</li>
          <li>Progressive web apps</li>
          <li>Chatbots</li>
          <li>Optimización de bases de datos</li>
          <li>Algoritmos de Machine Learning</li>
        </ul>
        <button className="primary-btn">¡Tengo un proyecto!</button>
      </section>
      <section className={s.portfolio}>
        <h2>Algunos de nuestros trabajos</h2>
        //agregar componente portfolio
      </section>
    </div>
  );
}
