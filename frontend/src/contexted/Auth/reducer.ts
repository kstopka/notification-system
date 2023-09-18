import actions from "./actions";
import initialState from "./state";
import { AuthActionType, IAuthState } from "./types";

function authReducer(state = initialState, action: AuthActionType): IAuthState {
  switch (action.type) {
    case "logIn":
      return actions.logIn(state, action);
    case "logOut":
      return actions.logOut();
    case "loadAuth":
      return actions.loadAuth(state, action);
    case "setAuthBusy":
      return actions.setAuthBusy(state, action);
    // case "setAccountDetails":
    //   return actions.setAccountDetails(state, action);

    default:
      throw new Error("Wrong action type in app reducer");
  }
}
export default authReducer;
