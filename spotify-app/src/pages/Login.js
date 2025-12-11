import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { isAuthenticated, loading, login } = useAuth();

  if (loading) {
    return (
      <div style={styles.loading}>Cargando...</div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>🎵</div>
        <h1 style={styles.title}>Spotify Manager</h1>
        <p style={styles.subtitle}>
          Gestiona tus playlists de Spotify con React y Laravel
        </p>
        <button onClick={login} style={styles.button}>
          🔑 Iniciar Sesión con Spotify
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1db954 0%, #191414 100%)'
  },
  card: {
    background: 'white',
    padding: '3rem',
    borderRadius: '20px',
    textAlign: 'center',
    maxWidth: '400px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  icon: {
    fontSize: '5rem',
    marginBottom: '1rem'
  },
  title: {
    marginBottom: '0.5rem',
    color: '#191414'
  },
  subtitle: {
    color: '#666',
    marginBottom: '2rem'
  },
  button: {
    background: '#1db954',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'transform 0.2s, background 0.2s'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem'
  }
};

export default Login;