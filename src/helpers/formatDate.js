import { format } from 'date-fns';

export const day = date => {
  return format(Date.parse(date), 'dd.MM.yyyy');
};
export const time = date => {
  return format(Date.parse(date), 'HH:mm:ss');
};
export const dayLikeChartLabel = date => {
  return format(Date.parse(date), 'dd.MM');
};
