import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
import { CommentsContentProps } from "./types";
import SingleNews from "../News/SingleNews";
import SingleComment from "./SingleComment";
import { useNavigate } from "react-router-dom";
import AdditionalSingleCommentForm from "./SingleComment/AdditionalSingleCommentForm";

const CommentsContent: React.FC<CommentsContentProps> = ({
  post,
  comments,
  updateData,
}) => {
  const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
    "id",
  ]);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const handleAdditionalOpen = () => {
    setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  };

  return (
    <S.CommentsWrapper>
      {isAdditionalOpen && (
        <AdditionalSingleCommentForm
          updateData={updateData}
          post_id={post.post_id}
          handleAdditionalOpen={handleAdditionalOpen}
        />
      )}

      <button onClick={handleAdditionalOpen}>
        {isAdditionalOpen ? "Zamknij" : "Dodaj komentarz"}
      </button>
      <SingleNews {...post} key={post.post_id} updateData={updateData} />
      {comments &&
        comments.length > 0 &&
        comments.map((el) => (
          <SingleComment {...el} key={el.comment_id} updateData={updateData} />
        ))}
      {isAdditionalOpen && (
        <AdditionalSingleCommentForm
          updateData={updateData}
          post_id={post.post_id}
          handleAdditionalOpen={handleAdditionalOpen}
        />
      )}

      <button onClick={handleAdditionalOpen}>
        {isAdditionalOpen ? "Zamknij" : "Dodaj komentarz"}
      </button>
    </S.CommentsWrapper>
  );
};

export default CommentsContent;
