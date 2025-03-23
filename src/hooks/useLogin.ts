import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { authService, databaseService } from '@appwrite';
import UserContext from 'src/context/UserContext';

import { LoginFormValues, UserValues } from '@constants/auth';

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async ({ email, password }: LoginFormValues) => {
    try {
      const userAccount = await authService.login(email, password);
      const userDocument = await databaseService.getUser(userAccount.userId);
      const userDetails: UserValues = {
        firstName: userDocument.firstName as string,
        lastName: userDocument.lastName as string,
        email: userDocument.email as string,
        department: userDocument.department as string,
      };
      setUser(userDetails);
      void navigate('/');
    } catch (error) {
      const errorSource = 'Utils ::  Auth :: handleLogin()';
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error(errorSource);
      }
    }
  };
  return { handleLogin };
};
