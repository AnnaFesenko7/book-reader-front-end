import { instance } from './axiosInstance';

export const addTraining = async newTraining => {
  const response = await instance.post('training', newTraining);
  return response.data;
};

export const getTraining = async () => {
  const training = await instance.get('training');

  return training.data;
};

export const addResult = async result => {
  const { data } = await instance.patch('training/results', result);

  return data.results;
};
