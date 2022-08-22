import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Product } from "../types";

import { toast } from "react-toastify";
import * as api from "./api";
import { RootState } from "./store";

export const createProduct = createAsyncThunk(
  "product/create",
  async ({ formData, navigate }: any, { rejectWithValue }) => {
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

interface IS {
  products: Product[] | null;
  isLoading: boolean;
  error: any;
}

const initialState: IS = {
  products: null,
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(createProduct.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.products?.push(action.payload);
      }),
      builder.addCase(createProduct.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export const selectProducts = (state: RootState) => state.product.products;

export const selectP = (state: RootState) => state.product;

export default productSlice.reducer;
