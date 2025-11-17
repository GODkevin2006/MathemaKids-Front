import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // cámbiala cuando tengas el backend
});

export default api;
