import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as api from "./api";

export const loginCompany = createAsyncThunk(
  "company/login",
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      let comapny;
      const res = await api.cLogin(formData);
      const data = res.data;
      console.log(data);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      const token = data.token;
      comapny = data.user;
      comapny = { ...comapny, token };
      toast.success("Login successful");
      navigate("/dashboard");
      return comapny;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutCompany = createAsyncThunk("comapny/logout", async () => {
  try {
    const { data } = await api.cLogout();
    toast.success("Logout successful");
  } catch (err) {
    toast.error("Logout failed");
  }
});

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

    builder.addCase(logoutCompany.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(logoutCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = null;
    });

    builder.addCase(logoutCompany.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default companySlice.reducer;
