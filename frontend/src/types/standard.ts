export type BasicPostData = {
  attachments: null;
  content: string;
  created_at: string;
  post_id: number;
  title: string;
  type: string;
  user_id: number;
};

export type SingleNewsData = {
  comment_count?: number;
  user_name?: string;
} & BasicPostData;

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

export type TypeOfComment = "post" | "ticket";

export interface MeetingsData {
  address: string;
  date: string;
  description: string;
  meeting_id: number;
  time: string;
}

export interface PreparedMeetings {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: string;
}

export type BasicSingeLawData = {
  date: string;
  description: string;
  law_id: number;
  name: string;
  status: string;
  text: string;
};
