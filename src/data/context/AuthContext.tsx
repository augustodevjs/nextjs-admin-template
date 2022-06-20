import firebase from '../../firebase/config';

import { createContext, useState } from 'react';
import { User } from '../../model/User';

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

interface AuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User>(null);

  async function loginGoogle() {
    setUser('')
  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}