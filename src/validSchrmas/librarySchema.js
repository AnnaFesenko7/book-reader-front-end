import * as yup from 'yup';

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
    .string()
    .typeError('Year should be a number')
    .min(1, 'Year should not be less than 1000!')
    .max(20, 'Year should be less than currentYear!'),
  pages: yup
    .string()
    .typeError('Pages should be a number')
    .min(1, 'Too Short!')
    .max(9999, 'Must be no more than 4 characters')
    .required('Pages is required'),
});
