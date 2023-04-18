export const globalInfo = createAsyncThunk('metrics/all', async (thunkAPI) => {
  try {
    const response = await fetchGlobalData();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

