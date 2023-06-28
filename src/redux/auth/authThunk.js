import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/apiService/authApi';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      return await authApi.registration(credentials);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await authApi.login(credentials);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
