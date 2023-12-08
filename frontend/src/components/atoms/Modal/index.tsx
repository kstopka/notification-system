import * as S from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  children,
  handleIsActiveModal,
  buttons = [
    <button key="dummyBtn1" onClick={() => console.log("dummyBtn1")}>
      Click me
    </button>,
    <button key="dummyBtn2" onClick={() => console.log("dummyBtn2")}>
      Click me
    </button>,
  ],
}) => {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <S.ModalWrapper onClick={handleIsActiveModal}>
      <S.ModalContent onClick={handleContentClick}>
        <S.Content>{children}</S.Content>
        <S.Footer>{buttons}</S.Footer>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
