import { ReactNode } from 'react';
import "./index.css";

interface PrimaryButtonProps {
    content: string | ReactNode
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
}

const PrimaryButton = ({ type = "button", content, ...props }: PrimaryButtonProps) => (
    <>
        <button className='submit-button' type={type} {...props}>{content}</button>
    </>
);

export default PrimaryButton;
