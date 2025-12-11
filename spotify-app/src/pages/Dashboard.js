import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import spotifyService from '../services/spotifyService';

const Dashboard = () => {
  const { user } = useAuth();
  const [sessionStatus, setSessionStatus] = useState(null);

  useEffect(() => {
    loadSessionStatus();
  }, []);

  const loadSessionStatus = async () => {
    try {
      const status = await spotifyService.getSessionStatus();
      setSessionStatus(status);
    } catch (error) {
      console.error('Error loading session status:', error);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Navbar />
      
      <div style={styles.container}>
        {/* Tarjeta de Bienvenida */}
        <div style={styles.welcomeCard}>
          <div style={styles.profileSection}>
            {user?.images?.[0] && (
              <img 
                src={user.images[0].url} 
                alt={user.display_name}
                style={styles.profileImg}
              />
            )}
            <div>
              <h1 style={styles.welcome}>¡Hola, {user?.display_name}! 👋</h1>
              <p style={styles.email}>{user?.email}</p>
              <div style={styles.badges}>
                <span style={styles.badge}>{user?.product}</span>
                <span style={styles.badge}>{user?.country}</span>
                <span style={styles.badge}>👥 {user?.followers?.total} seguidores</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estado de Sesión */}
        {sessionStatus && (
          <div style={styles.sessionCard}>
            <h3>📊 Estado de la Sesión</h3>
            <div style={styles.sessionInfo}>
              <div>
                <strong>Estado:</strong> {sessionStatus.authenticated ? ' ✅ Activa' : ' ❌ Inactiva'}
              </div>
              {sessionStatus.expires_at && (
                <div>
                  <strong>Expira:</strong> {new Date(sessionStatus.expires_at).toLocaleString()}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Acciones */}
        <div style={styles.actionsGrid}>
          <Link to="/playlists" style={styles.actionCard}>
            <div style={styles.actionIcon}>📋</div>
            <h3>Mis Playlists</h3>
            <p style={styles.actionText}>Ver y gestionar tus playlists</p>
          </Link>

          <Link to="/create-playlist" style={styles.actionCard}>
            <div style={styles.actionIcon}>➕</div>
            <h3>Crear Playlist</h3>
            <p style={styles.actionText}>Crea una nueva playlist</p>
          </Link>

          <Link to="/search" style={styles.actionCard}>
            <div style={styles.actionIcon}>🔍</div>
            <h3>Buscar Canciones</h3>
            <p style={styles.actionText}>Encuentra tus canciones favoritas</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  },
  welcomeCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  },
  profileImg: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  },
  welcome: {
    margin: '0 0 0.5rem 0'
  },
  email: {
    color: '#666',
    margin: '0.5rem 0'
  },
  badges: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
    flexWrap: 'wrap'
  },
  badge: {
    background: '#1db954',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    fontSize: '0.875rem',
    fontWeight: 'bold'
  },
  sessionCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  },
  sessionInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginTop: '1rem'
  },
  actionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  actionCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer'
  },
  actionIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  actionText: {
    color: '#666',
    fontSize: '0.875rem',
    margin: '0.5rem 0 0 0'
  }
};

export default Dashboard;