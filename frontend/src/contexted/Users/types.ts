import { ReactNode, Dispatch } from "react";

export interface IUser {
  email: string;
  name: string;
  password: string;
  permissions: string;
  surname: string;
  user_id: number;
}
export interface IProviders {
  address: string;
  description: string;
  email: string;
  name: string;
  phone_number: string;
  provider_id: number;
}

export interface IUsersState {
  users: IUser[];
  admins: IUser[];
  providers: IProviders[];
}

export type UsersActionType =
  | { type: "getUsers"; payload: IUser[] }
  | { type: "getProviders"; payload: IProviders[] };

export interface IUsersActions {
  getUsers: () => void;
  getProviders: () => void;
}

export interface UsersProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<UsersActionType>) => void;
}

export interface IUsersContext {
  state: IUsersState;
  dispatch: Dispatch<UsersActionType>;
}
