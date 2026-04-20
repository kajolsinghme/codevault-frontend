import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const createSnippet = (data) => API.post("/snippets", data);
export const getSnippets = () => API.get("/snippets");
export const searchSnippets = (query) =>
  API.get(`/snippets/search?query=${query}`);
export const deleteSnippet = (id) => API.delete(`/snippets/${id}`);
