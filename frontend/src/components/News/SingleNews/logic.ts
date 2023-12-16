import { useState } from "react";

import {
  useActions,
  AppCtx,
  AuthCtx,
  useContextState,
} from "../../../contexted";
import { IAppActions } from "../../../contexted/App/types";
import Api from "../../../api/API";
import { IAuthState } from "../../../contexted/Auth/types";
import PostsApi from "../../../api/PostsApi";
import PostCommentsApi from "../../../api/PostComments";
import VotesApi from "../../../api/VotesApi";
import PostCommentsRelations from "../../../api/PostCommentsRelations";

interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

export const useDeletePost = ({
  post_id,
  handleDeleteModalActive,
  handleVoteModalActive,
  updateData,
}: {
  post_id: number;
  handleDeleteModalActive: () => void;
  handleVoteModalActive: (value: boolean | null) => void;
  updateData: () => void;
}) => {
  const { id: user_id } = useContextState<IAuthState>(AuthCtx, ["id"]);

  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletePost = async () => {
    setIsLoading(true);
    try {
      await PostCommentsRelations.deleteSinglePostRelationsByPost(post_id);
      await PostCommentsApi.deleteSingleCommentByPost(post_id);
      await PostsApi.deleteSinglePost(post_id);
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

  const handleVote = async (value: boolean | null) => {
    if (value === null) return;
    setIsLoading(true);
    try {
      await VotesApi.additionalVotes(user_id, post_id, value);
      await updateData();
      setAlert({
        isAlertVisible: true,
        status: "success",
        message: "response.data.message",
      });
      handleVoteModalActive(null);
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
    handleVote,
  };
};
