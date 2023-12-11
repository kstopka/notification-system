import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: ${(props) => props.theme.colors.secondary};
  min-height: 100px;
  color: ${(props) => props.theme.colors.primary};
`;
export const Name = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 20px;
  font-size: 20px;
`;
