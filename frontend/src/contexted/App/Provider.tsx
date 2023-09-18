/* eslint-disable react-hooks/exhaustive-deps */
import { AppProviderProps } from "./types";

import React, { useReducer, useEffect, useLayoutEffect } from "react";

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

  useEffect(() => {
    console.log("AppProvider STATE: ", state);
  }, [state]);

  // useEffect(() => {
  //   console.log("reload");
  //   if (state.reload) {
  //     getDatabase();
  //   }
  //   dispatch({
  //     type: "reload",
  //     payload: false,
  //   });
  // }, [state.reload]);

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
