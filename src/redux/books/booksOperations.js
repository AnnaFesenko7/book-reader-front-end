import * as booksApi from 'services/booksApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk(
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

export const addBook = createAsyncThunk(
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
//entities: [
//   {
//     _id: '645e83d3692d91e8191e6257',
//     status: 'reading',
//     author: 'J.K.Roling',
//     pages: 400,
//     title: 'Harry Potter',
//     year: 2014,
//     rating: 2,
//     resume: ''
//   },
