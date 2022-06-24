import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api/v1" });

// User
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

// Payment

export const processPayment = (data) => API.post("/payment/process", data);

// Company

export const cLogin = (formData) => API.post("/cLogin", formData);

<<<<<<< HEAD
export const cRegister = (formData) => {
  // console.log(formData);
  return API.post("/company/register", formData);
};
=======
export const cRegister = (formData) => API.post("/company/register", formData);
>>>>>>> 3172ad7d311215e13db74596e73904c8c53ec212
