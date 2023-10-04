import { FormProvider } from "react-hook-form";
import { EditSingleNewsFormProps } from "./types";
import FormTextInput from "../../atoms/FormTextInput";
import { useAdditionalSingleNews } from "./logic";

const AdditionalSingleNewsForm: React.FC<EditSingleNewsFormProps> = ({
  getNews,
}) => {
  const { isLoading, methods, handleSubmit, onSubmit } =
    useAdditionalSingleNews({
      getNews,
    });

  return (
    <div>
      <FormProvider {...methods}>
        <form
          id="additional-single-news-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormTextInput name="title" placeholder="Tytuł:" label="Tytuł:" />

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

export default AdditionalSingleNewsForm;
