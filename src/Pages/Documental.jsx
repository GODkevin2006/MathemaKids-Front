import { useState } from "react";
import heroImage from '../assets/images/Mathemakids/Hero-Mathemakids.jpg';
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
        <p className="subtitle">Nuestra historia a continuación...</p>
      </div>

      {/* SINOPSIS + IMAGEN */}
      <div className="content-grid">
        <div>
          <h3>Descripción </h3>
          <p>"En los cerros orientales de Bogotá, Mathema Kids nació en 2015 como una respuesta a la falta de espacios de ciencia y tecnología en el barrio Los Laches.
             Lo que comenzó como un pequeño semillero de investigación con 13 niños y niñas se convirtió en un lugar donde la curiosidad,
             el trabajo en equipo y el enfoque STEM abren nuevas oportunidades. Este documental muestra cómo, a través del Aprendizaje Basado en Proyectos,
             la comunidad transforma desafíos en conocimiento y esperanza."
          </p>
        </div>

        <div>
          <h3>Imagen del documental</h3>
          <img
            src={heroImage}
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
