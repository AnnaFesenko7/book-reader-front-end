import * as yup from 'yup';

const currentYear = () => {
  return Number(new Date().getFullYear());
};

export const librarySchema = yup.object().shape({
  title: yup
    .string()
    .max(50, 'Book title should be less than 50')
    .matches(/^[^\s-]/, 'Name should not start from space or dash')
    .required('Book title is required'),

  author: yup
    .string()
    .max(50, 'Author name should be less than 50')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/,
      'Author name must contain letters'
    )
    .required('Author is required'),

  year: yup
    .number()
    .typeError('Year should be a date')
    .integer('Must be an integer ')
    .min(1000, 'This year cannot be')
    .max(currentYear(), 'Must be no more than current year'),

  pages: yup
    .number()
    .typeError('Pages should be a number')
    .integer('Must be an integer ')
    .min(1, 'Too Short!')
    .max(9999, 'Must be no more than 4 characters')
    .required('Pages is required'),
});
