import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: [], startDate: Date.now(), endDate: '' };

export const selectedDatesSlice = createSlice({
  name: 'selectedBooks',
  initialState,
  reducers: {
    addBook(state, action) {
      // console.log(state.list);
      state.list = [...state.list, action.payload];
    },
    deleteBook(state, action) {
      // console.log('action', action);
      state.list = state.list.filter(book => book._id !== action.payload);
    },
    startDateAction(state, action) {
      state.startDate = action.payload;
    },
    endDateAction(state, action) {
      state.endDate = action.payload;
    },
  },
});
export const { addBook, deleteBook, startDateAction, endDateAction } =
  selectedDatesSlice.actions;
