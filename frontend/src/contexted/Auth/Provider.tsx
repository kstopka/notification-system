/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";

import { useReducer, useEffect, useState, useLayoutEffect } from "react";

import AuthCtx from "./ctx";
import reducer from "./reducer";
import initialState from "./state";
import { AuthProviderProps } from "./types";

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  onLoad = () => false,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [firstRender, setFirstRender] = useState(true);

  useLayoutEffect(() => {
    onLoad(dispatch);
  }, []);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      setFirstRender(false);
      onLoad(dispatch);
      return;
    }

    dispatch({
      type: "setAuthBusy",
      payload: {
        isBusy: true,
      },
    });

    // AuthApi.validateToken(token)
    //   .then(() => {
    //     const auth = localStorage.getItem("AuthCtx");
    //     if (auth) {
    //       const parsedAuth = JSON.parse(auth);
    //       dispatch({
    //         type: "loadAuth",
    //         payload: {
    //           auth: parsedAuth,
    //         },
    //       });
    //       dispatch({
    //         type: "setAuthBusy",
    //         payload: { isBusy: false },
    //       });
    //     }
    //   })
    //   .catch(() => {
    //     dispatch({
    //       type: "logOut",
    //     });
    //     dispatch({
    //       type: "setAuthBusy",
    //       payload: {
    //         isBusy: false,
    //       },
    //     });
    //   })
    //   .finally(() => {
    //     setFirstRender(false);
    //     onLoad(dispatch);
    //     dispatch({
    //       type: "setAuthBusy",
    //       payload: {
    //         isBusy: false,
    //       },
    //     });
    //   });
  }, []);

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem("AuthCtx", JSON.stringify(state));
    }
  }, [state, firstRender]);

  useEffect(() => {
    console.log("AuthProvider STATE: ", state);
  }, [state]);

  return (
    <AuthCtx.Provider
      value={{
        state: { ...state },
        dispatch,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

export { AuthProvider, AuthCtx };
