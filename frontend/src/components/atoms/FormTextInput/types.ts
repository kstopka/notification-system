enum BorderColors {
  success = "#40BF89",
  error = "#FF2B00",
  default = "#D3D9DF",
}

enum DescriptionColors {
  success = "#A7B3BE",
  error = "#CC2200",
  default = "#A7B3BE",
}

type StatusType = "success" | "error" | "default";
type DirectionsType = "row" | "column";

interface InputProps {
  status: StatusType;
  isDark: boolean;
}

interface StyledDescriptionProps {
  status: StatusType;
}

interface SVGContainerProps {
  status: StatusType;
}

interface StyledContainerProps {
  inputDirection: DirectionsType;
}
type FieldErrorType = undefined | { message: string };
type FieldDirtyType = undefined | boolean;
type FieldTouchedType = undefined | boolean;

export { BorderColors, DescriptionColors };
export type {
  StyledDescriptionProps,
  StyledContainerProps,
  SVGContainerProps,
  InputProps,
  StatusType,
  DirectionsType,
  FieldErrorType,
  FieldDirtyType,
  FieldTouchedType,
};
