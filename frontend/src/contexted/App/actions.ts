import { IAlert, IAppState } from "./types";

class AppActions {
  loaded = (state: IAppState) => ({
    ...state,
    imBusy: false,
  });

  loading = (state: IAppState) => ({
    ...state,
    imBusy: true,
  });

  setAlert = (state: IAppState, { payload }: { payload: IAlert }) => ({
    ...state,
    alert: payload,
  });
}

const actions = new AppActions();
export default actions;
