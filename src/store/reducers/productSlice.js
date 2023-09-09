import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../api/productApi';

const initialState = {
  productData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Get product
export const getProduct = createAsyncThunk('product/getProduct', async ({ productId }, thunkAPI) => {
  try {
    return await productApi.getProduct(productId);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get TRL
export const getTRL = createAsyncThunk('product/getTRL', async (thunkAPI) => {
  try {
    return await productApi.getTRL();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Edit Product
export const editProduct = createAsyncThunk('product/edit', async ({ data, productId }, thunkAPI) => {
  try {
    return await productApi.editProduct(data, productId);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productData = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productData = action.payload;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
