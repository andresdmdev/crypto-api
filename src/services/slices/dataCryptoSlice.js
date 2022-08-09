import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cryptoApi from '../../api/api';
import formatingData from './helpers/formatingData';

const initialState = {
  coins: [],
  searchCoins: [],
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
    searchCoin: (state, action) => {
     
      const name = action.payload.toLowerCase()

      if(name){
        state.searchCoins = state.coins.filter(coin => coin.name.toLowerCase().includes(name))
      } else{
        state.searchCoins = []
      }
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = 'succeeded'
        console.log(formatingData(action.payload)) // Eliminar
        state.coins = formatingData(action.payload);
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const { searchCoin } = cryptoSlice.actions
export const selectSearchedCoin = (state) => state.crypto.searchCoins
export const selectAllCoins = (state) => state.crypto.coins;
export const getStatus = (state) => state.crypto.status;
export const getError = (state) => state.crypto.error;

export default cryptoSlice.reducer;