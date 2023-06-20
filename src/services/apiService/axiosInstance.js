import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4040/api',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};
