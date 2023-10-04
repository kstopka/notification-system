import SingleNews from "./SingleNews";
import { useNews } from "./hooks";
import { NewsContentProps } from "./types";
import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
import AdditionalSingleNewsForm from "./AdditionalSingleNewsForm";

const NewsContent: React.FC<NewsContentProps> = () => {
  const { loggedIn, permissions } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
  ]);
  const { news, getNews } = useNews();
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const handleAdditionalOpen = () => {
    setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  };
  return (
    <S.NewsWrapper>
      {isAdditionalOpen && <AdditionalSingleNewsForm getNews={getNews} />}
      {permissions && permissions === "admin" && (
        <button onClick={handleAdditionalOpen}>
          {isAdditionalOpen ? "Zamknij dodawanie" : "Dodaj"}
        </button>
      )}
      {news &&
        news.length > 0 &&
        news.map((el) => (
          <SingleNews {...el} key={el.post_id} getNews={getNews} />
        ))}
    </S.NewsWrapper>
  );
};

export default NewsContent;
