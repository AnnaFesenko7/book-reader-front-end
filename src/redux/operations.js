export const handlePending = state => {
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
  state.isLoading = false;
};

export const handleGetProfileFulfilled = (state, { payload }) => {
  console.log(payload);
  state.userName = payload.name;
  state.email = payload.email;
  state.currentLang = payload.language;
  state.isTrainingStarted = payload.isTrainingStarted;
  state.isLoading = false;
};
export const handleChangeLangFulfilled = (state, { payload }) => {
  console.log(payload);
  state.currentLang = payload;
  state.isLoading = false;
};

export const handleChangeTrainingStatusFulfilled = (state, { payload }) => {
  state.isTrainingStarted = payload;
  state.isLoading = false;
};

export const handleGetBooksFulfilled = (state, { payload }) => {
  state.entities = payload;
};
export const handleAddBookFulfilled = (state, { payload }) => {
  state.entities = [...state.entities, payload];
};
