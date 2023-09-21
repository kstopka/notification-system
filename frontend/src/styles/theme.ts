import { DefaultTheme } from 'styled-components';

// kolory od najjasniejszego do najciemniejszego
const theme: DefaultTheme = {
  layout: {
    maxWidth: '1440px',
    paddingX: '108px',
    paddingXMobile: '16px'
  },
  breakpoints: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
    xl: '1439px',
    xxl: '1679px'
  },
  colors: {
    primary: {
      10: '#FAFBF8',
      20: '#F4F6EE',
      30: '#DDE4CD',
      40: '#BAC99C',
      50: '#F8DA17',
      60: '#e1c407',
      70: '#A29814',
      80: '#384224',
      90: '#2A321B'
    },
    neutral: {
      10: '#F9FAFB',
      20: '#F0F2F4',
      30: '#D3D9DF',
      40: '#A7B3BE',
      50: '#6C8193',
      60: '#566776',
      70: '#414D58',
      80: '#2B343B',
      90: '#20272C'
    },
    error: {
      10: '#FFF7F5',
      20: '#FFEAE5',
      30: '#FFBFB3',
      40: '#FF8066',
      50: '#FF2B00',
      60: '#CC2200',
      70: '#991A00',
      80: '#661100',
      90: '#4D0D00'
    },
    warning: {
      10: '#FFFCF5',
      20: '#FFF7E5',
      30: '#FFE6B3',
      40: '#FFCD66',
      50: '#FFAB00',
      60: '#CC8900',
      70: '#996700',
      80: '#664400',
      90: '#4D3300'
    },
    success: {
      10: '#F7FCFA',
      20: '#ECF9F3',
      30: '#C6ECDC',
      40: '#8CD9B8',
      50: '#40BF89',
      60: '#33996E',
      70: '#267352',
      80: '#1A4C37',
      90: '#133929'
    },
    white: '#FFFFFF',
    black: '#222222',
    shades: {
      asHeader: '#222222'
    }
  },
  fonts: {
    family: {
      main: 'Cabin',
      secondary: 'Cabin'
    },
    size: {
      h1: '40px',
      h2: '36px',
      h3: '32px',
      h4: '24px',
      h5: '20px',
      h6: '16px',
      p: '16px',
      body_20: '18px',
      small: '13px'
    }
  },
  transitions: {
    standard: '.2s all linear',
    time: '.25s',
    type: 'linear'
  }
};

export default theme;
