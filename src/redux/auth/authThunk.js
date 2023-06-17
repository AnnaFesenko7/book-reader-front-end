import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/authApi';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async credentials => {
    return await authApi.registration(credentials);
  }
);

export const loginThunk = createAsyncThunk('auth/login', async credentials => {
  const res = await authApi.login(credentials);
  console.log('🚀 ~ file: authThunk.js:13 ~ loginThunk ~ res:', res);
  return res.data;
});
