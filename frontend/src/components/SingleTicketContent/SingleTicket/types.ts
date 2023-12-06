import { SingleTicketData } from "../../../types/standard";

export interface ExternalSingleTicketProps {
  updateData: () => void;
}

export type SingleTicketProps = SingleTicketData &
  ExternalSingleTicketProps & {};
