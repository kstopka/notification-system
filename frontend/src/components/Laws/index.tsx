import * as S from "./styles";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useState } from "react";
import { useDefaultColumns } from "./logic";
import Table from "../atoms/Table";
import { LawsContentProps } from "./types";
import { useLaws } from "./hooks";
import AdditionalLawsForm from "./AdditionalLawsForm";

const LawsContent: React.FC<LawsContentProps> = () => {
  const { loggedIn, permissions } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
  ]);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const handleAdditionalOpen = () => {
    setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  };
  const { laws, getLaws } = useLaws();
  const { columns } = useDefaultColumns();

  return (
    <S.LawsWrapper>
      {isAdditionalOpen && (
        <AdditionalLawsForm
          updateData={getLaws}
          handleAdditionalOpen={handleAdditionalOpen}
        />
      )}
      {permissions && permissions === "admin" && (
        <button onClick={handleAdditionalOpen}>
          {isAdditionalOpen ? "Zamknij" : "Dodaj"}
        </button>
      )}
      <Table columns={columns} data={laws} />
    </S.LawsWrapper>
  );
};

export default LawsContent;
