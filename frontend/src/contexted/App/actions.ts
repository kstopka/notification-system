import { IAppState } from "./types";

class AppActions {
  loaded = (state: IAppState) => ({
    ...state,
    imBusy: false,
  });

  loading = (state: IAppState) => ({
    ...state,
    imBusy: true,
  });

  reload = (state: IAppState, payload: boolean) => ({
    ...state,
    reload: payload,
  });
}

const actions = new AppActions();
export default actions;
