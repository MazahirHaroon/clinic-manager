import { Link } from 'react-router';

interface LogoProps {
  alt: string;
  src: string;
}

const logo = (props: LogoProps) => {
  return (
    <Link to='/'>
      <div className='flex justify-center'>
        <img className='max-w-[50%]' {...props} />
      </div>
    </Link>
  );
};

export default logo;
