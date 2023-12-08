import { SingleNewsProps } from "./types";

import * as S from "./styles";
import { useContextState, AuthCtx } from "../../../contexted";
import { IAuthState } from "../../../contexted/Auth/types";
import { useState } from "react";
import EditSingleNewsForm from "../EditSingleNewsForm";
import { getStringDate } from "../../../utils";
import { useNavigate } from "react-router-dom";
import URL_PATHS from "../../../constants/routes";
import Modal from "../../atoms/Modal";
import { useDeletePost } from "./logic";

const SingleNews: React.FC<SingleNewsProps> = ({
  comment_count,
  content,
  post_id,
  user_id,
  title,
  user_name,
  created_at,
  updateData,
  isActiveComment = false,
}) => {
  const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
    "id",
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

  const navigate = useNavigate();

  const handleDeleteModalActive = () => {
    setIsDeleteModalActive((isDeleteModalActive) => !isDeleteModalActive);
  };
  const handleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const { handleDeletePost } = useDeletePost({
    post_id,
    handleDeleteModalActive,
    getNews: updateData,
  });
  return (
    <S.SingleNewsWrapper>
      <S.Title>{title}</S.Title>
      <S.Header>
        <div>{user_name}</div>
        <div>{getStringDate(created_at)}</div>
      </S.Header>
      <S.Content>{content}</S.Content>
      <S.ButtonsWrapper isActiveComment={isActiveComment}>
        {isActiveComment && (
          <button
            onClick={() => navigate(`${URL_PATHS.comments.slug}?id=${post_id}`)}
          >
            Komentarze: {comment_count}
          </button>
        )}
        {((permissions && permissions === "admin") || user_id === id) && (
          <S.ButtonsEndWrapper>
            <button onClick={handleEdit}>
              {isEditing ? "Zamknij" : "Edytuj"}
            </button>
            <button onClick={handleDeleteModalActive}>Usuń</button>
          </S.ButtonsEndWrapper>
        )}
      </S.ButtonsWrapper>
      {isEditing && (
        <EditSingleNewsForm
          isEditing={isEditing}
          content={content}
          title={title}
          post_id={post_id}
          getNews={updateData}
          handleEdit={handleEdit}
        />
      )}
      {isDeleteModalActive && (
        <Modal
          handleIsActiveModal={handleDeleteModalActive}
          buttons={[
            <button className="secondary" onClick={handleDeletePost}>
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
    </S.SingleNewsWrapper>
  );
};

export default SingleNews;
