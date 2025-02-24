import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FieldInputProps,
  FieldMetaProps,
} from 'formik';
import { loginSchema } from '../schemas';
import './Signup.css';

const Signup = () => {
  interface FormValues {
    email?: string;
    password?: string;
    confirmPassword?: string;
  }

  const onSubmit = async (
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
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='sign-up-form'>
              <Field name='email'>
                {({
                  field,
                  meta,
                }: {
                  field: FieldInputProps<string>;
                  meta: FieldMetaProps<string>;
                }) => (
                  <div className='input-container'>
                    <label className='signup-label' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      className={`signup-input ${meta.touched && meta.error ? 'input-error' : ''
                        }`}
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <p className='error-message'>{meta.error}</p>
                    )}
                  </div>
                )}
              </Field>

              <Field name='password'>
                {({
                  field,
                  meta,
                }: {
                  field: FieldInputProps<string>;
                  meta: FieldMetaProps<string>;
                }) => (
                  <div className='input-container'>
                    <label className='signup-label' htmlFor='password'>
                      Password
                    </label>
                    <input
                      type='password'
                      className={`signup-input ${meta.touched && meta.error ? 'input-error' : ''
                        }`}
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <p className='error-message'>{meta.error}</p>
                    )}
                  </div>
                )}
              </Field>
              <Field name='confirmPassword'>
                {({
                  field,
                  meta,
                }: {
                  field: FieldInputProps<string>;
                  meta: FieldMetaProps<string>;
                }) => (
                  <div className='input-container'>
                    <label className='signup-label' htmlFor='confirmPassword'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      className={`signup-input ${meta.touched && meta.error ? 'input-error' : ''
                        }`}
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <p className='error-message'>{meta.error}</p>
                    )}
                  </div>
                )}
              </Field>
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
