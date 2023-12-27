import styled from "styled-components";

export const Form = styled.form`
  width: 90vw;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
    width: 50vw;
  }
`;
