import * as S from "./styles";
import { useContextState, AuthCtx } from "../../../contexted";
import { IAuthState } from "../../../contexted/Auth/types";
import { useState } from "react";
import { SingleCommentProps } from "./types";
import { getStringDate } from "../../../utils";
import EditSingleCommentForm from "./EditSingleCommentForm";
import Modal from "../../atoms/Modal";

const SingleComment: React.FC<SingleCommentProps> = ({
  user_name,
  created_at,
  content,
  user_id,
  comment_id,
  isDeleteModalActive,
  type,
  updateData,
  handleDeleteModalActive,
  handleDeleteComment,
}) => {
  const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
    "id",
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const handleDelete = () => {
    handleDeleteComment(comment_id);
  };

  return (
    <S.CommentWrapper>
      <S.Header>
        <div>{user_name}</div>
        <div>{getStringDate(created_at)}</div>
      </S.Header>
      <S.Content>{content}</S.Content>
      <S.ButtonsWrapper>
        {user_id === id && (
          <button onClick={handleEdit} className="secondary">
            {isEditing ? "Zamknij" : "Edytuj"}
          </button>
        )}
        <button onClick={handleDeleteModalActive} className="secondary">
          Usuń
        </button>
      </S.ButtonsWrapper>
      {isEditing && (
        <EditSingleCommentForm
          isEditing={isEditing}
          content={content}
          comment_id={comment_id}
          updateData={updateData}
          handleEdit={handleEdit}
          type={type}
        />
      )}
      {isDeleteModalActive && (
        <Modal
          handleIsActiveModal={handleDeleteModalActive}
          buttons={[
            <button className="secondary" onClick={handleDelete}>
              Potwierdzam
            </button>,
            <button className="secondary" onClick={handleDeleteModalActive}>
              Anuluj
            </button>,
          ]}
        >
          <p>Czy na pewno chcesz usunąć ten komentarz?</p>
        </Modal>
      )}
    </S.CommentWrapper>
  );
};

export default SingleComment;
