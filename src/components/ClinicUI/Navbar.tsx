import { Link } from 'react-router';
import Logo from '@components/Logo';
const Navbar = () => {
  return (
    <nav className='flex justify-center flex-col lg:flex-row lg:justify-between items-center min-h-24 flex-wrap px-10 pr-10 bg-light-background'>
      <Logo src={'heading-clinic-manager.png'} className='w-48' />
      <div className='flex gap-6 text-base'>
        <Link
          className='text-primary-light hover:text-primary-dark'
          to='/dashboard'
        >
          Dashboard
        </Link>
        <Link
          className='text-primary-light hover:text-primary-dark'
          to='/profile'
        >
          Profile
        </Link>
        <Link className='text-primary-light hover:text-primary-dark' to='/'>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
