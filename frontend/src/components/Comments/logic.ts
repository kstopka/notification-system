import { useState } from "react";
import { useActions, AppCtx } from "../../contexted";
import { IAppActions } from "../../contexted/App/types";
import Api from "../../api/API";
import PostCommentsApi from "../../api/PostComments";

export const useComment = (updateData: () => void) => {
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const handleAdditionalOpen = () => {
    setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  };

  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);
  const [isLoading, setIsLoading] = useState(false);

  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

  const handleDeleteModalActive = () => {
    setIsDeleteModalActive((isDeleteModalActive) => !isDeleteModalActive);
  };

  const handleDeleteComment = async (comment_id: number) => {
    setIsLoading(true);
    try {
      await Api.deleteSinglePostRelationsByComment(comment_id);
      await PostCommentsApi.deleteSingleCommentByComment(comment_id);

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
    isDeleteModalActive,
    isAdditionalOpen,
    handleDeleteComment,
    handleDeleteModalActive,
    handleAdditionalOpen,
  };
};
