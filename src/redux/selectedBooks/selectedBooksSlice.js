import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: [] };

export const selectedBooksSlice = createSlice({
  name: 'selectedBooks',
  initialState,
  reducers: {
    addBook(state, action) {
      console.log(action);
      console.log(state.list);
      state.list = [...state.list, action.payload];
    },
  },
});
export const { addBook } = selectedBooksSlice.actions;
