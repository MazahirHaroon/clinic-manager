import "./index.css";

interface LogoProps {
    alt: string;
    src: string;
}

const logo = (props: LogoProps) => {
    return (
        <div className='logo-container'>
            <img {...props} className='logo' />
        </div>
    );
};

export default logo;
