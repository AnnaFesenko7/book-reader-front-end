import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/authApi';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async credentials => {
    return await authApi.registration(credentials);
  }
);

export const loginThunk = createAsyncThunk('auth/login', async credentials => {
  return await authApi.login(credentials);
});
