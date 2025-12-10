import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [rol, setRol] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    const login = async (correo, contraseña) => {
        try{
            console.log("Intentando iniciar sesión con:", correo, contraseña);
            const response = await api.post('/login', { correo, contraseña }, { withCredentials: true });
            
            
            if (response.data.user) {
                setUser(response.data.user);
                setRol(response.data.user.id_rol);
               
                return response.data.user.id_rol;

            } else {
                console.warn("Datos de usario o rol faltantes");
                return false ;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const logout = async () => {
        try {
            // endpoint para logout
            await api.post('/logout', {}, { withCredentials: true });
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        } finally {
            // Limpiar el estado local sin importar la respuesta del backend
            setUser(null);
            setRol(null);
        }
    };

    // Verificar usuario al cargar (si usas tokens persistentes)
    // const verifyToken = async () => {
    //     try {
    //         const response = await api.get('/me', { withCredentials: true });
    //         const userData = response.data?.user || response.data;
    //         if (userData) {
    //             setUser(userData);
    //             setRol(userData.id_rol || 'usuario');
    //         }
    //     } catch (error) {
    //         console.error("Error verificando usuario:", error);
    //         setUser(null);
    //         setRol(null);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     verifyToken();
    // }, [location.pathname]);

    useEffect(() => {
        const verifyToken = async () => {
        try {
            const response = await api.get('/me', { withCredentials: true });
            setUser(response.data.user);
            setRol(response.data.user.id_rol);

        } catch (error) {
            console.error("Error verificando usuario:", error);
            setUser(null);
            setRol(null);
        } finally {
            setLoading(false);
        }
    };
        verifyToken();

    }, [location.pathname]);

    return (
        <AuthContext.Provider value={{ 
            user, 
            rol, 
            login, 
            logout,
            loading 
        }}>
            {children}
        </AuthContext.Provider>
    );


   

};

export const useAuth = () => useContext(AuthContext);
