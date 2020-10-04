import React from "react";
import styled from "styled-components";

const StyledO = styled.div`
  height: 3em;
  width: 3rem;
  border-radius: 50%;
  border: 3.5px solid ${(props) => props.theme.colors.pink};
`;
export default function O() {
  return <StyledO></StyledO>;
}
