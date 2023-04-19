import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchAllCountries,
  fetchContinent,
  fetchGlobalData,
  fetchAllContinents,
} from '../api/endpoints';

const initialState = {
  global: {},
  countries: [],
  continent: {},
  allContinents: [],
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

export const getAllContinents = createAsyncThunk('metrics/all-continents', async (thunkAPI) => {
  try {
    const response = await fetchAllContinents();
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

export const getContinent = createAsyncThunk(
  'metrics/continent',
  async (payload, thunkAPI) => {
    try {
      const response = await fetchContinent(payload);
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
      })

      .addCase(getAllContinents.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })

      .addCase(getAllContinents.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.allContinents = action.payload;
        IsFulfilled.error = '';
      })

      .addCase(getAllContinents.rejected, (state, action) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.error = action.payload;
      })

      .addCase(getAllCountries.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.countries = action.payload;
        IsFulfilled.error = '';
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.countries = [];
        IsRejected.error = action.payload;
      })
      .addCase(getContinent.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(getContinent.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.continent = action.payload;
        IsFulfilled.error = '';
      })
      .addCase(getContinent.rejected, (state, action) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.continent = [];
        IsRejected.error = action.payload;
      });
  },
});

export default metricSlice.reducer;
