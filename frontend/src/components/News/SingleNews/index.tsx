import { SingleNewsProps } from "./types";

import * as S from "./styles";
import { useContextState, AuthCtx } from "../../../contexted";
import { IAuthState } from "../../../contexted/Auth/types";
import { useState } from "react";
import EditSingleNewsForm from "../EditSingleNewsForm";
import { getDate } from "../../../utils";

const SingleNews: React.FC<SingleNewsProps> = ({
  comment_count,
  content,
  post_id,
  title,
  user_name,
  created_at,
  getNews,
}) => {
  const { loggedIn, permissions } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
  };
  return (
    <S.SingleNewsWrapper>
      <S.Title>{title}</S.Title>
      <S.Header>
        <div>{user_name}</div>
        <div>{getDate(created_at)}</div>
      </S.Header>
      <S.Content>{content}</S.Content>
      <S.ButtonsWrapper>
        <button>Komentarze: {comment_count}</button>
        {permissions && permissions === "admin" && (
          <button onClick={handleEdit}>
            {isEditing ? "Zamknij" : "Edytuj"}
          </button>
        )}
      </S.ButtonsWrapper>
      {isEditing && (
        <EditSingleNewsForm
          isEditing={isEditing}
          content={content}
          title={title}
          post_id={post_id}
          getNews={getNews}
        />
      )}
    </S.SingleNewsWrapper>
  );
};

export default SingleNews;
