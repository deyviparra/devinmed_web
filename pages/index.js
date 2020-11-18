import Section1 from "../components/indexSections/section1/Section1";
import Section2 from "../components/indexSections/section2/Section2";
import Section3 from "../components/indexSections/section3/Section3";
import s from "../styles/Index.module.css";

export default function Home() {

  return (
    <div className={`${s.container}`}>
    <h1>Página de prueba usando <a href="https://es.reactjs.org/">React js</a>  con el framework <a href="https://nextjs.org/">Next js</a></h1>
    <Section1/>
    <Section2/>
    <Section3/>
    </div>
  );
}
