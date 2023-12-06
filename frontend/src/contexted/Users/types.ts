import { ReactNode, Dispatch } from "react";

export interface IUser {
  email: string;
  name: string;
  password: string;
  permissions: string;
  surname: string;
  user_id: number;
}

export interface IUsersState {
  users: IUser[];
  admins: IUser[];
}

export type UsersActionType = { type: "getUsers"; payload: IUser[] };

export interface IUsersActions {
  getUsers: () => void;
}

export interface UsersProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<UsersActionType>) => void;
}

export interface IUsersContext {
  state: IUsersState;
  dispatch: Dispatch<UsersActionType>;
}
