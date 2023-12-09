import { SingleLawContentProps } from "./types";
import * as S from "./styles";
import { getStringDate } from "../../utils";
import Select from "../atoms/Select";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import { useEffect, useState } from "react";
import { statusLawArray } from "./utils";
import Api from "../../api/API";

const SingleLawContent: React.FC<SingleLawContentProps> = ({
  law: { date, description, law_id, name, status, text },
}) => {
  const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
    "id",
  ]);
  const [statusLaw, setStatusLaw] = useState(status);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusLaw(e.target.value);
  };

  useEffect(() => {
    Api.updateSingleLaw(statusLaw, law_id);
  }, [statusLaw]);
  return (
    <S.ContentWrapper>
      <S.TitleWrapper>
        <h2>{name}</h2>
      </S.TitleWrapper>
      <S.DescriptionWrapper>
        <h4>{description}</h4>
      </S.DescriptionWrapper>
      <S.DetailsWrapper>
        <S.DateWrapper>
          <h6>{getStringDate(date)}</h6>
        </S.DateWrapper>
        <S.StatusWrapper>
          <div>
            <span>Status:</span>
            {permissions === "admin" ? (
              <Select
                name={"statusLaw"}
                initialValue={statusLaw}
                options={statusLawArray}
                handleChange={handleStatusChange}
              />
            ) : (
              <div>{status}</div>
            )}
          </div>
        </S.StatusWrapper>
      </S.DetailsWrapper>
      <S.TextWrapper>{text}</S.TextWrapper>
    </S.ContentWrapper>
  );
};

export default SingleLawContent;
