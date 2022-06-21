import Router from "next/router";

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

async function normalizedUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
    token,
  }
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User>(null);

  async function loginGoogle() {
    const response = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );

    if (response.user?.email) {
      const user = await normalizedUser(response.user);
      setUser(user);
      Router.push('/');
    }
  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}