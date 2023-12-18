import styled from "styled-components";

export const SingleNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  max-width: 80%;
  padding: 50px;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonsWrapper = styled.div<{ isActiveComment: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: ${({ isActiveComment }) =>
    isActiveComment ? "space-between" : "flex-end"};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const Title = styled.h5`
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  padding: 5px;
  min-height: 100px;
  border: solid 1px ${(props) => props.theme.colors.primary};
`;

export const ButtonsEndWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
