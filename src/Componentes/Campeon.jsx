import "../styles/campeon.css";

export default function Campeon({ campeonActual }) {
  return (
    <div class="personaje-container" id="personaje-detalle">
      <div class="personaje-info">
        <h1>{campeonActual.nombre}</h1>
        <div class="personaje-avatar">
          <img src={campeonActual.imagen} alt={campeonActual.nombre} />
        </div>
        <div class="personaje-habilidades">
          <h1>Habilidades</h1>
          <ul>
            {campeonActual.habilidades.map((h) => (
              <li>
                <img src={h.icono} alt={h.nombre} />
                <span>{h.nombre}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>Historia</h2>
        <p>{campeonActual.historia}</p>
      </div>
    </div>
  );
}
