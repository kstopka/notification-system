import { IUsersContext } from "./types";

import React from "react";

import initialState from "./state";

const UsersCtx = React.createContext<IUsersContext>({
  state: { ...initialState },
  dispatch: () => null,
});

export default UsersCtx;
