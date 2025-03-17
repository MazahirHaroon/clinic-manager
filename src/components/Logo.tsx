import { Link } from 'react-router';

interface LogoProps {
  alt: string;
  src: string;
}

const logo = (props: LogoProps) => {
  return (
    <Link to='/'>
      <div className='w-sm my-0 mx-auto'>
        <img {...props} />
      </div>
    </Link>
  );
};

export default logo;
