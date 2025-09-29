import { useState } from "react";
import "../styles/campeones.css";
import shanumi from "../styles/imgs/Personajes/shanumi.avif";
import hachaDeHierro from "../styles/imgs/Habilidades/Hacha de hierro.avif";
import pielDeConejo from "../styles/imgs/Habilidades/Piel de conejo.avif";

const personajes = [
  {
    imagen: shanumi,
    nombre: "Titan",
    tipo: "Tanques",
    dificultad: "Media",
    historia: `Después de la muerte de sus padres, una familia noble la acogió.

Esta familia, sabiendo la desgracia que le llevo a la niña a estar con ellos, quisieron que se entrenara en combates cuerpo a cuerpo para que no le sucediera nada horrible.

Sin embargo, por mucho entrenamiento, la niña, no conseguía combatir como una gran luchadora, y por tanto, decidió entrenar por su cuenta, ya no cuerpo a cuerpo si no a distancia.

Como es de esperar, en el pueblo en el que vivía, no permitían tener armas a los niños. Por tanto, nuestra niña, cogió piedras y una caña y se fabricó su propia arma. 

Después de que sus nuevos padres fallecieran brutalmente asesinados, decidió que se volvería una gran luchadora para, simplemente, vengarlos.

Pero en el momento de la matanza, se dió cuenta que la venganza que había logrado matando al asesino de sus padres había sido esencial para darse cuenta de que lo suyo era matar.`,
    habilidades: [
      {
        nombre: "Basico & Traspaso",
        icono: hachaDeHierro,
        descripcion: "Lanza una bola de fuego.",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "Absorbe daño durante 3s.",
      },
      {
        nombre: "Basico & Traspaso",
        icono: hachaDeHierro,
        descripcion: "Lanza una bola de fuego.",
      },
      {
        nombre: "Oh un muro!!",
        icono: pielDeConejo,
        descripcion: "Absorbe daño durante 3s.",
      },
    ],
  },
  {
    imagen: "img/mago1.jpg",
    nombre: "Mystic",
    tipo: "Magos",
    dificultad: "Alta",
    historia: "Mystic domina los secretos arcanos...",
    habilidades: [
      {
        nombre: "Basico & Traspaso",
        icono: "styles/imgs/Habilidades/Hacha de hierro.avif",
        descripcion: "Lanza una bola de fuego.",
      },
      {
        nombre: "Oh un muro!!",
        icono: "styles/imgs/Habilidades/Piel de conejo.avif",
        descripcion: "Absorbe daño durante 3s.",
      },
      {
        nombre: "Basico & Traspaso",
        icono: "styles/imgs/Habilidades/Hacha de hierro.avif",
        descripcion: "Lanza una bola de fuego.",
      },
      {
        nombre: "Oh un muro!!",
        icono: "styles/imgs/Habilidades/Piel de conejo.avif",
        descripcion: "Absorbe daño durante 3s.",
      },
    ],
  },
  {
    imagen: "img/tirador1.jpg",
    nombre: "Sharpy",
    tipo: "Tiradores",
    dificultad: "Alta",
  },
  {
    imagen: "img/mago1.jpg",
    nombre: "Mystic",
    tipo: "Magos",
    dificultad: "Alta",
  },
  {
    imagen: "img/asesino1.jpg",
    nombre: "Shadow",
    tipo: "Asesinos",
    dificultad: "Alta",
  },
  {
    imagen: "img/luchador1.jpg",
    nombre: "Crusher",
    tipo: "Luchadores",
    dificultad: "Baja",
  },
];

export default function Campeones({ selectCampeon }) {
  const [filtro, setFiltro] = useState("todos");

  const clases = [
    "todos",
    "tanques",
    "tiradores",
    "magos",
    "asesinos",
    "luchadores",
  ];

  const handleClick = (clase) => {
    setFiltro(clase);
  };

  const filtrarPersonajes = personajes.filter(
    (p) => filtro === "todos" || p.tipo.toLowerCase() === filtro
  );

  return (
    <>
      <div className="container-champion-clases">
        {clases.map((clase) => (
          <button
            key={clase}
            className={`top-menu-button ${filtro === clase ? "selected" : ""}`}
            onClick={() => handleClick(clase)}
          >
            {clase.charAt(0).toUpperCase() + clase.slice(1)}
          </button>
        ))}
      </div>

      <div className="campeones-section">
        <h1>Campeones</h1>
        <hr />
        <div className="campeones-container">
          <ul>
            {filtrarPersonajes.map((p, index) => (
              <li
                key={index}
                data-clase={p.tipo.toLowerCase()}
                onClick={() => selectCampeon(p)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                    marginBottom: "0.5rem",
                  }}
                />
                <h2>{p.nombre}</h2>
                <p>Tipo: {p.tipo}</p>
                <p>Dificultad: {p.dificultad}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
