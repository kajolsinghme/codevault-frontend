import axios from "axios";

const API = axios.create({
  baseURL: "https://codevault-backend-7ph6.onrender.com/api",
});

export const createSnippet = (data) => API.post("/snippets", data);
export const getSnippets = () => API.get("/snippets");
export const searchSnippets = (query) =>
  API.get(`/snippets/search?query=${query}`);
export const deleteSnippet = (id) => API.delete(`/snippets/${id}`);
