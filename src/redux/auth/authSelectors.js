export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const userNameSelector = state => state.auth.userName;
export const isRegisteredSelector = state => state.auth.isRegistered;
export const isLoadingSelector = state => state.auth.isLoading;
export const tokenSelector = state => state.auth.token;
export const logInSelector = state => state.auth.logIn;

// const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUsername = state => state.auth.name;

// const getToken = state => state.auth.token;

// const getGoogleAvatar = state => state.auth.avatarGoogle;

// const getIsLogging = state => state.auth.isLogging;

// const getLoginError = state => state.auth.loginError;

export const isTrainingStarted = state => state.auth.isTrainingStarted;

// const getTrainingStatusJustCompleted = state =>
//   state.auth.trainingStatusJustCompleted;
