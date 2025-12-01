import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';


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

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Contacto />} />
        

        </Routes>

        <Footer />

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;