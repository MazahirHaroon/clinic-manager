import * as yup from 'yup';

import { DEPARTMENT_LIST } from '../constants';

const upperCaseRule: RegExp = /^(?=.*[A-Z]).*$/;
const lowerCaseRule: RegExp = /^(?=.*[a-z]).*$/;
const specialCharacterRule: RegExp = /^(?=.*[@#$%^&]).*$/;

const departmentList = DEPARTMENT_LIST.filter((value => value.key !== 0)).map(({label}) => label);
// 1 upper case letter, 1 lower case letter, one of these special characters @#$%^&

export const loginSchema = yup.object().shape({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('This field is required'),
  department: yup
    .string()
    .oneOf(departmentList, 'Please enter one of the choices')
    .required('This field is required'),
  password: yup
    .string()
    .min(8, 'Password should be minimum 8 characters long')
    .matches(
      upperCaseRule,
      'The password must contain at least one upper case letter'
    )
    .matches(
      lowerCaseRule,
      'The password must contain at least one lower case letter'
    )
    .matches(
      specialCharacterRule,
      'The password must contain at least one of these special characters @#$%^&'
    )
    .required('This field is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('This field is required'),
  acceptedTos: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service'),
});
