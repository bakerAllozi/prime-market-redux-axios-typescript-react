import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product.types";

interface initialStateType {
  wishlistData: IProduct[];
  Data: IProduct[];
}

const initialState: initialStateType = {
  wishlistData: [],
  Data: [],
};

const wishlistReducer = createSlice({
  name: " Wishlist",
  initialState,
  reducers: {
    gitProduct(state, action) {
      const quantity = 1;
      state.Data = action.payload.map((item: IProduct) => ({
        ...item,
        quantity,
        price2: item.price,
      }));
    },
    gitWishlistData(state, action) {
      const findProduct = state.Data.find((data) => data.id === action.payload);
      if (findProduct) {
        if (!state.wishlistData.some((e) => e.id === action.payload)) {
          state.wishlistData.push(findProduct);
        }
      }
    },
    deleteFromWishList(state, action) {
      state.wishlistData = state.wishlistData.filter(
        (arr) => arr.id !== action.payload
      );
    },
    deleteAllFromWishList(state) {
      state.wishlistData = [];
    },
  },
});

export default wishlistReducer.reducer;
export const {
  deleteFromWishList,
  gitProduct,
  gitWishlistData,
  deleteAllFromWishList,
} = wishlistReducer.actions;
