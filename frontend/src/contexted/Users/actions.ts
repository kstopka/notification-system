import initialState from "./state";
import { IProviders, IUser, IUsersState } from "./types";

class UsersActions {
  getUsers = (state: IUsersState, { payload }: { payload: IUser[] }) => {
    const { users, admins } = payload.reduce((state, user) => {
      if (user.permissions === "user") {
        return {
          ...state,
          users: [...state.users, user],
        };
      } else if (user.permissions === "admin") {
        return {
          ...state,
          admins: [...state.admins, user],
        };
      }
      return state;
    }, initialState);

    return {
      ...state,
      users,
      admins,
    };
  };

  getProviders = (
    state: IUsersState,
    { payload }: { payload: IProviders[] }
  ) => {
    return {
      ...state,
      providers: payload,
    };
  };
}

const actions = new UsersActions();
export default actions;
