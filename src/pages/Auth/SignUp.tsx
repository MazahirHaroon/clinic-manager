import { Formik, Form, FormikHelpers } from 'formik';
import { signUpSchema } from '@utils/schemas';

import {
  AuthContainer,
  CheckBox,
  Input,
  PrimaryButton,
  Select,
} from '@clinic-ui';

import { useSignup } from 'src/hooks/useSignup';
import { HELP_EMAIL, DEPARTMENT_LIST } from '@constants/common';
import {
  SignUpFormValues,
  ERROR_MESSAGE,
  AppwriteError,
} from '@constants/auth';
import { Link } from 'react-router';

const Signup = () => {
  const { handleSignup } = useSignup();
  const handleSubmit = async (
    values: SignUpFormValues,
    actions: FormikHelpers<SignUpFormValues>
  ) => {
    try {
      await handleSignup(values);
      actions.resetForm();
    } catch (error) {
      if (error instanceof Error) {
        const errorType = (error as AppwriteError).type;
        const errorMessage = ERROR_MESSAGE[errorType]
          ? ERROR_MESSAGE[errorType]
          : 'Something went wrong';
        actions.setStatus(errorMessage);
      } else {
        actions.setStatus('Something went wrong');
      }
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <AuthContainer title={'Sign Up'}>
      <Formik<SignUpFormValues>
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          department: '',
          password: '',
          confirmPassword: '',
          acceptedTos: false,
        }}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, status, isSubmitting }) => (
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
                    className='text-primary-dark underline'
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
              <ul className='text-sm text-primary-dark mt-1 space-y-1'>
                <li>
                  Password should be <strong>at least 8 characters long</strong>
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
                      <strong>At least one special character (!@#$%^&)</strong>
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

            {status && (
              <p className='text-red-500 text-sm font-medium'>{status}</p>
            )}

            <PrimaryButton
              content='Submit'
              disabled={isSubmitting || Object.keys(errors).length > 0}
              type='submit'
            />

            <p>
              {'Already have an account? '}
              <Link to='/login'>
                <span className='font-bold underline'>Log In</span>
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default Signup;
