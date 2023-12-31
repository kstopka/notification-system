import styled from "styled-components";

export const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.primary};
  padding: 50px;
  width: 100%;
  max-width: 80%;

  gap: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 37px;
`;

export const Content = styled.div`
  padding: 5px;
  min-height: 100px;
  border: solid 1px ${(props) => props.theme.colors.primary};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;

export const Label = styled.span`
  margin-right: 20px;
`;
export const WrapperLabel = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
`;
