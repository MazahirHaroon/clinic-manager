import { Link } from 'react-router';

import Logo from '@components/Logo';
import { PrimaryButton } from 'src/components/ClinicUI';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-center bg-gray-100'>
      <div className='w-2/5 max-w-xs mb-6'>
        <Logo src='/clinic-manager-logo-and-heading.png' />
      </div>

      <h1 className='text-6xl font-bold text-primary-dark mb-2'>404</h1>

      <p className='text-xl text-primary-dark mb-6'>
        {"Oops! The page you're looking for doesn't exist."}
      </p>

      <Link to='/'>
        <PrimaryButton content={"Let's Go Home"} />
      </Link>
    </div>
  );
};

export default NotFound;
