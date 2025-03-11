import { useField } from 'formik';
import { ReactNode } from 'react';

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  children?: ReactNode;
}

const Input = ({ label, children, ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className='flex flex-col'>
      <label className='text-primary-dark font-medium mb-1'>{label}</label>
      <input
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className='text-red-500 text-sm mt-1'>{meta.error}</p>
      ) : null}
      {children}
    </div>
  );
};

export default Input;
