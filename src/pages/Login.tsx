import { Formik, Form } from 'formik';
import { loginSchema } from '@utils/schemas';

import AuthForm from 'src/components/AuthFormContainer';
import { Input, PrimaryButton } from 'src/components/ClinicUI';

import { LoginFormValues } from '@constants/auth';

const Login = () => {
  const handleSubmit = () => {
    try {
      // Logic to be added
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
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default Login;
