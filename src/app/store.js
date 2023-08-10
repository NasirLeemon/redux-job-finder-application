import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import jobsReducer from '../features/jobs/JobsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    jobs : jobsReducer,
  },
});
