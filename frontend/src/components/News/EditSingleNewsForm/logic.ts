import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { defaultValues, schema } from "./utils";
import { useActions, AppCtx } from "../../../contexted";
import { IAppActions } from "../../../contexted/App/types";
import Api from "../../../api/API";

interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

export const useEditSingleNews = ({
  content,
  title,
  post_id,
}: {
  content: string;
  title: string;
  post_id: number;
}) => {
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
    try {
      const response = await Api.updateSingleNews(title, content, post_id);

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
    }
  };

  useEffect(() => {
    setValue("title", title);
    setValue("content", content);
  }, [content, setValue, title]);

  return {
    isLoading,
    methods,
    handleSubmit,
    onSubmit,
  };
};
