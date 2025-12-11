import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import CrearCuenta from "./Pages/CrearCuenta.jsx";
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
        </Routes>

        <Footer />

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
