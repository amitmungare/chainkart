import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "./api";

export const loginCompany = createAsyncThunk(
  "company/login",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const registerCompany = createAsyncThunk(
//   "company/register",
//   async ({ formData, navigate, toast }, { rejectWithValue }) => {
//     try {
//       let company;
//       // console.log(data);
//       const res = await api.cRegister(formData);

//       toast.success("Register successful");
//       navigate("/");
//       return company;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

export const logoutCompany = createAsyncThunk(
  "comapny/logout",
  async ({ toast }) => {
    try {
      const { data } = await api.cLogout();
      toast.success("Logout successful");
    } catch (err) {
      toast.error("Logout failed");
    }
  }
);

const initialState = {
  company: null,
  isLoading: false,
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(loginCompany.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(loginCompany.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default companySlice.reducer;
