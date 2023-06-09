export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
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
export const handleGetTrainingFulfilled = (state, { payload }) => {
  state.startDate = payload?.startDate;
  state.finishDate = payload?.finishDate;
  state.books = payload?.books;
  state.results = payload?.results;
  state.completed = payload?.completed;
};
export const handleAddResultFulfilled = (state, { payload }) => {
  state.results = payload;
};
// export const handleCompletenessTrainingFulfilled = (state, { payload }) => {
//   state.completed = payload;
// };
export const handleFeedbackFulfilled = ({ entities }, { payload }) => {
  const { _id } = payload;
  const index = entities.findIndex(book => book._id === _id);
  entities = entities.splice(index, 1, payload);
};
