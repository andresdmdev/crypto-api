import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_COINS = 'https://api.binance.com/api/v3/ticker/price';

const initialState = {
  coins: [],
  status: 'idle',
  error: null
};

export const fetchCoins = createAsyncThunk('binance/fetchCoins', async () => {
  try {
    const response = await axios.get(URL_COINS);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
})

const binanceSlice = createSlice({
  name: 'binance-api',
  initialState,
  reducers: {
    /*
      Extra features and logic // Logica y funcionalidades extra
    */
  },
  extraReducers(builder){
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = 'succeeded'

        const add = action.payload.map(x => (
          state.coins.push(x)
        ))

        state.coins = state.coins.concat(add)
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message
      })
  }
});

export const selectAllCoins = (state) => state.binance.coins;
export const getStatus = (state) => state.binance.status;
export const getError = (state) => state.binance.error;

export default binanceSlice.reducer;