import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cryptoApi from '../../api/api';

const initialState = {
  coins: [],
  status: 'idle',
  error: null
};

export const fetchCoins = createAsyncThunk('crypto/fetchCoins', async () => {
  try {
    const reponse = await cryptoApi.get('');
    return [...reponse.data];
  } catch (error) {
    return error.message;
  }
});

const cryptoSlice = createSlice({
  name: 'crypto-api',
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
        state.coins = action.payload;
        console.log(state.coins);
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const selectAllCoins = (state) => state.crypto.coins;
export const getStatus = (state) => state.crypto.status;
export const getError = (state) => state.crypto.error;

export default cryptoSlice.reducer;