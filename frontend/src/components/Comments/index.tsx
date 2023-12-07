import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
import { CommentsContentProps } from "./types";
import SingleNews from "../News/SingleNews";
import SingleComment from "./SingleComment";
import { useNavigate } from "react-router-dom";
import AdditionalSingleCommentForm from "./SingleComment/AdditionalSingleCommentForm";
import { useComment } from "./logic";

const CommentsContent: React.FC<CommentsContentProps> = ({
  post,
  comments,
  updateData,
}) => {
  const type = "post";
  const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
    "id",
  ]);

  const {
    isLoading,
    isDeleteModalActive,
    isAdditionalOpen,
    handleDeleteComment,
    handleDeleteModalActive,
    handleAdditionalOpen,
  } = useComment(updateData);

  return (
    <S.CommentsWrapper>
      {isAdditionalOpen && (
        <AdditionalSingleCommentForm
          updateData={updateData}
          id={post.post_id}
          handleAdditionalOpen={handleAdditionalOpen}
          type={type}
        />
      )}

      <button onClick={handleAdditionalOpen}>
        {isAdditionalOpen ? "Zamknij" : "Dodaj komentarz"}
      </button>
      <SingleNews {...post} key={post.post_id} updateData={updateData} />
      {comments &&
        comments.length > 0 &&
        comments.map((el) => (
          <SingleComment
            {...el}
            type={type}
            key={el.comment_id}
            updateData={updateData}
            handleDeleteModalActive={handleDeleteModalActive}
            isDeleteModalActive={isDeleteModalActive}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      {isAdditionalOpen && (
        <AdditionalSingleCommentForm
          updateData={updateData}
          id={post.post_id}
          handleAdditionalOpen={handleAdditionalOpen}
          type="post"
        />
      )}

      <button onClick={handleAdditionalOpen}>
        {isAdditionalOpen ? "Zamknij" : "Dodaj komentarz"}
      </button>
    </S.CommentsWrapper>
  );
};

export default CommentsContent;
