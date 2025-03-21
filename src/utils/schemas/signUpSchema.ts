import * as yup from 'yup';

import { DEPARTMENT_LIST } from 'src/constants/common';

const upperCaseRule: RegExp = /^(?=.*[A-Z]).*$/;
const lowerCaseRule: RegExp = /^(?=.*[a-z]).*$/;
const specialCharacterRule: RegExp = /^(?=.*[!@#$%^&]).*$/;

const departmentList: string[] = DEPARTMENT_LIST.filter(
  (value) => value.key !== 0
).map(({ value }) => value);

export const signUpSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  department: yup
    .string()
    .oneOf(departmentList, 'Please enter one of the choices')
    .required('Required'),
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
      'The password must contain at least one of these special characters !@#$%^&'
    )
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Required'),
  acceptedTos: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service'),
});
