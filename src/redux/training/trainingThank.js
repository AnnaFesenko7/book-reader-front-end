import { createAsyncThunk } from '@reduxjs/toolkit';
import * as trainingApi from 'services/apiService/trainingApi';

export const getTrainingThank = createAsyncThunk(
  'training/getTraining',
  async (_, { rejectWithValue }) => {
    try {
      const training = await trainingApi.getTraining();
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
      console.log('🚀 ~ file: trainingThank.js:28 ~ training:', training);

      return training;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
