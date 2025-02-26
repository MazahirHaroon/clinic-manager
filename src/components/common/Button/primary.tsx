import { ReactNode } from 'react';
import "./index.css";

interface PrimaryButtonProps {
    type: "submit" | "reset" | "button";
    content: string | ReactNode
    disabled: boolean;
}

const PrimaryButton = ({ type, content, ...props }: PrimaryButtonProps) => (
    <>
        <button className='submit-button' type={type} {...props}>{JSON.stringify(props.disabled)}</button>
    </>
);

export default PrimaryButton;
