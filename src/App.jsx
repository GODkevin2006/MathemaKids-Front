import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import CrearCuenta from './components/auth/CrearCuenta.jsx';
import Login from './components/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          {/* Ruta del Login */}
          <Route path="/login" element={<Login />} />

          {/* Ruta de Crear Cuenta */}
          <Route path="/crearcuenta" element={<CrearCuenta />} />
        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
