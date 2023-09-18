import { ChangeWindowType, IWindowState } from "./types";

class WindowActions {
  changeWindow = (
    state: IWindowState,
    { payload }: { payload: ChangeWindowType }
  ) => ({
    ...state,
    ...payload,
  });
}

const actions = new WindowActions();
export default actions;
