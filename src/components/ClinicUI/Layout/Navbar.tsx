import { Link, NavLink } from 'react-router';
import Logo from '@components/Logo';

const Navbar = () => {
  return (
    <nav className='flex justify-center flex-col lg:flex-row lg:justify-between items-center min-h-24 flex-wrap px-10 pr-10 bg-light-background'>
      <Logo src={'heading-clinic-manager.png'} className='w-48' />
      <div className='flex gap-6 text-base'>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? `text-primary-dark` : `text-primary-light`
            } hover:font-bold`
          }
          to='/dashboard'
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? `text-primary-dark` : `text-primary-light`
            } hover:font-bold`
          }
          to='/profile'
        >
          Profile
        </NavLink>
        <div className='text-primary-light hover:font-bold'>Logout</div>
      </div>
    </nav>
  );
};

export default Navbar;
