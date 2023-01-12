/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

export interface IUser {
  email?: string;
  id?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
