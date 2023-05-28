import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  //   token: null,
  //   avatarGoogle: null,
  isLoggedIn: false,
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
  },
});
export const { logIn, logOut } = authSlice.actions;
