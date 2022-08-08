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

// Order

export const createOrder = (data) => API.post("/order/new", data);

export const fetchOrders = (user) => API.post("orders/me", user);
// Company

export const cLogin = (formData) => API.post("/company/login", formData);

export const cRegister = (formData) => {
  // console.log(formData);
  return API.post("/company/register", formData);
};

export const cLogout = () => API.get("/company/logout");

// Product // Company

export const createProduct = (formData) => API.post("/product/new", formData);

export const fetchProducts = (cEmail) =>
  API.post("/product/get", {
    cEmail,
  });

export const fetchProductsByCat = (subCategory) =>
  API.post("/product/getByCat", subCategory);

//Transaction

export const fetchT = (cEmail) => API.post("/company/getAllT", { cEmail });
