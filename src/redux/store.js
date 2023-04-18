import { configureStore } from '@reduxjs/toolkit';
import metricSlice from './metrics/metricSlice';

const store = configureStore({
  reducer: {
    metrics: metricSlice,
  },
});

export default store;
