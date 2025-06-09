import { createContext, useContext } from 'react';
import { UserValues } from '@constants/auth';

export interface UserContextType {
  user: UserValues | null;
  setUser: React.Dispatch<React.SetStateAction<UserValues | null>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};
