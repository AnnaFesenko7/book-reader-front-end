import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './authSlice/authSlice';
import { booksReducer } from './books/booksReducer';
import { selectedBooksSlice } from './selectedBooks/selectedBooksSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  books: booksReducer,
  selectedBooks: selectedBooksSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
