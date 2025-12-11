import React from 'react';
import './../styles/Historia.css'; 
import heroBackground from '../assets/images/Mathemakids/Hero-historia.jpg';
import lineaBackground from '../assets/images/Mathemakids/fondo-lineatiempo.jpg';
import img2015 from '../assets/images/Mathemakids/primera-generación-premio-santillana.jpg';
import img2017 from '../assets/images/Mathemakids/expociencia-2017-Mathemakids-OP2.jpg';
import img2018 from '../assets/images/Mathemakids/desierto-tatacoa-mathemakids-OP1.jpg';
import img2020 from '../assets/images/Mathemakids/sala-maker-mathemakids.jpg';
import img2021 from '../assets/images/Mathemakids/podcast-mathemakids.jpg';
import img2022 from '../assets/images/Mathemakids/nasa-space-app-mathemakids.jpg';
import img2023 from '../assets/images/Mathemakids/Grupos-Investigación-Sector-Aeroespacial-Colombiano.jpg';
import img2024 from '../assets/images/Mathemakids/cartas-a-la-ciencia-mathemakids.jpg';
import cerebro from "../assets/images/iconos/cerebro.png";
import mentor from "../assets/images/iconos/mentor.png";
import trabajocolectivo from "../assets/images/iconos/trabajo-colectivo.png";
import planeta from "../assets/images/iconos/planeta-tierra.png";



// Datos de la Línea de Tiempo
const timelineData = [
    {
        year: '2015',
        title: 'Nacimiento y Reconocimiento Santillana',
        description: 'El semillero **Mathema Kids nació en marzo de 2015** con 13 estudiantes (6 niñas y 7 niños). Se inician las actividades extracurriculares con la metodología de Aprendizaje Basado en Proyectos. Recibió una **Mención Especial como finalista** en el Premio Santillana de Experiencias Educativas.',
        mediaSrc: img2015,
        mediaAlt: 'Foto del primer grupo de estudiantes de Mathema Kids',
        generation: 'Primera Generación (Fundación)',
    },
    {
        year: '2017',
        title: 'Expociencia y Proyecto Ondas',
        description: 'El proyecto *"¿Por qué las balas perdidas son tan perdidas?"* se presentó en la feria **Expociencia 2017**. Ganó la convocatoria del programa **Ondas** para desarrollar el proyecto de recuperación hídrica *"¿Qué hacer con el agua lluvia?"*.',
        mediaSrc: img2017,
        mediaAlt: 'Foto de la participación en Expociencia 2017',
        generation: 'Expociencia 2017',
    },
    {
        year: '2018',
        title: 'Campamento Científico "Marte en Colombia"',
        description: 'Se llevó a cabo el primer **campamento científico “Marte en Colombia”** en el desierto de la Tatacoa, con apoyo de la Universidad La Gran Colombia y el Instituto de Astrobiología de Colombia.',
        mediaSrc: img2018,
        mediaAlt: 'Foto del campamento Marte en Colombia',
        generation: '"Marte en Colombia"',
    },
  
    {
        year: '2020',
        title: 'Inicio de la Segunda Generación y Laboratorio Maker',
        description: 'Inicia la **Segunda Generación** con 12 estudiantes (10 niñas y 2 niños), determinando tener siempre una mayoría femenina. Se adecúa un **laboratorio Maker** en el colegio.',
        mediaSrc: img2020,
        mediaAlt: 'Foto de los inicios del laboratorio Maker',
        generation: 'Laboratorio Maker',
    },
    {
        year: '2021',
        title: 'Podcast STEM y Ponencias Nacionales',
        description: 'Se inicia el **podcast STEM**, un espacio para explorar ciencia, tecnología, ingeniería y matemáticas. Participación como ponentes en el **Congreso Nacional de Educación STEM** y el **Encuentro virtual: La investigación y el Aula de Matemáticas en México**.',
        mediaSrc: img2021,
        mediaAlt: 'Foto del integrantes del semillero grabando el podcast',
        generation: 'Podcast STEM Mathema Kids',
    },
    {
        year: '2022', 
        title: 'Liderazgo Aeroespacial',
        description: 'Participación en el **NASA Space App**. Recibió el **primer lugar** en el Segundo Festival Colombiano Del Asteroide por el diseño de una misión de defensa planetaria. Continuación de campañas de Ciencia Ciudadana.',
        mediaSrc: img2022,
        mediaAlt: 'Foto de la participación en NASA Space App',
        generation: 'NASA Space App',
    },
    {
        year: '2023',
        title: 'Producción Documental y Cumbres Científicas',
        description: 'Se inician las grabaciones del **documental “científicos del barrio”** para divulgar las ciencias y matemáticas. Participación en el **Simposio de Matemática y Educación Matemática** y la **Primera Cumbre de Grupos de Investigación del Sector Aeroespacial Colombiano**.',
        mediaSrc: img2023,
        mediaAlt: 'Foto del grupo de investigación aeroespacial Mathemakids',
        generation: 'Grupos de Investigación del Sector Aeroespacial Colombiano',
    },
    {
        year: '2024',
        title: 'Actualidad: Tercera Generación y Libro Publicado',
        description: 'Inicia la **Tercera Generación** con 14 estudiantes (10 niñas y 4 niños). Se publica el libro **“Cartas a la ciencia”** del Ministerio de Ciencia, Tecnología e Innovación, con textos seleccionados de dos estudiantes del semillero.',
        mediaSrc: img2024,
        mediaAlt: 'Foto de la participación en la publicación del libro Cartas a la Ciencia',
        generation: 'Cartas a la ciencia',
    },
];


