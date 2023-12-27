import { FormProvider } from "react-hook-form";
import { EditSingleNewsFormProps } from "./types";
import { useEditSingleNews } from "./logic";
import FormTextInput from "../../atoms/FormTextInput";
import FormTextareaInput from "../../atoms/FormTextareaInput";

const EditSingleNewsForm: React.FC<EditSingleNewsFormProps> = ({
  isEditing,
  content,
  title,
  post_id,
  getNews,
  handleEdit,
}) => {
  const { isLoading, methods, handleSubmit, onSubmit } = useEditSingleNews({
    content,
    title,
    post_id,
    getNews,
    handleEdit,
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form id="edit-single-news-form" onSubmit={handleSubmit(onSubmit)}>
          <FormTextInput name="title" placeholder="Tytuł:" label="Tytuł:" />

          <FormTextareaInput
            name="content"
            placeholder="Treść:"
            label="Treść:"
          />

          <div className="wrapperButton">
            <button className="secondary">
              {isLoading ? "Proszę czekać" : "Wyślij"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditSingleNewsForm;
