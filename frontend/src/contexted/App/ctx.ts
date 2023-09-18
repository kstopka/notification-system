import { IAppContext } from "./types";

import React from "react";

import initialState from "./state";

const AppCtx = React.createContext<IAppContext>({
  state: { ...initialState },
  dispatch: () => null,
});

export default AppCtx;
