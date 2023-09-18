import { IWindowState } from "./types";

import React from "react";

import initialState from "./state";

const WindowCtx = React.createContext<IWindowState>({
  ...initialState,
});

export default WindowCtx;
