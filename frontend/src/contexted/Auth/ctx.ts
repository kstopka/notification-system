import React from "react";

import initialState from "./state";
import { IAuthContext } from "./types";

const AuthCtx = React.createContext<IAuthContext>({
  state: { ...initialState },
  dispatch: () => null,
});

export default AuthCtx;
