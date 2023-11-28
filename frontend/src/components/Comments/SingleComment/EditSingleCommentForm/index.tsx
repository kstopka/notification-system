import { FormProvider } from "react-hook-form";
import { EditSingleCommentFormProps } from "./types";
import { useEditSingleComment } from "./logic";
import FormTextInput from "../../../atoms/FormTextInput";

const EditSingleCommentForm: React.FC<EditSingleCommentFormProps> = ({
  isEditing,
  content,
  comment_id,
  updateData,
  handleEdit,
}) => {
  const { isLoading, methods, handleSubmit, onSubmit } = useEditSingleComment({
    content,
    comment_id,
    updateData,
    handleEdit,
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form id="edit-single-comment-form" onSubmit={handleSubmit(onSubmit)}>
          <FormTextInput name="content" placeholder="Treść:" label="Treść:" />

          <div className="wrapperButton">
            <button className={`${isLoading ? "loading" : ""}`}>
              {isLoading ? "Proszę czekać" : "Wyślij"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditSingleCommentForm;
