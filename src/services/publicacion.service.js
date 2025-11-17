import api from "./api";

//Crear Publicacion
export const createPublicacion = async (data) => {
    try {
        const response = await api.post(`/publicacion`, data);
        return response.data;
    } catch(error) {
        throw error  
    }   
 };

//Listar Publicaciones
export const getPublicaciones = async () => {
    try {
        const response = await api.get(`/publicacion`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Listar Publicacion por id
export const getPublicacionById = async (id_publicacion) => {
    try {
        const response = await api.get(`/publicacion/${id_publicacion}`);
        return response.data;
    }   catch (error) {
        throw error;
    }
};

//Actualizar Publicacion
export const updatePublicacion = async (id_publicacion, data) => {
    try {
        const response = await api.put(`/publicacion/${id_publicacion}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Eliminar Publicacion
export const deletePublicacion = async (id_publicacion) => {
    try {
        const response = await api.delete(`/publicacion/${id_publicacion}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


