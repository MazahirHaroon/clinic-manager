import {
  Formik,
  Form,
  FormikHelpers,
} from 'formik';
import { loginSchema } from '../schemas';
import Input from './common/Input';
import './Signup.css';

const Signup = () => {
  interface FormValues {
    email?: string;
    password?: string;
    confirmPassword?: string;
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
        <h1>Clinic Manager</h1>
        <h2>Sign Up</h2>
        <Formik<FormValues>
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='sign-up-form'>
              <Input
                label={'Email'}
                name='email'
                placeholder='john@example.com'
                type='email'
              />
              <Input label={'Password'} name='password' type='password'>
                <ul className='password-note'>
                  <li>Password should be <strong>at least 8 characters long</strong></li>
                  <li>
                    Password must include a mix of:
                    <ul className="nested-list">
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
              <button
                className='submit-button'
                disabled={isSubmitting}
                type='submit'
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
