import { createAsyncThunk } from '@reduxjs/toolkit';
import * as usersApi from 'services/apiService/usersApi';

// export const registrationThunk = createAsyncThunk(
//   'auth/registration',
//   async credentials => {
//     return await authApi.registration(credentials);
//   }
// );

// export const loginThunk = createAsyncThunk('auth/login', async credentials => {
//   return await authApi.login(credentials);
// });

export const getProfileThunk = createAsyncThunk(
  'users/getProfile',
  async () => {
    return await usersApi.getProfile();
  }
);
