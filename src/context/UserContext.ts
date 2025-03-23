import { createContext } from 'react';
import { UserValues } from '@constants/auth';

export interface UserContextType {
  user: UserValues | null;
  setUser: React.Dispatch<React.SetStateAction<UserValues | null>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
