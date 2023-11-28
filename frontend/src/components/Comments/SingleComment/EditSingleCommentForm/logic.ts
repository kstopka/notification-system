import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { defaultValues, schema } from "./utils";
import { useActions, AppCtx } from "../../../../contexted";
import { IAppActions } from "../../../../contexted/App/types";
import Api from "../../../../api/API";

interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

export const useEditSingleComment = ({
  content,
  comment_id,
  updateData,
  handleEdit,
}: {
  content: string;
  comment_id: number;
  updateData: () => void;
  handleEdit: () => void;
}) => {
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { reset, handleSubmit, setValue } = methods;

  const onSubmit: SubmitHandler<typeof defaultValues> = async ({ content }) => {
    setIsLoading(true);
    try {
      await Api.updateSingleComment(content, comment_id);
      await updateData();
      setAlert({
        isAlertVisible: true,
        status: "success",
        message: "response.data.message",
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
    setValue("content", content);
  }, [content, setValue]);

  return {
    isLoading,
    methods,
    handleSubmit,
    onSubmit,
  };
};
