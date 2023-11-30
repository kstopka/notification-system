import { FormProvider } from "react-hook-form";
import { EditSingleCommentFormProps } from "./types";
import FormTextInput from "../../../atoms/FormTextInput";
import { useAdditionalSingleComment } from "./logic";

const AdditionalSingleCommentForm: React.FC<EditSingleCommentFormProps> = ({
  updateData: getSingleNews,
  post_id,
  handleAdditionalOpen,
}) => {
  const { isLoading, methods, handleSubmit, onSubmit } =
    useAdditionalSingleComment({
      getSingleNews,
      post_id,
      handleAdditionalOpen,
    });

  return (
    <div>
      <FormProvider {...methods}>
        <form
          id="additional-single-comment-form"
          onSubmit={handleSubmit(onSubmit)}
        >
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

export default AdditionalSingleCommentForm;
