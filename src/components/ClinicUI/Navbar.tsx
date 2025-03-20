import { Link } from 'react-router';
import Logo from '@components/Logo';
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center min-h-24 px-10 pr-30 bg-light-background'>
      <Logo src={'heading-clinic-manager.png'} className='w-48' />
      <div className='flex gap-6 text-lg'>
        <Link className='text-primary-light hover:text-primary-dark' to='/'>
          Home
        </Link>
        <Link className='text-primary-light hover:text-primary-dark' to='/'>
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
