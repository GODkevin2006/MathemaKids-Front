import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import CrearCuenta from "./Pages/CrearCuenta.jsx";
import Login from './components/auth/Login';
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Blogs from "./Pages/Blogs.jsx";
import IndividualBlog from "./Pages/IndividualBlog.jsx";
import Contacto from "./Pages/Contacto.jsx";
import PerfilUsuario from "./Pages/PerfilUsuario.jsx";
import HistoriaSemillero from "./Pages/Historia.jsx";
import EditarPerfil from "./components/auth/EditarPerfil.jsx";
import Documental from "./Pages/Documental.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 900, 
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/perfilusuario" element={<PerfilUsuario />} />
          <Route path="/historia" element={<HistoriaSemillero />} />
          <Route path="/editarperfil" element={<EditarPerfil />} />
          <Route path="/documental" element={<Documental />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/IndividualBlog" element={<IndividualBlog />} />


        </Routes>

        <Footer />

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
