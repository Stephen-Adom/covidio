import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGlobalData } from '../api/endpoints';

const initialState = {
  global: {},
  countries: [],
  status: '',
  error: '',
};

export const globalInfo = createAsyncThunk('metrics/all', async (thunkAPI) => {
  try {
    const response = await fetchGlobalData();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

