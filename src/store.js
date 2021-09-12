import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/home/homeSlice';

export const store = configureStore({
  reducer: {
      counter: counterReducer,
    //   cart: cartReducer,
  },
});