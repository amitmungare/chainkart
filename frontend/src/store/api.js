import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api/v1" });

export const login = (formData) => API.post("/login", formData);

export const register = (formData) => API.post("/register", formData);

export const updateProfile = (formData, token) =>
  API.put("/me/update", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updatePassword = (formData, token) =>
  API.put("/password/update", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const logout = () => API.get("/logout");
