import { FormProvider } from "react-hook-form";
import FormTextInput from "../../atoms/FormTextInput";

import * as S from "./styles";
import FormTextareaInput from "../../atoms/FormTextareaInput";
import { AdditionalTicketContentProps } from "./types";
import { useAdditionalTicket } from "./logic";

const AdditionalTicketForm: React.FC<AdditionalTicketContentProps> = () => {
  const { isLoading, methods, onSubmit } = useAdditionalTicket();

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          name="subject"
          label="Tytuł"
          placeholder="Tytuł"
          isDark
        />
        <FormTextareaInput
          name="description"
          label="Opis"
          placeholder="Opis"
          isDark
        />
        <S.ButtonWrapper>
          <button
            type="submit"
            className={`primaryBtn ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Proszę czekać" : "Wyślij"}
          </button>
        </S.ButtonWrapper>
      </form>
    </FormProvider>
  );
};

export default AdditionalTicketForm;
