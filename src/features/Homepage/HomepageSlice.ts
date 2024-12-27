import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../types/product.types";

interface initialStateType {
  isLoading: boolean;
  Data: IProduct[];
  randomProduct: IProduct[];
  BestSellingProducts: IProduct[];
  wishlistData: IProduct[];
  error: boolean;
  productsILiked: IProduct[];
}
const initialState: initialStateType = {
  isLoading: true,
  Data: [],
  randomProduct: [],
  BestSellingProducts: [],
  wishlistData: [],
  error: false,
  productsILiked: [],
};
export const gitProductItem = createAsyncThunk(
  "student/gitProductItem",
  async (name: string, thunkAPI) => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      return res.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

const HomepageReducer = createSlice({
  name: " Homepage",
  initialState,
  reducers: {
    gitRandomProduct(state) {
      const randomNumbersArray = Array.from(
        { length: 5 },
        () => Math.floor(Math.random() * 20) + 1
      );
      state.randomProduct = state.Data.filter((data) =>
        randomNumbersArray.includes(data.id)
      );
    },
    gitBestSellingProducts(state) {
      state.BestSellingProducts = state.Data.map((data) => data)
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 3);
    },
    getProductsILiked(state, action) {
      const findProduct = state.Data.find((data) => data.id === action.payload);
      if (findProduct) {
        if (!state.productsILiked.some((e) => e.id === action.payload)) {
          state.productsILiked.push(findProduct);
        } else {
          state.productsILiked = state.productsILiked.filter(
            (arr) => arr.id !== findProduct.id
          );
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(gitProductItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(gitProductItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Data = action.payload;
      })
      .addCase(gitProductItem.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});
export default HomepageReducer.reducer;
export const { gitRandomProduct, gitBestSellingProducts, getProductsILiked } =
  HomepageReducer.actions;
