import { css } from 'styled-components';
import theme from './theme';
import { TPrimaryColors, TCustomColors, TColorValues, TBreakpoints, TFontSizes } from './utilsTypes';

export function getColor(type: TCustomColors, hue: TColorValues): string;
export function getColor(type: TPrimaryColors): string;
export function getColor(
  type: TCustomColors | TPrimaryColors,
  hue?: TColorValues
): any {
  return hue ? theme.colors[type][hue] : theme.colors[type];
}

export function chooseColorDependedConditionally(
  isFirstColor: boolean,
  [typeOfFirstColor, hueOfFirstColor]:
    | [TCustomColors, TColorValues]
    | [TPrimaryColors],
  [typeOfSecondColor, hueOfSecondColor]:
    | [TCustomColors, TColorValues]
    | [TPrimaryColors]
): string {
  if (isFirstColor) {
    return hueOfFirstColor
      ? getColor(typeOfFirstColor as TCustomColors, hueOfFirstColor)
      : getColor(typeOfFirstColor as TPrimaryColors);
  }

  return hueOfSecondColor
    ? getColor(typeOfSecondColor as TCustomColors, hueOfSecondColor)
    : getColor(typeOfSecondColor as TPrimaryColors);
}

export function getDefaultTextProperties() {
  return `
		font-size: ${theme.fonts.size.p};
		font-weight: normal;
		line-height: 24px;
	`;
}

export function getBreakpoint(breakpoint: TBreakpoints): string {
  return theme.breakpoints[breakpoint];
}

export function getTransition(properties = 'all', type = 'linear', time = '0.25s') {
  return css`
    transition: ${theme.transitions.time || time} ${theme.transitions.type || type};
    transition-property: ${properties};
    will-change: ${properties};
    `
}

export function getFont(size: TFontSizes, weight = '400', lineHeight = "24") {
  return css`
    font-family: ${theme.fonts.family.main};
    font-size: ${theme.fonts.size[size]};
    font-weight: ${weight};
    line-height: ${lineHeight}px;
  `
}


