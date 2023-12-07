import { TypeOfComment } from "../../../../types/standard";

export type EditSingleCommentFormProps = {
  isEditing: boolean;
  content: string;
  comment_id: number;
  updateData: () => void;
  handleEdit: () => void;
  type: TypeOfComment;
};

export type DefaultValuesEditSingleCommentForm = {
  content: string;
};
