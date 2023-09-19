export type StatusType = "success" | "error" | "default";

export interface FormTextInputProps {
  name: string;
  type?: "text" | "password";
  placeholder: string;
  label?: string;
  isDisabled?: boolean;
}
