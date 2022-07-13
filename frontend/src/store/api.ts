import axios from "axios";
import {
  Login,
  Register,
  UpdatePassword,
  UpdateProfie,
} from "../utils/dataTypes";

const API = axios.create({ baseURL: "http://localhost:4000/api/v1" });

// User
export const login = (formData: Login) => API.post("/login", formData);

export const register = (formData: Register) => API.post("/register", formData);

export const updateProfile = (formData: UpdateProfie) =>
  API.put("/me/update", formData, {
    headers: { Authorization: `Bearer ${formData.token}` },
  });

export const updatePassword = (formData: UpdatePassword) =>
  API.put("/password/update", formData, {
    headers: { Authorization: `Bearer ${formData.token}` },
  });

export const logout = () => API.get("/logout");

// Payment

export const processPayment = (data) => API.post("/payment/process", data);

// Company

export const cLogin = (formData) => API.post("/company/login", formData);

export const cRegister = (formData) => {
  // console.log(formData);
  return API.post("/company/register", formData);
};

export const cLogout = () => API.get("/company/logout");

// Product

export const createProduct = (formData) => API.post("/product/new", formData);