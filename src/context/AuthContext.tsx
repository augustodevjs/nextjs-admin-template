import { createContext, useEffect, useState } from 'react';

import Router from "next/router";
import Cookies from 'js-cookie';

import firebase from '../firebase/config';
import { User } from '../model/User';

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  logout?: () => Promise<void>;
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

function manageCookie(logged: boolean) {
  if (logged) {
    Cookies.set('admin-template-cod3r-auth', logged, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-cod3r-auth');
  }
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProvider) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  async function configureSession(userFirebase) {
    if (userFirebase?.email) {
      const user = await normalizedUser(userFirebase);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const response = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );

      configureSession(response.user);
      Router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configureSession(null);
      Router.push('/autenticacao');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configureSession);
      return () => cancel();
    } else {
      setLoading(false)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginGoogle, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}