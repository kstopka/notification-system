export type EditSingleCommentFormProps = {
  isEditing: boolean;
  content: string;
  comment_id: number;
  updateData: () => void;
  handleEdit: () => void;
};

export type DefaultValuesEditSingleCommentForm = {
  content: string;
};
