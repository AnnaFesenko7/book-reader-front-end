import axios from 'axios';

export const instance = axios.create({
  // baseURL: 'http://localhost:4040/api',
  baseURL: 'https://book-reader-jr3w.onrender.com/api',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};
