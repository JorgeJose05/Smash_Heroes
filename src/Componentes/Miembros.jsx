import { useState } from "react";
import "../styles/miembros.css";

export default function Miembros() {
  const [miembros, setmiembros] = useState([
    { nombre: "asdf" },
    { nombre: "nombjre2" },
  ]);

  const [search, setSearch] = useState("");

  return (
    <div className="miembros-container">
      <div className="miembros-header">
        <input
          type="text"
          placeholder="Buscar campeón..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%" }}
        />
        <button>Buscar</button>
      </div>
      <div>
        {miembros
          .filter((miembro) =>
            miembro.nombre.toLowerCase().includes(search.toLowerCase())
          )
          .map((miembro) => (
            <div>
              <img src="" alt="" />
              <h3>{miembro.nombre}</h3>
              <div>
                <div>
                  <p>0</p>
                  <p>sigiendo</p>
                </div>
                <div>
                  <p>0</p>
                  <p>segidores</p>
                </div>
              </div>
              <div>
                <button>Segir</button>
                <button>3puntos</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
