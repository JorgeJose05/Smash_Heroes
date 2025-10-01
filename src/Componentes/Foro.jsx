import "../styles/foro.css";

export default function Foro() {
  return (
    <div className="foro-container">
      <div className="foro-header">
        <div className="header-options">
          <button>Categorias</button>
          <button>Todas las entradas</button>
          <button>Mis entradas</button>
        </div>
        <input type="text" />
      </div>
    </div>
  );
}
