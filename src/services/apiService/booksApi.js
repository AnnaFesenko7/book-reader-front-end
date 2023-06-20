import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040/api';

export async function fetchBooks() {
  const response = await axios.get('/books');
  return response.data.payload.books;
}

export async function fetchBookById(bookId) {
  const response = await axios.get(`/books/${bookId}?_expand=author`);
  return response.data;
}
export async function addBook(newBook) {
  const response = await axios.post('/books', newBook);
  return response.data.payload.book;
}
