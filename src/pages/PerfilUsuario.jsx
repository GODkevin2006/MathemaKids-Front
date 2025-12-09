import React from "react";
import "./perfilUsuario.css";


export default function PerfilUsuario() {
return (
<div className="perfil-container">
<div className="perfil-card">
<div className="perfil-foto-section">
<div className="perfil-foto" />
<button className="btn-secundario">Actualizar foto</button>
</div>


<div className="perfil-info">
<h2 className="perfil-username">Username</h2>


<div className="perfil-grid">
<div className="perfil-item">Nombre Apellido</div>
<div className="perfil-item">usuario@mail.com</div>
<div className="perfil-item">+57 310 000 0000</div>
<div className="perfil-item">Rol: Admin</div>
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
<button className="btn-principal">Actualizar datos</button>
<button className="btn-eliminar">Borrar cuenta</button>
</div>
</div>
);
}