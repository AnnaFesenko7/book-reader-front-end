import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/apiService/authApi';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async credentials => {
    return await authApi.registration(credentials);
  }
);

export const loginThunk = createAsyncThunk('auth/login', async credentials => {
  return await authApi.login(credentials);
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await authApi.logout();
});