const impactData = [
    {
        title: 'Dimensión Cognitiva',
        iconSrc: cerebro,
        description: 'Desarrollo de nuevas habilidades, aumento de la confianza y mejora en las evaluaciones, fomentando el amor por las matemáticas y la ciencia.',
    },
    {
        title: 'Dimensión Mentora',
        iconSrc: mentor,
        description: 'El profesor actúa como un mentor fundamental que brinda orientación y aliento, ayudando a los estudiantes a alcanzar su máximo potencial.',
    },
    {
        title: 'Participación Colectiva',
        iconSrc: trabajocolectivo,
        description: 'Formación de amistades cercanas, aprendizaje cooperativo y apoyo mutuo, creando un sentido de familia dentro de la comunidad de práctica.',
    },
    {
        title: 'Dimensión Comunitaria',
        iconSrc: planeta,
        description: 'Conexión con el barrio Los Laches, aprendizaje de su historia y desarrollo de un profundo sentido de responsabilidad social para marcar la diferencia.',
    },
];

// Función para reemplazar el Markdown básico (como **negrita**) con JSX
const renderDescription = (text) => {
    // Regex simple para negritas (**)
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const HistoriaSemillero = () => {
    return (
        <>
            {/* 1. Sección de Cabecera (Hero Institucional) */}
            <header className="hero" data-aos="zoom-in" style={{backgroundImage: `url(${heroBackground})`}}>
                <div className="hero-content"data-aos="fade-right">
                    <h1 className="hero-title">Semillero Mathema Kids: Una Trayectoria de Investigación</h1>
                    <p className="hero-subtitle">
                        Conoce la historia del semillero que transforma la educación en Los Laches, Bogotá, desde 2015.
                    </p>
                </div>

            </header>

            {/* 2. Sección Introductoria */}
            <section className="intro-section">
                <h2 className="intro-title" data-aos="fade-down-right">Contexto e Historia Breve</h2>

                <div className="intro-card" data-aos="fade-down-left">
                    <p>
                        Mathema Kids surge en el barrio <strong>Los Laches</strong> en los cerros orientales de Bogotá,
                        una zona de población vulnerable y heterogénea, históricamente estigmatizada por la violencia e
                        inseguridad. Ante la necesidad de crear escenarios de ciencia y tecnología, y en el marco de una
                        comunidad de práctica bajo el enfoque STEM, Mathema Kids nació en <strong>marzo de 2015</strong>.
                    </p>

                    <p style={{ marginTop: "14px" }}>
                        El objetivo inicial fue establecer un espacio de investigación escolar para fomentar el interés
                        y el trabajo en equipo en torno a la indagación y la construcción social de conocimiento.
                        Comenzó con <strong>6 niñas y 7 niños</strong> (un total de 13 estudiantes), operando como un
                        semillero de investigación, utilizando la metodología de <strong>Aprendizaje Basado en Proyectos</strong>
                        en actividades extracurriculares los viernes por la tarde. Esta estrategia busca impulsar el
                        desarrollo de competencias ligadas a las habilidades del siglo XXI y establecer una escuela más
                        participativa en proyectos reales.
                    </p>
                </div>
            </section>


            {/* 3. Línea de Tiempo Dinámica */}
            <section className="timeline-section" >
                <h2 data-aos="fade-up" >Hitos de la Trayectoria (2015 - Actualidad)</h2>
                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div 
                            className={`timeline-item  ${index % 2 === 0 ? 'left' : 'right'}`} 
                            key={item.year}
                        >
                            <div className="timeline-date" data-aos="zoom-in">{item.year}</div>
                            <div className="timeline-content"data-aos="fade-up" >
                                <h3>{item.title}</h3>
                                {/* Renderiza el texto con formato */}
                                <p>{renderDescription(item.description)}</p>
                                <div className="timeline-media">
                                    <img 
                                        src={item.mediaSrc} 
                                        alt={item.mediaAlt} 
                                    />
                                    <small>{item.generation}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. SECCIÓN DE CIERRE Y LEGADO (NUEVA) */}
            <section className="conclusion-section">
                <h2 data-aos="fade-up">Impacto y Legado de Mathema Kids</h2>
                
                <p className="summary-text" data-aos="fade-up">
                    La investigación escolar se consolida como una estrategia poderosa para promover trayectorias educativas, expandiendo los vínculos de la escuela con la sociedad. Mathema Kids se caracteriza por cuatro dimensiones de impacto que transforman la vida de los estudiantes de población vulnerable.
                </p>

                <div className="impact-grid"data-aos="fade-up">
                    {impactData.map((item, index) => (
                        <div className="impact-card" key={index}>
                            <div className="icon-wrapper">
                                <img 
                                    src={item.iconSrc} 
                                    alt={`Icono de ${item.title}`} 
                                    className="custom-impact-icon" 
                                />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="final-reflection"data-aos="zoom-in">
                    <p>
                        Las instituciones deben apostar y reconocer el trabajo de los semilleros escolares de investigación para empoderar estos espacios y promover la trazabilidad de estas experiencias a través de la figura de la trayectoria escolar.
                    </p>
                </div>
            </section>
        
            
        </>
    );
};

export default HistoriaSemillero;