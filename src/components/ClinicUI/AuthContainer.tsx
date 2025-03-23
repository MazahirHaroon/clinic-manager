import { ReactNode } from 'react';

import Logo from '@components/Logo';

interface AuthContainerProps {
  title: string;
  children: ReactNode;
}

const AuthContainer = ({ title, children }: AuthContainerProps) => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-primary-light'>
      <div className='flex flex-col w-full max-w-xl px-12 pb-6 pt-1 mt-6 bg-white shadow-lg rounded-3xl'>
        <Logo className='flex justify-center mx-auto w-[50%]' />
        <h2 className='text-2xl font-semibold text-primary-dark text-center mb-4'>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
