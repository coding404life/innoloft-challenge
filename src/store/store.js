import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import configurationReducer from './reducers/configurationSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    configuration: configurationReducer
  },
  devTools: import.meta.env.VITE_NODE_ENV === 'development'
});
