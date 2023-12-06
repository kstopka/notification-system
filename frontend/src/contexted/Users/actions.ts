import { IUser, IUsersState } from "./types";

function categorizeUsers(users: IUser[]): IUsersState {
  const initialState: IUsersState = {
    users: [],
    admins: [],
  };

  const categorizedUsers = users.reduce((state, user) => {
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

  return categorizedUsers;
}

class UsersActions {
  getUsers = (state: IUsersState, { payload }: { payload: IUser[] }) => {
    const initialState: IUsersState = {
      users: [],
      admins: [],
    };

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
}

const actions = new UsersActions();
export default actions;
