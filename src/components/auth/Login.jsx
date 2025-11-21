import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "../../styles/loginStyle.css"; // Importa los estilos

export default function Login() {

  const {login} = useAuth();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ correo, contrasena });
    const respuesta = await login(correo, contrasena);

    if (!respuesta) {
       return console.log("Error en el login");
    }

    return console.log("Login exitoso");

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="login-group">
            <label className="login-label">Correo</label>
            <input
              type="email"
              className="login-input"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@example.com"
              required
            />
          </div>

          <div className="login-group">
            <label className="login-label">Contraseña</label>
            <input
              type="password"
              className="login-input"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
