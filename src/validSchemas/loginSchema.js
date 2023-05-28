import * as Yup from 'yup';
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .typeError('Will be a string')
    .email('the field contains an error')
    // .min(10, 'the field contains an error')
    // .max(63, 'the field contains an error')
    .required('this field is required'),
  password: Yup.string()
    .typeError('Will be a string')
    .min(5, 'the field contains an error')
    .max(30, 'the field contains an error')

    .required('this field is required'),
});
