import { UsersActionType, IUsersState } from "./types";

import actions from "./actions";
import initialState from "./state";

function usersReducer(
  state = initialState,
  action: UsersActionType
): IUsersState {
  switch (action.type) {
    case "getUsers":
      return actions.getUsers(state, action);

    default:
      throw new Error("Wrong action type in Users reducer");
  }
}

export default usersReducer;
