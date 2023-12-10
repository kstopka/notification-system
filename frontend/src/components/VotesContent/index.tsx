import { NewsContentProps } from "./types";
import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
import SingleNews from "../News/SingleNews";
import { useVoteLaw } from "./hooks";
import AdditionalSinglePostForm from "../News/AdditionalSingleNewsForm";

const NewsContent: React.FC<NewsContentProps> = () => {
  const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
    "id",
    "loggedIn",
    "permissions",
  ]);
  const { voteLaw, getVoteLaw } = useVoteLaw();
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const handleAdditionalOpen = () => {
    setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  };
  return (
    <S.NewsWrapper>
      <h1>Zagłosuj!</h1>
      {isAdditionalOpen && (
        <AdditionalSinglePostForm
          updateData={getVoteLaw}
          type="laws"
          handleAdditionalOpen={handleAdditionalOpen}
        />
      )}
      {permissions && permissions === "admin" && (
        <button onClick={handleAdditionalOpen}>
          {isAdditionalOpen ? "Zamknij" : "Dodaj"}
        </button>
      )}
      {voteLaw.length === 0 && <h3>Wszystkie głosy już oddane </h3>}
      {voteLaw &&
        voteLaw.length > 0 &&
        voteLaw.map((el) => (
          <SingleNews
            {...el}
            key={el.post_id}
            updateData={getVoteLaw}
            isVoteOpen
          />
        ))}
    </S.NewsWrapper>
  );
};

export default NewsContent;
