import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsApi from "../../api/apiNews";

const initialState = {
  news: [],
  status: 'idle',
  error: null
}

export const dataCryptoNews = createAsyncThunk('news/dataCryptoNews', async () => {
  try {
    const response = await newsApi.get('');
    return response.data.articles
  } catch (error) {
    return error.message
  }
})

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(dataCryptoNews.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(dataCryptoNews.fulfilled, (state, action) => {
        state.status = 'succeeded' 
        
        if(Array.isArray(action.payload)){
          state.news = action.payload
        } else {
          state.status = 'failed'
          state.error = action.payload
        }
      })
      .addCase(dataCryptoNews.rejected, (state, action) => {
        state.status = 'failed'    
      })
  }
})

export const selectAllNews = (state) => state.news.news
export const selectNewsStatus = (state) => state.news.status

export default newsSlice.reducer