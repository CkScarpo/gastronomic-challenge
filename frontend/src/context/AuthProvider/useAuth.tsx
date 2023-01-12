/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { AuthContext } from '.';

export const UseAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
