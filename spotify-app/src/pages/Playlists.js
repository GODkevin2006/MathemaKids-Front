import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import spotifyService from '../services/spotifyService';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPlaylists();
  }, []);

  const loadPlaylists = async () => {
    try {
      setLoading(true);
      const data = await spotifyService.getPlaylists(50, 0);
      setPlaylists(data.playlists || []);
    } catch (err) {
      console.error('Error loading playlists:', err);
      setError('Error al cargar las playlists');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Navbar />
      
      <div style={styles.container}>
        <div style={styles.header}>
          <h1>Mis Playlists</h1>
          <Link to="/create-playlist">
            <button style={styles.button}>
              ➕ Nueva Playlist
            </button>
          </Link>
        </div>

        {loading ? (
          <div style={styles.loading}>Cargando playlists...</div>
        ) : error ? (
          <div style={styles.error}>{error}</div>
        ) : playlists.length === 0 ? (
          <div style={styles.empty}>
            <div style={styles.emptyIcon}>🎵</div>
            <h3>No tienes playlists todavía</h3>
            <Link to="/create-playlist">
              <button style={styles.button}>
                Crear mi primera playlist
              </button>
            </Link>
          </div>
        ) : (
          <div style={styles.grid}>
            {playlists.map((playlist) => (
              <div key={playlist.id} style={styles.card}>
                <div style={styles.imageContainer}>
                  {playlist.images?.[0]?.url ? (
                    <img 
                      src={playlist.images[0].url} 
                      alt={playlist.name}
                      style={styles.image}
                    />
                  ) : (
                    <div style={styles.placeholder}>🎵</div>
                  )}
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.playlistName}>{playlist.name}</h3>
                  {playlist.description && (
                    <p style={styles.description}>
                      {playlist.description.replace(/<[^>]*>/g, '')}
                    </p>
                  )}
                  <div style={styles.meta}>
                    <span>🎵 {playlist.tracks.total} canciones</span>
                    <span>{playlist.public ? '🌍 Pública' : '🔒 Privada'}</span>
                  </div>
                  <a 
                    href={playlist.external_urls.spotify} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    Abrir en Spotify
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  button: {
    background: '#1db954',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  loading: {
    textAlign: 'center',
    padding: '3rem',
    background: 'white',
    borderRadius: '15px'
  },
  error: {
    textAlign: 'center',
    padding: '3rem',
    background: '#fee',
    color: '#c00',
    borderRadius: '15px'
  },
  empty: {
    background: 'white',
    padding: '3rem',
    borderRadius: '15px',
    textAlign: 'center'
  },
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
    opacity: 0.5
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    background: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    background: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  placeholder: {
    fontSize: '4rem',
    color: '#ccc'
  },
  cardContent: {
    padding: '1.5rem'
  },
  playlistName: {
    marginBottom: '0.5rem',
    fontSize: '1.1rem'
  },
  description: {
    color: '#666',
    fontSize: '0.875rem',
    marginBottom: '1rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '1rem'
  },
  link: {
    display: 'block',
    textAlign: 'center',
    background: '#1db954',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.875rem'
  }
};

export default Playlists;