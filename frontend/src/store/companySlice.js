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
      const { data } = await api.cRegister(formData);
      company = data;
      toast.success(
        "Thank you for registering. We will get back to you in 2-3 days."
      );
      navigate("/");
      return company;
    } catch (err) {
      console.log(err);
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
