import { instance } from './axiosInstance';

export const addTraining = async newTraining => {
  console.log(
    '🚀 ~ file: trainingApi.js:4 ~ addTraining ~ newTraining:',
    newTraining
  );

  const response = await instance.post('training', newTraining);
  return response.data;
};

export const getTraining = async () => {
  const training = await instance.get('training');

  return training.data;
};

export const addResult = async result => {
  const { data } = await instance.patch('training/results', result);
  console.log('🚀 ~ file: trainingApi.js:21 ~ addResult ~ data:', data);

  return data;
};

export const completeness = async () => {
  const { data } = await instance.patch('training/completeness');

  return data.payload;
};

export const deleteTraining = async id => {
  console.log('🚀 ~ file: trainingApi.js:27 ~ deleteTraining ~ id:', id);
  const { data } = await instance.delete(`training/${id}`);

  return data;
};
