import { FormProvider } from "react-hook-form";
import { EditSingleNewsFormProps } from "./types";
import FormTextInput from "../../atoms/FormTextInput";
import { useAdditionalSinglePost } from "./logic";

const AdditionalSinglePostForm: React.FC<EditSingleNewsFormProps> = ({
  type,
  updateData,
  handleAdditionalOpen,
}) => {
  const { isLoading, methods, handleSubmit, onSubmit } =
    useAdditionalSinglePost({
      type,
      updateData,
      handleAdditionalOpen,
    });

  return (
    <div>
      <FormProvider {...methods}>
        <form
          id="additional-single-news-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormTextInput
            name="title"
            placeholder="Tytuł:"
            label="Tytuł:"
            isDark
          />

          <FormTextInput
            name="content"
            placeholder="Treść:"
            label="Treść:"
            isDark
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

export default AdditionalSinglePostForm;
