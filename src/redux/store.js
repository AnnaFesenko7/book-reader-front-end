import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './authSlice/authSlice';
import { booksReducer } from './books/booksReducer';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  books: booksReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
