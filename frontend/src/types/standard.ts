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
export interface CommentData {
  comment_id: number;
  content: string;
  created_at: string;
  post_id: number;
  user_id: number;
  user_name: string;
}
