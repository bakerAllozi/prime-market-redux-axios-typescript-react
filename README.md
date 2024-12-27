# Homepage Redux Slice

This is a Redux slice implementation using `@reduxjs/toolkit`. It manages the state for products, including loading, best-selling products, random products, wishlist data, and user preferences.

## Features
- **Async Thunk:** Fetches product data from an external API.
- **Reducers:** Handles local state updates for random products, best-selling products, and user-liked products.
- **Extra Reducers:** Handles loading states for asynchronous actions.

---

## Installation

1. **Install dependencies:**
   ```bash
   npm install @reduxjs/toolkit axios
   ```

2. **Import the slice into your Redux store:**
   ```javascript
   import { configureStore } from "@reduxjs/toolkit";
   import HomepageReducer from "./path-to/your-slice";

   const store = configureStore({
     reducer: {
       homepage: HomepageReducer,
     },
   });

   export default store;
   ```

---

## Code Overview

### Initial State
```javascript
const initialState = {
  isLoading: true,
  Data: [],
  randomProduct: [],
  BestSellingProducts: [],
  wishlistData: [],
  error: "",
  productsILiked: [],
};
```

### Async Thunk
Fetches product data from the Fake Store API:
```javascript
export const gitProductItem = createAsyncThunk(
  "student/gitProductItem",
  async (name, thunkAPI) => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
```

### Reducers
#### 1. **gitRandomProduct**
Filters 5 random products from the dataset:
```javascript
gitRandomProduct(state) {
  const randomNumbersArray = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 20) + 1
  );
  state.randomProduct = state.Data.filter((data) =>
    randomNumbersArray.includes(data.id)
  );
}
```

#### 2. **gitBestSellingProducts**
Sorts and selects the top 3 products based on rating:
```javascript
gitBestSellingProducts(state) {
  state.BestSellingProducts = state.Data.map((data) => data)
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);
}
```

#### 3. **getProductsILiked**
Adds or removes products from the user’s liked products:
```javascript
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
}
```

### Extra Reducers
Handles async actions:
```javascript
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
}
```

---

## Exported Actions
```javascript
export const {
  gitRandomProduct,
  gitBestSellingProducts,
  getProductsILiked,
} = HomepageReducer.actions;
```

---

## Usage Example
Dispatching actions:
```javascript
import { useDispatch, useSelector } from "react-redux";
import { gitProductItem, gitRandomProduct } from "./path-to/your-slice";

const MyComponent = () => {
  const dispatch = useDispatch();
  const { Data, randomProduct, isLoading } = useSelector(
    (state) => state.homepage
  );

  useEffect(() => {
    dispatch(gitProductItem());
  }, [dispatch]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>Products</h1>
      <button onClick={() => dispatch(gitRandomProduct())}>
        Get Random Products
      </button>
      {/* Render products */}
    </div>
  );
};
```
