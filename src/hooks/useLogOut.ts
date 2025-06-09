import { useNavigate } from 'react-router';

import { authService } from '@appwrite';
import { useUser } from 'src/context/UserContext';

export const useLogOut = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogout = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      if (currentUser) {
        await authService.logOut();
      }
      setUser(null);
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
