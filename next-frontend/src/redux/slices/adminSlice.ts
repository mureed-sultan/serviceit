// src/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


interface AuthState {
  name: string;
  userId: string;
  imageUrl:string
}

const initialState: AuthState = {
  name:"",
  userId:"",
  imageUrl:""
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<AuthState>) => {
      state.name = action.payload.name;
      state.userId = action.payload.userId;
      state.imageUrl = action.payload.imageUrl
    },
  },
});

export const { setAdmin } = authSlice.actions;
export default authSlice.reducer;