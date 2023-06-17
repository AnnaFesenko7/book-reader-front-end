import { createSlice } from '@reduxjs/toolkit';
import { registrationThunk, loginThunk } from 'redux/auth/authThunk';

const initialState = {
  userName: null,
  isRegistered: false,
  token: null,
  //   avatarGoogle: null,
  isLoggedIn: false,
  password: '',
  logIn: '',
  error: null,
  trainingStatus: false,
  currentLang: 'en',
  //   trainingStatusJustCompleted: null,
  isLoading: false,
};
const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

const handleRegistrationFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isRegistered = true;
  // state.userName = payload.user.name;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleLoginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  // state.logIn = payload.user;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // logIn(state, action) {
    //   state.logIn = action.payload;
    //   state.isLoggedIn = true;
    // },
    logOut(state) {
      state.logIn = '';
      state.isLoggedIn = false;
    },
    // registration(state, action) {
    //   state.userName = action.payload.name;
    //   state.logIn = action.payload.email;
    //   state.password = action.payload.password;

    //   state.isRegistered = true;
    // },
    changeLanguageAction(state, action) {
      state.currentLang = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.pending, handlePending)
      .addCase(registrationThunk.fulfilled, handleRegistrationFulfilled)
      .addCase(registrationThunk.rejected, handleRejected)
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(loginThunk.rejected, handleRejected);
  },
});
export const { logOut, changeLanguageAction } = authSlice.actions;
