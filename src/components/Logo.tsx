import React from 'react';
import { Link } from 'react-router';

interface LogoProps {
  className?: React.ComponentProps<'div'>['className'];
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to='/'>
      <div
        className={`flex justify-center mx-auto ${className ? className : ''}`}
      >
        <img
          src={'public/clinic-manager-logo-and-heading.png'}
          alt={'Clinic Manager'}
        />
      </div>
    </Link>
  );
};

export default Logo;
