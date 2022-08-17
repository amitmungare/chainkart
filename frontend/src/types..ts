export interface Product {
  cName: string;
  cEmail: string;
  category: string;
  desc: string;
  price: number;
  createdAt: Date;
  name: string;
  pImage: string;
  id: string;
  updatedAt: Date;
  subCategory: string;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  token: string;
  city: string;
  hnumber: string;
  pincode: number;
  state: string;
  landmark: string;
}

export interface OrderItem {
  _id: string;
  name: string;
  cEmail: string;
  cartQuantity: number;
  desc: string;
  pImage: string;
  price: number;
}
export interface Order {
  _id: string;
  orderItems: OrderItem[];
  user: User;
  updatedAt: Date;
  createdAt: Date;
  totalPrice: number;
}
