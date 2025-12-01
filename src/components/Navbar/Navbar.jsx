import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../../assets/images/logo/MathemaKids-Logo-V1.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function MyNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>

        {/* Logo */}
        <Navbar.Brand href="/">
          <img src={logo} height="60" alt="Logo MathemaKids" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">

          {/* Items centrados */}
          <Nav className="mx-auto nav-items">

            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#">Proyectos</Nav.Link>
            

          

            

            <NavDropdown title="Conoce más" id="conoce-dropdown">
              <NavDropdown.Item href="#">Historia</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog</NavDropdown.Item>
               <NavDropdown.Item href="#">Noticas</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Divulgación" id="divulga-dropdown">
              <NavDropdown.Item href="#">Podcast</NavDropdown.Item>
              <NavDropdown.Item href="#">Documental</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

          </Nav>

          {/* Separador y botón */}
          <div className="d-flex align-items-center gap-3">
            <span className="vertical-line mx-3"></span>
            <Button variant="primary" href="/login" className="btn-login-custom px-3">Ingresar</Button>
            <Button className="btn-register-custom px-3">Crear cuenta </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


