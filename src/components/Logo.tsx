import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to='/'>
      <div className='flex justify-center'>
        <img
          className='max-w-[50%]'
          src={'public/clinic-manager-logo-and-heading.png'}
          alt={'Clinic Manager'}
        />
      </div>
    </Link>
  );
};

export default Logo;
