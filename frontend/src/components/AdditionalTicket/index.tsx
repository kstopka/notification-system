import AdditionalTicketForm from "./AdditionalTicketForm";
import * as S from "./styles";

interface AdditionalTicketContentProps {}

const AdditionalTicketContent: React.FC<AdditionalTicketContentProps> = () => {
  return (
    <>
      <S.AdditonalTicketWrapper>
        <h2>Dodaj nowe zgłoszenie</h2>
        <AdditionalTicketForm />
      </S.AdditonalTicketWrapper>
    </>
  );
};

export default AdditionalTicketContent;
