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
import Prueba from "./components/Prueba";

function App() {
  const tit1 = "Soluciones disenadas con la tecnologia que más se adapte a ti";
  const bod1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Aliquam faucibus purus in massa. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et.";

  const tit2 = "Impulsamos diferentes sectores de la industria AREAS DE ACCION"
  const bod2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Aliquam faucibus purus in massa. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et.";


  return (
    <div className="bg-white">

      <div className="land-bg">
        <NavBar />
        <Jumbo />
      </div>
      <Transition bol={true} />

      <Title title={tit1} body={bod1} />
      <Card />

      <div class="land-bg-alt">
        <Title title={"AREAS DE ACCIÓN"} body={""} />
        <Areas />
      </div>


      <Numbers title={"Esta podria ser tu compania"} body={""} end={1000} />


      <Transition bol={false} />
      <Prueba />
      <div class="land-bg">
        <Footer />
      </div>

    </div>
  );
}

export default App;
