import { useState } from "react";
import "./Documental.css";

const Documental = () => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleStarClick = (num) => {
    setSelectedStars(num);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2400);
  };

  return (
    <div className="documental-container">

      {/* TITULO */}
      <h1 className="title">Documental</h1>

      {/* VIDEO */}
      <div className="video-section">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/tu-video"
          title="Documental"
          allowFullScreen
        ></iframe>
        <p className="subtitle">Explorando el cuerpo humano</p>
      </div>

      {/* SINOPSIS + IMAGEN */}
      <div className="content-grid">
        <div>
          <h3>Sinopsis</h3>
          <textarea
            placeholder="Aquí puedes escribir la sinopsis del documental..."
          ></textarea>
        </div>

        <div>
          <h3>Imagen del documental</h3>
          <img
            src="https://via.placeholder.com/400x250"
            alt="Imagen documental"
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 0 15px rgba(0,0,0,0.1)"
            }}
          />
        </div>
      </div>

      {/* DETALLES TÉCNICOS */}
      <div className="details-section">
        <h3>Detalles Técnicos</h3>

        <div className="details-grid">
          <p><strong>Duración:</strong> 25 minutos</p>
          <p><strong>Año:</strong> 2025</p>
          <p><strong>Dirección:</strong> Equipo MathemaKids</p>
          <p><strong>Producción:</strong> MathemaKids Studio</p>
        </div>
      </div>

      {/* ⭐⭐⭐⭐⭐ RESEÑAS INTERACTIVAS */}
      <div className="reviews-section">
        <h3>Califica el documental</h3>

        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`star ${selectedStars >= num ? "active" : ""}`}
              onClick={() => handleStarClick(num)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* RELATO + EXTRA */}
      <div className="adicional">
        <h3>Relato o experiencia</h3>
        <textarea placeholder="Escribe aquí el relato del proceso..."></textarea>
      </div>

      {/* MENSAJE FLOTANTE */}
      {showMessage && (
        <div className="rating-message">
          ⭐ ¡Ya valoraste el documental! Gracias por tu apoyo.
        </div>
      )}

    </div>
  );
};

export default Documental;
