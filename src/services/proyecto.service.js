import api from "./api";

//Crear proyecto
export const createProyecto = async (data) => {
    try {
        const response = await api.post(`/proyecto`, data);
        return response.data;
    } catch(error) {
        throw error  
    }   
 };

//Listar proyectos
export const getProyectos = async () => {
    try {
        const response = await api.get(`/proyecto`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Listar proyecto por id
export const getProyectoById = async (id_proyecto) => {
    try {
        const response = await api.get(`/proyecto/${id_proyecto}`);
        return response.data;
    }   catch (error) {
        throw error;
    }
};

//Actualizar proyecto
export const updateProyecto = async (id_proyecto, data) => {
    try {
        const response = await api.put(`/proyecto/${id_proyecto}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Eliminar proyecto
export const deleteProyecto = async (id_proyecto) => {
    try {
        const response = await api.delete(`/proyecto/${id_proyecto}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


