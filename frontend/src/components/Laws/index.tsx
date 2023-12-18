import { useState } from "react";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useDefaultColumns } from "./logic";
import { LawsContentProps } from "./types";
import { useLaws } from "./hooks";
import * as S from "./styles";
import Table from "../atoms/Table";
import AdditionalLawsForm from "./AdditionalLawsForm";

const LawsContent: React.FC<LawsContentProps> = () => {
  const { permissions } = useContextState<IAuthState>(AuthCtx, ["permissions"]);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const handleAdditionalOpen = () => {
    setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  };
  const { laws, getLaws } = useLaws();
  const { columns } = useDefaultColumns();

  return (
    <S.LawsWrapper>
      <h1>Lista Ustaw</h1>
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
