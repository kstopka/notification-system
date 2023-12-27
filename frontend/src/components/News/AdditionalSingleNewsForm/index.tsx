import { FormProvider } from "react-hook-form";
import { EditSingleNewsFormProps } from "./types";
import FormTextInput from "../../atoms/FormTextInput";
import { useAdditionalSinglePost } from "./logic";
import FormTextareaInput from "../../atoms/FormTextareaInput";
import * as S from "./styles";

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
        <S.Form
          id="additional-single-news-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormTextInput
            name="title"
            placeholder="Tytuł:"
            label="Tytuł:"
            isDark
          />

          <FormTextareaInput
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
        </S.Form>
      </FormProvider>
    </div>
  );
};

export default AdditionalSinglePostForm;
