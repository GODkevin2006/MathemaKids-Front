import "./contacto.css";

const Contacto = () => {
  return (
    <div className="contact-container">

      <h1>Contacto MathemaKids</h1>
      <p className="descripcion">
        ¡Estamos felices de saber de ti! Completa el formulario y cuéntanos cómo podemos ayudarte.
      </p>

      <form className="contact-form">
        <div className="fila">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
        </div>

        <div className="fila">
          <input type="text" placeholder="Teléfono Celular" />
          <input type="email" placeholder="Correo Electrónico" />
        </div>

        <input type="text" placeholder="Asunto" />
        <textarea placeholder="Mensaje"></textarea>

        <div className="checks">
          <label><input type="checkbox" /> Acepto términos</label>
          <label><input type="checkbox" /> Deseo recibir noticias</label>
        </div>

        <button type="submit" className="btn-enviar">Enviar mensaje</button>
      </form>

    </div>
  );
}

export default Contacto;
