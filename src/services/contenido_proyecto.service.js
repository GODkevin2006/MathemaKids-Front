import api from "./api";

//Crear Contenido proyecto
export const createContenido_proyecto = async (data) => {
    try {
        const response = await api.post(`/contenido_proyecto`, data);
        return response.data;
    } catch(error) {
        throw error  
    }   
 };

//Listar Contenidos proyectos
export const getContenidos_proyectos = async () => {
    try {
        const response = await api.get(`/contenido_proyecto`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Listar Contenido proyecto por id
export const getContenido_proyectoById = async (id_contenido) => {
    try {
        const response = await api.get(`/contenido_proyecto/${id_contenido}`);
        return response.data;
    }   catch (error) {
        throw error;
    }
};

//Actualizar Contenido proyecto
export const updateContenido_proyecto = async (id_contenido, data) => {
    try {
        const response = await api.put(`/contenido_proyecto/${id_contenido}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Eliminar Contenido proyecto
export const deleteContenido_proyecto = async (id_contenido) => {
    try {
        const response = await api.delete(`/contenido_proyecto/${id_contenido}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


