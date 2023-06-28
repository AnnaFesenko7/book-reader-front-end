import { instance } from './axiosInstance';

export const addTraining = async newTraining => {
  const response = await instance.post('training', newTraining);
  console.log(response);
  return response.data;
};

export const getTraining = async () => {
  const training = await instance.get('training');
  return training;
};
