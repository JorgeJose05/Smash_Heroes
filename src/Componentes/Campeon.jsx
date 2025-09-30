import "../styles/campeon.css";

export default function Campeon({ campeonActual }) {
  return (
    <div className="personaje-container" id="personaje-detalle">
      <div className="personaje-info">
        <h1>{campeonActual.nombre}</h1>
        <div className="personaje-avatar">
          <img src={campeonActual.imagen} alt={campeonActual.nombre} />
        </div>
        <div className="personaje-habilidades">
          <h1>Habilidades</h1>
          <ul>
            {campeonActual.habilidades.map((h, index) => (
              <li key={index}>
                <img src={h.icono} alt={h.nombre} />
                <span>{h.nombre}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="historia">
        <h2>Historia</h2>
        <p>{campeonActual.historia}</p>
      </div>
    </div>
  );
}
