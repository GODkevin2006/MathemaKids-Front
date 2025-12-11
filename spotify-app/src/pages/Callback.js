import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import spotifyService from '../services/spotifyService';
import { useAuth } from '../context/AuthContext';

const Callback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { checkAuth } = useAuth();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    handleCallback();
  }, []);

  const handleCallback = async () => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      setError(`Error de Spotify: ${error}`);
      setProcessing(false);
      setTimeout(() => navigate('/'), 3000);
      return;
    }

    if (!code) {
      setError('No se recibió código de autorización');
      setProcessing(false);
      setTimeout(() => navigate('/'), 3000);
      return;
    }

    try {
      await spotifyService.handleCallback(code);
      await new Promise(resolve => setTimeout(resolve, 500));
      await checkAuth();
      navigate('/dashboard');
    } catch (err) {
      console.error('Error en callback:', err);
      setError('Error al procesar la autenticación');
      setProcessing(false);
      setTimeout(() => navigate('/'), 3000);
    }
  };

  return (
    <div style={styles.container}>
      {processing ? (
        <div style={styles.content}>
          <div style={styles.icon}>🔄</div>
          <h2>Procesando autenticación...</h2>
          <p>Espera un momento mientras te conectamos con Spotify</p>
        </div>
      ) : error ? (
        <div style={styles.content}>
          <div style={styles.icon}>❌</div>
          <h2>{error}</h2>
          <p>Redirigiendo al inicio...</p>
        </div>
      ) : null}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1db954 0%, #191414 100%)',
    color: 'white'
  },
  content: {
    textAlign: 'center',
    padding: '2rem'
  },
  icon: {
    fontSize: '4rem',
    marginBottom: '1rem'
  }
};

export default Callback;
