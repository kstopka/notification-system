import { useState } from "react";

import { useActions, AppCtx } from "../../../contexted";
import { IAppActions } from "../../../contexted/App/types";
import Api from "../../../api/API";

interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

export const useDeletePost = ({
  post_id,
  handleDeleteModalActive,
  getNews,
}: {
  post_id: number;
  handleDeleteModalActive: () => void;
  getNews: () => void;
}) => {
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletePost = async () => {
    setIsLoading(true);
    try {
      await Api.deleteSinglePostRelations(post_id);
      await Api.deleteSingleComment(post_id);
      await Api.deleteSinglePost(post_id);
      await getNews();
      setAlert({
        isAlertVisible: true,
        status: "success",
        message: "response.data.message",
      });
      handleDeleteModalActive();
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
    handleDeletePost,
  };
};
