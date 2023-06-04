import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: [] };

export const selectedBooksSlice = createSlice({
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
  },
});
export const { addBook, deleteBook } = selectedBooksSlice.actions;
