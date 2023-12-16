import { SubmitHandler, useForm } from "react-hook-form";

import { defaultValues, schema } from "./utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  AuthCtx,
  AppCtx,
  useActions,
  useContextState,
} from "../../../contexted";
import { IAppActions } from "../../../contexted/App/types";
import { IAuthState } from "../../../contexted/Auth/types";
import Api from "../../../api/API";
import ServiceRequestsApi from "../../../api/ServiceRequests";

export const useAdditionalServiceRequest = (provider_id: number) => {
  const { id: user_id } = useContextState<IAuthState>(AuthCtx, ["id"]);
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { reset, handleSubmit, setValue } = methods;

  const onSubmit: SubmitHandler<typeof defaultValues> = async ({
    description,
  }) => {
    setIsLoading(true);
    try {
      await ServiceRequestsApi.additionalServiceRequest(
        user_id,
        provider_id,
        description
      );
      setAlert({
        isAlertVisible: true,
        status: "success",
        message: "response.data.message",
      });

      reset(defaultValues);
    } catch (error) {
      setAlert({
        isAlertVisible: true,
        status: "error",
        message: "error.response.data",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    methods,
    handleSubmit,
    onSubmit,
  };
};
