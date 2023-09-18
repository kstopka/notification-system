import { ReactNode, Dispatch } from "react";

export interface IAppState {
  imBusy: boolean;
  isModalOpen: boolean;
  reload: boolean;
}

export type AppActionType =
  | { type: "loaded" }
  | { type: "loading" }
  | { type: "reload"; payload: boolean };

export interface IAppActions {
  loaded: () => void;
  loading: () => void;
  reload: (value: boolean) => void;
}

export interface AppProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<AppActionType>) => void;
}

export interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<AppActionType>;
}
