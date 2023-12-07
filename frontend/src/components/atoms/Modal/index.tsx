import * as S from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  content,
  handleIsActiveModal,
  handleAcceptance,
}) => {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <S.ModalWrapper onClick={handleIsActiveModal}>
      <S.ModalContent onClick={handleContentClick}>
        <S.Content>{content}</S.Content>
        <button className="secondary" onClick={handleAcceptance}>
          Potwierdzam
        </button>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
