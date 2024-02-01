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
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
  }
`;

export const Navigation = styled.nav<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  padding: 30px;

  gap: 10px;

  background: ${(props) => props.theme.colors.secondary};

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

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: flex;
    flex-direction: row;
    padding: 0;
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: none;
  }
`;

export const Bar = styled.div`
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 3px 0;
  transition: 0.4s;
`;
