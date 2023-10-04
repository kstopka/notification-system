export interface SingleNewsData {
  archive: null | number;
  attachments: null;
  comment_count: number;
  content: string;
  created_at: string;
  post_id: number;
  title: string;
  type: string;
  user_id: number;
  user_name: string;
}

export interface ExternalSingleNewsProps {
  getNews: () => void;
}

export type SingleNewsProps = SingleNewsData & ExternalSingleNewsProps & {};
