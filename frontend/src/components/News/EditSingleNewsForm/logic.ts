import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { defaultValues, schema } from "./utils";
import { useActions, AppCtx } from "../../../contexted";
import { IAppActions } from "../../../contexted/App/types";
import Api from "../../../api/API";
import PostsApi from "../../../api/PostsApi";

interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

export const useEditSingleNews = ({
  content,
  title,
  post_id,
  getNews,
  handleEdit,
}: {
  content: string;
  title: string;
  post_id: number;
  getNews: () => void;
  handleEdit: () => void;
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
    setIsLoading(true);
    try {
      const response = await PostsApi.updateSingleNews(title, content, post_id);
      await getNews();
      setAlert({
        isAlertVisible: true,
        status: "success",
        message: response.data.message,
      });
      handleEdit();

      // reset(defaultValues);
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
