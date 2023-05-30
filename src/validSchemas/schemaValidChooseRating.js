import * as Yup from 'yup';

export const schemaValidChooseRating = Yup.object().shape({
  rating: Yup.string(),
  resume: Yup.string()
    .min(1, 'Too short resume!')
    .max(1000, 'You have exceeded the word limit')
    .typeError('Must be a string!'),
});
