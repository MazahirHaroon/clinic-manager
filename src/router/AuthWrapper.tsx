import { Outlet } from 'react-router';
import UserContextProvider from 'src/context/UserContextProvider';

const AuthWrapper = () => {
  return (
    <UserContextProvider>
      <Outlet />
    </UserContextProvider>
  );
};

export default AuthWrapper;
