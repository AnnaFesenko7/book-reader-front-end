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
export async function updateBook(feedback, id) {
  const response = await instance.patch(`/books/opinion/${id}`, feedback);
  return response.data.payload.updatedBook;
}
