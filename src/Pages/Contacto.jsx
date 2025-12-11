import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto-container">
      <div className="contacto-container">
      <h2>Contacto MathemaKids</h2>
      <p>
        Estamos felices de acompañarte en tu proceso. 
        Si tienes dudas, sugerencias o necesitas más información 
        sobre nuestros servicios, estaremos encantados de ayudarte.
         Puedes comunicarte con nosotros a través de WhatsApp o correo electrónico, y responderemos lo más pronto posible.
      </p>

      <div className="contacto-links">
        <a
          href="https://wa.me/573001112233"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp className="icon" />
          Contactar por WhatsApp
        </a>

        <a href="mailto:correo@mathemakids.com" className="btn-email">
          <FaEnvelope className="icon" />
          Enviar correo
        </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
