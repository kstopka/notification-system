interface IWindowState {
  windowHeight: number;
  windowWidth: number;
  browserHeight: number;
  browserWidth: number;
  x: number;
  y: number;
  scrolling: boolean;
}

type ChangeWindowType = Record<string, boolean | number>;

interface IWindowActions {
  changeWindow: (payload: ChangeWindowType) => void;
}

type WindowActionType = { type: "changeWindow"; payload: ChangeWindowType };

interface WindowProviderProps {
  children: React.ReactNode;
}

export type {
  IWindowState,
  ChangeWindowType,
  WindowProviderProps,
  WindowActionType,
  IWindowActions,
};
