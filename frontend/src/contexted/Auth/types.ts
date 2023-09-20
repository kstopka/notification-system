import { ReactNode, Dispatch } from "react";

export interface IAuthState {
  isBusy: boolean;
  loggedIn: boolean;
  id: number;
  email: string;
  surname: string;
  name: string;
}

export type LoadAuthPayloadType = { auth: IAuthState };

export interface IAuthActions {
  logIn: (payload: any) => void;
  logOut: () => void;
  loadAuth: (payload: LoadAuthPayloadType) => void;
  setAuthBusy: (payload: { isBusy: boolean }) => void;
  // setAccountDetails: (payload: Record<string, string>) => void;
}

export type AuthActionType =
  | { type: "logIn"; payload: any }
  | { type: "logOut" }
  | { type: "loadAuth"; payload: LoadAuthPayloadType }
  | { type: "setAuthBusy"; payload: { isBusy: boolean } };
// | { type: "setAccountDetails"; payload: Record<string, string> };

export interface AuthProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<AuthActionType>) => void;
}

export interface IAuthContext {
  state: IAuthState;
  dispatch: Dispatch<AuthActionType>;
}
