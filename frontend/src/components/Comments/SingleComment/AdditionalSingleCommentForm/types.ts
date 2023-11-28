export type EditSingleCommentFormProps = {
  post_id: number;
  getSingleNews: () => void;
  handleAdditionalOpen: () => void;
};

export type DefaultValuesEditSingleNewsForm = {
  content: string;
};
