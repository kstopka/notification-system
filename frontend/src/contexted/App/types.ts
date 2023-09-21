import { ReactNode, Dispatch } from "react";
import { IAlertStatus } from "../../components/atoms/Alert/types";

export interface IAlert {
  isAlertVisible: boolean;
  status: IAlertStatus;
  message: string;
}
export interface IAppState {
  imBusy: boolean;
  isModalOpen: boolean;
  alert: IAlert;
}

export type AppActionType =
  | { type: "loaded" }
  | { type: "loading" }
  | { type: "setAlert"; payload: IAlert };

export interface IAppActions {
  loaded: () => void;
  loading: () => void;
  setAlert: (payload: IAlert) => void;
}

export interface AppProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<AppActionType>) => void;
}

export interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<AppActionType>;
}
