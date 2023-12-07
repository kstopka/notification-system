import AdditionalServiceRequestForm from "./AdditionalServiceRequestForm";
import * as S from "./styles";

interface AdditionalServiceRequestContentProps {}

const AdditionalServiceRequestContent: React.FC<
  AdditionalServiceRequestContentProps
> = () => {
  return (
    <>
      <S.AdditonalTicketWrapper>
        <h2>Zgłoś serwis</h2>
        <AdditionalServiceRequestForm />
      </S.AdditonalTicketWrapper>
    </>
  );
};

export default AdditionalServiceRequestContent;
