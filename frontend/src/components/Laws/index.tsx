import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
import { useDefaultColumns } from "./logic";
import Table from "../atoms/Table";
import { LawsContentProps } from "./types";
import { useLaws } from "./hooks";

const LawsContent: React.FC<LawsContentProps> = () => {
  const { loggedIn, permissions } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
  ]);
  const { laws, getLaws } = useLaws();
  const { columns } = useDefaultColumns();

  return (
    <S.LawsWrapper>
      <Table columns={columns} data={laws} />
    </S.LawsWrapper>
  );
};

export default LawsContent;
