import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  layout: {
    maxWidth: "1440px",
    paddingX: "108px",
    paddingXMobile: "16px",
  },
  breakpoints: {
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px",
    xl: "1439px",
    xxl: "1679px",
  },
  colors: {
    primary: "#F7F7FF",
    secondary: "#1c3942",
    tertiary: "#0E4EB4",
    // primary: "#F7F7FF",
    // secondary: "#1c3942",
    // tertiary: "#0E4EB4",
    neutral: "#6C8193",
    error: "#FF2B00",
    warning: "#FFAB00",
    success: "#40BF89",
    white: "#FFFFFF",
    black: "#222222",
    shades: {
      asHeader: "#222222",
    },
  },
  fonts: {
    family: {
      main: "Cabin",
      secondary: "Cabin",
    },
    size: {
      h1: "40px",
      h2: "36px",
      h3: "32px",
      h4: "24px",
      h5: "20px",
      h6: "16px",
      p: "16px",
      body_20: "18px",
      small: "13px",
    },
  },
  transitions: {
    standard: ".2s all linear",
    time: ".25s",
    type: "linear",
  },
};

export default theme;
