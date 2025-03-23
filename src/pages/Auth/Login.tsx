import { Formik, Form, FormikHelpers } from 'formik';
import { Link } from 'react-router';
import { loginSchema } from '@utils/schemas';

import { Input, PrimaryButton, AuthContainer } from '@clinic-ui';

import { useLogin } from 'src/hooks/useLogin';

import { LoginFormValues, ERROR_MESSAGE, AppwriteError } from '@constants/auth';

const Login = () => {
  const { handleLogin } = useLogin();

  const handleSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    try {
      await handleLogin(values);
      actions.resetForm();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        const errorMessage = ERROR_MESSAGE[(error as AppwriteError).type]
          ? ERROR_MESSAGE[(error as AppwriteError).type]
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
    <AuthContainer title={'Login'}>
      <Formik<LoginFormValues>
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, status, isSubmitting }) => (
          <Form className='flex flex-col space-y-4'>
            <Input
              label='Email'
              name='email'
              placeholder='ayisha@example.com'
              type='email'
            />

            <Input label='Password' name='password' type='password' />

            {status && (
              <p className='text-red-500 text-sm font-medium'>{status}</p>
            )}

            <PrimaryButton
              content='Login'
              disabled={isSubmitting || Object.keys(errors).length > 0}
              type='submit'
            />
            <p>
              {'Do not have an account? '}
              <Link to='/signup'>
                <span className='font-bold underline'>Sign Up</span>
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default Login;
