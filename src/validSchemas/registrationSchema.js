import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError('Will be a string')
    .min(3, 'the field contains an error')
    .max(100, 'the field contains an error')
    // .matches(
    //   /^[a-zA-Z0-9][0-9a-zA-Z\*\!\@\#\$\%\^\&\(\)\{\}\[\]\:\;\<\>,\.\?\/\~_\+\-\=\|\\\ ]{2,99}$/,
    //   'the field contains an error'
    // )
    .required('this field is required'),
  email: Yup.string()
    .typeError('Will be a string')
    .email('the field contains an error')
    // .matches(/^(?!\-)\S{2,}@\S+(\.\w{2,})(?!\-)$/, 'Is not in correct format')
    // .min(10, 'the field contains an error')
    // .max(63, 'the field contains an error')
    .required('this field is required'),
  password: Yup.string()
    // .typeError('Will be a string')
    .min(5, 'the field contains an error')
    .max(30, 'the field contains an error')
    .matches(
      /^(?!-|\.)[0-9a-zA-Z*!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]{5,30}$/,
      'the field contains an error'
    )
    .required('this field is required'),
  confirmPassword: Yup.string()
    .typeError('Will be a string')
    // .min(5, 'the field contains an error')
    // .max(30, 'the field contains an error')
    // .matches(
    //   /^(?!\-|\.)[0-9a-zA-Z\*\!\@\#\$\%\^\&\(\)\{\}\[\]\:\;\<\>,\.\?\/\~_\+\-\=\|\\]{5,30}$/,
    //   'the field contains an error'
    // )
    .oneOf([Yup.ref('password')], "password don't match")
    .required('this field is required'),
});
