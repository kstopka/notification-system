import styled from "styled-components";

export const FixedWrapper = styled.div`
  position: fixed;
  top: 150px;
  left: 20px;
  z-index: 999;
`;
export const AlertContainer = styled.div<{
  status: "info" | "error" | "success";
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;

  width: 100%;
  height: min-content;

  padding: 16px;
  border-radius: 4px;
  /* border: 1px solid
    ${(props) => {
    if (props.status === "info") {
      return props.theme.colors.neutral;
    }
    if (props.status === "error") {
      return props.theme.colors.error;
    }
    if (props.status === "success") {
      return props.theme.colors.success;
    }
  }}; */
  background: ${(props) => {
    if (props.status === "info") {
      return props.theme.colors.neutral;
    }
    if (props.status === "error") {
      return props.theme.colors.error;
    }
    if (props.status === "success") {
      return props.theme.colors.success;
    }
  }};
`;
