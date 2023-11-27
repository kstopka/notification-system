import { CommentData, SingleNewsData } from "../../types/standard";

export interface CommentsContentProps {
  post: SingleNewsData;
  comments: CommentData[];
  getSingleNews: () => void;
}