import styled from "styled-components";

export const Select = styled.select`
  width: fit-content;
  height: fit-content;
  padding: 10px 40px 10px 12px;
  border-radius: 4px;

  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  background: url("data:image/svg+xml; utf8, <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M11.47 4.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06L12 6.06 8.53 9.53a.75.75 0 0 1-1.06-1.06l4-4Zm-4 10a.75.75 0 0 1 1.06 0L12 17.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z' fill='rgb(108 129 147)' /> </svg>")
    no-repeat right;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-size: 23px;
  background-position-x: calc(100% - 8px);

  option {
    margin: 10px 0;
  }
`;
