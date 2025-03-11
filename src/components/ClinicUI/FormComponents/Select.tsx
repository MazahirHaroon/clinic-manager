import { useField } from 'formik';
import { ReactNode } from 'react';

interface SelectProps {
  label: string;
  name: string;
  placeholder?: string;
  children?: ReactNode;
  notes?: ReactNode;
}

const Select = ({ label, notes, ...props }: SelectProps) => {
  const [field, meta] = useField(props);

  return (
    <div className='flex flex-col'>
      <label className='text-primary-dark font-medium mb-1'>{label}</label>
      <select
        className={`w-full px-4 py-2 border rounded-md text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className='text-red-500 text-sm mt-1'>{meta.error}</p>
      ) : null}
      {notes}
    </div>
  );
};

export default Select;
