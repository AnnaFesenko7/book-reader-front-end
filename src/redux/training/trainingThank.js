import { createAsyncThunk } from '@reduxjs/toolkit';
import * as trainingApi from 'services/apiService/trainingApi';

export const getTrainingThank = createAsyncThunk(
  'training/getTraining',
  async (_, { rejectWithValue }) => {
    try {
      const training = await trainingApi.getTraining();
      console.log('🚀 ~ file: trainingThank.js:9 ~ training:', training);
      return training;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTrainingThank = createAsyncThunk(
  'training/addTraining',
  async (newTraining, { rejectWithValue }) => {
    const { startDate, finishDate, books } = newTraining;
    const listBooksId = books.map(book => book._id);

    try {
      const training = await trainingApi.addTraining({
        startDate,
        finishDate,
        books: listBooksId,
      });

      return training;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addResultThank = createAsyncThunk(
  'training/addResult',
  async (newResult, { rejectWithValue }) => {
    const { dateInput, pageInput } = newResult;
    const result = {
      date: dateInput,
      pages: pageInput,
    };

    try {
      const results = await trainingApi.addResult(result);

      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
