import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTrainingThank,
  addTrainingThank,
  addResultThank,
} from 'redux/training/trainingThank.js';

import * as operations from '../operations';
import { initialState } from './initialState';

const customArr = [getTrainingThank, addTrainingThank, addResultThank];
const fn = status => {
  return customArr.map(el => el[status]);
};

export const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(
        getTrainingThank.fulfilled,
        operations.handleGetTrainingFulfilled
      )
      .addCase(addResultThank.fulfilled, operations.handleAddResultFulfilled)

      .addMatcher(isAnyOf(...fn('pending')), operations.handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), operations.handleRejected);
  },
});
