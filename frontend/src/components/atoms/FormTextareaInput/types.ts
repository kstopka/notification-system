enum BorderColors {
  success = "#40BF89", // success/50
  error = "#FF2B00", // error/50
  default = "#D3D9DF", // neutral/30
}

enum DescriptionColors {
  success = "#A7B3BE", // neutral/40
  error = "#CC2200", // error/60
  default = "#A7B3BE", // neutral/40
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

interface FormTextInputProps {
  name: string;
  placeholder: string;
  label?: string;
  direction?: "row" | "column";
  isDisabled?: boolean;
  className?: string;
  maxLength?: number;
  isDark?: boolean;
}

export { BorderColors, DescriptionColors };
export type {
  FormTextInputProps,
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
