import { useState } from "react";
import "../styles/miembros.css";
import ter from "../styles/imgs/Terraria.avif";

export default function Miembros() {
  const [miembros, setMiembros] = useState([
    { id: 1, nombre: "asdf", img: ter, siguiendo: false },
    { id: 2, nombre: "nombjre2", img: ter, siguiendo: true },
  ]);

  const [search, setSearch] = useState("");

  // toggle usando id (no index)
  function toggleFollowById(id) {
    setMiembros((prev) =>
      prev.map((m) => (m.id === id ? { ...m, siguiendo: !m.siguiendo } : m))
    );
  }

  const miembrosFiltrados = miembros.filter((miembro) =>
    (miembro.nombre || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="miembros-container">
      <div className="miembros-header">
        <input
          type="text"
          placeholder="Buscar miembro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%" }}
        />
        <button>Buscar</button>
      </div>

      <div>
        <ul>
          {miembrosFiltrados.map((miembro) => (
            <li key={miembro.id}>
              <div className="member-top">
                <img
                  className="member-avatar"
                  src={miembro.img || "/placeholder-avatar.png"}
                  alt={miembro.nombre || "Miembro"}
                />
                <h3 className="member-name">{miembro.nombre}</h3>

                <div className="member-stats">
                  <div className="stat">
                    <p className="stat-number">0</p>
                    <p className="stat-label">Siguiendo</p>
                  </div>
                  <div className="stat">
                    <p className="stat-number">0</p>
                    <p className="stat-label">Seguidores</p>
                  </div>
                </div>

                <div className="member-actions">
                  {miembro.siguiendo ? (
                    <button
                      onClick={() => toggleFollowById(miembro.id)}
                      className="btn-unfollow"
                    >
                      Dejar de seguir
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleFollowById(miembro.id)}
                      className="btn-follow"
                    >
                      Seguir
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
