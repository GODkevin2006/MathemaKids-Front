import api from "./api";

//Crear Rol
export const createRol = async (data) => {
    try {
        const response = await api.post(`/rol`, data);
        return response.data;
    } catch(error) {
        throw error  
    }   
 };

//Listar Roles
export const getRoles = async () => {
    try {
        const response = await api.get(`/rol`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Listar Rol por id
export const getRolById = async (id_rol) => {
    try {
        const response = await api.get(`/rol/${id_rol}`);
        return response.data;
    }   catch (error) {
        throw error;
    }
};

//Actualizar Rol
export const updateRol = async (id_rol, data) => {
    try {
        const response = await api.put(`/rol/${id_rol}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Eliminar Rol
export const deleteRol = async (id_rol) => {
    try {
        const response = await api.delete(`/rol/${id_rol}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


