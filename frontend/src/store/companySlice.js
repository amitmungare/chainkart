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

export const registerCompany = createAsyncThunk(
  "company/register",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      let company;
<<<<<<< HEAD
      // console.log(data);
=======
>>>>>>> 3172ad7d311215e13db74596e73904c8c53ec212
      const res = await api.cRegister(formData);
      console.log(res);
      const data = res.data;
      const token = data.token;
      company = data.company;
      company = { ...company, token };
      toast.success("Register successful");
<<<<<<< HEAD
      navigate("/");
=======
      navigate("/dashboard");
>>>>>>> 3172ad7d311215e13db74596e73904c8c53ec212
      return company;
    } catch (err) {
      return rejectWithValue(err.response.data);
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

    builder.addCase(registerCompany.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(registerCompany.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default companySlice.reducer;
