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
      const payload = await trainingApi.addResult(result);

      return payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const completenessTrainingThank = createAsyncThunk(
  'training/completeness',
  async (_, { rejectWithValue }) => {
    try {
      const updatedTraining = await trainingApi.completeness();

      return updatedTraining;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTrainingThank = createAsyncThunk(
  'training/deleteTraining',
  async (id, { rejectWithValue }) => {
    console.log('🚀 ~ file: trainingThank.js:76 ~ id :', id);

    try {
      return await trainingApi.deleteTraining(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
