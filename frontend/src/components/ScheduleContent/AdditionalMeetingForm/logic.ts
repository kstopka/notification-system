import { SubmitHandler, useForm } from "react-hook-form";
import {
  AppCtx,
  AuthCtx,
  useActions,
  useContextState,
} from "../../../contexted";
import { IAuthState } from "../../../contexted/Auth/types";
import { defaultValues, schema } from "./utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { IAppActions } from "../../../contexted/App/types";
import Api from "../../../api/API";

export const useAdditionalMeeting = ({
  updateData,
  handleAdditionalOpen,
  startDate,
}: {
  updateData: () => void;
  handleAdditionalOpen: () => void;
  startDate: Date;
}) => {
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
    address,
  }) => {
    const time = startDate.toTimeString();
    const date = startDate.toISOString().split("T")[0];
    setIsLoading(true);
    try {
      await Api.additionalMeeting({ address, description, time, date });
      await updateData();
      handleAdditionalOpen();
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
