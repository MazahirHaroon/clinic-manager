import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { authService, databaseService } from '@appwrite';
import UserContext from 'src/context/UserContext';
import { omitKeyValues } from '@utils/common';

import { SignUpFormValues, UserValues } from '@constants/auth';

export const useSignup = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const handleSignup = async (values: SignUpFormValues) => {
    try {
      const { email, password, firstName, lastName } = values;
      const userAccount = await authService.createAccount(
        email,
        password,
        `${firstName} ${lastName}`
      );
      const userProps = omitKeyValues(
        ['acceptedTos', 'password', 'confirmPassword'],
        values
      );
      const userDocument = await databaseService.createUser(
        userAccount.userId,
        userProps
      );
      const userDetails: UserValues = {
        firstName: userDocument.firstName as string,
        lastName: userDocument.lastName as string,
        email: userDocument.email as string,
        department: userDocument.department as string,
      };
      setUser(userDetails);
      void navigate('/');
    } catch (error) {
      const errorSource = 'Utils ::  Auth :: handleSignup()';
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error(errorSource);
      }
    }
  };
  return { handleSignup };
};
