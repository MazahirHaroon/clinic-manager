import { Link } from 'react-router';

import Logo from '@components/Logo';
import { PrimaryButton } from 'src/components/ClinicUI';

import './index.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='content'>
        <Logo
          src={'public/clinic-manager-logo-and-heading.png'}
          alt={'Clinic Manager'}
        />
        <h1 className='home-title'>Welcome to Clinic Manager</h1>
        <p className='home-subtitle'>
          Your digital assistant for seamless clinic management.
        </p>
        <div className='home-buttons'>
          <Link to='./Signup'>
            <PrimaryButton content='Sign Up' type='button' />
          </Link>
          <div>
            <PrimaryButton content='Login' type='button' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
