export default function Footer() {
  return (
    <footer>
      <div className="colab-container">
        <h1>Como puedo colaborar?</h1>

        <div className="colab-info">
          <img
            src="https://static.wixstatic.com/media/24173a_1a20d3f6ec9c42be97d9392b307e9a2b.jpg/v1/fill/w_310,h_200,al_c,lg_1,q_80,enc_avif,quality_auto/Construyendo-300x207.jpg"
            alt=""
          />

          <p>
            Todos los usuarios que quieran pueden colaborar, ya sea reportando
            errores , creando mapas , creando plugins y siendo testers.
          </p>
          <button id="colab-button">Ver mas</button>
        </div>
      </div>
    </footer>
  );
}
