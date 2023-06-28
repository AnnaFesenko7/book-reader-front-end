import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getBooksThunk, addBookThunk } from 'redux/books/booksThunk';
import * as operations from '../operations';

import { initialState } from './initialState';

const customArr = [getBooksThunk, addBookThunk];
const fn = status => {
  return customArr.map(el => el[status]);
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(getBooksThunk.fulfilled, operations.handleGetBooksFulfilled)
      .addCase(addBookThunk.fulfilled, operations.handleAddBookFulfilled)

      .addMatcher(isAnyOf(...fn('pending')), operations.handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), operations.handleRejected);
  },
});
