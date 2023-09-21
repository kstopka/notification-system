import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    layout: LayouObject;
    breakpoints: IBreakpoints;
    colors: {
      primary: {
        10: '#FAFBF8';
        20: '#F4F6EE';
        30: '#DDE4CD';
        40: '#BAC99C';
        50: '#F8DA17';
        60: '#e1c407';
        70: '#A29814';
        80: '#384224';
        90: '#2A321B';
      };
      neutral: {
        10: '#F9FAFB';
        20: '#F0F2F4';
        30: '#D3D9DF';
        40: '#A7B3BE';
        50: '#6C8193';
        60: '#566776';
        70: '#414D58';
        80: '#2B343B';
        90: '#20272C';
      };
      error: {
        10: '#FFF7F5';
        20: '#FFEAE5';
        30: '#FFBFB3';
        40: '#FF8066';
        50: '#FF2B00';
        60: '#CC2200';
        70: '#991A00';
        80: '#661100';
        90: '#4D0D00';
      };
      warning: {
        10: '#FFFCF5';
        20: '#FFF7E5';
        30: '#FFE6B3';
        40: '#FFCD66';
        50: '#FFAB00';
        60: '#CC8900';
        70: '#996700';
        80: '#664400';
        90: '#4D3300';
      };
      success: {
        10: '#F7FCFA';
        20: '#ECF9F3';
        30: '#C6ECDC';
        40: '#8CD9B8';
        50: '#40BF89';
        60: '#33996E';
        70: '#267352';
        80: '#1A4C37';
        90: '#133929';
      };
      white: '#FFFFFF';
      black: '#222222';
      shades: {
        asHeader: '#222222';
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
