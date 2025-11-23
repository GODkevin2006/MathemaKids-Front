import api from "./api"; // tu instancia de axios ya configurada con baseURL

// Autenticación
export const spotifyLogin = async () => {
    try {
        const response = await api.get('/spotify/login');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const spotifyCallback = async () => {
    try {
        const response = await api.get('/spotify/callback');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const spotifyLogout = async () => {
    try {
        const response = await api.get('/spotify/logout');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Estado de sesión
export const getSessionStatus = async () => {
    try {
        const response = await api.get('/spotify/session-status');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Perfil de usuario
export const getProfile = async () => {
    try {
        const response = await api.get('/spotify/me');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDashboard = async () => {
    try {
        const response = await api.get('/spotify/dashboard');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Playlists
export const getPlaylists = async () => {
    try {
        const response = await api.get('/spotify/playlists');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPlaylistById = async (id) => {
    try {
        const response = await api.get(`/spotify/playlists/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createPlaylist = async (data) => {
    try {
        const response = await api.post('/spotify/playlists', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePlaylist = async (id, data) => {
    try {
        const response = await api.put(`/spotify/playlists/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Canciones de playlists
export const getPlaylistTracks = async (playlistId) => {
    try {
        const response = await api.get(`/spotify/playlists/${playlistId}/tracks`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addTracksToPlaylist = async (playlistId, tracks) => {
    try {
        const response = await api.post(`/spotify/playlists/${playlistId}/tracks`, tracks);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const removeTracksFromPlaylist = async (playlistId, tracks) => {
    try {
        const response = await api.delete(`/spotify/playlists/${playlistId}/tracks`, { data: tracks });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Búsqueda
export const searchTracks = async (query) => {
    try {
        const response = await api.get(`/spotify/search/tracks`, { params: { q: query } });
        return response.data;
    } catch (error) {
        throw error;
    }
};
