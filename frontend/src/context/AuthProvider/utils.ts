/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import Api from '../../services/api';
import { IUser } from './types';

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('fome@ListU', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('fome@ListU');

  if (!json) return null;

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.get('allUsers');
    return request;
  } catch (error) {
    return null;
  }
}
