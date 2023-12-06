import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
// import { CommentsContentProps } from "./types";
import SingleNews from "../News/SingleNews";
// import SingleComment from "./SingleComment";
import { useNavigate } from "react-router-dom";
import { SingleTicketContentProps } from "./types";
import SingleTicket from "./SingleTicket";
// import AdditionalSingleCommentForm from "./SingleComment/AdditionalSingleCommentForm";

const SingleTicketContent: React.FC<SingleTicketContentProps> = ({
  ticket,
  comments,
  updateData,
}) => {
  // const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
  //   "loggedIn",
  //   "permissions",
  //   "id",
  // ]);
  // const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  // const handleAdditionalOpen = () => {
  //   setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  // };

  return (
    <S.ContentWrapper>
      <SingleTicket {...ticket} updateData={updateData} />
      {/* {isAdditionalOpen && (
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
      </button> */}
    </S.ContentWrapper>
  );
};

export default SingleTicketContent;
