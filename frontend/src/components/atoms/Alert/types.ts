export type IAlertStatus = "info" | "error" | "success";

export interface IAlertProps {
  title: string;
  handleClose?: () => void;
  status?: IAlertStatus;
  description?: string;
  buttonText?: string;
  handleClick?: () => void;
}
