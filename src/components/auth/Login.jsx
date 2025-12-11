import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../styles/loginStyle.css"; // Importa los estilos
import logo from "../../assets/images/logo/Mathemakids-logo-V1.png"; // la ruta depende de dónde tengas la imagen

export default function Login() {
 

  const { login } = useAuth();
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ correo, contrasena });
    const respuesta = await login(correo, contrasena);

    navigate("/");

    if (!respuesta) {
      return console.log("Error en el login");
    }

    return console.log("Login exitoso");
  };

  return (
    // CAMBIO 1: El contenedor principal abarca toda la vista
    <div className="login-container">
      {/* Columna Izquierda: Formulario */}
      <div className="login-left-panel">
        <div className="login-card">
          {/* CAMBIO 2: Incluir el logo de Matema Kids */}
          {/* Usamos el segundo logo que subiste para darle un toque personalizado */}
          <div className="logo-section">
            <img src={logo} alt="Mathema Kids Logo" className="login-logo" />
            {/* NOTA: Asegúrate de que esta imagen esté disponible en tu carpeta /public o ajusta la ruta */}
          </div>

          <h3 className="login-title1">¡Bienvenido!</h3>
          <h1 className="login-title2">Inicia Sesion</h1>

          
          <form onSubmit={handleSubmit}>
            <div className="login-group">
              <label className="login-label">Correo Electronico</label>
              <input
                type="email"
                className="login-input"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="" // Se deja sin placeholder para replicar el estilo de la imagen
                required
              />
              {/* Icono de llave o sobre que tiene la imagen original se añade vía CSS */}
            </div>

            <div className="login-group">
              <label className="login-label">Contraseña</label>
              <input
                type="password"
                className="login-input"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                placeholder=""
                required
              />
            </div>
          

            <div>
              <p href="#" className="forgot-password">
              <a href="#" className= "hover-line"> Olvidaste tu contraseña?</a>
              </p>

            <p className="signup-link">
            ¿No tienes cuenta? <a href="#" className="hover-line">Regístrate Ahora</a>
            </p>

            </div>

            <button type="submit" className="login-button">
              Ingresar
            </button>
          </form>
          

          {/* Sección de copyright */}
          <p className="copyright-text">
            Copyright © 2024 Mathema Kids. All rights reserved.
            <br />
            <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Columna Derecha: Imagen de Fondo (Se maneja completamente con CSS) */}
      <div className="login-right-panel">
        {/* Aquí podemos añadir un div para el texto 'SeedProd' superpuesto si lo deseas */}
      </div>
    </div>
  );
}


