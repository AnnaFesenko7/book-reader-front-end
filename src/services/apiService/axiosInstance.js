import axios from 'axios';
// import { useSelector } from 'react-redux';
// const token = useSelector(tokenSelector);

export const instance = axios.create({
  baseURL: 'http://localhost:4040/api',
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('token')}`,
  // },
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};
