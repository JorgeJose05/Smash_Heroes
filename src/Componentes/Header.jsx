import logo from "../styles/imgs/logo.png";

export default function Header({ setmain }) {
  const changemain = (opcion) => {
    setmain(opcion);
  };

  return (
    <>
      <header className="container-header">
        <img
          style={{ margin: "10px" }}
          src={logo}
          width="200px"
          height="110px"
          alt="Smash heroes"
        />
        <div className="container-header-buttons">
          <button
            className="top-menu-button"
            onClick={() => changemain("Carrusel")}
          >
            Novedades
          </button>
          <button
            className="top-menu-button"
            onClick={() => changemain("Campeones")}
          >
            Campeones
          </button>
          <button
            className="top-menu-button"
            onClick={() => changemain("Contactanos")}
          >
            Contactanos
          </button>
          <button
            className="top-menu-button"
            onClick={() => changemain("Foro")}
          >
            Foro
          </button>
          <button
            className="top-menu-button"
            onClick={() => changemain("Miembros")}
          >
            Miembros
          </button>
          <button
            className="top-menu-button loggin-button"
            onClick={() => changemain("Loggin")}
          >
            Inicia sesion
          </button>
        </div>
      </header>
    </>
  );
}
