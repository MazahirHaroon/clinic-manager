import { Formik, Form, FormikHelpers } from 'formik';
import { loginSchema } from '@utils/schemas';

import Logo from '@components/Logo';
import {
  CheckBox,
  Input,
  PrimaryButton,
  Select,
} from 'src/components/ClinicUI';
import { HELP_EMAIL, DEPARTMENT_LIST } from '@constants/common';

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
    <div className='flex justify-center items-center min-h-screen bg-blue-100'>
      <div className='flex flex-col w-full max-w-xl px-8 pb-6 pt-1 mt-6 bg-white shadow-lg rounded-3xl'>
        <Logo
          src={'public/clinic-manager-logo-and-heading.png'}
          alt={'Clinic Manager'}
        />
        <h2 className='text-2xl font-semibold text-(--color-primary-dark) text-center mb-4'>
          Sign Up
        </h2>

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
          {({ touched, errors, isSubmitting }) => (
            <Form className='flex flex-col space-y-4'>
              <div className='flex gap-5'>
                <Input
                  label='First Name'
                  name='firstName'
                  placeholder='Ayisha'
                  type='text'
                />
                <Input
                  label='Last Name'
                  name='lastName'
                  placeholder='Nishara'
                  type='text'
                />
              </div>

              <Input
                label='Email'
                name='email'
                placeholder='ayisha@example.com'
                type='email'
              />

              <Select
                label='Department'
                name='department'
                placeholder='Please select a department'
                notes={
                  <div className='text-sm mt-1'>
                    <a
                      href={`mailto:${HELP_EMAIL.id}?subject="${HELP_EMAIL.subject}&body=${HELP_EMAIL.body}`}
                      className='text-(--color-primary-dark) underline'
                    >
                      Contact us if your department is not present in the list
                    </a>
                  </div>
                }
              >
                {DEPARTMENT_LIST.map(({ key, value, label }) => (
                  <option key={key} value={value}>
                    {label}
                  </option>
                ))}
              </Select>

              <Input label='Password' name='password' type='password'>
                <ul className='text-sm text-(--color-primary-dark) mt-1 space-y-1'>
                  <li>
                    Password should be{' '}
                    <strong>at least 8 characters long</strong>
                  </li>
                  <li>
                    Password must include a mix of:
                    <ul className='pl-4 list-disc'>
                      <li>
                        <strong>Lowercase (a-z)</strong>
                      </li>
                      <li>
                        <strong>Uppercase (A-Z)</strong>
                      </li>
                      <li>
                        <strong>At least one special character (@#$%^&)</strong>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Input>

              <Input
                label='Confirm Password'
                name='confirmPassword'
                type='password'
              />

              <CheckBox
                label='I accept the terms of service'
                name='acceptedTos'
              />

              <PrimaryButton
                content='Submit'
                disabled={
                  isSubmitting ||
                  Object.keys(errors).length > 0 ||
                  Object.keys(touched).length > 0
                }
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
