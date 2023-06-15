import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040/api';

export async function registration(credentials) {
  const response = await axios.post('user/registration', credentials);
  console.log(response);
  return response.data;
}
export async function login(credentials) {
  const response = await axios.post('user/login', credentials);
  console.log(response);
  return response.data;
}
