import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getBooksThunk,
  addBookThunk,
  feedbackThunk,
} from 'redux/books/booksThunk';
import * as operations from '../operations';

import { initialState } from './initialState';

const customArr = [getBooksThunk, addBookThunk, feedbackThunk];
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
      .addCase(feedbackThunk.fulfilled, operations.handleFeedbackFulfilled)
      .addMatcher(isAnyOf(...fn('pending')), operations.handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), operations.handleRejected);
  },
});
