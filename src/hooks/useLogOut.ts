import { useNavigate } from 'react-router';

import { authService } from '@appwrite';

export const useLogOut = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      if (currentUser) {
        await authService.logOut();
      }
      void navigate('/welcome');
    } catch (error) {
      const errorSource = 'Hook ::  useLogOut :: handleLogout()';
      if (error instanceof Error) {
        throw new Error(`${errorSource} :: ${error.message}`);
      } else {
        throw new Error(errorSource);
      }
    }
  };
  return { handleLogout };
};
