import api from "./api";

//Crear
export const createUsuario = async (data) => {
    try {
        const response = await api.post(`/usuario`, data);
        return response.data;
    } catch(error) {
        throw error  
    }   
 };

//Listar todo
export const getUsuarios = async () => {
    try {
        const response = await api.get(`/usuario`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Listar por id
export const getUsuarioById = async (id_categoria) => {
    try {
        const response = await api.get(`/usuario/${id_categoria}`);
        return response.data;
    }   catch (error) {
        throw error;
    }
};

//Actualizar
export const updateUsuario = async (id_categoria, data) => {
    try {
        const response = await api.put(`/usuario/${id_categoria}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Eliminar usuario
export const deleteUsuario = async (id_categoria) => {
    try {
        const response = await api.delete(`/usuario/${id_categoria}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


