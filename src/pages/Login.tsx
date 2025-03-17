import { Formik, Form, FormikHelpers } from 'formik';
import { Link } from 'react-router';
import { loginSchema } from '@utils/schemas';

import AuthForm from 'src/components/AuthFormContainer';
import { Input, PrimaryButton } from 'src/components/ClinicUI';

import { LoginFormValues } from '@constants/auth';
import { handleLogin } from '@utils/auth';

const Login = () => {
  const handleSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    try {
      const userDetails = await handleLogin(values);
      // Next step use userDetail to show the Dashboard
      actions.resetForm();
    } catch (error) {
      const errorSource = 'Login Component :: handleSubmit()';
      if (error instanceof Error) {
        throw new Error(`${errorSource} ${error.message}`);
      } else {
        throw new Error(errorSource);
      }
    }
  };

  return (
    <AuthForm title={'Login'}>
      <Formik<LoginFormValues>
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form className='flex flex-col space-y-4'>
            <Input
              label='Email'
              name='email'
              placeholder='ayisha@example.com'
              type='email'
            />

            <Input label='Password' name='password' type='password' />

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
    </AuthForm>
  );
};

export default Login;
