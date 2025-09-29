import "./styles.css";
import Header from "./Componentes/Header";
import { useState } from "react";
import Carrusel from "./Componentes/Carrusel";
import Campeones from "./Componentes/Campeones";
import Campeon from "./Componentes/Campeon";
import Contactanos from "./Componentes/Contactanos";

export default function App() {
  //hacer una funcion que se le pase un numero y segun el numero que se le ponga el estado que sea al componente que este en el main

  const [main, setmain] = useState("Carrusel");

  const [campeonActual, setCampeonActual] = useState();
  const selectCampeon = (campeon) => {
    setmain("Campeon");
    setCampeonActual(campeon);
  };

  const renderMain = () => {
    switch (main) {
      case "Carrusel":
        return <Carrusel />;
      case "Campeones":
        return <Campeones selectCampeon={selectCampeon} />;
      case "Campeon":
        return <Campeon campeonActual={campeonActual} />;
      case "Contactanos":
        return <Contactanos />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header setmain={setmain} />
      {renderMain()}
    </div>
  );
}
