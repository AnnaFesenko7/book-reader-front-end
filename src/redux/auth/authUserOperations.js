export const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

export const handleRegistrationFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isRegistered = true;
  // state.userName = payload.user.name;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleLoginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload;
  state.isLoggedIn = true;
};

export const handleLogoutFulfilled = state => {
  state.isLoggedIn = false;
  state.token = null;
};

export const handleGetProfileFulfilled = (state, { payload }) => {
  state.userName = payload.name;
  state.email = payload.email;
  state.currentLang = payload.language;
};
export const handleChangeLangFulfilled = (state, { payload }) => {
  console.log(payload);
  state.currentLang = payload;
};
