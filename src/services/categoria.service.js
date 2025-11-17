import api from "./api";

//Crear Categoria
export const createCategoria = async (data) => {
    try {
        const response = await api.post(`/categoria`, data);
        return response.data;
    } catch(error) {
        throw error  
    }   
 };

//Listar todas las Categorias
export const getCategorias = async () => {
    try {
        const response = await api.get(`/categoria`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Listar categoria por id
export const getCategoriaById = async (id_categoria) => {
    try {
        const response = await api.get(`/categoria/${id_categoria}`);
        return response.data;
    }   catch (error) {
        throw error;
    }
};

//Actualizar coagoria
export const updateCategoria = async (id_categoria, data) => {
    try {
        const response = await api.put(`/categoria/${id_categoria}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//Eliminar categoria
export const deleteCategoria = async (id_categoria) => {
    try {
        const response = await api.delete(`/categoria/${id_categoria}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};



