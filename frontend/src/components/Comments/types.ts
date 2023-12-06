import { PostCommentData, SingleNewsData } from "../../types/standard";

export interface CommentsContentProps {
  post: SingleNewsData;
  comments: PostCommentData[];
  updateData: () => void;
}
