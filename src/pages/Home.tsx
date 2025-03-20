import { Link } from 'react-router';
import Logo from '@components/Logo';
import { PrimaryButton } from '@components/ClinicUI';

const Home = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-primary-light'>
      <div className='flex flex-col items-center text-center bg-white p-12 rounded-2xl shadow-lg max-w-md'>
        <Logo />
        <h1 className='text-3xl font-bold text-primary-dark mt-1 mb-2'>
          Welcome to Clinic Manager
        </h1>
        <p className='text-lg text-secondary-dark mb-5'>
          Your digital assistant for seamless clinic management.
        </p>
        <div className='flex gap-6'>
          <Link to='./signup'>
            <PrimaryButton content='Sign Up' type='button' />
          </Link>
          <Link to='./login'>
            <PrimaryButton content='Login' type='button' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
