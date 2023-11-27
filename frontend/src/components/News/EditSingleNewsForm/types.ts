export type EditSingleNewsFormProps = {
  isEditing: boolean;
  content: string;
  title: string;
  post_id: number;
  getNews: () => void;
  handleEdit: () => void;
};

export type DefaultValuesEditSingleNewsForm = {
  content: string;
  title: string;
};
