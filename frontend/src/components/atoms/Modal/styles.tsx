import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;

  height: 50vh;
  width: 50vw;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Content = styled.div`
  width: 80%;
`;
