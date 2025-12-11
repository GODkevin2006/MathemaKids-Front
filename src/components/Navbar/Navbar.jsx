import { Navbar, Nav, NavDropdown, Container, Button, Dropdown } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext"; // Ajusta la ruta según tu estructura
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/MathemaKids-Logo-V1.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function MyNavbar() {
  const { user, rol, logout } = useAuth(); //
  const navigate = useNavigate();

  const handleLogout = async () => {

    if (logout) {
      await logout();
    }
    navigate("/");
  };

  //iniciales en el icono de usuario

  const getInitials = (user) => {
    if (!user) return "";

    const nombres = user?.nombres?.trim().split(" ") || [];
    const apellidos = user?.apellidos?.trim().split(" ") || [];

    const inicialNombre = nombres[0]?.charAt(0).toUpperCase() || "";
    const inicialApellido = apellidos[0]?.charAt(0).toUpperCase() || "";

    return inicialNombre + inicialApellido;
  };

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
              <NavDropdown.Item href="/historia">Historia</NavDropdown.Item>
              <NavDropdown.Item href="/Blogs">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#">Noticas</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Divulgación" id="divulga-dropdown">
              <NavDropdown.Item href="#">Podcast</NavDropdown.Item>
              <NavDropdown.Item href="/Documental">Documental</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>

          {/* Mostrar botones de login/register o perfil según autenticación */}
          <div className="d-flex align-items-center gap-3">
            <span className="vertical-line mx-3"></span>

            {user ? (
              // Usuario autenticado - Mostrar dropdown de perfil
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-user"
                  className="d-flex align-items-center text-decoration-none p-0"
                >
                  {/* Icono de persona */}
                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                    style={{ width: "40px", height: "40px", fontSize: "16px" }}
                  >
                    {getInitials(user)}
                  </div>
                  {/* Si quieres mostrar el nombre */}
                  {/* <span className="ms-2 text-dark">{user.nombre || user.correo}</span> */}
                </Dropdown.Toggle>

                <Dropdown.Menu>

                  <div className="px-3 py-2">
                    <strong>{user.nombres} {user.apellidos}</strong>
                    <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                      {user.correo}
                    </div>
                  </div>

                  <Dropdown.Divider />

                  <Dropdown.Item href="/perfilusuario">
                    <i className="bi bi-person me-2"></i>
                    Mi Perfil
                  </Dropdown.Item>

                  {rol === 'admin' && (
                    <Dropdown.Item href="/admin">
                      <i className="bi bi-speedometer2 me-2"></i>
                      Panel Admin
                    </Dropdown.Item>
                  )}

                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout} className="text-danger">
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Cerrar Sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              // Usuario NO autenticado - Mostrar botones de login/register
              <>
                <Button variant="primary" href="/login" className="btn-login-custom px-3">
                  Ingresar
                </Button>
               <Button  
               href="/crearcuenta" 
               className="btn-register-custom px-3"
               onClick={(e) => {
                e.preventDefault();
                navigate("/crearcuenta");
                }}
                >
                  Crear Cuenta
                </Button>
              </>
            )}
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

