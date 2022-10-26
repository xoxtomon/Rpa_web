import React from "react";
import "./index.css";
import Jumbo from './components/Jumbo.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from "./components/Footer.jsx";
import Transition from "./components/Transition";
import Card from "./components/Card";
import Title from "./components/Title";
import Areas from "./components/Areas";
import Numbers from "./components/Numbers";

function App() {
  const tit1 = "Soluciones diseñadas con la tecnología que más se adapte a ti";
  const bod1 = "Soluciones simples, especificas y sobre la herramienta que más se adapte a sus necesidades de negocio. Permítanos analizar, mejorar y automatizar sus procesos y tareas repetitivas con herramientas RPA modernas y actualidad.";

  const tit2 = "Impulsamos diferentes sectores de la industria AREAS DE ACCION"
  const bod2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Aliquam faucibus purus in massa. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et.";


  return (
    <div className="bg-white">

      <div className="land-bg">
        <NavBar />
        <Jumbo />
      </div>
      <Transition bol={true} />

      <div id="tecno">
        <Title title={tit1} body={bod1} />
        <Card />
      </div>

      <div class="land-bg-alt" id="sect">
        <Title title={"ÁREAS DE ACCIÓN"} body={""} />
        <Areas />
      </div>


      <div id="indicadores">
        <Numbers title={"Esta podría ser tu compañía"} body={""} end={1000} />
      </div>


      <Transition bol={false} />
      <div class="land-bg">
        <Footer />
      </div>

    </div>
  );
}

export default App;
