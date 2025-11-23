import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <Link to="/dashboard" style={styles.brand}>
          🎵 Spotify Manager
        </Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/playlists" style={styles.link}>Playlists</Link>
        <Link to="/search" style={styles.link}>Buscar</Link>
      </div>
      <div style={styles.right}>
        {user && <span style={styles.user}>👤 {user.display_name}</span>}
        <button onClick={logout} style={styles.logout}>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#191414',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
  },
  left: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  },
  right: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  brand: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.2s'
  },
  user: {
    color: 'white'
  },
  logout: {
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Navbar;