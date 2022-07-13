export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  state: string;
  pincode: number;
  landmark: string;
  hnumber: number;
}

export interface UpdateProfie {
  email: string;
  firstname: string;
  lastname: string;
  city: string;
  state: string;
  pincode: number;
  landmark: string;
  hnumber: number;
  token: string;
}

export interface UpdatePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  token: string;
}

export interface User {
  user: Register;
  token: string;
  active: boolean;
}
