import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
<<<<<<< HEAD
import CrearCuenta from './components/auth/CrearCuenta.jsx';
=======


>>>>>>> 5375142f9fa9f09754600f70cef7383ed0746b61
import Login from './components/auth/Login';
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Contacto from "./pages/Contacto.jsx";

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

<<<<<<< HEAD
        <Routes>
          {/* Ruta del Login */}
          <Route path="/login" element={<Login />} />

          {/* Ruta de Crear Cuenta */}
          <Route path="/crearcuenta" element={<CrearCuenta />} />
        </Routes>
=======
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Contacto />} />
        

        </Routes>
        

        <Footer />
>>>>>>> 5375142f9fa9f09754600f70cef7383ed0746b61

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;