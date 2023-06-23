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

export const changeTrainingStatusThunk = createAsyncThunk(
  'user/changeTrainingStatus',
  async isTrainingStarted => {
    return await usersApi.changeTrainingStatus({
      isTrainingStarted: isTrainingStarted,
    });
  }
);
