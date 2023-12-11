import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 100px 0;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const DateWrapper = styled.div``;
export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const StatusWrapper = styled.div``;
export const TextWrapper = styled.div`
  margin-top: 100px;
  width: 80%;
  min-height: 30vh;
  padding: 30px;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 80%;
  gap: 50px;
`;
