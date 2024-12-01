import Cookies from "js-cookie";
import axios from "axios";

const API = axios.create({ baseURL: "https://personal-notes-manager-backend-9.onrender.com" });

API.interceptors.request.use((config) =>{
    const token = Cookies.get("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    } 
    return config;
})

export const fetchNotes = (filters) => API.get("/notes", { params: filters });
export const createNote = (note) => API.post("/notes", note);
export const updateNote = (id, note) => API.put(`/notes/${id}`, note);
export const deleteNote = (id) => API.delete(`/notes/${id}`);
