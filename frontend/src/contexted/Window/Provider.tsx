/* eslint-disable react-hooks/exhaustive-deps */
import { WindowProviderProps } from "./types";
import throttle from "lodash.throttle";

import React, { useReducer, useCallback, useLayoutEffect } from "react";

import WindowCtx from "./ctx";
import reducer from "./reducer";
import initialState from "./state";

const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onScroll = useCallback(
    throttle(() => {
      dispatch({
        type: "changeWindow",
        payload: {
          y: window.scrollY,
          x: window.scrollX,
          scrolling: true,
        },
      });
      const timer = setTimeout(() => {
        clearTimeout(timer);
        if (state.scrolling === true) {
          dispatch({
            type: "changeWindow",
            payload: {
              scrolling: false,
            },
          });
        }
      }, 1000);
    }, 166),
    []
  );

  const onResize = useCallback(
    throttle(() => {
      dispatch({
        type: "changeWindow",
        payload: {
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth,
          browserHeight: window.outerHeight,
          browserWidth: window.outerWidth,
        },
      });
    }, 166),
    [
      // window.innerHeight,
      // window.innerWidth,
      // window.outerHeight,
      // window.outerWidth,
    ]
  );

  useLayoutEffect(() => {
    window.onscroll = onScroll;
    window.onresize = onResize;
  }, []);

  // useEffect(() => {
  //   onStateChange(state)
  // }, [state])

  return (
    <WindowCtx.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </WindowCtx.Provider>
  );
};

export { WindowProvider, WindowCtx };
