import { ReactNode } from 'react';
import "./index.css";

interface ButtonProps {
    type: "submit" | "reset" | "button";
    content?: string | ReactNode
    disabled?: boolean;
}

const Button = ({ type, content, ...props }: ButtonProps) => (
    <>
        <button className='submit-button' type={type} {...props}>{content}</button>
    </>

);

export default Button;
