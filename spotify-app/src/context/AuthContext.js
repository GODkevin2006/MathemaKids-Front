import React, { createContext, useState, useEffect, useContext } from 'react';
import spotifyService from '../services/spotifyService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const status = await spotifyService.getSessionStatus();
      setIsAuthenticated(status.authenticated);
      
      if (status.authenticated) {
        const profileData = await spotifyService.getProfile();
        setUser(profileData.profile);
      }
    } catch (error) {
      console.error('Error checking auth:', error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      const { auth_url } = await spotifyService.login();
      window.location.href = auth_url;
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error al iniciar sesión');
    }
  };

  const logout = async () => {
    try {
      await spotifyService.logout();
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      loading,
      user,
      login,
      logout,
      checkAuth
    }}>
      {children}
      </AuthContext.Provider>
);
};