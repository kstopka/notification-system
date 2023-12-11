import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    layout: LayouObject;
    breakpoints: IBreakpoints;
    colors: {
      primary: "#F7F7FF";
      secondary: "#1c3942";
      tertiary: "#0E4EB4";

      neutral: "#6C8193";
      error: "#FF2B00";
      warning: "#FFAB00";
      success: "#40BF89";
      white: "#FFFFFF";
      black: "#222222";
      shades: {
        asHeader: "#222222";
      };
    };

    fonts: {
      family: FontFamilyObject;
      size: FontSizeObject;
      // size_md: FontSizeObject;
    };
    // shadows: ShadowsObject;
    transitions: TransitionsObject;
  }
}

type ColorObject = {
  [key: string | number]: string;
};

type ColorString = string;

type FontFamilyObject = {
  main: string;
  secondary?: string;
  third?: string;
};

type FontSizeObject = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5?: string;
  h6?: string;
  p: string;
  small: string;
  body_20?: string;
};

type TransitionsObject = {
  standard: string;
  time: string;
  type: string;
};

type ShadowsObject = {
  light: string;
  medium: string;
  big: string;
};

type LayouObject = {
  maxWidth: string;
  paddingX: string;
  paddingXMobile: string;
};

interface IBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}
