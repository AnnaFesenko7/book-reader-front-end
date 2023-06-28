import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registrationThunk,
  loginThunk,
  logoutThunk,
} from 'redux/auth/authThunk';

import {
  getProfileThunk,
  changeLangThunk,
  changeTrainingStatusThunk,
} from 'redux/auth/userThunk';

import * as operations from '../operations';
import { initialState } from './initialState';

const customArr = [
  changeLangThunk,
  getProfileThunk,
  registrationThunk,
  loginThunk,
  logoutThunk,
  changeTrainingStatusThunk,
];
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

      .addCase(
        registrationThunk.fulfilled,
        operations.handleRegistrationFulfilled
      )
      .addCase(loginThunk.fulfilled, operations.handleLoginFulfilled)
      .addCase(logoutThunk.fulfilled, operations.handleLogoutFulfilled)
      .addCase(getProfileThunk.fulfilled, operations.handleGetProfileFulfilled)
      .addCase(changeLangThunk.fulfilled, operations.handleChangeLangFulfilled)
      .addCase(
        changeTrainingStatusThunk.fulfilled,
        operations.handleChangeTrainingStatusFulfilled
      )
      .addMatcher(isAnyOf(...fn('pending')), operations.handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), operations.handleRejected);
  },
});
export const { changeLanguageAction } = authSlice.actions;
