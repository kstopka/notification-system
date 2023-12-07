import { FormProvider } from "react-hook-form";
import { EditSingleCommentFormProps } from "./types";
import { useEditSingleComment } from "./logic";
import FormTextInput from "../../../atoms/FormTextInput";
import FormTextareaInput from "../../../atoms/FormTextareaInput";

const EditSingleCommentForm: React.FC<EditSingleCommentFormProps> = ({
  isEditing,
  content,
  comment_id,
  type,
  updateData,
  handleEdit,
}) => {
  const { isLoading, methods, handleSubmit, onSubmit } = useEditSingleComment({
    content,
    comment_id,
    updateData,
    handleEdit,
    type,
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form id="edit-single-comment-form" onSubmit={handleSubmit(onSubmit)}>
          <FormTextareaInput
            name="content"
            placeholder="Treść:"
            label="Treść:"
          />

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
