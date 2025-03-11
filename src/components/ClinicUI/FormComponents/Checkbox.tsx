import { useField } from 'formik';

interface InputProps {
  label: string;
  name: string;
}

const CheckBox = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className='flex items-center gap-2'>
      <input
        type='checkbox'
        {...field}
        {...props}
        className='w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500'
      />
      <span className='text-primary-dark'>{label}</span>
      {meta.touched && meta.error ? (
        <p className='text-red-500 text-sm'>{meta.error}</p>
      ) : null}
    </div>
  );
};

export default CheckBox;
