import { instance, setToken } from './axiosInstance';

export async function registration(credentials) {
  const response = await instance.post('auth/register', credentials);

  return response.data;
}
export async function login(credentials) {
  const response = await instance.post('auth/login', credentials);

  const token = response.data.data.token;

  setToken(token);
  return token;
}

export async function logout() {
  return await instance('auth/logout');
}
