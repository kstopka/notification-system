import { PostCommentData, TypeOfComment } from "../../../types/standard";

export interface ExternalSingleCommentProps {
  isDeleteModalActive: boolean;
  updateData: () => void;
  handleDeleteModalActive: () => void;
  handleDeleteComment: (comment_id: number) => void;
  type: TypeOfComment;
}

export type SingleCommentProps = PostCommentData &
  ExternalSingleCommentProps & {};
