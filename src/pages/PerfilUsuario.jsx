import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Ajusta la ruta según tu proyecto
import "./PerfilUsuario.css";

const PerfilUsuario = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();

  const handleEditar = () => {
    navigate("/editarperfil");
  };

  if (!user) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Cargando usuario...</p>;
  }

  const getInitials = (usuario) => {
  if (!usuario) return "";

  const nombres = user?.nombres?.trim().split(" ") || [];
  const apellidos = user?.apellidos?.trim().split(" ") || [];

  const inicialNombre = nombres[0]?.charAt(0).toUpperCase() || "";
  const inicialApellido = apellidos[0]?.charAt(0).toUpperCase() || "";

  return inicialNombre + inicialApellido;
};



  return (
    <div className="perfil-container">

      <div className="perfil-card">

        <div className="perfil-foto-section">
          {user.foto ? (
            <img src={user.foto} alt="Foto perfil" className="perfil-foto-img" />
          ) : (
            <div className="perfil-foto">
              {getInitials(user.nombres)}
            </div>
          )}

          <button className="btn-secundario">Actualizar foto</button>
        </div>

        <div className="perfil-info">
          <h2 className="perfil-username">{user.nombres}</h2>

          <div className="perfil-grid">
            <div className="perfil-item">{user.nombres} </div>
            <div className="perfil-item">{user.apellidos}</div>
            <div className="perfil-item">{user.correo}</div>
            <div className="perfil-item">Rol: {user.id_rol}</div>
          </div>
        </div>
      </div>

      <section className="posts-section">
        <h2>Posts</h2>
        <div className="posts-grid">
          <div className="post-card">
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
            <button className="btn-principal">Ver más</button>
          </div>

          <div className="post-card">
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
            <button className="btn-principal">Ver más</button>
          </div>
        </div>
      </section>

      <div className="acciones">
        <button className="btn-principal" onClick={handleEditar}>Actualizar datos</button>
        <button className="btn-eliminar">Borrar cuenta</button>
      </div>
    </div>
  );
};

export default PerfilUsuario;
