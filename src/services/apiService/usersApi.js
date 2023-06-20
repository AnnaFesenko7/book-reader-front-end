import { instance } from './axiosInstance';

export const getProfile = async () => {
  const { data } = await instance('/users/current');
  return data.data;
};
