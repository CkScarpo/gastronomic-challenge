/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import {
  getUserLocalStorage,
  LoginRequest,
  setUserLocalStorage,
} from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const userStorage = getUserLocalStorage();

    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const resp = response?.data.find((e: any) => (e.email === email));

    const payload = { id: resp.id, email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
