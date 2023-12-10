import { useTickets } from "./hooks";
import { NewsContentProps } from "./types";
import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
import { useDefaultColumns } from "./logic";
import Table from "../atoms/Table";

const TicketsContent: React.FC<NewsContentProps> = () => {
  const { loggedIn, permissions } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
  ]);
  const { tickets, getTickets } = useTickets();
  const { columns } = useDefaultColumns();

  return (
    <S.TicketsWrapper>
      <h1>Lista Zgłoszeń</h1>
      <Table columns={columns} data={tickets} />
    </S.TicketsWrapper>
  );
};

export default TicketsContent;
