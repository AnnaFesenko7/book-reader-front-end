import { instance } from './axiosInstance';

export async function fetchBooks() {
  const response = await instance('/books');
  return response.data.payload.books;
}

export async function fetchBookById(bookId) {
  const response = await instance(`/books/${bookId}?_expand=author`);
  return response.data;
}
export async function addBook(newBook) {
  const response = await instance.post('/books', newBook);
  return response.data.payload.book;
}
