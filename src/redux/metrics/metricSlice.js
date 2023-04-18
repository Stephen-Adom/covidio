import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllCountries, fetchGlobalData } from '../api/endpoints';

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

export const getAllCountries = createAsyncThunk(
  'metrics/countries',
  async (thunkAPI) => {
    try {
      const response = await fetchAllCountries();
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const metricSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(globalInfo.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(globalInfo.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.global = action.payload;
        IsFulfilled.error = '';
      })
      .addCase(globalInfo.rejected, (state, action) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.global = {};
        IsRejected.error = action.payload;
      });
  },
});

export default metricSlice.reducer;
