import * as S from "./styles";

import { SingleTicketContentProps } from "./types";
import SingleTicket from "./SingleTicket";
import SingleComment from "../Comments/SingleComment";
import { useComment } from "./logic";
import AdditionalSingleCommentForm from "../Comments/SingleComment/AdditionalSingleCommentForm";

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
