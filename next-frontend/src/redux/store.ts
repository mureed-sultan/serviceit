// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import adminSlice from './slices/adminSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin:adminSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;