import { instance } from './axiosInstance';

export const addTraining = async newTraining => {
  // console.log('🚀 ~ file: trainingApi.js:2 ~ instance:', instance);
  const response = await instance.post('training', newTraining);
  console.log('response', response.data);
  return response.data;
};

export const getTraining = async () => {
  const training = await instance.get('training');
  console.log(
    '🚀 ~ file: trainingApi.js:12 ~ getTraining ~ training:',
    training.data
  );

  return training.data;
};
