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
import SingleComment from "../Comments/SingleComment";
import { useComment } from "./logic";
import AdditionalSingleCommentForm from "../Comments/SingleComment/AdditionalSingleCommentForm";
// import AdditionalSingleCommentForm from "./SingleComment/AdditionalSingleCommentForm";

const SingleTicketContent: React.FC<SingleTicketContentProps> = ({
  ticket,
  comments,
  updateData,
}) => {
  const type = "ticket";
  const {
    isLoading,
    isDeleteModalActive,
    isAdditionalOpen,
    handleDeleteComment,
    handleDeleteModalActive,
    handleAdditionalOpen,
  } = useComment(updateData);

  return (
    <S.ContentWrapper>
      {isAdditionalOpen && (
        <AdditionalSingleCommentForm
          updateData={updateData}
          id={ticket.ticket_id}
          handleAdditionalOpen={handleAdditionalOpen}
          type={type}
        />
      )}
      <button onClick={handleAdditionalOpen}>
        {isAdditionalOpen ? "Zamknij" : "Dodaj komentarz"}
      </button>
      <SingleTicket {...ticket} updateData={updateData} />
      {comments &&
        comments.length > 0 &&
        comments.map((el) => (
          <SingleComment
            comment_id={el.comment_id}
            content={el.comment_text}
            created_at={el.comment_date}
            post_id={el.ticket_id}
            user_id={el.user_id}
            user_name={el.user_name}
            key={el.comment_id}
            updateData={updateData}
            handleDeleteModalActive={handleDeleteModalActive}
            isDeleteModalActive={isDeleteModalActive}
            handleDeleteComment={handleDeleteComment}
            type={type}
          />
        ))}
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
