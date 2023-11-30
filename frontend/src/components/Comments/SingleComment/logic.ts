import { useState } from "react";

import { useActions, AppCtx } from "../../../contexted";
import { IAppActions } from "../../../contexted/App/types";
import Api from "../../../api/API";

interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

export const useDeleteComment = ({
  comment_id,
  handleDeleteModalActive,
  updateData,
}: {
  comment_id: number;
  handleDeleteModalActive: () => void;
  updateData: () => void;
}) => {
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteComment = async () => {
    setIsLoading(true);
    try {
      const result1 = await Api.deleteSinglePostRelationsByComment(comment_id);
      const result2 = await Api.deleteSingleCommentByComment(comment_id);
      console.log("result1", result1);
      console.log("result2", result2);
      // await Api.deleteSinglePost(post_id);

      await updateData();
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
    handleDeleteComment,
  };
};
