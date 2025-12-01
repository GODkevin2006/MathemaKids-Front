import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/auth/Login';
import PerfilUsuario from './pages/PerfilUsuario';


function App() {
  return (
    <>
    <PerfilUsuario/>
    </>
      );
}

export default App;