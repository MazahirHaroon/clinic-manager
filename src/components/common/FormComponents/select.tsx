import { useField } from 'formik';
import { ReactNode } from 'react';
import "./index.css";

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
        <div className='input-container'>
            <label className='signup-label' htmlFor='password'>
                {label}
            </label>
            <select
                className={`signup-input ${meta.touched && meta.error ? 'input-error' : ''
                    }`}
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <p className='error-message'>{meta.error}</p>
            ) : null}
            {notes}
        </div>
    );
};

export default Select;
