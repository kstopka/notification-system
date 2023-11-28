import styled from "styled-components";

export const SingleNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: royalblue;
  padding: 50px;
  width: 100%;
  max-width: 80%;

  gap: 5px;
`;

export const Title = styled.h5`
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding: 5px;
  min-height: 100px;
  border: solid 1px ${(props) => props.theme.colors.black};
`;

export const ButtonsWrapper = styled.div<{ isActiveComment: boolean }>`
  display: flex;

  justify-content: ${({ isActiveComment }) =>
    isActiveComment ? "space-between" : "flex-end"};
`;
