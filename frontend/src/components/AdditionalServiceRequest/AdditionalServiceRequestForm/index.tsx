import { FormProvider } from "react-hook-form";
import FormTextInput from "../../atoms/FormTextInput";

import * as S from "./styles";
import FormTextareaInput from "../../atoms/FormTextareaInput";
import { AdditionalTicketContentProps } from "./types";
import { useAdditionalServiceRequest } from "./logic";
import { useContextState, UsersCtx } from "../../../contexted";
import { IUsersState } from "../../../contexted/Users/types";
import Select from "../../atoms/Select";
import { useEffect, useState } from "react";

const AdditionalServiceRequestForm: React.FC<
  AdditionalTicketContentProps
> = () => {
  const { providers } = useContextState<IUsersState>(UsersCtx, ["providers"]);
  const [transformedProviders, setTransformedProviders] = useState<
    { value: string | number; label: string }[]
  >([]);

  const [selectedProvider, setSelectedProvider] = useState(
    providers[0].provider_id
  );
  const { isLoading, methods, onSubmit } =
    useAdditionalServiceRequest(selectedProvider);
  const { handleSubmit } = methods;

  const handleProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvider(Number(e.target.value));
  };

  useEffect(() => {
    setTransformedProviders(
      providers.map(({ provider_id, name }) => ({
        value: provider_id,
        label: name,
      }))
    );
  }, [providers]);

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextareaInput
          name="description"
          label="Opis"
          placeholder="Opis"
          isDark
        />
        <Select
          name={"provider"}
          initialValue={selectedProvider}
          options={transformedProviders}
          handleChange={handleProviderChange}
        />

        <S.ButtonWrapper>
          <button className="secondary" type="submit" disabled={isLoading}>
            {isLoading ? "Proszę czekać" : "Wyślij"}
          </button>
        </S.ButtonWrapper>
      </S.Form>
    </FormProvider>
  );
};

export default AdditionalServiceRequestForm;
