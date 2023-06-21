import { createAsyncThunk } from '@reduxjs/toolkit';
import * as usersApi from 'services/apiService/usersApi';

export const getProfileThunk = createAsyncThunk(
  'users/getProfile',
  async () => {
    return await usersApi.getProfile();
  }
);
export const changeLangThunk = createAsyncThunk(
  'user/changeLang',
  async language => {
    return await usersApi.changeLang({ language: language });
  }
);
