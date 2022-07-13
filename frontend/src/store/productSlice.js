import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "./api";

import { toast } from "react-toastify";

export const createProduct = createAsyncThunk(
  "product/create",
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await api.createProduct(formData);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      toast.success("Product created");
      navigate("/dashboard");
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  products: null,
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      }),
      builder.addCase(createProduct.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export default productSlice.reducer;
