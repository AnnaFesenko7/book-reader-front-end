import { format } from 'date-fns';

export const date = date => {
  return format(Date.parse(date), 'dd.MM.yyyy');
};
export const time = date => {
  return format(Date.parse(date), 'HH:mm:ss');
};
