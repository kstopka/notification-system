import { AppActionType, IAppState } from "./types";

import actions from "./actions";
import initialState from "./state";

function appReducer(state = initialState, action: AppActionType): IAppState {
  switch (action.type) {
    case "loaded":
      return actions.loaded(state);
    case "loading":
      return actions.loading(state);
    case "setAlert":
      return actions.setAlert(state, action);
    default:
      throw new Error("Wrong action type in app reducer");
  }
}

export default appReducer;
