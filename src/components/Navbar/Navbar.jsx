import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Mathema Kids</div>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>¿Quiénes somos?</li>
        <li>Conoce más</li>
        <li>Divulgación</li>
        <li>Contacto</li>
      </ul>

      <button className="btn-login">Ingresar</button>
    </nav>
  );
}

