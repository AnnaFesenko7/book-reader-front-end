import { instance, setToken } from './axiosInstance';

export async function registration(credentials) {
  console.log(credentials);
  const response = await instance.post('auth/register', credentials);
  console.log(response);
  return response.data;
}
export async function login(credentials) {
  const response = await instance.post('auth/login', credentials);

  const token = response.data.data.token;
  console.log(token);
  setToken(`Bearer ${token}`);
  return token;
}
export async function logout() {
  return await instance('auth/logout');
}
