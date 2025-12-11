// 🚨 src/components/HeroImage/HeroImage.jsx

import React from 'react'; 
// Asegúrate de que esta ruta a tu imagen de Home sea correcta
import heroImage from "../../assets/images/Mathemakids/Hero-Mathemakids.jpg"; 

export default function HeroImage({ children }) {
  
  // Clases estáticas para un diseño fijo
  const bannerClass = `banner`; 
  const contentWrapperClass = `content-wrapper`;

  return (
    <>
      {/* 1. BANNER VISIBLE (Fijo y Estático) */}
      <div className="banner" style={{ backgroundImage: `url(${heroImage})` }}>
        
        {/* Estructura del Overlay y Texto */}
        <div className="hero-overlay">
          <div className="hero-text-box">
            <h1 className="hero-title">BLOGS</h1>
            <h3 className="hero-subtitle">Noticias y artículos STEM</h3>
          </div>
        </div>
      </div>

      {/* 2. WRAPPER DE CONTENIDO (Aquí va la clave del padding-top) */}
      <div className="content-wrapper">
        {children}
      </div>
    </>
  );
}