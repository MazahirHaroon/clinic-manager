import { useField } from 'formik';
import { ReactNode } from 'react';
import "./index.css";

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
        <div className='input-container'>
            <label className='signup-label' htmlFor='password'>
                {label}
            </label>
            <input
                className={`signup-input ${meta.touched && meta.error ? 'input-error' : ''
                    }`}
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <p className='error-message'>{meta.error}</p>
            ) : null}
            {children}
        </div>
    );
};

export default Input;
