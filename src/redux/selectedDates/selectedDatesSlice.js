import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: [], startDate: Date.now(), endDate: '' };

export const selectedDatesSlice = createSlice({
  name: 'selectedBooks',
  initialState,
  reducers: {
    addBook(state, action) {
      state.list = [...state.list, action.payload];
    },
    deleteBook(state, action) {
      state.list = state.list.filter(book => book._id !== action.payload);
    },
    startDate(state, action) {
      state.startDate = action.payload;
    },
    endDate(state, action) {
      state.endDate = action.payload;
    },
    resetSelectedDates(state) {
      state.endDate = '';
      state.list = [];
      state.startDate = Date.now();
    },
  },
});

export const { addBook, deleteBook, startDate, endDate, resetSelectedDates } =
  selectedDatesSlice.actions;
