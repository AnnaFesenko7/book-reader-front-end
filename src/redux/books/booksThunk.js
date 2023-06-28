import * as booksApi from 'services/apiService/booksApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBooksThunk = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await booksApi.fetchBooks();
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addBookThunk = createAsyncThunk(
  'books/addBook',
  async (newBook, { rejectWithValue }) => {
    try {
      const addedBook = await booksApi.addBook(newBook);
      console.log(addedBook);
      return addedBook;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
