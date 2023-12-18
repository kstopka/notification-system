/* eslint-disable react-hooks/exhaustive-deps */
import { AppProviderProps } from "./types";

import React, { useReducer, useLayoutEffect } from "react";

import AppCtx from "./ctx";
import reducer from "./reducer";
import initialState from "./state";

const AppProvider: React.FC<AppProviderProps> = ({
  children,
  onLoad = () => false,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useLayoutEffect(() => {
    onLoad(dispatch);
  }, []);

  return (
    <AppCtx.Provider
      value={{
        state: { ...state },
        dispatch,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export { AppProvider, AppCtx };
