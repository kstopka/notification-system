import { SingleLawContentProps } from "./types";
import * as S from "./styles";
import { getStringDate } from "../../utils";

const SingleLawContent: React.FC<SingleLawContentProps> = ({
  law: { date, description, law_id, name, status, text },
}) => {
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
          <h6>{status}</h6>
        </S.StatusWrapper>
      </S.DetailsWrapper>
      <S.TextWrapper>{text}</S.TextWrapper>
    </S.ContentWrapper>
  );
};

export default SingleLawContent;
