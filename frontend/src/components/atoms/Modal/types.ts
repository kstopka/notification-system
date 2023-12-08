import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  handleIsActiveModal: () => void;
  buttons?: ReactNode[];
}
