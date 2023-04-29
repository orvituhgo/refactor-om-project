/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const isLoggedSlice = createSlice({
  name: 'isLogged',
  initialState,
  reducers: {
    verify(state) {
      console.log(state.isLoggedIn);
    },
    loginSuccess(state) {
      state.isLoggedIn = true;
      state.error = null;
      console.log('Login feito com sucesso');
      console.log(state.isLoggedIn);
    },
    loginRequest(state) {
      console.log('Verificando no banco de dados');
      console.log(state.isLoggedIn);
    },
    loginFailure(state, action) {
      state.isLoggedIn = true;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginRequest, loginFailure } = isLoggedSlice.actions;

export const getIsLoggedValue = (state) => state.isLogged.value;
export const getIsLoggedStatus = (state) => state.isLogged.status;
export const getIsLoggedError = (state) => state.isLogged.error;

export const isLoggedReducer = isLoggedSlice.reducer;
