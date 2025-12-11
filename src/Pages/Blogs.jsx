import React, { useState, useEffect } from "react";
import "../styles/Blogs.css";
import Banner from "../assets/images/Mathemakids/banner-blog.jpg";
import blogs from "../assets/images/Mathemakids/blog-text.jpg";
import BlogCard from "../components/Blog_card/Blog_card.jsx";

const Blogs = () => { 

  // -------------------------------
  // 🔍 BUSCADOR Y FILTROS
  // -------------------------------
  const [searchValue, setSearchValue] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("todos");

  // 🔵 Lista real traída desde la base de datos
  const [blogList, setBlogList] = useState([]);

  // 🔵 Traer los blogs desde el backend
 useEffect(() => {

fetch("http://127.0.0.1:8000/api/publicacion")
  .then((res) => res.json())
  .then((data) => setBlogList(data.Data)) // 👈 OJO ACA
  .catch((err) => console.log("Error al traer los blogs:", err));

}, []);

  // FILTRO + BUSQUEDA COMBINADA
  const filteredBlogs = blogList
    .filter(blog =>
      blog.titulo.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter(blog =>
      selectedFilter === "todos" ? true : blog.categoria === selectedFilter
    );

  return (
    <div className="blogs-background">

      {/* 🟣 SECCIÓN PRINCIPAL */}
      <section className="hero">
        <img src={Banner} alt="banner" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Bienvenidos a Blogs</h1>
          <p>Explora contenido educativo y aprende cosas nuevas</p>
        </div>
      </section>

      {/* 🟣 INTRODUCCIÓN */}
      <section className="hero-resumen">
        <div className="hero-resumen-container">

          <div className="hero-resumen-img">
            <img src={blogs} alt="Imagen de niños estudiando" />
          </div>

          <div className="hero-resumen-text">
            <h2>Nuestro proyecto STEM.</h2>
            <p>
              MathemaKids desarrolla <strong>proyectos de investigación escolar</strong> enfocados en 
              <strong> ciencia, tecnología, ingeniería y matemáticas (STEM).</strong>
              <br /><br />
              En esta sección encontrarás los proyectos desarrollados donde compartimos nuestras 
              <strong> investigaciones, actividades y experiencias.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* 🟣 CONTENIDO / BUSCADOR / FILTRO */}
      <section className="blog-content">

        <div className="buscador-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar blog..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
            />

            <button
              className="filter-button"
              onClick={() => setFilterOpen(!filterOpen)}
              type="button"
            >
              Filtros
            </button>

            {filterOpen && (
              <div className="filter-panel">
                <p onClick={() => { setSelectedFilter("todos"); setFilterOpen(false); }}>Todos</p>
                <p onClick={() => { setSelectedFilter("matematicas"); setFilterOpen(false); }}>Matemáticas</p>
                <p onClick={() => { setSelectedFilter("ciencias"); setFilterOpen(false); }}>Ciencias</p>
                <p onClick={() => { setSelectedFilter("lectura"); setFilterOpen(false); }}>Lectura</p>
                <p onClick={() => { setSelectedFilter("ingles"); setFilterOpen(false); }}>Inglés</p>
              </div>
            )}
          </div>
        </div>

        {/* 🟣 TARJETAS */}
        <div className="blog-cards-area">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id_publicacion}
              imagen={blog.imagen_destacada}          // ⬅ URL desde la BD
              titulo={blog.titulo}
              resumen={blog.contenido.slice(0, 120) + "..."}
            />
          ))}
        </div>

      </section>

    </div>
  );
}

export default Blogs;
