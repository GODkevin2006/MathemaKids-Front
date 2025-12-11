import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./CrearCuenta.css";

export default function CrearCuenta() {

  const navigate= useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    contrasena: "",
    confirmar: "",
    estado: "activo",
    id_rol: 3
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.contrasena !== form.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombres: form.nombre,
          apellidos: form.apellidos,
          correo: form.correo,
          contrasena: form.contrasena,
          contrasena_confirmation: form.confirmar,
          estado: form.estado,
          id_rol: form.id_rol
        }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) 
       throw new Error("error al registrar");

       navigate("/login");

    } catch (error) {
      console.error("Error al conectar:", error);
    }
  };

  return (
    <div className="register-container">

      <div className="register-left">
        <p className="register-subtitle">Únete a Mathema Kids 🎓</p>
        <h1 className="register-title">Crear Cuenta</h1>
        

        {/* FORMULARIO INICIA AQUÍ */}
        <form onSubmit={handleSubmit} className="register-form">

          {/* FILA DE NOMBRE Y APELLIDOS */}
          <div className="register-row">
            <div className="register-group">
              <label>Nombres</label>
              <input
                type="text"
                name="nombres"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="register-group">
              <label>Apellidos</label>
              <input
                type="text"
                name="apellidos"
                value={form.apellidos}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* CORREO */}
          <div className="register-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
            />
          </div>

          {/* CONTRASEÑA */}
          <div className="register-group password-group">
            <label>Contrasena</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="contrasena"
                value={form.contrasena}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* CONFIRMACIÓN */}
          <div className="register-group password-group">
            <label>Confirmación</label>
            <div className="password-wrapper">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmar"
                value={form.confirmar}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? "🙈" : "👁️"}
              </button>

            </div>
          </div>

          {/* ESTADO */}
          <div className="register-group">
            <label>Estado</label>
            <input
              type="text"
              name="estado"
              value={form.estado}
              readOnly
            />
          </div>

          {/* ID ROL */}
          <div className="register-group">
            <label>ID Rol</label>
            <input
              type="number"
              name="id_rol"
              min="1"
              max="3"
              step="1"
              value={form.id_rol}
              readOnly
            />
          </div>

          {/* BOTÓN */}
          <button type="submit" className="register-button">
            Crear Cuenta
          </button>
        </form>

        <p className="register-login-option">
          ¿Ya tienes cuenta?
          <a href="/login" className="hover-line"> Inicia sesión</a>
        </p>
      </div>

      {/* PANEL DERECHO */}
      <div className="register-right">
        <div className="register-img"></div>
      </div>

    </div>
  );
}

function togglePassword() {
    const input = document.getElementById("contrasena");
    const icon = document.querySelector(".toggle-password");

    if (input.type === "password") {
        input.type = "text";
        icon.textContent = "🙈"; // icono cuando está visible
    } else {
        input.type = "password";
        icon.textContent = "👁️"; // icono cuando está oculto
    }
}

