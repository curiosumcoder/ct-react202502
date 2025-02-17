import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductService from "../services/ProductService";
import IProduct from "../models/IProduct";

export const searchProducts = createAsyncThunk("search-products",
  async (filter: string) => {
    const ps = new ProductService();
    return await ps.search(filter);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: Array<IProduct>(),
    fetchStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(searchProducts.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(searchProducts.rejected, (state) => {
        state.fetchStatus = "error";
      })
  },
});

export default productSlice;
