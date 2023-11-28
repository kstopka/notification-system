import * as S from "./styles";
import { useContextState, AuthCtx } from "../../../contexted";
import { IAuthState } from "../../../contexted/Auth/types";
import { useState } from "react";
import { SingleCommentProps } from "./types";
import { getDate } from "../../../utils";
import EditSingleCommentForm from "./EditSingleCommentForm";

const SingleComment: React.FC<SingleCommentProps> = ({
  user_name,
  created_at,
  content,
  user_id,
  comment_id,
  updateData,
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
  return (
    <S.CommentWrapper>
      <S.Header>
        <div>{user_name}</div>
        <div>{getDate(created_at)}</div>
      </S.Header>
      <S.Content>{content}</S.Content>
      <S.ButtonsWrapper>
        {user_id === id && (
          <button onClick={handleEdit}>
            {isEditing ? "Zamknij" : "Edytuj"}
          </button>
        )}
      </S.ButtonsWrapper>
      {isEditing && (
        <EditSingleCommentForm
          isEditing={isEditing}
          content={content}
          comment_id={comment_id}
          updateData={updateData}
          handleEdit={handleEdit}
        />
      )}
    </S.CommentWrapper>
  );
};

export default SingleComment;
