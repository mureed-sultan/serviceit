// src/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


interface AuthState {
  name: string;
  email: string;
  userId: string;
  imageUrl:string
}

const initialState: AuthState = {
  name:"",
  email:"",
  userId:"",
  imageUrl:""
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.imageUrl = action.payload.imageUrl
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;