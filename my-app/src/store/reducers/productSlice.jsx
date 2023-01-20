import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
  products: [],
  filteredProds: [],
  isLoading: false,
  error: null
}

export const getProducts = createAsyncThunk("products/getProducts", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await axios.get("http://localhost:3030/products")
    console.log(`This is data returned from database`, response.data);
    return response.data
  }
  catch (error) {
    return rejectWithValue(error.message)
  }

})


export const addProduct = createAsyncThunk("products/addProduct", async (product, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await axios.post("http://localhost:3030/products", product)
    return response.data
  }
  catch (error) {
    return rejectWithValue(error.message)
  }
})

export const deleteProduct = createAsyncThunk(
  "books/deleteProduct",
  async (productId, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      console.log(thunkAPI);
      const response = await axios.delete(
        `http://localhost:3030/products/${productId}`
      );
      dispatch(getProducts());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)


export const editProduct = createAsyncThunk(
  "books/editProduct",
  async (args, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    const { id, formValues } = args
    try {
      console.log(args);
      const response = await axios.put(
        `http://localhost:3030/products/${id}`, formValues
      );
      dispatch(getProducts());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)




const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProductsWithCategory: (state, action) =>
      action.payload === null ? {
        ...state,
        filteredProds: []
      } : {
        ...state,
        filteredProds: state.products.filter((product) => product.category === action.payload)
      }

  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // ----------Add Product--------//
    [addProduct.fulfilled]: (state, action) => {
      state.products.push(action.payload)
    }
  }
})

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;