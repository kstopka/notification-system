import styled from "styled-components";

export const ButtonWrapper = styled.div``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 50px;
  border-radius: 5px;
`;
