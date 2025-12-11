import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import CrearCuenta from './components/auth/CrearCuenta.jsx';
import Login from './components/auth/Login';
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Contacto from "./pages/Contacto.jsx";
import PerfilUsuario from "./Pages/PerfilUsuario.jsx";
import HistoriaSemillero from "./Pages/Historia.jsx";
import EditarPerfil from "./components/auth/EditarPerfil.jsx";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,   // duración de animaciones
      once: false,      // sea anima cada que hace scroll
    });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/perfilusuario" element={<PerfilUsuario />} />
          <Route path="/historia" element={<HistoriaSemillero />} />
          <Route path="/editarperfil" element={<EditarPerfil />} />

        </Routes>
        

        <Footer />

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;