import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Company } from "../types";
import * as api from "./api";
import { RootState } from "./store";

export const loginCompany = createAsyncThunk(
  "company/login",
  async ({ formData, navigate }: any, { rejectWithValue }) => {
    try {
      let comapny: any;
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
      console.log(comapny);
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

interface IS {
  company: Company | null;
  isLoading: boolean;
  error: any;
}

const initialState: IS = {
  company: null,
  isLoading: false,
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
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
      // state.error = error.message;
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
      // state.error = error.message;
    });
  },
});

export const selectComapny = (state: RootState) => state.company.company;

export const selectC = (state: RootState) => state.company;

export default companySlice.reducer;
