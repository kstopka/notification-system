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

export const useAdditionalSingleNews = ({
  getNews,
}: {
  getNews: () => void;
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
    content,
    title,
  }) => {
    setIsLoading(true);
    try {
      await Api.additionalSingleNews(user_id, title, content);
      await getNews();
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
