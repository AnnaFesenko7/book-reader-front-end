import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getBooks } from 'redux/books/booksOperations';
import { addBook } from 'services/apiService/booksApi';

const entities = createReducer([], {
  [getBooks.fulfilled]: (_, action) => action.payload,
  [addBook.fulfilled]: (state, action) => {
    state.title = action?.payload.title;
    state.author = action?.payload.author;
    state.pages = action?.payload.pages;
    state.year = action?.payload.year;
  },
});
const isLoading = createReducer(false, {
  [getBooks.pending]: () => true,
  [getBooks.fulfilled]: () => false,
  [getBooks.rejected]: () => false,
  [addBook.fulfilled]: () => false,
  [addBook.pending]: () => true,
  [addBook.rejected]: () => false,
});

const error = createReducer(null, {
  [getBooks.rejected]: (_, action) => action.payload,
  [getBooks.pending]: () => null,
  [addBook.rejected]: (_, action) => action.payload,
  [addBook.pending]: () => null,
});

export const booksReducer = combineReducers({
  entities,
  isLoading,
  error,
});

// // console.log('action payload !!!',action.payload);
//   state.name = action?.payload.name;
//   state.token = action?.payload.token;
//   state.isLoggedIn = true;
//   state.isLogging = false;
//   state.loginError = null;
