import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './authSlice/authSlice';
import { booksReducer } from './books/booksReducer';
import { selectedDatesSlice } from './selectedDates/selectedDatesSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  books: booksReducer,
  selectedDates: selectedDatesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
