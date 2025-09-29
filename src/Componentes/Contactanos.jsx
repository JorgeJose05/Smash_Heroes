import "../styles/contactanos.css";

export default function Contactanos() {
  return (
    <div className="contactanos-container">
      <h1>Contactanos</h1>
      <hr />

      <img src="" alt="" />
      <div>
        <form id="form-container" action="">
          <input type="text" placeholder="Usuario" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Asunto" />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            id="mensaje"
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
