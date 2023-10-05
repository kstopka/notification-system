import { useTickets } from "./hooks";
import { NewsContentProps } from "./types";
import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";

const TicketsContent: React.FC<NewsContentProps> = () => {
  const { loggedIn, permissions } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
  ]);
  const { tickets, getTickets } = useTickets();
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const handleAdditionalOpen = () => {
    setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  };

  return (
    <S.TicketsWrapper>
      {/* {isAdditionalOpen && <AdditionalSingleNewsForm getNews={getNews} />} */}
      {/* {permissions && permissions === "admin" && (
        <button onClick={handleAdditionalOpen}>
          {isAdditionalOpen ? "Zamknij dodawanie" : "Dodaj"}
        </button>
      )} */}
      {/* {news &&
        news.length > 0 &&
        news.map((el) => (
          <SingleNews {...el} key={el.post_id} getNews={getNews} />
        ))} */}
    </S.TicketsWrapper>
  );
};

export default TicketsContent;
