import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './slices/dataCryptoNewsSlice';
import cryptoReducer from './slices/dataCryptoSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    news: newsReducer
  }
});