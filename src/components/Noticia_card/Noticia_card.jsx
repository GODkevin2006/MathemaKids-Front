import React from "react";
import "./Noticia_card.css";

const Noticia = ({ imagen, titulo, fecha }) => {
  return (
    <div className="noticia-card" data-aos="fade-up">
      <div className="noticia-imagen">
        <img src={imagen} alt={titulo} />
      </div>

      <h3 className="noticia-titulo">{titulo}</h3>
      <p className="noticia-fecha">{fecha}</p>
    </div>
  );
};

export default Noticia;



