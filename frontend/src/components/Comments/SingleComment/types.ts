import { PostCommentData } from "../../../types/standard";

export interface ExternalSingleCommentProps {
  updateData: () => void;
}

export type SingleCommentProps = PostCommentData &
  ExternalSingleCommentProps & {};
