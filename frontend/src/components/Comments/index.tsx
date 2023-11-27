import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
import { CommentsContentProps } from "./types";
import SingleNews from "../News/SingleNews";
import SingleComment from "./SingleComment";
import { useNavigate } from "react-router-dom";

const CommentsContent: React.FC<CommentsContentProps> = ({
  post,
  comments,
  getSingleNews,
}) => {
  const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
    "id",
  ]);

  // const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  // const handleAdditionalOpen = () => {
  //   setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  // };
  return (
    <S.CommentsWrapper>
      <SingleNews {...post} key={post.post_id} getNews={getSingleNews} />
      {comments &&
        comments.length > 0 &&
        comments.map((el) => (
          <SingleComment
            {...el}
            key={el.comment_id}
            updateData={getSingleNews}
          />
        ))}
      {/* <button>Dodaj Komentarz</button> */}
      {/* <SingleCommentForm /> */}
    </S.CommentsWrapper>
  );
};

export default CommentsContent;
