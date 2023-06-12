import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040/api';

export async function registration() {
  const response = await axios.post('user/registration');
  return response.data;
}
