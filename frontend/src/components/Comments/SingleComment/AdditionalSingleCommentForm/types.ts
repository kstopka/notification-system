import { TypeOfComment } from "../../../../types/standard";

export type EditSingleCommentFormProps = {
  id: number;
  type: TypeOfComment;
  updateData: () => void;
  handleAdditionalOpen: () => void;
};

export type DefaultValuesEditSingleNewsForm = {
  content: string;
};
