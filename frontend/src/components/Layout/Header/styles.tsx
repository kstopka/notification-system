import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  height: auto;
  min-height: 88px;
  background: ${(props) => props.theme.colors.secondary};
`;

export const Navigation = styled.nav`
  display: flex;

  gap: 10px;

  a {
    color: ${(props) => props.theme.colors.primary};
    padding: 10px;
    text-decoration: none;
  }

  a.active {
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};
  }
  a:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
