import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTrainingThank,
  addTrainingThank,
  addResultThank,
  deleteTrainingThank,
} from 'redux/training/trainingThank.js';

import * as operations from '../operations';
import { initialState } from './initialState';

const customArr = [
  getTrainingThank,
  addTrainingThank,
  addResultThank,
  deleteTrainingThank,
];
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
      .addCase(
        addTrainingThank.fulfilled,
        operations.handleAddTrainingFulfilled
      )
      .addCase(addResultThank.fulfilled, operations.handleAddResultFulfilled)
      .addCase(
        deleteTrainingThank.fulfilled,
        operations.handleDeleteTrainingFulfilled
      )

      .addMatcher(isAnyOf(...fn('pending')), operations.handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), operations.handleRejected);
  },
});
