import React from 'react';
import { Link } from 'react-router';

interface LogoProps {
  className?: React.ComponentProps<'div'>['className'];
  src?: string;
  redirectTo?: string;
}

const Logo = ({
  className,
  src = 'public/clinic-manager-logo-and-heading.png',
  redirectTo = '',
}: LogoProps) => {
  return (
    <Link to={redirectTo}>
      <div className={className}>
        <img src={src} alt={'Clinic Manager'} />
      </div>
    </Link>
  );
};

export default Logo;
