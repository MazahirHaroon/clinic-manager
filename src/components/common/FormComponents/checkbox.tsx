import { useField } from 'formik';
// import "./index.css";

interface InputProps {
    label: string;
    name: string;
}

const CheckBox = ({ label, ...props }: InputProps) => {
    const [field, meta] = useField(props);

    return (
        <div className='input-container'>
            <input
                type="checkbox"
                {...field}
                {...props}
            />
            <span>{label}</span>
            {meta.touched && meta.error ? (
                <p className='error-message'>{meta.error}</p>
            ) : null}
        </div>
    );
};

export default CheckBox;
