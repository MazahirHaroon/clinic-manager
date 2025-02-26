import {
  Formik,
  Form,
  FormikHelpers,
} from 'formik';

import { loginSchema } from '../../schemas/loginSchema';

import Logo from "../common/Logo";
import Input from '../common/Input';
import Select from '../common/Select';
import PrimaryButton from '../common/Button';

import "./index.css"

import { HELP_EMAIL, DEPARTMENT_LIST } from "../../constants";

const Signup = () => {
  interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    password: string;
    confirmPassword: string;
    acceptedTos: boolean;
  }

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log('submitted: ', values, actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <Logo src={"../../../public/clinic-manager-logo-and-heading.png"} alt={"Clinic Manager"} />
        <h2>Sign Up</h2>
        <Formik<FormValues>
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            department: '',
            password: '',
            confirmPassword: '',
            acceptedTos: false,
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='sign-up-form'>
              <Input
                label={'First Name'}
                name='firstName'
                placeholder='Ayisha'
                type='text'
              />
              <Input
                label={'Last Name'}
                name='lastName'
                placeholder='Nishara'
                type='text'
              />
              <Input
                label={'Email'}
                name='email'
                placeholder='ayisha@example.com'
                type='email'
              />
              <Select
                label={'Department'}
                name='department'
                placeholder='Please select a department'
                notes={<div className='note'><a href={`mailto:${HELP_EMAIL}?subject="Add Department"`}>Contact us if your department is not present in the list</a></div>}
              >
                {DEPARTMENT_LIST.map(({ key, value, label }) => <option key={key} value={value}>{label}</option>)}
              </Select>
              <Input label={'Password'} name='password' type='password'>
                <ul className='note note-list'>
                  <li>Password should be <strong>at least 8 characters long</strong></li>
                  <li>
                    Password must include a mix of:
                    <ul className="note-list">
                      <li><strong>Lowercase (a-z)</strong></li>
                      <li><strong>Uppercase (A-Z)</strong></li>
                      <li><strong>At least one special character (@#$%^&)</strong></li>
                    </ul>
                  </li>
                </ul>
              </Input>
              <Input
                label={'Confirm Password'}
                name='confirmPassword'
                type='password'
              />
              <PrimaryButton
                content="Submit"
                disabled={isSubmitting}
                type='submit'
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
