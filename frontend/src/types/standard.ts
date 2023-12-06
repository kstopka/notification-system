export interface SingleNewsData {
  attachments: null;
  comment_count?: number;
  content: string;
  created_at: string;
  post_id: number;
  title: string;
  type: string;
  user_id: number;
  user_name: string;
}
export interface SingleTicketData {
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
export interface PostCommentData {
  comment_id: number;
  content: string;
  created_at: string;
  post_id: number;
  user_id: number;
  user_name: string;
}
export interface TicketCommentData {
  comment_date: string;
  comment_id: number;
  comment_text: string;
  ticket_id: number;
  user_id: number;
  user_name: string;
}
