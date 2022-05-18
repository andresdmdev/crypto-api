import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from '../features/table/dataCryptoSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  }
});