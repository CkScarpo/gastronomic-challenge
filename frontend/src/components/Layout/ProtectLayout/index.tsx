/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { UseAuth } from '../../../context/AuthProvider/useAuth';
import Notauthorized from '../../Notauthorized';

// import { Container } from './styles';

export function ProtectLayout({ children }: { children: JSX.Element }) {
  const auth = UseAuth();

  if (!auth.email) return <Notauthorized />;

  return children;
}
