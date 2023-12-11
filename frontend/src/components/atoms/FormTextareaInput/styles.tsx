import styled from "styled-components";

import {
  BorderColors,
  DescriptionColors,
  StyledDescriptionProps,
  StyledContainerProps,
  InputProps,
  SVGContainerProps,
} from "./types";

export const TextInput = styled.textarea<InputProps>`
  width: 100%;
  height: 100%;
  padding: ${(props) =>
    props.status === "default" ? "10px 12px" : "10px 40px 10px 12px"};
  border: 1px solid ${(props) => BorderColors[props.status]};
  border-radius: 4px;

  background: ${({ isDark, theme }) =>
    isDark ? theme.colors.primary : theme.colors.secondary};

  font-family: ${(props) => props.theme.fonts.family.main};
  color: ${({ isDark, theme }) =>
    isDark ? theme.colors.secondary : theme.colors.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  resize: none;

  &::placeholder {
    color: ${({ isDark, theme }) =>
      isDark ? theme.colors.secondary : theme.colors.primary};
  }

  &:hover:not([disabled]) {
  }

  &:disabled,
  &[disabled] {
    background: ${({ isDark, theme }) =>
      isDark ? theme.colors.primary : theme.colors.secondary};

    color: ${({ isDark, theme }) =>
      isDark ? theme.colors.secondary : theme.colors.primary};
  }
`;

const errorImage =
  "filter: invert(22%) sepia(70%) saturate(4459%) hue-rotate(3deg) brightness(103%) contrast(104%);";
const successImage =
  "filter: invert(70%) sepia(44%) saturate(575%) hue-rotate(102deg) brightness(85%) contrast(84%);";

export const SVGContainer = styled.div<SVGContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 15px;
  top: 15px;

  width: 20px;
  height: 20px;

  ${(props) => (props.status === "error" ? errorImage : successImage)}
`;

export const InputContainer = styled.div<{ isDark: boolean }>`
  width: auto;
  position: relative;
  height: 127px;

  border: 2px solid transparent;
  border-radius: 6px;

  &:focus-within {
    border: 2px solid
      ${({ isDark, theme }) =>
        isDark ? theme.colors.secondary : theme.colors.tertiary};
  }

  &:focus-within ${TextInput} {
    border: 1px solid
      ${({ isDark, theme }) =>
        isDark ? theme.colors.tertiary : theme.colors.secondary};
  }

  &:focus-within ${SVGContainer} {
    display: none;
  }
`;

export const StyledLabel = styled.label<{ isDark: boolean }>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ isDark, theme }) =>
    isDark ? theme.colors.primary : theme.colors.secondary};
`;

export const StyledDescription = styled.p<StyledDescriptionProps>`
  margin-top: 8px;

  font-size: 13px;
  color: ${(props) => DescriptionColors[props.status]};
  line-height: 24px;
`;

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.inputDirection};
  ${(props) => (props.inputDirection === "row" ? "align-items: center" : null)};

  margin: 0px;
  padding: 0px;

  label {
    ${(props) =>
      props.inputDirection === "column"
        ? "margin-bottom: 8px;"
        : "margin-right: 12px;"};
  }
`;
