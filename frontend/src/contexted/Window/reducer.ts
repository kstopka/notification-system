import { IWindowState, WindowActionType } from "./types";

import actions from "./actions";
import initialState from "./state";

function windowReducer(
  state = initialState,
  action: WindowActionType
): IWindowState {
  switch (action.type) {
    case "changeWindow":
      return actions.changeWindow(state, action);
    default:
      throw new Error("Wrong action type in window reducer");
  }
}

export default windowReducer;
