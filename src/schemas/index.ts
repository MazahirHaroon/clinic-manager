import * as yup from 'yup';

const passwordRules: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&]).*$/;
// 1 upper case letter, 1 lower case letter, one of these special characters @#$%^&

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('This field is required'),
  password: yup
    .string()
    .min(8, 'Password should be minimum 8 characters long')
    .matches(
      passwordRules,
      'The password must be mix of upper case, lower case and any of these special characters @#$%^&'
    )
    .required('This field is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('This field is required'),
});
