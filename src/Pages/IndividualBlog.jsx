import React from "react";
import "../styles/IndividualBlog.css";
import ImgBlogCard from "../assets/images/Mathemakids/card_ciencias.jpg"
import background from "../assets/images/Mathemakids/Fondo-Blog.jpg";

export default function IndividualBlog({ post = null }) {
  // Datos de ejemplo (si no llegan props)
  const sample = post || {
    title: "Título del artículo",
    author: "Autor del post",
    date: "Fecha",
    category: "Categoría",
    featuredImage: null,
    content: `
      <p>Primer párrafo del artículo. Reemplaza esto con el contenido real.</p>
      <p>Segundo párrafo con más texto. Puedes incluir listas, imágenes y más.</p>
    `,
  };

  return (
    <div className="blog-container">
      <div className="blog-grid">

        {/* COLUMNA PRINCIPAL */}
        <main className="blog-main">
          {/* Imagen destacada */}
          
            <div className="blog-image-wrapper">
              <img src={ImgBlogCard} alt={sample.title} />
            </div>
          
          {/* Contenido */}
          <article className="blog-article">
            <header className="blog-header">
              <h1>Ciencias Experimentales</h1>

              <div className="blog-meta">
                <span>Por <strong>{sample.author}</strong></span>
                <span> | {sample.date}</span>
                <span className="blog-category">{sample.category}</span>
              </div>
            </header>

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: sample.content }}
            />

            {/* Footer */}
            <footer className="blog-footer">
              <div className="blog-share">
                <button>Compartir</button>
                <button>Guardar</button>
              </div>
              <div className="blog-tags">
                Etiquetas: <span>ejemplo, educación</span>
              </div>
            </footer>

            {/* Comentarios */}
            <section className="blog-comments">
              <h3>Comentarios</h3>

              <form className="comment-form">
                <textarea placeholder="Escribe tu comentario..."></textarea>

                <div className="comment-inputs">
                  <input type="text" placeholder="Nombre *" />
                  <input type="email" placeholder="Correo *" />
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </section>
          </article>
        </main>

        {/* SIDEBAR */}
        <aside className="blog-sidebar">
          {/* Buscar */}
          <div className="sidebar-box">
            <h4>Buscar</h4>
            <input placeholder="Buscar..." />
          </div>

          {/* Entradas recientes */}
          <div className="sidebar-box">
            <h4>Entradas Recientes</h4>
            <ul className="sidebar-list">
              <li>• Entrada reciente 1</li>
              <li>• Entrada reciente 2</li>
              <li>• Entrada reciente 3</li>
            </ul>
          </div>

          {/* Categorías */}
          <div className="sidebar-box">
            <h4>Categorías</h4>
            <div className="sidebar-tags">
              <span>Artículos</span>
              <span>Opinión</span>
              <span>Proyectos</span>
            </div>
          </div>

          {/* Sobre el autor */}
          <div className="sidebar-box">
            <h4>Sobre el Autor</h4>
            <p>Breve descripción del autor y enlaces a redes sociales.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
