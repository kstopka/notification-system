/* eslint-disable react-hooks/exhaustive-deps */
import { IProviders, IUser, UsersProviderProps } from "./types";

import React, { useReducer, useEffect, useLayoutEffect, useState } from "react";

import UsersCtx from "./ctx";
import reducer from "./reducer";
import initialState from "./state";
import { AuthCtx, useContextState } from "..";
import { IAuthState } from "../Auth/types";
import Api from "../../api/API";

const UsersProvider: React.FC<UsersProviderProps> = ({
  children,
  onLoad = () => false,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loggedIn } = useContextState<IAuthState>(AuthCtx, ["loggedIn"]);

  useLayoutEffect(() => {
    onLoad(dispatch);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      try {
        const getDataUsers = async () => {
          try {
            const users = await Api.getUsers();
            dispatch({
              type: "getUsers",
              payload: users.data as IUser[],
            });
          } catch (error) {}
        };

        getDataUsers();

        const getDataProviders = async () => {
          try {
            const providers = await Api.getProviders();
            dispatch({
              type: "getProviders",
              payload: providers.data as IProviders[],
            });
          } catch (error) {}
        };

        getDataProviders();
      } catch (error) {}
    }
  }, [loggedIn]);

  useEffect(() => {
    console.log("UsersProvider STATE: ", state);
  }, [state]);

  return (
    <UsersCtx.Provider
      value={{
        state: { ...state },
        dispatch,
      }}
    >
      {children}
    </UsersCtx.Provider>
  );
};

export { UsersProvider, UsersCtx };
