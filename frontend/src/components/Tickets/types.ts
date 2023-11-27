export interface SingleTicket {
  comment_count: number;
  created_at: string;
  description: string;
  modification_date: string;
  owner_id: number;
  owner_name: string;
  priority: string;
  status: string;
  subject: string;
  ticket_id: number;
  user_id: number;
  user_name: string;
}

export interface NewsContentProps {}

export interface ResponseTicketsProps {
  data: SingleTicket[];
}

export type UseNewsProps = () => {
  tickets: SingleTicket[];
  getTickets: () => void;
};
