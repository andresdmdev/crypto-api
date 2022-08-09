import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from './slices/dataCryptoSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  }
});