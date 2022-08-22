import axios from "axios";

const API = axios.create({
  baseURL: "https://chainkartblockchainstore.herokuapp.com/api/v1",
});

// User
export const login = (formData: any) => API.post("/login", formData);

export const register = (formData: any) => API.post("/register", formData);

export const updateProfile = (formData: any, token: string) =>
  API.put("/me/update", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updatePassword = (formData: any, token: string) =>
  API.put("/password/update", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const logout = () => API.get("/logout");

// Payment

export const processPayment = (data: any) => API.post("/payment/process", data);

// Order

export const createOrder = (data: any) => API.post("/order/new", data);

export const fetchOrders = (user: any) => API.post("orders/me", user);
// Company

export const cLogin = (formData: any) => API.post("/company/login", formData);

export const cRegister = (formData: any) => {
  // console.log(formData);
  return API.post("/company/register", formData);
};

export const updateCPassword = (formData: any) =>
  API.put("/company/admin", formData);

export const updateCPassword1 = (formData: any) =>
  API.put("/company/password/update", formData);

export const cLogout = () => API.get("/company/logout");

// Product // Company

export const createProduct = (formData: any) =>
  API.post("/product/new", formData);

export const fetchProducts = (cEmail: any) =>
  API.post("/product/get", {
    cEmail,
  });

export const updateProduct = (data: any) => {
  // console.log(data);
  return API.put(`/product/update/${data.id}`, data);
};

export const fetchProductsByCat = (subCategory: string) =>
  API.post("/product/getBySubCat", subCategory);

//Transaction

export const fetchT = (cEmail: any) => API.post("/company/getAllT", { cEmail });
