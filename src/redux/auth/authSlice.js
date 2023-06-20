import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registrationThunk,
  loginThunk,
  logoutThunk,
} from 'redux/auth/authThunk';

import { getProfileThunk } from 'redux/auth/userThunk';
import {
  handlePending,
  handleRegistrationFulfilled,
  handleRejected,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleGetProfileFulfilled,
} from './authUserOperations';
import { initialState } from './initialState';

const customArr = [getProfileThunk, registrationThunk, loginThunk, logoutThunk];
const fn = status => {
  return customArr.map(el => el[status]);
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeLanguageAction(state, action) {
      state.currentLang = action.payload;
    },
    // googleLogIn(state, action) {
    //   state.token = action?.payload.token;
    //   state.name = action?.payload.name;
    //   state.avatarGoogle = action?.payload.avatar;
    //   state.isLoggedIn = true;
    //   state.isLogging = false;
    //   state.loginError = null;
    // },

    // setTrainingState(state, action) {
    //   if (action.payload === 'true') {
    //     state.trainingStatus = true;
    //   }
    //   if (action.payload === 'false') {
    //     state.trainingStatus = false;
    //   }
    // },

    // setTrainingStatusJustCompleted(state, action) {
    //   if (action.payload === 'false') {
    //     state.trainingStatusJustCompleted = 'false';
    //   }
    //   if (action.payload === 'completedByPages') {
    //     state.trainingStatusJustCompleted = 'completedByPages';
    //   }
    //   if (action.payload === 'completedByTime') {
    //     state.trainingStatusJustCompleted = 'completedByTime';
    //   }
    // },
  },
  extraReducers: builder => {
    builder

      .addCase(registrationThunk.fulfilled, handleRegistrationFulfilled)
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(getProfileThunk.fulfilled, handleGetProfileFulfilled)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected);
  },
});
export const { logOut, changeLanguageAction } = authSlice.actions;
