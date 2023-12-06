import { SingleTicketData, TicketCommentData } from "../../types/standard";

export interface SingleTicketContentProps {
  ticket: SingleTicketData;
  comments: TicketCommentData[];
  updateData: () => void;
}
