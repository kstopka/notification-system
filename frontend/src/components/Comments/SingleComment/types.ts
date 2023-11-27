import { CommentData } from "../../../types/standard";

export interface ExternalSingleCommentProps {
  updateData: () => void;
}

export type SingleCommentProps = CommentData & ExternalSingleCommentProps & {};
