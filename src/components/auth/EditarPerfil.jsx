import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../../styles/EditarPerfil.css";

const EditarPerfil = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    nombres: user?.nombres || "",
    apellidos: user?.apellidos || "",
    correo: user?.correo || ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess("");

  try {

    // QUITAR el campo correo del payload
    const { correo, ...dataSinCorreo } = formData;

    const response = await api.put(`/usuario/${user.id_usuario}`, dataSinCorreo);

    if (response.status === 200) {
      const usuarioActualizado = response.data?.data || response.data;

      setUser(usuarioActualizado);

      setSuccess("Datos actualizados correctamente.");

      setTimeout(() => navigate("/perfilusuario"), 500);

      return;
    }

    setError("Hubo un error al actualizar. Inténtalo nuevamente.");

  } catch (err) {
    setError("No se pudo actualizar la información.");
    console.error("Error actualizando:", err);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="editar-container">
      <h2>Editar Perfil</h2>

      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="editar-form">
        <label>Nombres</label>
        <input
          type="text"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
        />

        <label>Apellidos</label>
        <input
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
        />

        <label>Correo</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          disabled
          className="campo-deshabilitado"
/>

        <button className="btn-principal" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar Cambios"}
        </button>
      </form>
    </div>
  );
};

export default EditarPerfil;
