import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  //   token: null,
  //   avatarGoogle: null,
  isLoggedIn: false,
  password: '',
  logIn: '',
  //   loginError: null,
  //   trainingStatus: false,
  //   trainingStatusJustCompleted: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action) {
      state.logIn = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state, action) {
      state.logIn = '';
      state.isLoggedIn = false;
    },
    registration(state, action) {
      state.userName = action.payload.name;
      state.logIn = action.payload.email;
      state.password = action.payload.password;

      state.isRegistered = true;
    },
  },
});
export const { logIn, logOut, registration } = authSlice.actions;
