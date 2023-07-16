import { createAsyncThunk } from '@reduxjs/toolkit';
import * as usersApi from 'services/apiService/usersApi';
import { setToken } from 'services/apiService/axiosInstance';

export const getProfileThunk = createAsyncThunk(
  'users/getProfile',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    setToken(persistedToken);
    try {
      return await usersApi.getProfile();
    } catch (err) {
      return err;
    }
  }
);
export const changeLangThunk = createAsyncThunk(
  'user/changeLang',
  async language => {
    return await usersApi.changeLang({ language: language });
  }
);

export const changeTrainingStatusThunk = createAsyncThunk(
  'user/changeTrainingStatus',
  async isTrainingStarted => {
    return await usersApi.changeTrainingStatus({
      isTrainingStarted: isTrainingStarted,
    });
  }
);
