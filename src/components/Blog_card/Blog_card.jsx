import React from "react";
import "./Blog_card.css";

const BlogCard = ({ imagen, titulo, resumen }) => {
  return (
    <div className="blog-card"data-aos="flip-left">
      <div className="blog-card-img">
        <img src={imagen} alt={titulo} />
      </div>

      <div className="blog-card-content">
        <h3>{titulo}</h3>
        <p>{resumen}</p>
        <button className="blog-btn">Leer más</button>
      </div>
    </div>
  );
};

export default BlogCard;



