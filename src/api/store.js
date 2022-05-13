import { configureStore } from "@reduxjs/toolkit";
import binanceReducer from '../features/table/dataBinanceSlice';

export const store = configureStore({
  reducer: {
    binance: binanceReducer,
  }
});