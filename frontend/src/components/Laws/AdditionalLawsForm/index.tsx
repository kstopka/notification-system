import { FormProvider } from "react-hook-form";
import FormTextInput from "../../atoms/FormTextInput";
import FormTextareaInput from "../../atoms/FormTextareaInput";
import { useAdditionalSingleLaw } from "./logic";
import { AdditionalSingleLawFormProps } from "./types";

const AdditionalLawsForm: React.FC<AdditionalSingleLawFormProps> = ({
  updateData,
  handleAdditionalOpen,
}) => {
  const { isLoading, methods, handleSubmit, onSubmit } = useAdditionalSingleLaw(
    {
      updateData,
      handleAdditionalOpen,
    }
  );

  return (
    <div>
      <FormProvider {...methods}>
        <form id="additional-laws-form" onSubmit={handleSubmit(onSubmit)}>
          <FormTextInput
            name="name"
            placeholder="Tytuł:"
            label="Tytuł:"
            isDark
          />

          <FormTextInput
            name="description"
            placeholder="Opis:"
            label="Opis:"
            isDark
          />
          <FormTextareaInput
            name="text"
            placeholder="Text:"
            label="TExt:"
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

export default AdditionalLawsForm;
