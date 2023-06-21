import { instance } from './axiosInstance';

export const getProfile = async () => {
  const { data } = await instance('/users/current');
  return data.data;
};

export const changeLang = async language => {
  const { data } = await instance.put('/users/language', language);
  return data.language;
};
