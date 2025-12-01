import React from 'react';
import './../styles/Home.css'; 
import heroImage from '../assets/images/Mathemakids/Hero-Mathemakids.jpg';
import Imagen2 from '../assets/images/Mathemakids/Grupo-Mathemakids.jpg';
import catapulta from '../assets/images/Mathemakids/catapulta.jpg';
import agualluvia from '../assets/images/Mathemakids/agualluvia.jpg';
import Noticia from "../components/Noticia_card/Noticia_card.jsx";
import BlogCard from "../components/Blog_card/Blog_card.jsx";
import Img1 from '../assets/images/Mathemakids/imgEjemplo.png';


const Home = () => {
  return (
    <main className="mathema-kids-home-content">
      
      {/* 1. SECCIÓN DE BIENVENIDA / HERO */}
      <section className="hero-section-home" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-text-box">
            <h1 className="hero-title" data-aos="fade-right">BIENVENIDOS A <br />Mathema Kids</h1>
            <h3 className="hero-subtitle" data-aos="fade-right">
              Semillero de investigación escolar con enfoque STEM
            </h3>
           
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE CONTENIDO CENTRAL (Izquierda: Imagen, Derecha: Texto) */}
      <section className="content-section-a">
        <div className="content-image-wrapper" data-aos="zoom-in-up">
          <img src={Imagen2} alt="Imagen representativa de Mathema Kids" className="content-image" />
                  </div>
        <div className="content-text-block" data-aos="fade-right">
          <h2>¿Qué es Mathemakids?</h2>
          <p>
           Mathema Kids es un <strong>semillero de investigación escolar</strong> que, desde 2015, promueve en niñas y niños el interés por la ciencia, la tecnología y las matemáticas mediante proyectos reales y trabajo en equipo.
           A través del enfoque <strong>STEM</strong>, los estudiantes investigan, experimentan y desarrollan habilidades como el pensamiento crítico, la creatividad y la colaboración.
          </p>
          <p>
             Con tres generaciones formadas, Mathema Kids se ha convertido en una comunidad de práctica que impulsa el aprendizaje significativo y el empoderamiento social, permitiendo que los estudiantes se conecten con su entorno y descubran nuevas vocaciones científicas.
          </p>
        </div>
      </section>
      
      {/* 3. SECCIÓN DE PROYECTOS DESTACADOS (3 Bloques) */}
      <section className="projects-section-b" data-aos="fade-right">
  
        <div className="project-text-block">
          <h2>Proyectos</h2>
          <p>
            A lo largo de sus diez años de trayectoria, Mathema Kids ha impulsado proyectos que nacen de la curiosidad, la creatividad y el deseo de transformar su entorno. Cada investigación realizada por los estudiantes refleja su capacidad para observar problemas reales, formular preguntas y construir soluciones desde la ciencia y el trabajo colaborativo.
          </p>
          <button className="highlight-button">Conoce más</button>
        </div>
        
        {/* Bloque de Proyecto 1 */}
        <div className="project-card blue-card" data-aos="zoom-in-up">
          <div className="card-placeholder">
            <img src={catapulta} alt="Proyecto Catapulta Mathemakids"/>
          </div>
          <h3>¿Por qué las balas perdidas no son tan perdidas?</h3>
          <p>Una investigación en la que los estudiantes analizaron, mediante experimentos y tecnología de seguimiento, los riesgos de disparar al aire, demostrando científicamente el peligro que estas acciones representan.</p>
          <button className="secondary-button-project">Ver proyecto</button>
        </div>
        
        {/* Bloque de Proyecto 2 */}
        <div className="project-card blue-card" data-aos="zoom-in-up">
          <div className="card-placeholder">
            <img src={agualluvia} alt="Proyecto-Agua lluvia Mathemakids"/>
          </div>
          <h3>¿Qué hacer con el agua lluvia?</h3>
          <p>una propuesta ambiental que buscó aprovechar este recurso natural mediante el diseño de recolectores y el análisis del pH del agua en distintos puntos de la ciudad.</p>
          <button className="secondary-button-project">Ver proyecto</button>
        </div>
      </section>

      {/* 4. SECCIÓN DE MISIÓN, VISIÓN Y VALORES */}
      <section className="mission-vision-values-section">
        <div className="cards-container">
          
          {/* Misión Card */}
          <div className="mvv-card mission" data-aos="fade-up">
            <div className="mvv-icon-circle orange-circle">
              <span className="mvv-icon">🎯</span>
            </div>
            <h4>Misión</h4>
            <p>
              Mathema Kids tiene como misión despertar en niños y niñas el interés por la ciencia, la tecnología y las matemáticas mediante experiencias de investigación escolar que promuevan el pensamiento crítico, el trabajo colaborativo y el empoderamiento social.
              <br/>
              El semillero busca ofrecer un espacio educativo significativo donde los estudiantes puedan explorar su entorno, comprender problemáticas reales y construir soluciones que fortalezcan sus trayectorias educativas y personales.
            </p>
            <div className="mvv-bottom-bar orange-bar"></div>
          </div>
          
          {/* Visión Card */}
          <div className="mvv-card vision" data-aos="fade-up">
            <div className="mvv-icon-circle red-circle">
              <span className="mvv-icon">👁️</span>
            </div>
            <h4>Visión</h4>
            <p>
              Para 2030, Mathema Kids será reconocido como un modelo nacional de investigación escolar que transforma comunidades, impulsa vocaciones científicas y promueve escenarios de aprendizaje inclusivos y participativos.
              <br/>
              El semillero aspira a consolidarse como una comunidad de práctica que articula educación STEM, participación ciudadana y construcción social de conocimiento, impactando positivamente la vida de sus estudiantes y su entorno.
            </p>
            <div className="mvv-bottom-bar red-bar"></div>
          </div>
          
          {/* Valores Card */}
          <div className="mvv-card values" data-aos="fade-up">
            <div className="mvv-icon-circle purple-circle">
              <span className="mvv-icon">💖</span>
            </div>
            <h4>Valores</h4>
            <p>
              <strong>1. Curiosidad científica:</strong> Impulsar en los estudiantes el deseo de investigar, preguntar y comprender su entorno.
            <br/>
              <strong>2. Trabajo colaborativo:</strong> Construir conocimiento en comunidad mediante el apoyo mutuo y el aprendizaje colectivo.
            <br/> 
              <strong>3. Responsabilidad social:</strong> Desarrollar proyectos que impacten positivamente la comunidad y respondan a problemáticas reales.
            <br/>
               <strong>4. Creatividad e innovación:</strong> Proponer soluciones originales mediante experimentación, uso de tecnología y pensamiento crítico.
            </p>
            <div className="mvv-bottom-bar purple-bar"></div>
          </div>
        </div>
      </section>
      
      {/* 5. SECCIÓN DE NOTICIAS */}
      <section className="noticias-section">
        <h2 data-aos="fade-right">Noticias</h2>

        <div className="noticias-grid">
          <Noticia imagen={Img1} titulo="Qué es el cambio climático subterráneo y cómo afecta" fecha="27 julio 2023" />
          <Noticia imagen={Img1} titulo="Adiós al pajarito: Elon Musk cambia el logotipo" fecha="24 julio 2023" />
          <Noticia imagen={Img1} titulo="4 rasgos exclusivos de los humanos que no puede imitar la IA 4 rasgos exclusivos de los humanos que no p 4 rasgos exclusivos de los humanos que no p 4 rasgos exclusivos de los humanos que no p 4 rasgos exclusivos de los humanos que no p" fecha="21 julio 2023" />
          <Noticia imagen={Img1} titulo="El error que desvió correos militares de EE.UU." fecha="18 julio 2023" />
          <Noticia imagen={Img1} titulo="Qué es el cambio climático subterráneo y cómo afecta" fecha="27 julio 2023" />
          <Noticia imagen={Img1} titulo="Adiós al pajarito: Elon Musk cambia el logotipo" fecha="24 julio 2023" />
          <Noticia imagen={Img1} titulo="4 rasgos exclusivos de los humanos que no puede imitar la IA" fecha="21 julio 2023" />
          <Noticia imagen={Img1} titulo="El error que desvió correos militares de EE.UU." fecha="18 julio 2023" />
        </div>
      </section>

     
      {/* 5. SECCIÓN DE BLOG */}
    <section className="blog-section">
      <h2 data-aos="fade-right">Blog</h2>

      <div className="blog-grid">
        <BlogCard  
          imagen={Img1}
          titulo="Cómo iniciamos un proyecto STEM"
          resumen="Te mostramos cómo los estudiantes empiezan una idea, investigan, experimentan y convierten su curiosidad en un proyecto real..."
        />

        <BlogCard 
          imagen={Img1}
          titulo="El rol del docente dentro de Mathema Kids"
          resumen="En Mathema Kids, los profesores no solo guían: inspiran, acompañan y ayudan a que los niños encuentren sus propias respuestas..."
        />

        <BlogCard 
          imagen={Img1}
          titulo="¿Por qué aprender investigando?"
          resumen="Exploramos cómo la investigación potencia habilidades como la creatividad, el pensamiento crítico y la capacidad de resolver problemas..."
        />
      </div>
      
    </section>


    </main>
  );
};



export default Home;