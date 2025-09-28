export default function Header() {
  return (
    <>
      <header className="container-header">
        <img
          style={{ margin: "10px" }}
          src="styles/imgs/logo.png"
          width="200px"
          height="110px"
          alt="Smash heroes"
        />
        <div className="container-header-buttons">
          <button className="top-menu-button">Novedades</button>
          <button className="top-menu-button">
            <a href="Campeones.html">Campeones</a>
          </button>
          <button className="top-menu-button">Contactanos</button>
          <button className="top-menu-button">Foro</button>
          <button className="top-menu-button">Miembros</button>
          <button className="top-menu-button loggin-button">
            Inicia sesion
          </button>
        </div>
      </header>
    </>
  );
}
