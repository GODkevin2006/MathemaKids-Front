import React from 'react';
import logoV2 from "../../assets/images/logo/MathemaKids-logo-Blanco-foother.png";
import instagram from "../../assets/images/iconos/instagram.png";
import tiktok from "../../assets/images/iconos/tik-tok.png";
import facebook from "../../assets/images/iconos/facebook.png";
// Asegúrate de importar tu archivo CSS, por ejemplo:
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mathema-kids-footer">
      <div className="footer-content-container">
        
        {/* Sección del Logo */}
        <div className="logo-section">
         {/* Reemplaza el div con tu etiqueta img */}
         <img src={logoV2} alt="Mathema Kids Logo" className="mathema-kids-logo-img" />
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section social-section">
        <h3 className="section-title">Redes</h3>
        <div className="social-icons">
    
                {/* Instagram */}
                <a href="YOUR_INSTAGRAM_LINK_HERE" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={instagram} alt="Instagram" className="social-icon-img" />
                </a>
                
                {/* WhatsApp */}
                <a href="YOUR_WHATSAPP_LINK_HERE" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={tiktok} alt="tiktok" className="social-icon-img" />
                </a>
                
                {/* Facebook */}
                <a href="YOUR_FACEBOOK_LINK_HERE" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={facebook} alt="Facebook" className="social-icon-img" />
                </a>
                
            </div>
        </div>

        {/* Sección de Ubicación */}
        <div className="footer-section location-section">
          <h3 className="section-title">
            <span className="icon-placeholder">📍</span> Ubicación
          </h3>
          <p>Bogotá D.C</p>
          <p>Colombia</p>
        </div>

        {/* Sección de Contacto */}
        <div className="footer-section contact-section">
          <h3 className="section-title">
            <span className="icon-placeholder">✉︎</span> Contacto
          </h3>
          <p>Mathemakids@gmail.com</p>
          <p>+57 000 - 000 - 0000</p>
        </div>
      </div>

      {/* Copyright */}
    <div className="footer-copyright">
      <p>Copyright© 2025 MATHEMAKIDS.COM</p>
    </div>
    </footer>
  );
};

export default Footer;